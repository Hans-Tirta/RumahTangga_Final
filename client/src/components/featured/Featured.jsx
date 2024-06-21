import React from 'react'
import "./Featured.scss"

const Featured = () => {
  return (
    <div className='featured'>
      <div className='container'>
        <div className="left">
          <h1>Find the perfect <i>household</i> services for your home</h1>
          <div className="search">
            <div className="searchInput">
              <img src="../images/search.png" alt="" />
              <input type="text" placeholder='Try "Cleaning Services"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Cleaning Services</button>
            <button>Repair Services</button>
            <button>Handyman Services</button>
            <button>Lawn and Garden Care</button>
          </div>
        </div>
        <div className="right">
          <img src="../images/cleaningman.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Featured