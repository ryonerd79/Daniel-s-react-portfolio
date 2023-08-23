import React from 'react'

function Navigation({page, setPage}) {
  return (
    <nav>
     <a href="#" onClick={() => setPage('')} className={page===''?'active':''}>About Me</a>
     <a href="#" onClick={() => setPage('portfolio')} className={page==='portfolio'?'active':''}>Portfolio</a>
     <a href="#" onClick={() => setPage('contact')} className={page==='contact'?'active':''}>Contact </a>
     <a href="#" onClick={() => setPage('resume')} className={page==='resume'?'active':''}>Resume</a>
    </nav>
  )
}

export default Navigation