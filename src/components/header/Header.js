import React from 'react'
import mov from './mov.png'    // import your image (since it’s in the same folder)

const Header = () => {
  return (
    <div>
        <nav>
              <div>
                  <img src={mov} alt="Movie Logo" className="logo" width="60px" />
                  <h2>S M◉vies</h2>
              </div>
              <div>
                <ul>
                    <li>HOME</li>
                    <li>MOVIES</li>
                    <li>TV SHOWS</li>
                </ul>
              </div>
              <div>
                <ul>
                    <li>Serach</li>
                    <li>Log In</li>

                </ul>
              </div>

        </nav>
    </div>
  )
}

export default Header