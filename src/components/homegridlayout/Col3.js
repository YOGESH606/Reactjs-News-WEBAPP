import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
export default function Col3({ title,img }) {

    return (
        <div className="">
            <img src={img} className="news-large-img mb-2" alt="description" />
            <h3 className="d-inline news-heading">{title}</h3>
            <p className="d-inline mx-3 icons"><FontAwesomeIcon icon={faClock} />   4 Min</p>
            <hr />
        </div>

    )
}
