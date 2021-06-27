import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
export default function Header() {
    return (
        <div className="header">
            
            <div className="container">
                
                <nav className="navbar navbar-expand-lg navbar-light d-block  ">
                    <div className="header-section">
                      
                        <button className="navbar-toggler header-left" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            
                            <div className=""><FontAwesomeIcon icon={faBars} /></div>

                        </button>

                  
                         <h1>THE WALL STREET JOURNAL</h1>

                         <div className="header-right">
                            <div className="btn">Subscribe</div>
                            <div className=" pt-2 pt-md-1">|</div>
                            <div className="btn">SignIn</div>
                        </div> 

                        
                        <div className="d-block d-lg-none right">
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                        
                        
                        
                    </div>
                    

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav  header-link">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/World">World </Link></li>
                            <li><Link to="/US">US</Link></li>
                            <li><Link to="/Politics">Politics</Link></li>
                            <li><Link to="/Economy">Economy</Link></li>
                            <li><Link to="/Business">Business</Link></li>
                            <li><Link to="/Tech">Tech</Link></li>
                            <li><Link to="/Market">Market</Link></li>
                            <li><Link to="/Opinion">Opinion</Link></li>
                            <li><Link to="/LifeArts">Life & Arts</Link></li>
                            <li><Link to="/RealEstate">Real Estate</Link></li>
                            <li><Link to="/WsjMagazine">WSJ.Magazine</Link></li>
                            <li><Link to="/Sports">Sports</Link></li>
                            <li  className="d-none d-lg-block">Search</li>
                            <div className="search-icon d-none d-lg-block"><FontAwesomeIcon icon={faSearch} /></div>
   
                        </ul>

                    </div>
                </nav>



                
            </div>
            <hr className="line"></hr>
            
        </div>
    )
}
