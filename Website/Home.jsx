import React from 'react'
import {Link} from 'react-router-dom'
import './style/home.css'
function Home() {
  return (
    <div className='home'>
      <div className='header'>
        <h1>StarLink Network</h1>
        <p>Network that connects everyone</p>
        <Link to='/contact'>
          <button>Get the Link</button>
        </Link>
      </div>
    </div>
  )
}

export default Home