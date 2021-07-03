import  React ,{ useEffect, useState } from 'react'
import NewsListing from '../NewsListing/Newslisting';
import uuid from 'react-uuid';
import styled from "styled-components";
import { Container,Hline} from '../../../globalStyle';
import { ClipLoader } from 'react-spinners';
import { Spinner } from '../../../globalStyle';
import { FetchNews } from '../../../api/Api';

 export default function News ({ query }){

    const [news, setNews] = useState([]);
    const [loading,setLoading]=useState(false);
    // const API_KEY = process.env.REACT_APP_API_KEY;
    
    /* eslint-disable */
    useEffect(() => {
           const Fetchdata=async()=>{
           setLoading(true);
           const res=await FetchNews(query);
           setNews(res.data.value);
           setLoading(false);
       }
       
        Fetchdata();
   
    }, [query]);


    /* eslint-enable */

    return (
        
            <Container>
            <Hline />
                {
                    loading
                    ?
                        <Spinner>
                            <ClipLoader color='black' loading={loading} size={80} />
                        </Spinner>
                    :
                    <div>
                        <NewsContainer>
                            
                            {
                                news.slice(0, 20).map(newNews => (
                                    <NewsListing
                                        key={uuid()}
                                        title={newNews.title}
                                        description={newNews.description}
                                        img={newNews.image.url}
                                        time={newNews.datePublished}
                                        body={newNews.body}
                                        trendingnews={news.slice(15,20)}
                                    />
                                )
                                )
                            }
                        </NewsContainer>
                        <Hline />
                    </div>

                }
            
            </Container>
        
    )
}





export const NewsContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns:auto auto auto auto; /*Make the grid smaller than the container*/
  grid-gap: 10px;
  @media screen and (max-width:992px){
            grid-template-columns:auto auto auto;
        }
  @media screen and (max-width:768px){
            grid-template-columns:auto auto;
        }
  @media screen and (max-width:576px){
            grid-template-columns:auto;
        }
`;




