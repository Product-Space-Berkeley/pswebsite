import styled from "styled-components"
import { Link } from "react-router-dom"
import HomePG from '../images/pictures/HomeBG.png'

function Join() { 
    return( 
        <Container>
            <TextContainer>
                <Header> Interested In Working With Us?</Header>
                <Description>
                Contact Us: contact@product.berkeley.edu
                </Description>
            </TextContainer>

        </Container>
    )
}

export default Join; 

const Container = styled.div`
    display: flex; 
    justify-content: flex-end;
    margin-right: 250px;
    padding-bottom: 70px;
 
    background: url(${HomePG});
    background-size: cover;
    background-position: top;
    background-attachment: fixed;

    // border: solid black;

    @media only screen and (max-width: 450px) {
        margin-left: 400px;
     }
`

const TextContainer = styled.div`
    background-image: linear-gradient(to bottom, #EB5B8D, #ED7472);
    width: 300px;
    height: 250px;
    border-radius: 100px;
    margin-right: 60px;
    display: flex; 
    flex-direction: column;
    align-items: center;
    gap: 40px;

    // border: solid black;

    @media only screen and (max-width: 450px) {
        width: 500px;
        height: 300px;
     }
`
const Header = styled.div`
    padding-top: 45px;
    font-size: 28px;
    color: white;
    text-align: center;
    
`

const Description = styled.div`
    color: white;
    width: 200px;
    text-align: center;
    line-height: 1.5;

    @media only screen and (max-width: 450px) {
        width: 230px;
     }


`
