import React, { useEffect, useRef, useState } from "react";
import "./sports.css";

const cardData = [
  {
    title: "Best Upcoming Singer Award",
    img: "../../../public/images/sport1.jpg",
    description:
      "Awarded for outstanding vocal performance and consistent excellence in intercollegiate music competitions. Recognized for unique tone and creative musical interpretations.",
  },
  {
    title: "World Record Continuous Spinning of 52 Different Silambam",
    img: "../../../public/images/world record.jpg",
    description:
      "A record-breaking feat showcasing skill, precision, and endurance in the traditional Indian martial art of Silambam. Displayed mastery of balance and rhythm through 52 different weapon spins.",
  },
  {
    title: "Best Sportsmanship Trophy",
    img: "../../../public/images/sports 2.jpeg",
    description:
      "Honored for demonstrating respect, fairness, and discipline during national-level tournaments. Acknowledged for motivating peers and maintaining exceptional team spirit.",
  },
  {
    title: "Best Team Player Award",
    img: "../../../public/images/sports 1.jpeg",
    description:
      "Recognized for leadership, teamwork, and strategic contribution to the team's overall success. Played a pivotal role in multiple inter-university victories.",
  },
];

const SportsAchievements = () => {
  const canvasRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);

  // ---------- Shader (unchanged) ----------
  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl");
    if (!gl) return console.error("WebGL not supported");

    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const compileShader = (src, type) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
        console.error(gl.getShaderInfoLog(shader));
      return shader;
    };

    const vertexSrc = `
      attribute vec2 position;
      void main() { gl_Position = vec4(position, 0.0, 1.0); }
    `;
    const fragmentSrc = `
      precision highp float;
      uniform float time;
      uniform vec2 resolution;
      const float PI = 3.141592653589793;
      const float DEG_90 = 1.5707963267948966;
      void main() {
        vec2 uv = gl_FragCoord.xy;
        float angle = PI * 2.0 * sin(time * 0.1);
        float a = 140.0 + 40.0 * sin(angle * 0.25);
        float k = uv.y / a;
        float delta = 45.0 * sin(k + angle * 1.2) + 90.0 * cos(k + angle * 1.2);
        vec3 color = vec3(1.0);
        for (int i = 0; i < 4; i++) {
          float x1 = sin(k + 2.0 * angle + float(i) * DEG_90) * 60.0;
          float x2 = sin(k + 2.0 * angle + mod(float(i + 1), 4.0) * DEG_90) * 60.0;
          if (x1 < x2) {
            float x1s = x1 + delta + (resolution.x / 2.0);
            float x2s = x2 + delta + (resolution.x / 2.0);
            if (uv.x >= x1s && uv.x < x2s) {
              float rb = clamp(255.0 * ((x2 - x1) / 120.0), 0.0, 255.0);
              color = mod(float(i), 2.0) == 0.0 ? vec3(rb / 255.0, 0.16, 0.0) : vec3(0.0, 0.16, rb / 255.0);
              break;
            }
          }
        }
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const vertexShader = compileShader(vertexSrc, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(fragmentSrc, gl.FRAGMENT_SHADER);
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    const resolutionLoc = gl.getUniformLocation(program, "resolution");
    const timeLoc = gl.getUniformLocation(program, "time");

    const render = (time) => {
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform2f(resolutionLoc, canvas.width, canvas.height);
      gl.uniform1f(timeLoc, time * 0.001);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(render);
    };
    render();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  // ---------- Expanding Card Animation ----------
  const handleCardClick = (index) => setActiveCard(index);
  const handleClose = () => setActiveCard(null);

  return (
    <div className="sports-container">
      {/* LEFT PANEL (Shader) */}
      <div className="sports-left-panel">
        <canvas ref={canvasRef} />
      </div>

      {/* RIGHT PANEL */}
      <div className="sports-right-panel">
        <h2 className="sports-heading">Student Achievements</h2>
        <div className="sports-card-grid">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`sports-card ${activeCard === index ? "sports-active" : ""}`}
              style={{ backgroundColor: ["#03244dff"] }}
              onClick={() => handleCardClick(index)}
            >
              <div className="sports-border"></div>
              <img src={card.img} alt={card.title} className="sports-card-img" />
              <h3>{card.title}</h3>
            </div>
          ))}
        </div>

        {/* Expanded View */}
        {activeCard !== null && (
          <div className="sports-expanded">
            <button className="sports-close" onClick={handleClose}>
              ✕
            </button>
            <img src={cardData[activeCard].img} alt={cardData[activeCard].title} />
            <div className="sports-expanded-text">
              <h2>{cardData[activeCard].title}</h2>
              <p>{cardData[activeCard].description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SportsAchievements;
