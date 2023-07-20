import React from "react";
import "./Portfolio.css";

const data = [
  {
    id: 1,
    title: "Food Delivery App",
    github: "https://github.com/kushalnigam0604/Food_Delivery_App",
    demo: "https://food-delivery-app-kushal-nigam.netlify.app/",
  },
  {
    id: 2,
    title: "YouTube Clone",
    github: "https://github.com/kushalnigam0604/Youtube_Clone_App",
    demo: "https://my-youtube-clone-001.netlify.app/",
  },
  {
    id: 3,
    title: "Amazon Clone",
    github: "https://github.com/kushalnigam0604/Amazon_Clone",
    demo: "https://clone-fec1a.web.app/",
  },
  {
    id: 4,
    title: "Camping Website",
    github: "https://github.com/kushalnigam0604/Camping_Web_App",
    demo: "https://camping-website.onrender.com/",
  },
  {
    id: 5,
    title: "News App",
    github: "https://github.com/kushalnigam0604/News-App",
    demo: "https://indian-news-app.netlify.app/",
  },
  {
    id: 6,
    title: "Notes App",
    github: "https://github.com/kushalnigam0604/Notes_App",
    demo: "https://kushalnigam0604.github.io/Notes_App/",
  },
  {
    id: 7,
    title: "TextUtils App",
    github: "https://github.com/kushalnigam0604/TextUtils_App",
    demo: "https://textutility-app.netlify.app/",
  },
  {
    id: 8,
    title: "Expense Tracker",
    github: "https://github.com/kushalnigam0604/ExpenseTracker",
    demo: "https://expense-tracker-com.netlify.app/",
  },
  {
    id: 9,
    title: "Todo App",
    github: "https://github.com/kushalnigam0604/To_Do_App",
    demo: "https://to-do-app-xyz.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
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
