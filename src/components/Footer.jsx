// import {Text } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import HomeLogo from './images/miscicons/psHomeLogo.png'

const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };


function Footer() {
    return (
      <Container>
        <ItemContainer>
        <Item >
            <Link to="/Home" onClick={handleLinkClick}>
                <HomeIcon src={HomeLogo} alt='ImageNotLoading'/>
            </Link>
            <Text> 
                We are a student group acting 
                independently of the University of 
                California. We take full responsibility 
                for our organization and this web site.
            </Text>
        </Item>
        <Item> 
            <Header> General </Header>
            <SubHeader to="/About" onClick={handleLinkClick}> About</SubHeader>
        </Item>
        <Item> 
            <Header> Students</Header>
            <SubHeader to="/Students" onClick={handleLinkClick}> For Students</SubHeader>
            <SubHeader to="/Apply" onClick={handleLinkClick}> Apply</SubHeader>
            </Item>
        <Item> 
            <Header>Companies</Header>
            <SubHeader to="/Companies" onClick={handleLinkClick}> For Companies</SubHeader>
        </Item>
        <Item> 
            <Header> Contact Us</Header>
            <SubHeader> contact@product.berkeley.edu</SubHeader>
        </Item>
        </ItemContainer>
      </Container>
    );
  }
  
  export default Footer;

const Container = styled.div`
    width: 100%;
    height: auto;
    background-image: radial-gradient(circle at 1px 1px, #bdbab9 2px, transparent 0);
    background-size: 30px 30px;
    

    display: flex;
    justify-content: center;

    // border: solid black;

    @media only screen and (max-width: 400px) {
        display: none;
    }

`
const ItemContainer = styled.div`
    padding-top: 50px;
    padding-left: 50px;
    padding-bottom: 50px;
    padding-right: 50px;
    margin-right: 50px;
    gap: 50px;

    width: 80%;
    // border: solid yellow;


    display: flex; 
    align-items: center; 
    flex-direction: row;
    flex-wrap: wrap;


    @media only screen and (max-width: 400px) {
        gap: 10px;
        padding-bottom: 0px;
    }
`

const Item = styled.div`
    height: 300px; 
    flex-grow: 1;
    max-width: 200px;
    min-width: 150px;
    padding-left: 30px;
    // border: solid black;

    
    display: flex; 
    flex-direction: column;

    @media only screen and (max-width: 400px) {
        flex-wrap: wrap;
        // border: solid yellow;
    }
    

    // border: solid black;

`
const HomeIcon = styled.img`
    height: 60px;
    padding-bottom: 10px;
`

const Header = styled.div`
    font-size: 24px;
    margin-bottom: 50px;
`

const SubHeader = styled(Link)`
    color: black;
    font-size: 20px;
    text-decoration: none;
    padding-bottom: 20px;
`



const Text = styled.div`
    font-size: 16px;
    line-height: 2;

`   


