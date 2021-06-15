import React from 'react';
import moment from 'moment';

export default function Col1({ title, description, img,time }) {

    return (
        <div className="border">
            <img src={img} className="news_photo" alt="description" />
            <p className="text-center heading ">{title}</p>
            <p className="txt">{description}</p>
            <p>{moment(time).fromNow()}</p>
        </div>
    )
}
