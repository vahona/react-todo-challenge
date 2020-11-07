import React from 'react'
import {Link} from 'react-router-dom'



function Header() {
  return(
      <>
        <nav>
            <ul className="lists">
                <li className="list">
                    <Link to="/All">All</Link>
                </li>
                <li className="list">
                    <Link to="/Active">Active</Link>
                </li>
                <li className="list">
                    <Link to="/Completed">Completed</Link>
                </li>
            </ul>
        </nav>
      </>
  )
}


export default Header