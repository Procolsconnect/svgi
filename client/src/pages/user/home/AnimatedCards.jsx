import React, { useState, useEffect, useRef } from 'react';
import './AnimatedCards.css';

const ExpandingCards = () => {
  const [pageIsOpen, setPageIsOpen] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(null);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [coverStyle, setCoverStyle] = useState({});
  const [openContentData, setOpenContentData] = useState({ title: '', image: '' });
  const [clickedCard, setClickedCard] = useState(null);
  const [outCards, setOutCards] = useState([]);
  
  const cardRefs = useRef([]);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const glRef = useRef(null);
  const programRef = useRef(null);
  const animationFrameRef = useRef(null);

  const cardsData = [
    { color: 'ec-card-color-0', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-00.jpg', title: "Hey now, you're an allstar" },
    { color: 'ec-card-color-1', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-01.jpg', title: 'Get your game on, go play' },
    { color: 'ec-card-color-2', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg', title: "Hey now, you're a rock star" },
    { color: 'ec-card-color-3', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-03.jpg', title: 'Get the show on, get paid' }
  ];

  const paragraphText = `<p>Somebody once told me the world is gonna roll me. I ain't the sharpest tool in the shed...</p><p>Hey now, you're an all-star, get your game on, go play...</p>`;

  // WebGL Background Effect
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
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]), gl.STATIC_DRAW);

    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, "resolution");
    const timeLocation = gl.getUniformLocation(program, "time");

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
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      if (pageIsOpen && currentCardIndex !== null && containerRef.current) {
        updateCoverStyle();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [pageIsOpen, currentCardIndex]);

  const updateCoverStyle = () => {
    if (!containerRef.current || currentCardIndex === null) return;
    
    const card = cardRefs.current[currentCardIndex];
    const cardStyle = window.getComputedStyle(card);
    const containerPosition = containerRef.current.getBoundingClientRect();
    
    setCoverStyle({
      position: 'fixed',
      left: '0',
      top: `${containerPosition.top}px`,
      width: '100vw',
      height: `${containerPosition.height}px`,
      backgroundColor: cardStyle.backgroundColor,
      zIndex: 99
    });
  };

  const handleCardClick = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    setCurrentCardIndex(index);
    setClickedCard(index);

    // Animate other cards out with delay
    const otherCardIndices = cardsData.map((_, i) => i).filter(i => i !== index);
    let delay = 100;
    otherCardIndices.forEach((cardIndex) => {
      setTimeout(() => {
        setOutCards(prev => [...prev, cardIndex]);
      }, delay);
      delay += 100;
    });

    // Show background and content
    setTimeout(() => {
      updateCoverStyle();
      setOpenContentData({
        title: cardsData[index].title,
        image: cardsData[index].image
      });
      setPageIsOpen(true);
    }, 500);
  };

  const handleClose = () => {
    setPageIsOpen(false);
    setCoverStyle({});
    
    setTimeout(() => {
      setOpenContentData({ title: '', image: '' });
      setClickedCard(null);
      
      const otherCardIndices = cardsData.map((_, i) => i).filter(i => i !== currentCardIndex);
      let delay = 100;
      otherCardIndices.forEach((cardIndex) => {
        setTimeout(() => {
          setOutCards(prev => prev.filter(idx => idx !== cardIndex));
        }, delay);
        delay += 100;
      });
    }, 301);
  };

  return (
    <div className="ec-body">
      <canvas ref={canvasRef} className="ec-background-canvas"></canvas>
      <div ref={containerRef} className="ec-container" style={{ position: 'relative', minHeight: '600px' }}>
        <div className="ec-card-column ec-column-0" style={{ visibility: pageIsOpen ? 'hidden' : 'visible' }}>
          {[0, 2].map((index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`ec-card ${cardsData[index].color} ${clickedCard === index ? 'ec-clicked' : ''} ${outCards.includes(index) ? 'ec-out' : ''}`}
              onClick={() => handleCardClick(index)}
              style={{ visibility: clickedCard === index && pageIsOpen ? 'visible' : 'inherit' }}
            >
              <div className="ec-border"></div>
              <img src={cardsData[index].image} alt="" />
              <h1>{cardsData[index].title}</h1>
            </div>
          ))}
        </div>
        <div className="ec-card-column ec-column-1" style={{ visibility: pageIsOpen ? 'hidden' : 'visible' }}>
          {[1, 3].map((index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`ec-card ${cardsData[index].color} ${clickedCard === index ? 'ec-clicked' : ''} ${outCards.includes(index) ? 'ec-out' : ''}`}
              onClick={() => handleCardClick(index)}
              style={{ visibility: clickedCard === index && pageIsOpen ? 'visible' : 'inherit' }}
            >
              <div className="ec-border"></div>
              <img src={cardsData[index].image} alt="" />
              <h1>{cardsData[index].title}</h1>
            </div>
          ))}
        </div>
        
        <div 
          id="ec-open-content" 
          className={`ec-open-content ${pageIsOpen ? 'ec-open' : ''}`} 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0,
            height: '100%',
            overflowY: 'auto',
            overflowX: 'hidden'
          }}
        >
          <a href="#" id="ec-close-content" className="ec-close-content" onClick={(e) => { e.preventDefault(); handleClose(); }}>
            <span className="ec-x-1"></span>
            <span className="ec-x-2"></span>
          </a>
          {openContentData.image && (
            <>
              <img id="ec-open-content-image" src={openContentData.image} alt="" />
              <div className="ec-text" id="ec-open-content-text">
                <h1>{openContentData.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: paragraphText }} />
              </div>
            </>
          )}
        </div>
      </div>
      <div id="ec-cover" className="ec-cover" style={coverStyle}></div>
    </div>
  );
};

export default ExpandingCards;