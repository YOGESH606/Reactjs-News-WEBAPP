import React from 'react'
import styled from 'styled-components';
import { Container } from '../../globalStyle';
import { Hline } from '../../globalStyle';
import { NewsLink } from '../../globalStyle';
import { useEffect } from 'react';

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
                    <h2>Trending</h2>
                    {
                        data.trendingnews.slice(0, 5).map((news) => {
                            return (
                                <PopularContent>
                                    <Img src={news.image.url} alt="Image" />
                                    <NewsLink to={{
                                        pathname: '/Readnews',
                                        state: {
                                            title: news.title,
                                            body: news.body,
                                            img: news.image.url,
                                            trendingnews:data.trendingnews
                                        }
                                    }}>
                                        <Heading2> {news.title}</Heading2>
                                    </NewsLink>

                                    <Hline />
                                </PopularContent>
                            )
                        })
                    }
                </Column2>

            </NewsContainer>
            <Hline />

        </Container>
    )
}

export const NewsContainer = styled.div`
    font-family:Condensed,Georgia,serif; 
    display: grid;
    grid-template-columns:55% 35%;
    justify-content: center;

    @media screen and (max-width:992px){
        grid-template-columns:65% 35%;
    }
    @media screen and (max-width:576px){
        grid-template-columns: 100%;
        
    }
  
`;
export const NewslistingFigure = styled.figure`
   width: 100%;
`;
export const Img = styled.img`
   width: 100%;
   object-fit: cover;
   margin-bottom: 1rem;
`;
export const Heading1 = styled.h2`
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
export const Heading2 = styled.h2`
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
export const Column1 = styled.div`
    padding:0 2rem;
    border-right: 1px solid rgb(146, 146, 146);

    @media screen and (max-width:992px){
           padding:0 1rem;
        }
    @media screen and (max-width:576px){
           border-right:none;
        }
    
`;
export const Column2 = styled.div`
    padding:0 2rem;
    @media screen and (max-width:992px){
           padding:0 1rem;
        }
    
`;
export const PopularContent = styled.div`
    margin-bottom: 2rem;
`;

