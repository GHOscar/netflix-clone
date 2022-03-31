import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <li>
                <div className='logo'></div>
            </li>
            <li><a href='/'>TV Shows</a></li>
            <li><a href='/'>Movies</a></li>
            <li><a href='/'>Recently Added</a></li>
            <li><a href='/'>My List</a></li>
        </ul>
        <div className='search-icon'>
            <span><i className="fa-solid fa-magnifying-glass"></i></span>
        </div>
    </div>
  )
}

export default Navbar