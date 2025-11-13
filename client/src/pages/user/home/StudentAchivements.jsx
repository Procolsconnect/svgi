import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './AnimatedCards.css';

const ExpandingCards = () => {
  const [cardsData, setCardsData] = useState([]);
  const [pageIsOpen, setPageIsOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);
  const [coverStyle, setCoverStyle] = useState({});
  const canvasRef = useRef(null);
  const glRef = useRef(null);
  const programRef = useRef(null);
  const animationFrameRef = useRef(null);
  const apiurl = import.meta.env.VITE_API_URL

  // Fetch from API dynamically
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await axios.get(`${apiurl}/api/student-achievements`); // change API URL
        setCardsData(res.data.data || []);
      } catch (err) {
        console.error('Error fetching cards:', err);
      }
    };
    fetchCards();
  }, []);

useEffect(() => {
  if (pageIsOpen) {
    // Disable background scrolling
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  return () => {
    document.body.style.overflow = '';
  };
}, [pageIsOpen]);




  // WebGL animated background (same as your design)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;
    glRef.current = gl;

    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const compileShader = (source, type) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        return null;
      }
      return shader;
    };

    const vertexSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentSource = `
      precision highp float;
      uniform float time;
      uniform vec2 resolution;
      const float PI = 3.141592653589793;
      const float DEG_90 = 1.5707963967948966;
      void main() {
        vec2 uv = gl_FragCoord.xy;
        float angle = PI * 2.5 * sin(time * 0.1);
        float a = 200.0 + 100.0 * sin(angle * 0.25);
        float k = uv.y / a;
        float delta = 75.0 * sin(k + angle * 1.5) + 150.0 * cos(k + angle * 1.5);
        vec3 finalColor = vec3(1.0);
        for (int i = 0; i < 4; i++) {
          float x1_js = sin(k + 3.0 * angle + float(i) * DEG_90) * 100.0;
          float x2_js = sin(k + 3.0 * angle + mod(float(i + 1), 4.0) * DEG_90) * 100.0;
          if (x1_js < x2_js) {
            float current_x1_screen = x1_js + delta + (resolution.x / 4.0);
            float current_x2_screen = x2_js + delta + (resolution.x / 4.0);
            if (uv.x >= current_x1_screen && uv.x < current_x2_screen) {
              float rb_val = (255.0 * ((x2_js - x1_js) / 130.0));
              rb_val = clamp(rb_val, 0.0, 255.0);
              if (mod(float(i), 2.0) == 0.0) {
                finalColor = vec3(rb_val / 255.0, 32.0 / 255.0, 0.0);
              } else {
                finalColor = vec3(0.0, 32.0 / 255.0, rb_val / 255.0);
              }
              break;
            }
          }
        }
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const vertexShader = compileShader(vertexSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(fragmentSource, gl.FRAGMENT_SHADER);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);
    programRef.current = program;

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const position = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, 'resolution');
    const timeLocation = gl.getUniformLocation(program, 'time');

    const render = (time) => {
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, time * 0.001);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameRef.current = requestAnimationFrame(render);
    };

    render(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

 const handleCardClick = (card, index) => {
  setCurrentCard({ ...card, colorIndex: index % 4 }); // store card color index
  setPageIsOpen(true);

  // dynamically set background to clicked card color
  const cardColors = ["#EB5160", "#8F3985", "#8DAA91", "#888DA7"];
  setCoverStyle({
    backgroundColor: cardColors[index % 4],
  });
};


  const handleClose = () => {
    setPageIsOpen(false);
    setCurrentCard(null);
    setCoverStyle({});
  };

  return (
    <div className="ec-body">
      <canvas ref={canvasRef} className="ec-background-canvas"></canvas>

      <div className="ec-container" style={{ position: 'relative', minHeight: '600px' }}>
        {/* Normal card grid */}
        <div className="ec-card-grid" style={{ opacity: pageIsOpen ? 0 : 1, transition: '0.3s' }}>
          {cardsData.map((card, index) => (
            <div
              key={card._id}
              className={`ec-card ec-card-color-${index % 4}`}
              onClick={() => handleCardClick(card,index)}
            >
              <div className="ec-border"></div>
              <img src={card.img} alt={card.title} />
              <h1>{card.title}</h1>
            </div>
          ))}
        </div>

        {/* Popup Card */}
        {pageIsOpen && currentCard && (
          <div className="ec-popup" style={{ ...coverStyle }}>
            <div className="ec-popup-content">
              <button className="ec-close-btn" onClick={handleClose}>
                ✕
              </button>
              <img src={currentCard.img} alt={currentCard.title} />
              <h1>{currentCard.title}</h1>
              <p>{currentCard.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpandingCards;
