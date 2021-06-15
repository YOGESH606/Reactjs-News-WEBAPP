import React from 'react'

export default function Col1({ title, description, img }) {

    return (
        <div className="border">
            <img src={img} className="news_photo" alt="description" />
            <p className="text-center heading ">{title}</p>
        </div>
    )
}
