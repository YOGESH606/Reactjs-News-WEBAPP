import React from 'react';
import moment from 'moment';

export default function Col4({ title, description, img, time }) {

    return (
        <div className="border border-dark mt-1 mb-3">
            <img src={img} className="news_photo" alt="description" />
            <p className="text-center heading ">{title}</p>
            <p className="txt">{description}</p>
            <p>{moment(time).fromNow()}</p>
        </div>
    )
}
