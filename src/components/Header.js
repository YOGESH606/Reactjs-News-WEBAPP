import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <div>
            <div className=" title">
                <h1>THE WALL STREET JOURNAL</h1>
            </div>
            <div className="container">
                <ul className="d-flex justify-content-around link">
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
                </ul>
            </div>
            <hr></hr>
        </div>
    )
}
