import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
export default function Header() {
    return (
        <div className="header">
            <div className="g-container ">
                <div className="header-title">
                    <h1>THE WALL STREET JOURNAL</h1>
                    <div className="header-button">
                        <button className="btn">Subscribe |</button>
                        <button className="btn">SignIn</button>
                    </div>
                </div>
                <div>
                    <ul className="header-link">
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
                        <li><Link to="WsjMagazine">WSJ.Magazine</Link></li>
                        <li><Link to="Sports">Sports</Link></li>
                        <li className="mt-1">Search</li>
                        <div className="search-icon"><FontAwesomeIcon icon={faSearch} /></div>
                       
                    </ul>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}
