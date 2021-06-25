import React, { useEffect, useState } from 'react'
import NewsListing from './NewsListing';
import uuid from 'react-uuid';
const News = ({ query = "world" }) => {

    const [news, setNews] = useState([]);
    const API_KEY = process.env.REACT_APP_API_KEY;
    const d = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
    /* eslint-disable */
    useEffect(() => {
        const getNews = async () => {
            const responce = await fetch(
                `https://newsapi.org/v2/everything?q=${query}&from=${d}&to=${d}&sortBy=popularity&apiKey=${API_KEY}`
            );
            const data = await responce.json();
            setNews(data.articles)

            return ()=>{
                   setNews([]);
                }
            
        }
        getNews()
    }, []);

    /* eslint-enable */

    return (
        <div className='container'>
            <hr className="line"></hr>
            <div className="row">
                {
                    news.slice(0,20).map(newNews => (
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
            <hr className="border border-top-0 border-dark"></hr>
        </div>
    )
}

export default News;



