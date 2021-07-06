import { useState } from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Container, Hline } from '../../globalStyle';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [click, setClick] = useState(false);
    const [modal, setModal] = useState(false);
    const [value, setValue] = useState('');

    const handleclick = () => {
        setClick(!click);
    }
    const handlemodal = () => {
        setModal(!modal);
        if (modal === false) {
            setValue('');
        }

    }
    const handlevalue = (e) => {
        setValue(e.target.value);
    }


    return (
        <Container>

            <Nav>
                <SearchModal show={modal}>
                    <SearchModalWrapper>
                        <ModalInput value={value} type="text" placeholder="Search.." onChange={handlevalue} size="30" />
                        {
                            value ? 
                                <Link to={
                                    {
                                        pathname: '/Searchnews',
                                        state: {
                                            query: value
                                        }
                                    }
                                }>
                                    <ModalButton onClick={handlemodal}>Search</ModalButton>
                                </Link>
                                :
                                <ModalButton>Search</ModalButton>
                        }
                        <ModalButton onClick={handlemodal}>Cancel</ModalButton>
                    </SearchModalWrapper>
                </SearchModal>

                <NavHeader>
                    <NavBarIcon onClick={handleclick}>
                        {click ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
                    </NavBarIcon>

                    <NavHeading>THE THINKER</NavHeading>

                    <NavBtnLink>
                        <div className="">Subscribe</div>
                        <div className="">|</div>
                        <div className="">SignIn</div>
                    </NavBtnLink>

                    <NavSearchIcon onClick={handlemodal} >
                        <FontAwesomeIcon icon={faSearch} />
                    </NavSearchIcon>
                </NavHeader>

                <Menu click={click} onClick={handleclick} >
                    <MenuItem>
                        <MenuLink to='/'>Home</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to='/World'>World</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to='/US'>US</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to='/Politics'>Politics</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to='/Economy'>Economy</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to='/Business'>Business</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to='/Tech'>Technology</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to='/Dalalstreet'>Dalal Street</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to='/Agriculture'>Agriculture</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to='/Sports'>Sports</MenuLink>
                    </MenuItem>
                    <SearchButton onClick={handlemodal}>
                        <Search>Search</Search>
                        <Icon>
                            <FontAwesomeIcon icon={faSearch} />
                        </Icon>
                    </SearchButton>


                </Menu>
                <Hline />
            </Nav>

        </Container>
    )
}



export const Nav = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
`;

// -----------------HEADER-----------------          
export const NavHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
   font-family:Condensed,Georgia,serif;
`;

export const NavBarIcon = styled.button`
    display: none;

    @media screen and (max-width:992px){ 
        position: absolute;
        top: 0;
        left:0;
        margin-top:12px ;
        padding:1px 6px;
        background-color: white;
        display: inline-block;
        color: black;
        border: 0.5px solid #b0a5a0;
        font-size: 25px;
    }
`;

export const NavSearchIcon = styled.div`
        display: none;

   @media screen and (max-width:992px){
        display: inline-block;
        position: absolute;
        top: 0;
        right: 0;
        margin-top:12px;
        font-size: 25px;
        }    
`;
export const NavHeading = styled.h1`
    font-size: 35px;
    font-weight:900;
    transform: scale(.7, 1.4);
    @media only screen and (max-width:992px){
          font-size: 30px;
        }
     @media only screen and (max-width:768px){
           
        }
     @media only screen and (max-width:576px){
         font-size: 25px;
        }
`;

export const NavBtnLink = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0 8px 0 0;
    margin: 10px 0;

    @media screen and (max-width:992px){
        margin:13px 0 10px 0;
        top:75%;
        right: 50%;
        transform: translateX(50%);
        }
`;

export const NavSearchButton = styled.div`
        display: flex;
        font-size: 15px;

   @media screen and (max-width:992px){
           display: none;
        }
`;
//-------------------MENU--------------------------

export const Menu = styled.ul`
    display:flex;
    justify-content: space-between;
    font-weight: 400;
    font-family: Arial,Helvetica,sans-serif;
    width: 100%;
    margin:5px;

    @media screen and (max-width:992px){
       margin-top: 25px;
        flex-direction:column;
        align-items: center;
        height: ${({ click }) => click ? '200px' : '0'}; 
        overflow:hidden;
        transition: all 0.5s ;
    }
`;
export const MenuItem = styled.li`
    list-style:none;
    display: block;
`;
export const MenuLink = styled(Link)`
    color: black;
    text-decoration:none;
    font-size: 18px;
    padding: 0 10px;
    font-family:Condensed,Georgia,serif;
    &:hover{
        color: red;
    }
    @media screen and (max-width:992px){
        font-size: 17px;
    }
 `;
export const SearchButton = styled.div`
    display:flex;
    font-size: 1rem;
    cursor: pointer;
    @media screen and (max-width:992px){
        display: none;
    }
`;
export const Search = styled.div`
   padding: 0 15px;
`;
export const Icon = styled.div``;

//---------- MODAL----------

export const SearchModal = styled.div`
	z-index: 200;
	display: ${({ show }) => (show ? 'block' : 'none')};
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width:100vw;
  
	background: rgba(0,0,0,0.8);
`;
export const SearchModalWrapper = styled.div`
    width: 90%;
    margin: 100px auto 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

      @media screen and (max-width:768px){
           flex-direction: column;
        }
`;
export const ModalInput = styled.input`
    margin:0 20px;
    border: none;
    text-align:center;
    padding: 5px;
    font-size: 18px;
`;
export const ModalButton = styled.button`
    font-size: 18px;
    font-weight: 700;
    background-color: white;
    color:black;
    cursor: pointer;
    border-radius: 2px;
    margin:0 10px;
    border:none;
    padding: 5px 10px;
    font-family: Arial,Helvetica,sans-serif;

    @media screen and (max-width:768px){
           margin-top:20px;
        }
`;
