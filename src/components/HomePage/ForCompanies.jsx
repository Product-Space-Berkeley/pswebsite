import styled from "styled-components"
import sp23Board from "../images/pictures/sp23board.jpg"
import { Link } from 'react-router-dom';


const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };



function ForCompanies() {
    return (
        <Container> 
        <Box>
            <Title> FOR COMPANIES</Title>
            <Description> 
            The best undergraduate team for your products
            </Description>
            <Description2>
            Product Space is uniquely positioned to assist
             companies as the first and largest product management
              organization at UC Berkeley. All client projects are
               handled by a project manager, 4 to 6 product associates,
                and an advisor.
            </Description2>
            <Button to="/Companies" onClick={handleLinkClick}> Learn More </Button>
        </Box>
        <PictureBox src={sp23Board} />
    </Container>
    )
};

export default ForCompanies;
const Container = styled.div`
    display: flex; 
    justify-content: space-around;
    padding-bottom: 70px;
    padding-top: 70px;

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
`

const PictureBox = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 700px;
    height: 480px;
    margin-left: 25px;

    @media only screen and (max-width: 900px) {
        display: none;
    }

`
