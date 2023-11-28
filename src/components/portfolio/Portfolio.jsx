import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
      <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Movies Details Website Using React</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Tarun-Zenitsu/movix" className='btn' target="_blank">Github</a>
            <a href="https://movix-iota-jade.vercel.app/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
      <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Todo App Using React</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Tarun-Zenitsu/todo" className='btn' target="_blank">Github</a>
            <a href="https://todo-delta-pied.vercel.app/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
      <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Weather App Using React</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Tarun-Zenitsu/weather_app_using_react" className='btn' target="_blank">Github</a>
            <a href="https://weatherappbytarun.netlify.app/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a Portfolio Website</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Tarun-Zenitsu/portfolio_" className='btn' target="_blank">Github</a>
            <a href="https://tarun-zenitsu.github.io/portfolio_/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Socialapp With DarkMode</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Tarun-Zenitsu/socialbook" className='btn' target="_blank">Github</a>
            <a href="https://tarun-zenitsu.github.io/socialbook/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Weather App</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Tarun-Zenitsu/weather-app" className='btn' target="_blank">Github</a>
            <a href="https://tarun-zenitsu.github.io/weather-app/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio