import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faComment } from '@fortawesome/free-regular-svg-icons';

export default function Col2({ title, description, img, count }) {

    if (count === 1) {
        return (
            <div className="col2  mb-3">
                <img src={img} className="news-large-img" alt="description" />
                <h5 className="news-stretch-heading">{title}</h5>

                <div className="d-flex justify-content-center ">
                    <hr className="w-25 border border-dark"></hr>
                    <div className="square-diamond-icon"></div>
                    <hr className="w-25 border border-dark"></hr>
                </div>

                <p className="news-content d-inline">{description}</p>
                <div className="icons">
                    <p className="icons-comment-clock "> <FontAwesomeIcon icon={faComment} /> 400 </p>
                    <p className="icons-comment-clock "> <FontAwesomeIcon icon={faClock} />  5 Min</p>
                </div>
                <hr />
            </div>
        )
    }
    if ((count === 2) || (count === 4)) {
        return (
            <div className="mb-3">

                <div className="d-flex">
                    <h3 className=" news-heading ">{title}</h3>
                    <img className="news-small-img" src={img}  alt="description" />
                </div>

                <p className="news-content">{description} </p>

                <div className="icons">
                    <p className="icons-comment-clock"> <FontAwesomeIcon icon={faClock} />  4 Min</p>
                </div>

                <hr />
            </div>
        )
    }
    if (count === 3) {
        return (
            <div className="mb-3">
                <h3 className="news-heading ">{title}</h3>
                <p className="news-content">{description} </p>
                <div className="icons">
                    <p className="icons-comment-clock"> <FontAwesomeIcon icon={faClock} />  4 Min</p>
                </div>
                <hr />
            </div>
        )
    }
}
