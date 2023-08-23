import React from 'react'
import Project from './components/Project'
const projects = [
  {
    name: 'Search engine optimization',
    image_url: 'https://placehold.co/300x250',
    live_link: 'https://ryonerd79.github.io/Daniel-s-weekly-challenge-01/',
    code_link: 'https://github.com/ryonerd79/Daniel-s-weekly-challenge-01'
  },
  {
    name: 'Porfolio Draft',
    image_url: 'https://placehold.co/300x250',
    live_link: 'https://ryonerd79.github.io/Daniel-s-weekly-challenge-2-project/',
    code_link: 'https://github.com/ryonerd79/Daniel-s-weekly-challenge-2-project/'
  },
  {
    name: 'Password Generator',
    image_url: 'https://placehold.co/300x250',
    live_link: 'https://ryonerd79.github.io/Weekly-Challenge-3-Project/',
    code_link: 'https://github.com/ryonerd79/Weekly-Challenge-3-Project'
  },
  {
    name: 'Calendar Project',
    image_url: 'https://placehold.co/300x250',
    live_link: 'https://ryonerd79.github.io/Weekly-Challenge-Calendar-project',
    code_link: 'https://github.com/ryonerd79/Weekly-Challenge-Calendar-project'
  },
  {
    name: 'Dad Gifs',
    image_url: 'https://placehold.co/300x250',
    live_link: 'https://19dbo91.github.io/dad-gifs/',
    code_link: 'https://github.com/ryonerd79/dad-gifs-ryonerd79-copy'
  },
  {
    name: 'Weather Dasboard',
    image_url: 'https://placehold.co/300x250',
    live_link: 'https://ryonerd79.github.io/weather-dashboard-challenge/',
    code_link: 'https://github.com/ryonerd79/weather-dashboard-challenge'
  }


]
function Portfolio() {
  return (
    <div className='portfolio_page'>
      <h2>My Projects</h2>
      <div className='portfolio_container'>
      {projects.map(p => {
        return <Project {...p} key={p.name}/>
      })}
      </div>
    </div>
  )
}

export default Portfolio