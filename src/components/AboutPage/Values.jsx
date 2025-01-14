import styled from 'styled-components'
import Icon1 from '../images/miscicons/AboutIcon1.png'
import Icon2 from '../images/miscicons/AboutIcon2.png'
import Icon3 from '../images/miscicons/AboutIcon3.png'

function Values() {
    return (
        <Container>
            <TextContainer>
                <Title>OUR VALUES</Title>
                <Subtitle>
                    At Product Space, we strive to embody the 
                    following values to foster a welcoming and 
                    enriching environment for our members.
                </Subtitle>
            </TextContainer>
            <CardContainer>
                <Card>
                    <CardTitle> Empathy</CardTitle>
                    <CardImg src={Icon1}/>
                    <CardSubtitle> 
                        A skilled PM demonstrates an exceptional 
                        ability to empathize with individuals and
                         products.
                    </CardSubtitle>
                </Card>
                <Card>
                    <CardTitle> Dedication</CardTitle>
                    <CardImg src={Icon2}/>
                    <CardSubtitle> 
                        With dedication and love for what you do, we 
                        believe the outcome of any effort will multiply
                        in value.
                    </CardSubtitle>
                </Card>
                <Card>
                    <CardTitle> Impact</CardTitle>
                    <CardImg src={Icon3}/>
                    <CardSubtitle> 
                    We constantly brainstorm and deliver exciting ideas to 
                    impact the Berkeley campus and beyond.
                    </CardSubtitle>
                </Card>
            </CardContainer>
        </Container>
    )
}

export default Values; 

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    top: 0;

    // border: solid black;

    @media only screen and (max-width: 450px) {

    }
`

const TextContainer = styled.div`
    width: 45%;
    height: auto;
    display: flex; 
    flex-direction: column;
    align-items: center; 
    padding-bottom: 40px;

    // border: solid blue; 
    
    @media only screen and (max-width: 450px) {
        display: flex;
        width: 75%;
        margin-bottom: 50px;
        // border: solid black;
    }
`

const Title = styled.h3`
    color: #EB5B8D;
    font-size: 24px;
    font-weight: 500;
    font-size: 30px;

    @media only screen and (max-width: 450px) {
        text-align: center;

    }

`

const Subtitle = styled.h2`
    font-weight: normal;
    text-align: center;


`

const CardContainer = styled.div`
    width: 80%;
    height: auto;
    display: flex; 
    flex-direction: row;
    justify-content: center;
    gap: 70px;
    margin-top: 50px;
    // border: solid red;


    @media only screen and (max-width: 780px) {
        display: flex;
        flex-direction: column;
        display-content: center;
        align-items: center;

    }
    @media only screen and (max-width: 450px) {
        width: 350px;
        height: auto;
        flex-direction: column;
        align-items: center;

        // border: solid black;

    }
`

const Card = styled.div`
    width: 250px;
    display: flex; 
    flex-direction: column; 
    align-items: center;

    // border: dotted gray;

    box-shadow: 0 0 10px 5px rgba(90, 179, 220, 0.15); /* Adjust the color values for the light blue glow */
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
    box-shadow: 0 0 20px 10px rgba(90, 179, 220, 0.3); /* Modify the box-shadow on hover for a stronger glowing effect */
    }

    @media only screen and (max-width: 450px) {
        // border: solid red;

    }
`

const CardTitle = styled.h2`
    font-weight: normal;
    color: purple;
`

const CardImg = styled.img`
    width: 150px;
    height: 150px;
`

const CardSubtitle = styled.h4`
    font-weight: normal;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
`
