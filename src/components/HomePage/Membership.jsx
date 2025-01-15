import styled from "styled-components"
import sp23leadership from "../images/pictures/sp23leadership.jpg"
import { Link } from 'react-router-dom';

function Membership() {
    return (
        <Container> 
            <PictureBox src={sp23leadership} /> 
            <Box>
                <Title> MEMBERSHIP</Title>
                <Description> 
                Pursue your product passion with like-minded peers
                </Description>
                <Description2>
                By joining Product Space, you’ll meet a talented 
                group of friends and colleagues who will help shape
                 your product management journey. Our members are driven
                  and dedicated, and many have gone on to join top APM programs
                at Twitter, Uber, IBM, and more!


                </Description2>
                <Button to="../Apply"> Apply </Button>
            </Box>
        </Container>
    )
};

export default Membership;


const Container = styled.div`
    display: flex; 
    justify-content: space-around;
    padding-bottom: 40px;
    padding-top: 60px;

    // border: solid black;
`

const Box = styled.div`
    display: flex;
    // flex: 1;
    width: 500px;
    flex-direction: column;

    // border: solid blue;

    @media only screen and (max-width: 450px) {
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        // border: solid yellow;
    }

`
const PictureBox = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 800px;
    height: 500px;
    margin-right: 20px;

    @media only screen and (max-width: 900px) {
        display: none;
    }
    // border: solid blue;

`

const Title = styled.h3`
    color: #EB5B8D;
    font-size: 24px;
`

const Description = styled.h1`
    color: black;
    font-size: 34px;
    font-weight: 450;
`

const Description2 = styled.h2`
    color: #656565; 
    font-size: 20;
    font-weight: normal;
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

    display: flex;
    justify-content: center;
`