import React from "react";
import "./SvgiNews.css";

const demoData = [
  { type: "text", text: "SVGI College stands as a symbol of academic strength and modern education, shaping students into industry-ready professionals through innovation, discipline, and excellence." },

  { type: "image", url: "/images/arts.jpeg" },
  { type: "image", url: "/images/artss.jpg" },

  { type: "text", text: "Vision-driven leadership and experienced faculty ensure that every student receives practical knowledge along with strong theoretical foundations to succeed in a competitive world." },

 { type: "image", url: "/images/artss.jpg" },
  { type: "text", text: "Growth-focused programs, advanced classrooms, career guidance, and skill development workshops help learners gain confidence and become global achievers." },
  

  { type: "text", text: "Inspiring campus culture, technical training, placement assistance, and real-time project exposure make SVGI College the perfect destination for building a powerful future." },

  { type: "text", text: "SVGI College believes in nurturing talent, boosting creativity, and empowering students with lifelong learning opportunities." },

  { type: "text", text: "SVGI College believes in nurturing talent, boosting creativity, and empowering students with lifelong learning opportunities." },
   { type: "image", url: "/images/artss.jpg" },
     { type: "text", text: "SVGI College believes in nurturing talent, boosting creativity, and empowering students with lifelong learning opportunities." },
];

const SVGICollege = () => {
  return (
    <div className="svgi-root">
      <div className="svgi-container">
        <div className="svgi-columns">
          <h2 className="svgi-heading">
            SVGI College – A New Generation of Learning Excellence
          </h2>

          {demoData.map((item, index) => {
            if (item.type === "text") {
              const firstLetter = item.text.charAt(0);
              const rest = item.text.slice(1);

              return (
                <p key={index} className="svgi-paragraph">
                  <span className="svgi-cap">{firstLetter}</span>
                  {rest}
                </p>
              );
            }

            if (item.type === "image") {
              return (
                <img
                  key={index}
                  src={item.url}
                  alt="svgi"
                  className="svgi-image"
                  style={{ width: "100%", marginBottom: "1em" }}
                />
              );
            }

            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default SVGICollege;
