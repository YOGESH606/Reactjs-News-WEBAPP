import React, { useEffect, useState } from 'react'
import uuid from 'react-uuid';
import Col1 from '../homegridlayout/Col1'
import Col2 from '../homegridlayout/Col2'
import Col3 from '../homegridlayout/Col3'
import Col4 from '../homegridlayout/Col4'

export default function Home() {

    const [worldnews, setWorldnews] = useState([]);
    const [businessnews, setBusinessnews] = useState([]);
    const [healthnews, setHealthnews] = useState([]);
    const [enviromentnews, setEnviromentnews] = useState([]);
    const API_KEY = "4b2ac00ea9c74ccc815b5b70edc3c005";
    const d = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();


    useEffect(() => {
        const getWorldnews = async () => {
            const responce = await fetch(
                `https://newsapi.org/v2/everything?q=world&from=${d}&to=${d}&sortBy=popularity&apiKey=${API_KEY}`
            );
            const data = await responce.json();
            setWorldnews(data.articles)
        }
        const getBusinessnews = async () => {
            const responce = await fetch(
                `https://newsapi.org/v2/everything?q=politics&from=${d}&to=${d}&sortBy=popularity&apiKey=${API_KEY}`
            );
            const data = await responce.json();
            setBusinessnews(data.articles)
        }
        const getHealthnews = async () => {
            const responce = await fetch(
                `https://newsapi.org/v2/everything?q=sports&from=${d}&to=${d}&sortBy=popularity&apiKey=${API_KEY}`
            );
            const data = await responce.json();
            setHealthnews(data.articles)
        }
        const getenviromentnews = async () => {
            const responce = await fetch(
                `https://newsapi.org/v2/everything?q=apple&from=${d}&to=${d}&sortBy=popularity&apiKey=${API_KEY}`
            );
            const data = await responce.json();
            setEnviromentnews(data.articles)
        }
        getWorldnews();
        getBusinessnews();
        getHealthnews();
        getenviromentnews();
    }, []);




    return (
        <div className='row'>


            <div className="col-sm-12 col-md-12 col-lg-8">
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        {
                            worldnews.slice(0, 4).map(newNews => (
                                <Col1
                                    key={uuid()}
                                    title={newNews.title}
                                    description={newNews.description}
                                    img={newNews.urlToImage}
                                    time={newNews.publishedAt}
                                />
                            )
                            )
                        }
                    </div>
                    <div className="col-sm-6 col-md-5">
                        {
                            businessnews.slice(0, 4).map(newNews => (
                                <Col2
                                    key={uuid()}
                                    title={newNews.title}
                                    description={newNews.description}
                                    img={newNews.urlToImage}
                                    time={newNews.publishedAt}
                                />
                            )
                            )
                        }
                    </div>
                    <div className="col-sm-0 col-md-3">
                        {
                            healthnews.slice(0, 6).map(newNews => (
                                <Col3
                                    key={uuid()}
                                    title={newNews.title}
                                    description={newNews.description}
                                    img={newNews.urlToImage}
                                    time={newNews.publishedAt}
                                />
                            )
                            )
                        }
                    </div>
                </div>
            </div>


            <div className="col-sm-0 col-md-0 col-lg-4">
                <div className="row">
                    <div className="col-12">
                        {
                            enviromentnews.slice(0, 4).map(newNews => (
                                <Col4
                                    key={uuid()}
                                    title={newNews.title}
                                    description={newNews.description}
                                    img={newNews.urlToImage}
                                    time={newNews.publishedAt}
                                />
                            )
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

