import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (


        <FooterContainer>
            <Grid>
                <FooterList>
                    <FooterItem><FooterLink to='/'>World</FooterLink></FooterItem>
                    <FooterItem><FooterLink to='/'>US</FooterLink></FooterItem>
                    <FooterItem><FooterLink to='/'>Politics</FooterLink></FooterItem>
                    <FooterItem><FooterLink to='/'>Entertainment</FooterLink></FooterItem>
                    <FooterItem><FooterLink to='/'>Business</FooterLink></FooterItem>
                    <FooterItem><FooterLink to='/'>Health</FooterLink></FooterItem>
                </FooterList>
                <Line></Line>
                <FooterList>
                    <FooterItem><FooterLink to='/'>Style</FooterLink></FooterItem>
                    <FooterItem><FooterLink to='/'>Travel</FooterLink></FooterItem>
                    <FooterItem><FooterLink to='/'>Video</FooterLink></FooterItem>
                    <FooterItem><FooterLink to='/'>Sports</FooterLink></FooterItem>
                </FooterList>
                <Line></Line>
                <FooterList>
                    <FooterItem><FooterLink to='/'>Terms of Use</FooterLink></FooterItem>
                    <FooterItem><FooterLink to='/'>Privacy Notice</FooterLink></FooterItem>
                    <FooterItem><FooterLink to='/'>Accessility & CC</FooterLink></FooterItem>
                    <FooterItem><FooterLink to='/'>AdChoices</FooterLink></FooterItem>
                    <FooterItem><FooterLink to='/'>About Us</FooterLink></FooterItem>
                    <FooterItem><FooterLink to='/'>Sitemap</FooterLink></FooterItem>        
                </FooterList>
                <Line></Line>
                <FooterList>
                    <FooterItem><FooterLink to='/'>Adevertise with us</FooterLink></FooterItem>
                    <FooterItem><FooterLink to='/'>THE THINKER Store</FooterLink></FooterItem>
                    <FooterItem><FooterLink to='/'>Newsletter</FooterLink></FooterItem>
                    <FooterItem><FooterLink to='/'>Transcripts</FooterLink></FooterItem>
                    <FooterItem><FooterLink to='/'>Subscriber Agreement</FooterLink></FooterItem>
                    <FooterItem><FooterLink to='/'>The Thinker NewsSource</FooterLink></FooterItem>
                </FooterList>
                <Line></Line>
                
            </Grid>

            <FBottom>
                <Top>
                    <p>Copyright ©2021 The Thinker News network, Inc. All Rights Reserved.</p>
                </Top>
                <Bottom>
                    Follow The Thinker
                    <SocialMedia>
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                    </SocialMedia>
                </Bottom>
            </FBottom>
        </FooterContainer>



    )
}
const FooterContainer = styled.div`
    width: 100%;
    font-family:Condensed,Georgia,serif;
    background: #CCCCCC;
    padding: 30px 0;
`;
const FBottom = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;
    padding: 0 100px;
`;
const Top = styled.p`
    margin: 40px 0 20px 0;
    text-align: center;
`;
const Bottom = styled.div`
     display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`;
const SocialMedia = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    width: 100%;
    margin: 10px 0;
    font-size: 30px;
    
`;
const Grid = styled.div`
    font-weight: 300;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    padding-top:20px;
    font-size: 17px;
    
    @media screen and (max-width:992px){
        grid-template-columns:50% 50% ;
        font-size: 15px;
    }
    @media screen and (max-width:778px){
        grid-template-columns: 50% 50%;
    }
    @media screen and (max-width:576px){
         grid-template-columns: 100%;
    }
`;

const FooterList = styled.ul`
    display:flex;
    flex-direction:column;
    color: rgb(85,85,85);
    width: 100%;
   align-items: center;
   @media screen and (max-width:992px){
        margin-bottom: 20px;
    }
   
`;
const FooterItem = styled.li`
    display:block;
`;
const FooterLink = styled(Link)`
    color:black;
    line-height: 35px;
     @media screen and (max-width:778px){
        line-height:25px;
    }
`;
const Line = styled.div`
     display: none;
     @media screen and (max-width:576px){
       display: block;
       border-bottom: 1px solid black;
       margin: 0 50px;
    }
`;
