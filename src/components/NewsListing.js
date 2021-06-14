import React from 'react'

export default function NewsListing({ title, description, img }) {
    
    return (
        <div className="col-sm-6 col-md-4 border ">
            <img src={img} className="news_photo" alt="description" />
            <p className="text-center heading ">{title}</p>
            <p className="txt">{description}</p>
            
        </div>
    )
}
