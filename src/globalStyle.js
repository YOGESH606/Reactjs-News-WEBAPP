import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
 *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    text-decoration:none;
 }
`;
export const Container = styled.div`
       margin: 0 100px;
       position: relative;

      @media screen and (max-width: 992px) {
       margin:0px 100px;
      }
      @media screen and (max-width: 768px) {
       margin:0px 80px;
      }
      @media screen and (max-width: 576px) {
       margin:0px 30px;
      }
`;
export const Hline = styled.hr`
    border-top: 1px solid black;
    margin: 8px 0;
`;
export const Spinner = styled.div`
    height: 85vh;
    display:flex;
    justify-content: center;
    align-items: center;     
`;

export const NewsLink = styled(Link)`
    color:black ;
    text-decoration:none;
    &:hover {
    color: red;
    text-decoration:none;
  }
`;
export const PageContainer = styled.div`
    height:100vh;
    margin: 30px 0;
    font-family:Condensed,Georgia,serif;
    overflow:hidden;
    @media screen and (max-width:992px){
       height: 100%;
    }
`;
export const Pagetitle = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    font-weight: bold;
`;
export const Title = styled.h2`
    font-weight: bold;
 `;

export const TitleLink = styled(Link)`
     color: black;
     display: block;
`;

export const Heading = styled.div`
  font-size:1rem;
  line-height:22px;
  font-weight:700;
  padding: 5px 0 5px 0;
  overflow: hidden;
  @media screen and (max-width:576px){
       font-size: 0.9rem;
    }

`;


export const Newsdate = styled.p`
    margin:4px 0;
`;

export const CardImg = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  position: relative;
  background:url(${props => props.data}) no-repeat center center/cover;
  @media screen and (max-width:992px){
     height: 300px;
    }
  @media screen and (max-width:992px){
     height: 200px;
    }
`;


export default GlobalStyle;