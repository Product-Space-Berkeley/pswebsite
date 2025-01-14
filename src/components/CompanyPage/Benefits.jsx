import styled from 'styled-components'
import icon1 from '../images/miscicons/CompanyIcon1.png'
import icon2 from '../images/miscicons/CompanyIcon2.png'
import icon3 from '../images/miscicons/CompanyIcon3.png'

function Benefits() {
    return (
        <Container>
            <TextContainer>
                <Title>OUR BENEFITS</Title>
            </TextContainer>
            <CardContainer>
                <Card>
                    <CardTitle> Talent</CardTitle>
                    <CardImg src={icon1}/>
                    <CardSubtitle> 
                    We take pride in our diverse and accomplished members.
                     Many have previous internship experience through top
                      PM programs at Google, Salesforce, Microsoft, and 
                      more.
                    </CardSubtitle>
                </Card>
                <Card>
                    <CardTitle> Versatility</CardTitle>
                    <CardImg src={icon2}/>
                    <CardSubtitle> 
                    From product design to marketing, our members offer a
                     variety of skills to fulfill your project. Our client 
                     teams are very flexible, capable of accomodating 
                     products from different industries.
                    </CardSubtitle>
                </Card>
                <Card>
                    <CardTitle> Recruitment</CardTitle>
                    <CardImg src={icon3}/>
                    <CardSubtitle> 
                    As a client, you will have access to a pool of top students 
                    in product from UC Berkeley. Opportunities include our 
                    resume book as well as priority in hosting workshops and other
                     events.
                    </CardSubtitle>
                </Card>
            </CardContainer>
        </Container>
    )
}

export default Benefits; 

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    margin-top: 40px;

    // border: solid black;

    @media only screen and (max-width: 450px) {
     }
`

const TextContainer = styled.div`
    width: 45%;
    height: 70px;
    display: flex; 
    flex-direction: column;
    align-items: center; 
    padding-bottom: 40px;


    @media only screen and (max-width: 450px) {
        width: 300px;

     }
    //  border: solid blue;
`

const Title = styled.h3`
    color: #EB5B8D;
    font-size: 24px;
    font-weight: 500;

`

const CardContainer = styled.div`
    width: 80%;
    height: auto;
    display: flex; 
    flex-direction: row;
    justify-content: center;
    gap: 70px;
    
    // border: solid red;

    @media only screen and (max-width: 1000px) {
        display; flex; 
        flex-direction: column;
        align-items: center;
        margin-bottom: 50px;
    }

    @media only screen and (max-width: 450px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // border: solid black; 
     }
`

const Card = styled.div`
    width: 400px;
    height: 500px;
    display: flex; 
    flex-direction: column; 
    align-items: center;

    // border: dotted gray;

    &:hover {
        box-shadow: 0 0 20px 10px rgba(176, 102, 211, 0.3);
        transition: box-shadow 0.3s ease;
      }


    @media only screen and (max-width: 700px) {
        width: 300px;
        height: 500px;
        // border: solid red;
    }

    @media only screen and (max-width: 450px) {
        width: 300px;
        height: 500px;
        // border: solid red;
    }

`

const CardTitle = styled.h2`
    font-weight: 250;
    font-size: 35px;
    color: black;
`

const CardSubtitle = styled.h4`
    color: #656565;
    font-weight: 300;
    font-size: 20px;
    line-height: 1;
    text-align: center;
    width: 300px;
    margin-top: 40px;
    line-height: 1.5;

    // border: solid black;
`
const CardImg = styled.img`
    width: 115px;
    height: 115px;
    border-radius: 50%;

    box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.1); 


`
