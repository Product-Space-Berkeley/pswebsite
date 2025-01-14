import styled from "styled-components"
import linkedinIcon from "../images/company/linkedinIcon.png"


function SeniorAdvisorInfo(props) {
    const { fullname, position} = props;
    return (
        <Container>
            <InfoContainer>
                <FullName>{fullname}</FullName>
                <Position> {position}</Position>
            </InfoContainer>
        </Container>
    )
}

export default SeniorAdvisorInfo; 

const Container = styled.div`
    width: 215px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;

    // border: solid blue; 
`

const InfoContainer = styled.div`
    width: 190px; 
    height: 60px; 
    display: flex; 
    flex-direction: column; 
    align-items: center;

    gap: 5px;

    // background-color: #F0F0F0; 
`

const FullName = styled.div`
    width: 170px; 
    height: 40px; 

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 18px;
    font-weight: 800;
    border-radius: 5px;

    text-align: center;

    background-color: #6F358E;
    color: white; 
`

const Position = styled.div`
    height: 40px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;

    display: flex; 
    justify-content: center; 
    align-items: center;


`
