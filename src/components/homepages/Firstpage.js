import React from 'react'
import styled from 'styled-components';
import {
    Heading,
    Newsdate,
    Hline,
    NewsLink,
    CardImg
} from '../../globalStyle';

export default function Firstpage({ indiannews }) {
    // console.log('firstpage', indiannews)

    return (
        <PageContainer>

            <Row1>
                <Col1>
                    <Img1 data={indiannews.[12].image.url}>
                        <Imglayer>
                            <NewsLink to={{
                                pathname: '/Readnews',
                                state: {
                                    title: indiannews.[12].title,
                                    body: indiannews.[12].body,
                                    img: indiannews.[12].image.url,
                                    trendingnews: indiannews.slice(15, 20)
                                }
                            }}>
                                <Imageheading> {indiannews.[12].title}</Imageheading>
                            </NewsLink>
                        </Imglayer>
                    </Img1>
                </Col1>

                <Col2>
                    {
                        indiannews.slice(5, 8).map((news) => {
                            return (
                                <>
                                    <Newsdate>{news.datePublished}</Newsdate>
                                    <NewsLink to={{
                                        pathname: '/Readnews',
                                        state: {
                                            title: news.title,
                                            body: news.body,
                                            img: news.image.url,
                                            trendingnews: indiannews.slice(15, 20)
                                        }
                                    }}>
                                        <Heading>{news.title}</Heading>
                                    </NewsLink>
                                    <Hline></Hline>
                                </>
                            )
                        })
                    }
                </Col2>

            </Row1>

            <Row2>
                {
                    indiannews.slice(10, 14).map((news) => {
                        return (
                            <Col1>
                                <CardImg data={news.image.url} height="60%" />
                                <Newsdate>{news.datePublished}</Newsdate>
                                <NewsLink to={{
                                    pathname: '/Readnews',
                                    state: {
                                        title: news.title,
                                        body: news.body,
                                        img: news.image.url,
                                        trendingnews: indiannews.slice(15, 20)
                                    }
                                }}>
                                    <Heading>{news.title}</Heading>
                                </NewsLink>
                            </Col1>
                        )
                    })
                }
            </Row2>


        </PageContainer>
    )

}

export const PageContainer = styled.div`
   height: 100vh;
   margin: 30px 0;
   font-family:Condensed,Georgia,serif;
   overflow:hidden;
   
   @media screen and (max-width:992px){
     grid-template-columns:100%;
     height: 100%;
    }
   @media screen and (max-width:576px){
     padding: 0 0px; 
    }
`;

export const Row1 = styled.div`

   display: grid;
   grid-template-columns:60% 40%;
   height: 55%;
   justify-content  :center ;
   overflow:hidden;
   @media screen and (max-width:992px){
     grid-template-columns:100%;
     height: 50%;
    }

`;
export const Row2 = styled.div`
   display: grid;
   grid-template-columns:25% 25% 25% 25%;
   height: 45%;
   justify-content  :center ;
   @media screen and (max-width:992px){
     grid-template-columns:100%;
     height: 50%;
    }

`;
export const Col1 = styled.div`
    padding: 0 10px;
`;

export const Col2 = styled.div`
   display: flex;
   flex-direction: column;
   padding: 0 10px;
    height: 90%;
`;

export const Imglayer = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.7;
`;

export const Img1 = styled.div`
  width: 100%;
  height: 85%;
  position: relative;
  background:url(${props => props.data}) no-repeat center center/cover;
  @media screen and (max-width:992px){
     height: 300px;
    }
  @media screen and (max-width:576px){
     height: 200px;
    }
`;
export const Imageheading = styled.h1`
    bottom: 5%;
    margin:0 30px;
    position: absolute;
    color: white;
    font-weight: bold;
    font-size: 25px;
    @media screen and (max-width:576px){
     font-size: 17px;
     margin:0 5px;
    }
`;
