import React from 'react'

export default function Col1({ title, description, img }) {

    return (
        <div className="border  border-dark mt-1 mb-3">
            <img src={img} className="news_photo" alt="description" />
            <p className="text-center heading ">{title}</p>
        </div>
    )
}
