import styled from "styled-components"
import AdvaitLineage from "../images/pictures/advaitlineage.png"
import { Link } from "react-router-dom"

const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

function ForStudents() {
    return (
        <Container> 
            <PictureBox src={AdvaitLineage} /> 
            <Box>
                <Title> FOR STUDENTS</Title>
                <Description> 
                    2 different programs where you can thrive
                </Description>
                <Description2>
                At Product Space, we take pride in our firm commitment 
                to product management education. We offer the fellowship 
                program and client projects for our members who come with
                various levels of experience.
                </Description2>
                <Button to="/Students" onClick={handleLinkClick}> Learn More </Button>
            </Box>
        </Container>
    )
};

export default ForStudents;

const Container = styled.div`
    display: flex; 
    justify-content: space-around;
    padding-bottom: 70px;

    // border: solid black;
`

const Box = styled.div`
    display: flex;
    // flex: 1;
    width: 500px;
    flex-direction: column;

    // border: solid blue;

    @media only screen and (max-width: 450px) {
        justify-content: center;
        align-items: center;
    }

`
const PictureBox = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
    margin-right: 25px;

    // border: solid blue;
    @media only screen and (max-width: 900px) {
        display: none;
    }

`

const Title = styled.h3`
    color: #EB5B8D;
    font-size: 24px;

    @media only screen and (max-width: 450px) {
        text-align: center;
    }
`

const Description = styled.h1`
    color: black;
    font-size: 34px;
    font-weight: 450;

    @media only screen and (max-width: 450px) {
        text-align: center;
    }
`

const Description2 = styled.h2`
    color: #656565; 
    font-size: 20;
    font-weight: normal;

    @media only screen and (max-width: 450px) {
        text-align: center;
        width: 350px;
    }
`

const Button = styled(Link)`
    width: 100px;
    height: 40px;
    font-size: 16px;
    font-weight: 800;
    background: transparent; 
    border: none;
    border-bottom: 3px solid #EB5594;
    text-decoration: none;
    color: black;
`
