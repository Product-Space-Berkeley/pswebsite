import styled from "styled-components"
import FA22Fellowship from "../images/pictures/fa2022fellowship.png"
import Client from "../images/pictures/client.png"


function OurPrograms() {
    return(
        <Container>
            <Header> OUR PROGRAMS</Header>
            <ProgramContainer>
                <ProgramText>
                    <Title> Fellowship</Title>
                    <Description>
                        If you’re new to product management, the
                        fellowship program is the perfect place to 
                        begin. Over the course of a semester, you’ll
                        be mentored with a group of fellows on a variety
                        of product management topics, including the 
                        interview processes, design thinking, the day-to-day
                        of a product manager, and the different roles within 
                        this career field. Whether you’re trying to land a
                        PM internship or decide if product management is 
                        right for you, this program is a great way to meet 
                        like-minded people and get a head start in your career.
                    </Description>
                </ProgramText>
                <Image src={FA22Fellowship}/>
            </ProgramContainer>
            <ProgramContainer>
                <Image src={Client}/>
                <ProgramText>
                    <Title> Client</Title>
                    <Description>
                    In addition to the fellowship program, members are grouped 
                    into a client project to build real-world experience and 
                    apply their learnings as a product associate for a Fortune 500 
                    company. Throughout the semester, you’ll be working under an 
                    experienced project manager to devise impactful features and products for 
                    companies in various stages and industries. From talking 
                    with stakeholders to conducting user research, the client 
                    projects will provide you with invaluable experience for 
                    your growth as a product manager.
                    </Description>
                </ProgramText>
                

            </ProgramContainer>

        </Container>
    ) 
}

export default OurPrograms;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;

    // border: solid blue;

`
const ProgramContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding-bottom: 70px;

    @media only screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column; 
        align-items: center;
    }

    // border: solid black;

`

const ProgramText = styled.div`
    width: 40%;

    @media only screen and (max-width: 1000px) {
        display: flex; 
        flex-direction: column;
        align-items: center;
        width: 700px;

        // border: solid blue;
    }
    @media only screen and (max-width: 450px) {
        width: 300px;

        // border: solid black;
    }
`

const Image = styled.img`
    width: 550px;
    height: 400px;


    // border: solid black;

    @media only screen and (max-width: 1000px) {
        margin-top: 100px;
        width: 500px;
        height: 350px;
    }

    @media only screen and (max-width: 450px) {
        width: 300px;
        height: 200px;
    }

`
const Header = styled.div`
    color: #EB5B8D;
    font-size: 24px;
    font-weight: 500;
    font-size: 30px;
    padding-top: 50px;
    padding-bottom: 70px;

    // border: solid black;
`
const Title = styled.div`
    font-size: 35px;
    color: black;
    font-weight: 600;
    padding-bottom: 10px;
    padding-left: 50px;

    @media only screen and (max-width: 450px) {
        text-align: center;
        padding-right: 40px;
    }

`
const Description = styled.div` 
    color: #656565;
    line-height: 2;
    padding-left: 50px;

    @media only screen and (max-width: 1000px) {
        width: 500px;
        // border: solid black;
    }
    @media only screen and (max-width: 450px) {
        padding-left: 20px;
        text-align: center;
        width: 250px;
        display: flex; 


        // border: solid red;
    }

`


