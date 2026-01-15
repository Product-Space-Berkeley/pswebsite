import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import PSLogo from './images/miscicons/PSLogo.png'
import hamburgerIcon from './images/miscicons/hamburgerIcon.png'
import React, { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
      window.scrollTo(0, 0);
      setIsOpen(false); // Close mobile menu when link is clicked
  };

  return (
    <Container>
        <Inner>
            <LogoContainer>
              <NavLink to="/Home">
                <Logo src={PSLogo} alt='Product Space Logo'/>
              </NavLink>
            </LogoContainer>

            <NavLinksContainer>
                <StyledNavLink to="/About" onClick={handleLinkClick} activeClassName="active">
                    About
                </StyledNavLink>
                <StyledNavLink to="/Companies" onClick={handleLinkClick} activeClassName="active">
                    Clients
                </StyledNavLink>
                <StyledNavLink to="/Students" onClick={handleLinkClick} activeClassName="active">
                    Students
                </StyledNavLink>
                <StyledNavLink to="/Careers" onClick={handleLinkClick} activeClassName="active">
                    Careers
                </StyledNavLink>
            </NavLinksContainer>

            <ApplyButtonWrapper>
                <ApplyButton to="/Apply" onClick={handleLinkClick}>
                    Apply
                </ApplyButton>
            </ApplyButtonWrapper>

            <DropdownContainer>
              <HamburgerIcon src={hamburgerIcon} onClick={() => handleClick()}/>
              {isOpen &&
                <DropdownItemContainer>
                  <DropdownListItem to="/About" onClick={handleLinkClick}> About </DropdownListItem>
                  <DropdownListItem to="/Companies" onClick={handleLinkClick}> Clients </DropdownListItem>
                  <DropdownListItem to="/Students" onClick={handleLinkClick}> Students </DropdownListItem>
                  <DropdownListItem to="/Careers" onClick={handleLinkClick}> Careers </DropdownListItem>
                  <DropdownListItem to="/Apply" onClick={handleLinkClick}> Apply </DropdownListItem>
                </DropdownItemContainer>
              }
            </DropdownContainer>
        </Inner>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 25px;
    background: rgba(10, 8, 18, 0.35);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    z-index: 900;
    box-sizing: border-box;

    @media only screen and (max-width: 1200px) {
        padding: 9px 20px;
    }

    @media only screen and (max-width: 1024px) {
        padding: 8px 20px;
    }

    @media only screen and (max-width: 780px) {
        padding: 8px 15px;
    }
`

const Inner = styled.div`
    width: min(1200px, 100%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;

    @media only screen and (max-width: 1024px) {
        flex: 0 0 auto;
    }

    @media only screen and (max-width: 780px) {
        flex: 1;
    }
`

const Logo = styled.img`
    width: 70px;
    height: 68px;
    aspect-ratio: 43/42;
    object-fit: cover;

    @media only screen and (max-width: 1200px) {
        width: 60px;
        height: 58px;
    }

    @media only screen and (max-width: 1024px) {
        width: 55px;
        height: 53px;
    }

    @media only screen and (max-width: 780px) {
        width: 50px;
        height: 48px;
    }
`

const NavLinksContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    flex: 1;
    justify-content: center;

    @media only screen and (max-width: 1200px) {
        gap: 40px;
    }

    @media only screen and (max-width: 1024px) {
        gap: 32px;
    }

    @media only screen and (max-width: 900px) {
        gap: 24px;
    }

    @media only screen and (max-width: 780px) {
        display: none;
    }
`

const StyledNavLink = styled(NavLink)`
    color: #FFF;
    font-family: "Instrument Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    white-space: nowrap;
    letter-spacing: 0.3px;

    &.active {
        color: #FF7BC6;
        font-weight: 700;
    }

    &:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        height: 2px;
        background: currentColor;
        opacity: 0;
        transform: scaleX(0.6);
        transition: opacity 0.2s ease, transform 0.2s ease;
    }

    &:hover {
        color: #FF7BC6;
    }

    &:hover:after {
        opacity: 0.6;
        transform: scaleX(1);
    }

    @media only screen and (max-width: 1200px) {
        font-size: 17px;
    }

    @media only screen and (max-width: 1024px) {
        font-size: 16px;
    }

    @media only screen and (max-width: 900px) {
        font-size: 15px;
    }
`

const ApplyButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-shrink: 0;

    @media only screen and (max-width: 780px) {
        display: none;
    }
`

const ApplyButton = styled(NavLink)`
    width: 110px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 25px;
    border: 1px solid #FFF;
    background: #FFF;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    color: #000;
    text-align: center;
    font-family: "Instrument Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;

    &:hover {
        background: rgba(255, 255, 255, 0.9);
        transform: translateY(-2px);
        box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.3);
    }

    @media only screen and (max-width: 1200px) {
        width: 100px;
        height: 44px;
        font-size: 17px;
    }

    @media only screen and (max-width: 1024px) {
        width: 90px;
        height: 40px;
        font-size: 16px;
    }

    @media only screen and (max-width: 900px) {
        width: 85px;
        height: 38px;
        font-size: 15px;
    }
`

const DropdownContainer = styled.div`
    display: none;

    @media only screen and (max-width: 780px) {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
`

const DropdownItemContainer = styled.div`
    position: absolute;
    top: 50px;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 200px;
    background: rgba(45, 27, 78, 0.98);
    border-radius: 8px;
    padding: 10px 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
`

const DropdownListItem = styled(NavLink)`
    color: #FFF;
    font-family: "Instrument Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    width: 100%;
    height: 50px;
    background: transparent;
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
    align-items: center;
    transition: all 0.2s ease;

    &.active {
        color: #FF7BC6;
        font-weight: 700;
    }

    &:hover {
        color: #FF7BC6;
        background: rgba(255, 255, 255, 0.05);
    }
`

const HamburgerIcon = styled.img`
    display: flex;
    width: 35px;
    height: 26px;
    cursor: pointer;
    filter: brightness(0) invert(1);
    transition: transform 0.2s ease;

    &:hover {
        transform: scale(1.1);
    }

    @media only screen and (max-width: 480px) {
        width: 32px;
        height: 24px;
    }
`
