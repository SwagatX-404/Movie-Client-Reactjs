import React from 'react'
import './Header.css';
import mov from './mov.png'    // import your image (since it’s in the same folder)

const Header = () => {
  return (
    <div>
        <nav className='nav-container'>
              <div className='logo-con'>
                  {/* <img src={mov} alt="Movie Logo" className="logo" width="50px" /> */}
                  <h2>M◉VIES</h2>
              </div>
              <div>
                <ul className='li-container'>
                    <li>HOME</li>
                    <li>MOVIES</li>
                    <li>TV SHOWS</li>
                </ul>
              </div>
              <div>
                <div className='li-container'>
                    <div>
                      <div class="searchInput">
                            <input className = 'inp' type="text" name="" placeholder="Search"/>
                        <button class="searchButton" href="#"> 
                               &#128269;
                      </button>
                      </div>
                      
                    </div>
                   <div className='login'>
                    <div>LOG IN</div>
                   </div>

                </div>
              </div>

        </nav>
    </div>
  )
}

export default Header