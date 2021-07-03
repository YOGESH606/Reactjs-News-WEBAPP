import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Hline } from "../../../globalStyle";

export default function NewsListing({ title, description, img, time, body ,trendingnews}) {
    return (
        <NewslistingContainer>
            <NewslistingFigure>
                <Img src={img} alt={"description"} />
            </NewslistingFigure>
            <NewsLink to={{
                pathname: '/Readnews',
                state:{
                    title:title ,
                    body:body,
                    img:img,
                    trendingnews:trendingnews
                }
            }}>
                <Heading>{title}</Heading>
            </NewsLink>
            <Content>{description}</Content>
            <Hline></Hline>
        </NewslistingContainer>

    )
}



export const NewslistingContainer = styled.div`
   border-radius: 10px;
   position: relative;
   padding: 7px;
   height: 400px;
   overflow: hidden;
   @media screen and (max-width:576px){
        height: 300px;
    }
`;

export const NewslistingFigure = styled.figure`
  width: 100%;
  height: 40%;
  @media screen and (max-width:576px){
       height: 50%;
    }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
    
`;
export const Heading = styled.h2`
  font-family:Condensed,Georgia,serif;
  font-size:1.1rem;
  line-height:22px;
  font-weight:700;
  padding: 5px 0 5px 0;
  height: 24%;
  overflow: hidden;
  @media screen and (max-width:576px){
       height: 33%;
    }
  
`;
export const Content = styled.p`
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
export const NewsLink = styled(Link)`
    color: black;
    &:hover {
    color: red;
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
