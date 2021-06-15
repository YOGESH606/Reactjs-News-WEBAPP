import React, { useEffect, useState } from 'react'
import uuid from 'react-uuid';
import Col1 from '../homegridlayout/Col1'
import Col2 from '../homegridlayout/Col2'
import Col3 from '../homegridlayout/Col3'

export default function Home() {

    
    const [worldnews, setWorldnews] = useState([]);
    const [businessnews, setBusinessnews] = useState([]);
    const [healthnews, setHealthnews] = useState([]);
    const API_KEY = "fface6909ec9403fb18caa4125b44b9a";
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
        getWorldnews();
        getBusinessnews();
        getHealthnews();
    }, []);




    return (
        <div className='row container'>

            <div className="row">
                <div className="col-md-4">
                    {
                        worldnews.map(newNews => (
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
                <div className="col-md-5">
                    {
                        businessnews.map(newNews => (
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
                <div className="col-md-3">
                    {
                        healthnews.map(newNews => (
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
    )
}

