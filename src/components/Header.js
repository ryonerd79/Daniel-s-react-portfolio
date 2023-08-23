import React from 'react'
import Navigation from './Navigation'

function Header({page, setPage}) {
  return (
    <header>
     <h1>Daniel</h1>
     <Navigation page={page} setPage={setPage}/>   
    </header>
  )
}

export default Header