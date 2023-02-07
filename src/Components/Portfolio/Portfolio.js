import React from "react";
import "./Portfolio.css";
import Img_1 from "../../assets/portfolio_1.webp";
import Img_2 from "../../assets/portfolio_2.webp";
import Img_3 from "../../assets/portfolio_3.webp";

const data = [
  {
    id: 1,
    image: Img_1,
    title: "Camping Website",
    github: "https://github.com/kushalnigam0604/Camping_Web_App",
    demo: "https://camping-website.onrender.com/",
  },
  {
    id: 2,
    image: Img_2,
    title: "Notes App",
    github: "https://github.com/kushalnigam0604/Notes_App",
    demo: "https://kushalnigam0604.github.io/Notes_App/",
  },
  {
    id: 3,
    image: Img_3,
    title: "TextUtils App",
    github: "https://github.com/kushalnigam0604/TextUtils_App",
    demo: "https://textutility-app.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
