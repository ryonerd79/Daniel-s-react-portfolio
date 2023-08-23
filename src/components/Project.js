import React from 'react'

function Project({image_url, name, live_link, code_link}) {
  return (
    <div className='project'>
      <img src={image_url} alt={name}/>
      <h3>{name}</h3>
      <div>
        <a href={live_link} target='_blank' rel="noreferrer">Live</a>
        <a href={code_link} target='_blank' rel="noreferrer">Code</a>
      </div>
    </div>
  )
}

export default Project