import React from 'react'
import moment from 'moment';
export default function NewsListing({ title, description, img ,time}) {
    
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 border p-3 ">
            <img src={img} className="news_photo" alt="description" />
            <p className="text-center heading ">{title}</p>
            <p className="txt">{description}</p>
            <p>{moment(time).fromNow()}</p>
            
        </div>
    )
}
