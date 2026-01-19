import { useEffect, useRef, useState } from "react";
import "./cdcslider.css";

export default function LifeSciencePlacement({
  images = [],
  interval = 3000,
}) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const startAutoSlide = () => {
    stopAutoSlide();
    timerRef.current = setInterval(next, interval);
  };

  const stopAutoSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    if (images.length > 1) startAutoSlide();
    return stopAutoSlide;
  }, [images.length, interval]);

  return (
    <section className="life-placement">
      {/* LEFT CONTENT */}
      <div className="life-content">
        <h2>Life Sciences Placement Records</h2>
        <p>
          VIT offers undergraduate, postgraduate and research programs
          in modern life sciences disciplines.
        </p>

        <ul>
          <li>B.Tech Biotechnology</li>
          <li>M.Tech Biotechnology</li>
          <li>M.Sc Biotechnology</li>
          <li>M.Sc Biomedical Genetics</li>
          <li>Integrated PhD Programs</li>
        </ul>
      </div>

      {/* RIGHT AUTO SLIDER */}
      <div
        className="slider"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        <button className="nav left" onClick={prev}>‹</button>

        <img
          src={images[index]}
          alt={`placement-${index}`}
          className="slider-image"
        />

        <button className="nav right" onClick={next}>›</button>
      </div>
    </section>
  );
}
