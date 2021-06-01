import React, {useState , useEffect} from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);
    const closeSmallMenu = () => setClick(false);

    {/** show button with size */}
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }
        else
        {
            setButton(true);
        }
    };

    // after refresh button display 
    // this can remove that
    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
          <nav className="navbar">
              <div className="navbar-container">
                  {/* navbar line */}
                                                                {/* close small navbar */}
                  <Link to="/" className="navbar-logo" onClick={closeSmallMenu}>
                      {"ICAF"}  <i class="fas fa-dove" />
                  </Link>
                  <div className="menu-icon" onClick={handleClick}>
                      <i className={click ? 'fas fa-times' : 'fas fa-bars'} />  
                  </div>
                  {/* click navbar item then disappear */}
                  <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick={closeSmallMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/register" className='nav-links' onClick={closeSmallMenu}>
                            Register
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/other" className='nav-links' onClick={closeSmallMenu}>
                            Other
                        </Link>
                    </li>
                    <li>
                        <Link to="/sign-up" className='nav-links-mobile' onClick={closeSmallMenu}>
                           Sign IN
                        </Link>
                    </li>
                    <li>
                        <Link to="/sign-up" className='nav-links-mobile' onClick={closeSmallMenu}>
                           Sign Up
                        </Link>
                    </li>
                  </ul>
                  {/* button create */}
                  {button && <Button buttonStyle='btn-outline'>Sign IN</Button>}
                  {button && <Button buttonStyle='btn-outline'>Sign UP</Button>}
              </div>
          </nav>
        </>
    )
}

export default Navbar
