import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.jpg';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Rapido.es" />
          </div>
          <h3>Second-hand platform, with api integrations and multi language. Buid in laravel 8.</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Gracia-Ruiz/Rapido.es" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Beercraft" />
          </div>
          <h3>Brewery platform, where you can save, create, modify, delete and add beers. Build in laravel 8.</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Gracia-Ruiz/Beercraft" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Artículos de música" />
          </div>
          <h3>Front-end project, about music online store. Build with HTML, CSS and JavaScript.</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Gracia-Ruiz/musikea" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Obra de arte" />
          </div>
          <h3>Api for create, update and delete artworks. Easy to use. Build in Laravel 8.</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Gracia-Ruiz/artwork-api" className='btn' target='_blank'>Github</a>
          {/*   <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="Imagen tecnológica" />
          </div>
          <h3>Template with a technology blog theme, to use with any back-end. Built with HTML, CSS and JavaScript.</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Gracia-Ruiz/blog-tech" className='btn' target='_blank'>Github</a>
           {/*  <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Small application to add, modify, delete my favorite images. Includes testing. Built in Laravel 9</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Gracia-Ruiz/MyFavImage" className='btn' target='_blank'>Github</a>
           {/*  <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio;