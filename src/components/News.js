import React, { useEffect, useState } from 'react'
import NewsListing from './NewsListing';
import uuid from 'react-uuid';



const News = ({ query="world" }) => {



    const [news, setNews] = useState([]);
    


    useEffect(() => {
        const getNews = async () => {
            const responce = await fetch(
                `https://newsapi.org/v2/everything?q=${query}&from=2021-06-13&to=2021-06-13&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`
            );
            const data = await responce.json();
            setNews(data.articles)
            console.log(query);
        }
        getNews();
    }, [query]);


    


    return (
        <div className='row container'>



            <div className="col-12">
                <div className="row">
                    {
                        news.map(newNews => (
                            <NewsListing
                                key={uuid()}
                                title={newNews.title}
                                description={newNews.description}
                                img={newNews.urlToImage}
                            />
                        )
                        )
                    }
                </div>
            </div>




        </div>
    )
}

export default News;

// const [date, setDate] = useState();
// getdate();
// var getdate = () => {
//     var today = new Date();
//     var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//     setDate(date);
// }