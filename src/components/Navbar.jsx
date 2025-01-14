import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import PSLogo from './images/miscicons/PSLogo.png'
import hamburgerIcon from './images/miscicons/hamburgerIcon.png'
import React, { useState } from 'react'




function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClick = () => {
    console.log(isOpen)
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
      window.scrollTo(0, 0);
  };

  return (
    <Container>
        <HomeContainer>
          <NavLink to="/Home" >
            <HomeIcon src={PSLogo} alt='ImageNotLoading'/>
          </NavLink>
        </HomeContainer>
        <ItemContainer>
            <ANavLink to="/Home" onClick={handleLinkClick} activeClassName="active"> Home </ANavLink>
            <ANavLink to="/About" onClick={handleLinkClick} activeClassName="active"> About </ANavLink>
            <ANavLink to="/Students" onClick={handleLinkClick} activeClassName="active"> Students </ANavLink>
            <ANavLink to="/Companies" onClick={handleLinkClick} activeClassName="active"> Companies </ANavLink>
            <ANavLink to="/Careers" onClick={handleLinkClick} activeClassName="active"> Careers </ANavLink>
            <ANavLink to="/Apply" onClick={handleLinkClick} activeClassName="active"> Apply </ANavLink>
        </ItemContainer>
        <DropdownContainer>
          <HamburgerIcon src={hamburgerIcon} onClick={() => handleClick()}/>
          {
          isOpen && 
            <DropdownItemContainer>
              <DropdownListItem to="/Home" onClick={handleLinkClick}> Home </DropdownListItem>
              <DropdownListItem to="/About" onClick={handleLinkClick}> About </DropdownListItem>
              <DropdownListItem to="/Students" onClick={handleLinkClick}> Students </DropdownListItem>
              <DropdownListItem to="/Companies" onClick={handleLinkClick}> Companies </DropdownListItem>
              <DropdownListItem to="/Careers" onClick={handleLinkClick}> Careers </DropdownListItem>
              <DropdownListItem to="/Apply" onClick={handleLinkClick}> Apply </DropdownListItem>
            </DropdownItemContainer>
        }
        </DropdownContainer>
    </Container>
  );
}

export default Navbar;


const Container = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%; 
    height: 70px;
    display: flex; 
    align-items: center;
    gap: 30px;
    background: #FFFDFD;
    opacity: 0.95;
    box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.2); 
    overflow: hidden;
    z-index: 900;

    @media only screen and (max-width: 780px) {
      overflow: visible;
  }
`

const ANavLink = styled(NavLink)`
    color: #1C2838;
    font-size: 16px;
    text-decoration: none;
    height: 50px;
    display: flex;
    align-items: center;
    position: relative;

    &.active {
      font-weight: 400; 
      color: #EB5594; 
    }

    &:hover {
      color: #EB5594; 
      transition: 0.5s ease-in-out;
    }

    &::after {
      content: "";
      position: absolute; 
      left: 1;
      bottom: 0;
      display: block;
      height: 2px;
      width: 0;
      background-color: #EB5594;
      transition: width 0.4s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }

    // border: black solid;

    @media only screen and (max-width: 400px) {
        // border: solid black;
    }
`;


const HomeIcon = styled.img`
    height: 50px;
    margin-left: 15px; 

    // border: solid red;
`
const HomeContainer = styled.div`
    display: flex;
    justify-content: flex-start;

    // border: solid black;
`
const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;


  // border: solid black;

  @media only screen and (max-width: 780px) {
    display: none;
  }
`;

const DropdownContainer = styled.div`
  display: none;
  // cursor: pointer;

  @media only screen and (max-width: 780px) {
    position: absolute;
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 20px;
    margin-right: 40px;
    overflow: visible;
  
    top: 0;
    right: 0;
    // border: solid black;
  }
`;


const DropdownItemContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: flex-end;
  width: 200px;
  height: 600px;

  // border: solid blue;

`
const DropdownListItem = styled(NavLink)`
    color: #1C2838;
    font-size: 16px;
    text-decoration: none;
    width: 200px;
    height: 70px;
    background: white;
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
    align-items: center; 

    // border: black solid;

    &.active {
      font-weight: 400; 
      color: #EB5594; 
    }


`;

const HamburgerIcon = styled.img`
    display: flex;
    width: 40px;
    height: 30px;
    cursor: pointer;
    // margin-top: 20px;
    // border: solid blue;

`;
