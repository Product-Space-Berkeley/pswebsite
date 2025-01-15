import styled from "styled-components"
import { Link } from "react-router-dom"
import HomePG from '../images/pictures/HomeBG.png'

function Join() { 
    return( 
        <Container>
            <TextContainer>
                <Header> Want To Join?</Header>
                <Description>
                Apply to Product Space and develop your 
                product journey with peers who share your passion.
                </Description>
                <Button to="../Apply">
                    Apply
                </Button>
            </TextContainer>

        </Container>
    )
}

export default Join; 

const Container = styled.div`
    display: flex; 
    justify-content: flex-end;
    margin-right: 300px;
    padding-bottom: 70px;
 
    background: url(${HomePG});
    background-size: cover;
    background-position: top;
    background-attachment: fixed;

    // border: solid black;

    @media only screen and (max-width: 450px) {
        width: 100%;
        padding-left: 30px;


        // border: solid black;
    }
`

const TextContainer = styled.div`
    // background-color: #EB5B8D;
    background-image: linear-gradient(to bottom, #EB5B8D, #ED7472);
    width: 350px;
    height: 380px;
    border-radius: 100px;
    margin-right: 60px;
    display: flex; 
    flex-direction: column;
    align-items: center;
    gap: 40px;

    // border: solid black;
`
const Header = styled.div`
    padding-top: 30px;
    font-size: 35px;
    color: white;
    
`

const Description = styled.div`
    color: white;
    width: 200px;
    text-align: center;
    line-height: 1.5;


`
const Button = styled(Link)`
    border-radius: 10px;
    border: solid white; 
    background-color: #ED7472;
    color: white; 
    font-size: 20px; 
    width: 100px;
    height: 60px;

    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

`
