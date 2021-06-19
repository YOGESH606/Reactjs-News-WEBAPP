import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
export default function Col4({ title, description, img,count,author}) {

    if(count==1){
        return (
            <div className="mb-3">
                <img src={img} className="news-large-img" alt="description" />
                <h3 className=" news-heading ">{title}</h3>
                <p className="news-content">{description}</p>
                <hr />
            </div>
        )
    }else{
        return (
            <div className="mb-3">  
                {count==2  ?   

                <div className="d-flex justify-content-between greyColor">
                        <h5 className="">OPINION</h5>
                        <h5><FontAwesomeIcon icon={faChevronRight} /></h5>
                </div>

                 :""}           
                <h3 className=" news-heading ">{title}</h3>
                <p className=""><em>By {author}</em></p>
                <hr />
            </div>
        )
    }
}
