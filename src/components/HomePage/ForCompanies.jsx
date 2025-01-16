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
          <Title>Client Projects</Title>
          <Description2>
            Product Space is uniquely positioned to assist companies as the first
            and largest product management organization at UC Berkeley. All client
            projects are handled by a project manager, 4 to 6 product associates,
            and an advisor.
          </Description2>
          <Button to="/Companies" onClick={handleLinkClick}>
            Learn More
          </Button>
        </Box>
        <PictureBox src={sp23Board} />
      </Container>
    );
}
  
export default ForCompanies;

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
    flex-direction: column; 
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
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 20px; 
  }
`;

const Title = styled.h3`
  color: #592e73;
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
  margin-bottom: 10px;

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
    text-align: center; 
  }
`;

const Button = styled(Link)`
  width: 100px;
  height: 30px;
  font-size: 16px;
  font-weight: 800;
  background: transparent;
  border: none;
  border-bottom: 3px solid #eb5594;
  text-decoration: none;
  color: black;
  align-text: center;
`;

const PictureBox = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 700px;
  height: 480px;
  border-radius: 30px;
  margin-right: 20px;

  @media only screen and (max-width: 900px) {
    width: 100%; 
    height: auto; 
    margin-right: 0; 
    margin-top: 20px; 
  }
`;