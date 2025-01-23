import styled from "styled-components"
import sp23leadership from "../images/pictures/sp23leadership.jpg"
import { Link } from 'react-router-dom';

function Membership() {
    return (
        <Container> 
            <Box>
                <Title> Community </Title>
                <Description2>
                    By joining Product Space, you’ll meet a talented 
                    group of friends and colleagues who will help shape
                    your product management journey. Our members are driven
                    and dedicated, and many have gone on to join top APM programs
                    at Twitter, Uber, IBM, and more!
                </Description2>
                <Button to="../Apply"> Apply </Button>
            </Box>
            <PictureBox src={sp23leadership} /> 
        </Container>
    );
};

export default Membership;


const Container = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 70px;
    padding-top: 70px;
    max-width: 80%;
    margin: 0 auto; 
    height: auto;
    width: 100%;
    flex-wrap: wrap; 

    @media only screen and (max-width: 900px) {
        flex-direction: column-reverse; 
        padding: 20px;
    }
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: auto;
    padding-left: 20px;

    @media only screen and (max-width: 450px) {
        width: 80%; 
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-bottom: 20px; 
    }
`;

const PictureBox = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 700px; 
    height: 480px; 
    border-radius: 30px;
    margin-right: 20px;

    object-fit: cover;

    @media only screen and (max-width: 900px) {
        width: 90%; 
        height: auto; 
        margin-right: 0; 
        margin-top: 20px; 
    }

    @media only screen and (max-width: 450px) {
        width: 100%; 
        height: auto; 
    }
`;

const Title = styled.h3`
    color: #592E73;
    font-size: 56px;
    margin-bottom: 10px;

    @media only screen and (max-width: 450px) {
        font-size: 36px; 
    }
`;

const Description = styled.h1`
    color: black;
    font-size: 34px;
    font-weight: 450;
    margin-bottom: 5px;

    @media only screen and (max-width: 450px) {
        font-size: 24px; 
    }
`;

const Description2 = styled.h2`
    color: #656565;
    font-size: 20px;
    font-weight: normal;
    margin-bottom: 30px;

    @media only screen and (max-width: 450px) {
        font-size: 18px;
        width: 350px; 
        text-align: center; 
    }
`;

const Button = styled(Link)`
    width: 70px;
    height: 30px;
    font-size: 16px;
    font-weight: 800;
    background: transparent; 
    border: none;
    border-bottom: 3px solid #EB5594;
    text-decoration: none;
    color: black;

    display: flex;
    justify-content: center;
`;