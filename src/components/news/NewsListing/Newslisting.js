import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Hline } from "../../../globalStyle";
import { Newsdate } from '../../../globalStyle';
import format from 'date-fns/format';

export default function NewsListing({ title, description, img, date, body, trendingnews }) {
  return (
    <NewsLink to={{
      pathname: '/Readnews',
      state: {
        title: title,
        body: body,
        img: img,
        description:description,
        trendingnews: trendingnews,
        date: format(new Date(date), 'do.MMM.yyyy')
      }
    }}>
        <NewslistingContainer>
              <NewslistingFigure>
                <Img src={img} alt={"description"} />
              </NewslistingFigure>
              <Newsdate>{format(new Date(date), 'do.MMM.yyyy')}</Newsdate>
              <Heading>{title}</Heading>
              <Content>{description}</Content>
              <Hline></Hline>
      </NewslistingContainer>
    </NewsLink>

  )
}



 const NewslistingContainer = styled.div`
   border-radius: 10px;
   position: relative;
   padding: 5px;
   height: 400px;
   overflow: hidden;
   cursor: pointer;
   border: 1px solid #636363;
   
 

   &:hover {
    transition: all 0.3s ease-out;
    box-shadow: 0px 5px 9px rgba(38, 38, 38, 0.9);
    top: -5px;
    
  }
   @media screen and (max-width:576px){
        height: 300px;
        margin: 7px 0;
    }
`;

 const NewslistingFigure = styled.figure`
  width: 100%;
  height: 40%;
  @media screen and (max-width:576px){
       height: 60%;
    }
`;

 const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
    
`;
 const Heading = styled.h2`
  font-family:Condensed,Georgia,serif;
  font-size:1.1rem;
  line-height:22px;
  font-weight:700;
  padding: 5px 0 5px 0;
  height: 24%;
  overflow: hidden;
  @media screen and (max-width:576px){
       height: 40%;
    }
  
`;
 const Content = styled.p`
  font-family: Exchange, Georgia, serif;
  font-size: 0.9rem;
  margin: 0px;
  font-weight:400;
  line-height: 20px;
  height: 25%;
  overflow: hidden;
    @media screen and (max-width:576px){
      display: none;
    }
`;
 const NewsLink = styled(Link)`
    color: black;
    &:hover {
    text-decoration:none;
  }
`;
// export const Button = styled.button`
//   font-family: Georgia, serif;
//   font-size: 0.85rem;
//   margin: 0px;
//   font-weight:400;
//   display: inline;
//   color: red;
//   margin: 0 3px ;
//   cursor: pointer;
//   border:none;
//   background:white;
// `;
