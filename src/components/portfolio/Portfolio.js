import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'

const Portfolio = () => {


  const data = [

    {
      id: 1,
      image: IMG1,
      title: 'Admin Property Dashboard',
      github: 'https://github.com/Hegde07/react-dashboard-bhargav',
      demo: 'https://reliable-frangollo-6543e3.netlify.app'
    },
    {
      id: 2,
      image: IMG3,
      title: 'React Portfoio Website',
      github: 'https://github.com/Hegde07/react-bhargav-portfolio',
      demo: 'https://react-bhargav-portfolio.vercel.app/'
    },
    {
      id: 3,
      image: IMG2,
      title: 'Netflix Clone ',
      github: 'https://github.com/Hegde07/netflix-clone-bhargav',
      demo: 'https://netflix-clone-bhargav-1cf8e.web.app'
    },


  ]


  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio