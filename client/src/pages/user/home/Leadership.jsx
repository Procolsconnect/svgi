import React from "react";
import "./leadership.css";

export default function Leaders() {
  const changeModelStyle = (e, deg, invert = 0) => {
    const card = e.target.closest(".leaders-card");
    const img = card.querySelector(".leaders-image-model");
    img.style.filter = `hue-rotate(${deg}deg) invert(${invert})`;
  };

  return (
    <div className="leaders-body-wrapper">
      <div className="leaders-left-heading">Leadership That Inspires</div>

      {/* Row 1 */}
      <div className="leaders-row">
        <div className="leaders-card">
          <div className="leaders-overflow">
            <div className="leaders-model">
              <img
                src="/images/WhatsApp_Image_2025-08-01_at_16.31.09_43d29991-removebg-preview.png"
                alt="PandaKey"
                className="leaders-image-model"
              />
            </div>
          </div>

          <div className="leaders-glass"></div>

          <div className="leaders-content">
            <h2>Thiru. P. VENKATACHALAM</h2>
            <p>Chairman</p>

 </div>
        </div>

        <p className="leaders-text">
          Shree Venkateshwara group of institutions set to take the mission of
          implementation of the newest educational methodologies which enables
          the innovative thinking of students and initiative performance. It
          also encourages independent thinking and decision making of students,
          thus enabling them to develop wholesome personalities.
        </p>
      </div>

      {/* Row 2 */}
      <div className="leaders-row reverse">
        <div className="leaders-card">
          <div className="leaders-overflow">
            <div className="leaders-model">
              <img
                src="images/WhatsApp_Image_2025-08-01_at_16.15.06_95e75b66-removebg-preview.png"
                alt="TopoKey"
                className="leaders-image-model"
              />
            </div>
          </div>

          <div className="leaders-glass"></div>

          <div className="leaders-content">
            <h2>Mr.K.C.Karupanan</h2>
            <p>Secretary</p>
             </div>
        </div>

        <p className="leaders-text">
          Shree Venkateshwara Group of Institutions takes keen interest in
          updating its infrastructures to meet the technological revolution and
          new challenges of the modern era. SVASC has a reputation as an
          innovative and dynamic educational institution that maintains the
          highest standards of norms and provides complete student support
          systems using latest developments in instructional technology with
          utmost care.
        </p>
      </div>
    </div>
  );
}
