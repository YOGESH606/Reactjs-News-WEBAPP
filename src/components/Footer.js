import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <div className="footer container">                    
                    <ul className="footer-link">
                        <li><Link to='/'>Privacy Notice</Link></li>
                        <li><Link to='/'>Cookie Notice</Link></li>
                        <li><Link to='/'>copyright policy</Link></li>
                        <li><Link to='/'>Data Policy</Link></li>
                        <li><Link to='/'>subscriber agreement & Term of Use </Link></li>
                        <li><Link to='/'>Your Ad Choice</Link></li>
                    </ul>
                    <p className="text-center">Copyright ©2021 <a className="d-inline" href="/">Dow Jones & Company</a>, Inc. All Rights Reserved.</p>           
        </div>
    )
}
