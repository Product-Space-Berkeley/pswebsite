import styled from "styled-components"
import linkedinIcon from "../images/linkedinIcon.png"

const Container = styled.div`
    width: 215px;
    height: 370px; 

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 5px;

    // border: solid blue; 
`
const TabBar = styled.div`
    width: 50px; 
    height: 4px; 
    background-color: #D9D9D9;

    // border: solid black;
`

const InfoContainer = styled.div`
    width: 190px; 
    height: 230px; 
    display: flex; 
    flex-direction: column; 
    align-items: center;

    // background-color: #F0F0F0; 

`

const FullName = styled.div`
    width: 170px; 
    height: 40px; 
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 18px;
    font-weight: 800;
    border-radius: 5px;

    background-color: #6F358E;
    color: white; 
`

const Position = styled.div`
    height: 40px;
    margin-top: 10px;
    padding-bottom: 40px;
    font-size: 18px;
    text-align: center;

    display: flex; 
    justify-content: center; 
    align-items: center;

    font-weight: 500;

`

const SubInfoContainer = styled.div`
    width: 170px; 
    height: 200px; 
    border-radius: 5px;

    font-size: 14px;
    gap: 10px;

    padding-left: 40px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;

    white-space: pre-line; 

    background-color: #B3C2F8;
    // border: solid black;
`

const Hobbies = styled.div`
    padding-top: 10px;
    padding-left: 15px;
    margin-bottom: 20px;
    width: 230px;
    font-size: 14px;


    // border: solid black;
`
const Email = styled.div`

    font-size: 14px;
    margin-top: 50px;
    margin-bottom: 10px;
`
const LinkContainer = styled.div`
    width: 180px;
    display: flex; 
    padding-bottom: 10px;
    justify-content: space-between;
    flex-wrap: wrap;

    // border: solid black;
`
const LinkedIn = styled.a`
    margin-left: 5px;

    // border: solid yellow;
`

const CoffeeChat = styled.a`
    width: 120px;
    height: 40px; 

    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    background-color: #D9D9D9;
    text-decoration: none;
    border-radius: 5px;
    font-size: 14px;


    // border: solid blue;
`


function LeadershipInfo(props) {
    const { fullname, position, grade, major, hobbies, email, linkedin, calendlylink} = props;
    return (
        <Container>
            <TabBar/>
            <InfoContainer>
                <FullName>{fullname}</FullName>
                <Position> {position}</Position>
                <SubInfoContainer>
                {"> " + grade + "\n" + "> " + major} 
                </SubInfoContainer>
                <Hobbies> 
                    {"Hobbies: " + hobbies} 
                </Hobbies>
                <Email>
                    {email}
                </Email>
                <LinkContainer>
                    <LinkedIn href={linkedin} target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" width="40" height="35"/>
                    </LinkedIn>
                    <CoffeeChat href="calendly.com" target="_blank" rel="noopener noreferrer">
                        Coffee Chat Me! 
                    </CoffeeChat>
                
                </LinkContainer>
            </InfoContainer>
        </Container>
    )
}

export default LeadershipInfo; 