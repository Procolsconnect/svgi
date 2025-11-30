import React, { useState, useEffect } from "react";
import "./NewsPaper.css"; // CSS file with unique class names

const SocialNewsPaper = () => {
  const [today, setToday] = useState(new Date());
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Mock API or static articles
    setArticles([
      {
        title: 'La próxima apertura en la Quinta Avenida de Nueva York: diseño ecléctico para un viajero "mundano y erudito" - Desarrollo Hotelero',
        imageUrl: "https://desarrollohotelero.com/wp-content/uploads/2023/09/fith-avenue-hotel.png",
        description:
          'El nuevo hotel Fifth Avenue de Nueva York, el cual abrirá sus puertas en octubre, ha sido el resultado del ingenio del diseñador Martin Brudnizki, considerado «el maestro de la gran fantasía moderna». El empresario Alex Ohebshalom ha tardado diez años en plasmar la esencia y curiosidades de un flâneur en el interior del nuevo […]',
        mediaImgUrl: "https://theworldnews.net/favicon.png?v=1",
      },
      {
        title: "Segundo artículo del día con contenido completo",
        imageUrl: "https://desarrollohotelero.com/wp-content/uploads/2023/09/fith-avenue-hotel.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        mediaImgUrl: "https://theworldnews.net/favicon.png?v=1",
      },
      {
        title: "Noticia breve sin imagen",
        imageUrl: "",
        description:
          "Este artículo aparece a ancho completo porque no tiene fotografía asociada. Perfecto para noticias de texto puro.",
        mediaImgUrl: "https://theworldnews.net/favicon.png?v=1",
      },
    ]);
  }, []);

  return (
    <div className="snp-container">
      {/* HEADER */}
      <div className="snp-header">
        <h1 className="snp-header-title">Social News Paper</h1>
        <div className="snp-header-subtitle">Edición del Día</div>
        <div className="snp-header-date">{today.toLocaleDateString("es-ES", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
      </div>

      {/* ARTICLES */}
      {articles.map((art, idx) => (
        <article key={idx} className="snp-article">
          <header className="snp-article-header">
            <div>
              <img
                className="snp-article-mediaImage"
                src={art.mediaImgUrl}
                alt="Media"
              />
            </div>
            <div className="snp-article-title">{art.title}</div>
          </header>

          <main className="snp-article-main">
            {art.imageUrl ? (
              <div className="snp-article-image">
                <img
                  src={art.imageUrl}
                  alt=""
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>
            ) : null}
            <div className="snp-article-description">{art.description}</div>
          </main>
        </article>
      ))}
    </div>
  );
};

export default SocialNewsPaper;
