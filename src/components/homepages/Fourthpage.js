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

export default function Fourthpagepage({ businessnews }) {
    // console.log('fourthpage', businessnews)
    return (
        <PageContainer>
            <Pagetitle>
                <Title>Business</Title>
                <TitleLink to='/Business'>See all</TitleLink>
            </Pagetitle>
            <Hline></Hline>
           
            <Row>
                <Col1>
                    {
                        businessnews.slice(5, 7).map((news) => {
                            return (
                                <>
                                    <CardImg data={news.image.url} height="30%"/>
                                    <Newsdate>{format(new Date(news.datePublished.slice(0, 10)), 'do.MMM.yyyy')}</Newsdate>
                                    <NewsLink to={{
                                        pathname: '/Readnews',
                                        state: {
                                            title: news.title,
                                            body: news.body,
                                            img: news.image.url,
                                            trendingnews: businessnews.slice(1, 5)
                                        }
                                    }}>
                                        <Heading>{news.title}</Heading>
                                    </NewsLink>
                                    <Hline></Hline>
                                </>
                            )
                        })
                    }

                </Col1>
                <Col2>
                    {
                        businessnews.slice(10, 15).map((news) => {
                            return (
                                <>
                                    <Newsdate>{format(new Date(news.datePublished.slice(0, 10)), 'do.MMM.yyyy')}</Newsdate>
                                    <NewsLink to={{
                                        pathname: '/Readnews',
                                        state: {
                                            title: news.title,
                                            body: news.body,
                                            img: news.image.url,
                                            trendingnews: businessnews.slice(15, 20)
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
                    <Img1 data={businessnews.[1].image.url}></Img1>
                    <Newsdate>{format(new Date(businessnews.[1].datePublished.slice(0, 10)), 'do.MMM.yyyy')}</Newsdate>
                    <NewsLink to={{
                        pathname: '/Readnews',
                        state: {
                            title: businessnews.[1].title,
                            body: businessnews.[1].body,
                            img: businessnews.[1].image.url,
                            trendingnews: businessnews.slice(15, 20)
                        }
                    }}>
                        <Heading>{businessnews.[1].title}</Heading>
                    </NewsLink>

                </Col3>   
            </Row>
            
        </PageContainer>
    )
}






const Img1 = styled.div`
  width: 100%;
  height: 70%;
  position: relative;
  background:url(${props => props.data}) no-repeat center center/cover;
  @media screen and (max-width:992px){
     height: 400px;
    }
  @media screen and (max-width:576px){
     height: 300px;
    }
`;
const Row = styled.div`
   margin: 30px 0;
   display: grid;
   grid-template-columns:25% 25% 50%;
   height: 88%;
   justify-content  :center ;
   overflow: hidden;

   @media screen and (max-width:992px){
     grid-template-columns:100%;
     height: 100%;
    }
`;
const Col1 = styled.div`
     padding: 0 10px;
`;
const Col2 = styled.div`
   padding: 0 10px;
`;
const Col3 = styled.div`
   padding: 0 10px;
`;


