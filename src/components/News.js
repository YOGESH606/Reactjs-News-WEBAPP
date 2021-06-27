import React, { useEffect, useState } from 'react'
import NewsListing from './NewsListing';
import uuid from 'react-uuid';
const News = ({query}) => {

    const [news, setNews] = useState([]);
   // const API_KEY = process.env.REACT_APP_API_KEY;
   // const d = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
    /* eslint-disable */
    useEffect(() => {
        const getNews = async () => {
            const responce = await fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=${query}&pageNumber=1&pageSize=20&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "22675435b6msh88d453eb7c57b68p185113jsn984444b28210",
                    "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
                }
            });
            const data = await responce.json();
            console.log(data)
            setNews(data.value)        
        }


        getNews()

        return () => setNews([])
        
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
                            img={newNews.image.url}
                            time={newNews.datePublished}
                        />
                    )
                    )
                }
                
            </div>
            <hr className="line"></hr>
        </div>
    )
}

export default News;



