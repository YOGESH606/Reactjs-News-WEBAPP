import React, { useEffect, useState } from 'react'
import uuid from 'react-uuid';

import {
    Col1,
    Col2,
    Col3,
    Col4
} from '../homegridlayout';


export default function Home() {

    const [worldnews, setWorldnews] = useState([]);
    const API_KEY = process.env.REACT_APP_API_KEY;
    const d = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;


    useEffect(() => {
        const getWorldnews = async () => {
            const responce = await fetch(
                `https://newsapi.org/v2/everything?q=Politics&from=${d}&to=${d}&sortBy=popularity&apiKey=${API_KEY}`
            );
            const data = await responce.json();
            setWorldnews(data.articles)
        }
        getWorldnews();
    }, []);

    return (
        <div className='g-container'>
            <hr></hr>
            <div className='row'>
                <div className="col-sm-12 col-md-12 col-lg-9">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 vertical-line">
                            {
                                worldnews.slice(0, 4).map(newNews => (

                                    <Col1
                                        key={uuid()}
                                        title={newNews.title}
                                        description={newNews.description}
                                        img={newNews.urlToImage}
                                        time={newNews.publishedAt}
                                        count={(++count1)}
                                    />
                                )
                                )
                            }
                        </div>
                        <div className="col-sm-6 col-md-5 vertical-line">
                            {
                                worldnews.slice(4, 7).map(newNews => (
                                    <Col2
                                        key={uuid()}
                                        title={newNews.title}
                                        description={newNews.description}
                                        img={newNews.urlToImage}
                                        count={(++count2)}
                                    />
                                )
                                )
                            }
                        </div>
                        <div className="col-sm-0 col-md-3 vertical-line">
                            {
                                worldnews.slice(7, 11).map(newNews => (
                                    <Col3
                                        key={uuid()}
                                        title={newNews.title}
                                        img={newNews.urlToImage}
                                        time={newNews.publishedAt}
                                    />
                                )
                                )
                            }
                        </div>
                    </div>
                </div>


                <div className="col-sm-0 col-md-0 col-lg-3">
                    <div className="row">
                        <div className="col-12">
                            {
                                worldnews.slice(11, 15).map(newNews => (
                                    <Col4
                                        key={uuid()}
                                        title={newNews.title}
                                        description={newNews.description}
                                        img={newNews.urlToImage}
                                        author={newNews.author}
                                        count={++count3}
                                    />
                                )
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

