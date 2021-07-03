import React from 'react'
import styled from 'styled-components';
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

export default function Secondpage({ worldnews }) {
    // console.log('secondpage', worldnews)
    return (
        <PageContainer>
            <Pagetitle>
                <Title>World</Title>
                <TitleLink to='/world'>See all</TitleLink>
            </Pagetitle>
            <Hline></Hline>
            <Row>
                <Col1>
                    <Img1 data={worldnews.[1].image.url}></Img1>
                    <Newsdate>{worldnews.[1].datePublished}</Newsdate>
                    <NewsLink to={{
                        pathname: '/Readnews',
                        state: {
                            title: worldnews[1].title,
                            body: worldnews[1].body,
                            img: worldnews[1].image.url,
                            trendingnews: worldnews.slice(15, 20)
                        }
                    }}>
                        <Heading>{worldnews[1].title}</Heading>
                    </NewsLink>
                </Col1>
                <Col2>
                    {
                        worldnews.slice(5, 10).map((news) => {
                            return (
                                <>
                                    <Newsdate>{news.datePublished}</Newsdate>
                                    <NewsLink to={{
                                        pathname: '/Readnews',
                                        state: {
                                            title: news.title,
                                            body: news.body,
                                            img: news.image.url,
                                            trendingnews: worldnews.slice(15,20)
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
                <Col3>
                    {
                        worldnews.slice(10,12).map((news) => {
                            return (
                                <>
                                    <CardImg data={news.image.url} height="30%" />
                                    <NewsLink to={{
                                        pathname: '/Readnews',
                                        state: {
                                            title: news.title,
                                            body: news.body,
                                            img: news.image.url,
                                            trendingnews: worldnews.slice(1, 5)
                                        }
                                    }}>
                                        <Heading>{news.title}</Heading>
                                    </NewsLink>
                                </>
                            )
                        })
                    }
                </Col3>
            </Row>
        </PageContainer>
    )
}



export const Img1 = styled.div`
  width: 100%;
  height: 80%;
  position: relative;
  background:url(${props => props.data}) no-repeat center center/cover;
  @media screen and (max-width:992px){
     height: 400px;
    }
  @media screen and (max-width:576px){
     height: 300px;
    }
`;

export const Row = styled.div`
   margin: 30px 0;
   display: grid;
   grid-template-columns:50% 25% 25%;
   height: 88%;
   justify-content  :center ;
   overflow:hidden;

   @media screen and (max-width:992px){
     grid-template-columns:100%;
     height: 100%;
    }
`;

export const Col1 = styled.div`
     padding: 0 10px;
`;

export const Col2 = styled.div`
   display: flex;
   flex-direction: column;
    padding: 0 10px;
`;

export const Col3 = styled.div`
   display: flex;
   flex-direction: column;
   padding: 0 10px;
`;


