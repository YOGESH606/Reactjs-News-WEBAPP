import React from 'react'
import moment from 'moment';
export default function NewsListing({ title, description, img, time }) {

    return (
        <div className="col-sm-6 col-md-4 col-lg-3 ">
            <img src={img} className="news-large-img" alt="description" />
            <p className="text-center news-heading ">{title}</p>
            <p className="news-content">{description}</p>
            <p className="icons">{moment(time).fromNow()}</p>

        </div>
    )
}
