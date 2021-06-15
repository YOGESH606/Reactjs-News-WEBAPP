import React, { useEffect, useState } from 'react'
import NewsListing from './NewsListing';
import uuid from 'react-uuid';



const News = ({ query = "world" }) => {


    const [date, setDate] = useState();
    const [news, setNews] = useState([]);
    const API_KEY = "4b2ac00ea9c74ccc815b5b70edc3c005";
    const d = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

    useEffect(() => {
        getNews()     
    }, [query]);

    const getNews = async () => {
        const responce = await fetch(
            `https://newsapi.org/v2/everything?q=${query}&from=${d}&to=${d}&sortBy=popularity&apiKey=${API_KEY}`
        );
        const data = await responce.json();
        setNews(data.articles)
    }
    
    return (
        <div className='row'>

                <div className="row">
                    {
                        news.map(newNews => (
                            <NewsListing
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
    )
}

export default News;

 

 