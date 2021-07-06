import React from 'react'
import styled from 'styled-components';
import format from 'date-fns/format';
import {
    PageContainer,
    Pagetitle,
    Heading,
    Newsdate,
    Title,
    TitleLink,
    Hline,
    NewsLink,
    CardImg
} from '../../globalStyle';

export default function Thirdpage({ politicsnews }) {
    // console.log('thirdpage', politicsnews)
    return (
        <PageContainer>
            <Pagetitle>
                <Title>Politics</Title>
                <TitleLink to='/Politics'>See all</TitleLink>
            </Pagetitle>
            <Hline></Hline>
            <Row1>
                <Col1>
                    <Img1 data={politicsnews.[1].image.url}></Img1>
                    <Newsdate>{format(new Date(politicsnews.[1].datePublished.slice(0, 10)), 'do.MMM.yyyy')}</Newsdate>
                    <NewsLink to={{
                        pathname: '/Readnews',
                        state: {
                            title: politicsnews[1].title,
                            body: politicsnews[1].body,
                            img: politicsnews[1].image.url,
                            trendingnews: politicsnews.slice(15, 20)
                        }
                    }}>
                        <Heading>{politicsnews[1].title}</Heading>
                    </NewsLink>
                </Col1>
                <Col2>
                    <Img1 data={politicsnews.[2].image.url}></Img1>
                    <Newsdate>{format(new Date(politicsnews.[2].datePublished.slice(0, 10)), 'do.MMM.yyyy')}</Newsdate>
                    <NewsLink to={{
                        pathname: '/Readnews',
                        state: {
                            title: politicsnews[2].title,
                            body: politicsnews[2].body,
                            img: politicsnews[2].image.url,
                            trendingnews: politicsnews.slice(15, 20)
                        }
                    }}>
                        <Heading>{politicsnews[2].title}</Heading>
                    </NewsLink>
                </Col2>
            </Row1>
            <Row2>
                {
                    politicsnews.slice(10, 14).map((news) => {
                        return (
                            <Col>
                                <CardImg data={news.image.url} height="60%" />
                                <Newsdate>{format(new Date(news.datePublished.slice(0, 10)), 'do.MMM.yyyy')}</Newsdate>
                                <NewsLink to={{
                                    pathname: '/Readnews',
                                    state: {
                                        title: news.title,
                                        body: news.body,
                                        img: news.image.url,
                                        trendingnews: politicsnews.slice(15, 20)
                                    }
                                }}>
                                    <Heading>{news.title}</Heading>
                                </NewsLink>

                            </Col>
                        )
                    })
                }
            </Row2>
        </PageContainer>
    )
}


const Img1 = styled.div`
  width: 100%;
  height: 75%;
  position: relative;
  background:url(${props => props.data}) no-repeat center center/cover;
  @media screen and (max-width:992px){
     height: 300px;
    }
  @media screen and (max-width:576px){
     height: 200px;
    }
`;

const Row1 = styled.div`
   display: grid;
   grid-template-columns:50% 50%;
   height: 44%;
   justify-content  :center ;
   overflow:hidden;

   @media screen and (max-width:992px){
     grid-template-columns:100%;  
     height: 50%;
    }
`;
const Col1 = styled.div`
     padding: 0 10px;
     @media screen and (max-width:992px){
     padding:10px 0;
     border-bottom: 1px solid black;
    }
`;
const Col2 = styled.div`
     padding:0 10px ;
     @media screen and (max-width:992px){
     padding:10px 0;
     border-bottom: 1px solid black;
    }
`;
const Row2 = styled.div`
   display: grid;
   grid-template-columns:25% 25% 25% 25%;
   height: 44%;
   justify-content  :center ;
   margin-top: 20px;

   @media screen and (max-width:992px){
     grid-template-columns:100%;
     height: 50%;  
    }
`;
const Col = styled.div`
     padding: 0 10px; 
     @media screen and (max-width:992px){
     padding:10px 0px;  
     border-bottom: 1px solid black;
    }
`;


