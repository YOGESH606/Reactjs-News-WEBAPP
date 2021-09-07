import React from 'react'
import styled from 'styled-components';
import { useEffect } from 'react';
import format from 'date-fns/format';
import {
    Container,
    Hline,
    NewsLink, Newsdate
} from '../../globalStyle';

export default function Readnews(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    })
    const data = props.location.state;
    return (
        <Container>
            <Hline />
            <NewsContainer>

                <Column1>
                    <Heading1>{data.title}</Heading1>
                    <NewslistingFigure>
                        <Img src={data.img} />
                    </NewslistingFigure>
                    <p>{data.body}</p>
                </Column1>

                <Column2>
                    <Title>Trending</Title>
                    {
                        data.trendingnews.slice(0, 5).map((news) => {
                            return (
                                <NewsLink to={{
                                    pathname: '/Readnews',
                                    state: {
                                        title: news.title,
                                        body: news.body,
                                        img: news.image.url,
                                        trendingnews: data.trendingnews
                                    }
                                }}>
                                    <PopularContent>
                                        <Img1 src={news.image.url} alt="Image" />
                                        <Newsdate>{format(new Date(news.datePublished.slice(0, 10)), 'do.MMM.yyyy')}</Newsdate>
                                        <Heading2> {news.title}</Heading2>
                                    </PopularContent>
                                </NewsLink>
                            )
                        })
                    }
                </Column2>

            </NewsContainer>
            <Hline />

        </Container>
    )
}

const NewsContainer = styled.div`
    font-family:Condensed,Georgia,serif; 
    display: grid;
    grid-template-columns:55% 35%;
    justify-content: center;
    @media screen and (max-width:992px){
        grid-template-columns:65% 35%;
    }
    @media screen and (max-width:768px){
        grid-template-columns: 100%;
        
    }
  
`;
const NewslistingFigure = styled.figure`
   width: 100%;
`;
const Img = styled.img`
   width: 100%;
   object-fit: cover;
   margin-bottom: 1rem;
`;
const Img1 = styled.img`
   width: 100%;
   height:60%;
   object-fit: cover;
   margin-bottom: 1rem;
`;
const Heading1 = styled.h2`
    font-size: 30px;
    font-weight:bold;
    @media screen and (max-width:992px){
           font-size: 25px;
        }
    @media screen and (max-width:768px){
           font-size: 20px; 
        }
    @media screen and (max-width:576px){
           font-size: 18px; 
        }
`;
const Heading2 = styled.h2`
    font-size: 20px;
    font-weight:900;
    @media screen and (max-width:992px){
           font-size: 18px;
        }
    @media screen and (max-width:768px){
           font-size: 15px; 
        }
    @media screen and (max-width:576px){
           font-size: 14px; 
        }
`;
export const Title = styled.h1`
    margin: 10px 0;  
 `;
const Column1 = styled.div`
    padding:0 2rem;
    border-right: 1px solid rgb(146, 146, 146);
    @media screen and (max-width:992px){
           padding:0 1rem;
        }
    @media screen and (max-width:576px){
           border-right:none;
        }
    
`;
const Column2 = styled.div`
    padding:0 2rem;
    @media screen and (max-width:992px){
           padding:0 1rem;
        }
    
`;
const PopularContent = styled.div`
    margin-bottom: 2rem;
    position: relative;
    padding: 5px;
    height: 400px;
    border:3px solid rgba(249, 249, 249, 0.1);
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px , rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    @media screen and (max-width:992px){
           height: auto;
        }


    &:hover {
     /* transition: all 0.3s ease-out;
     box-shadow: 0px 5px 9px rgba(38, 38, 38, 0.9);
     top: -5px; */
     transform: scale(1.05);
    box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px , rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color:rgba(249, 249, 249, 0.1);
`;