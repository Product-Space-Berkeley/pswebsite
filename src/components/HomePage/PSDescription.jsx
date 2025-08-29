import styled from 'styled-components'

function PSDescription() {
    return (
        <Container>
            <Title> WHAT IS PRODUCT SPACE @ BERKELEY? </Title>
            <Description> 
            Product Space @ Berkeley is the UC Berkeley chapter of 
            Product Space, a nation-wide family of students who are 
            passionate about product management. We strive to cultivate a 
            tight-knit community of product leaders who are well-prepared 
            to guide impactful products in industry.
            </Description>
            <NumbersGroup>
                <NumContainer> 
                    <Number>50+</Number>
                    <NumDesc>Active Members</NumDesc>
                </NumContainer>
                <NumContainer>
                    <Number> 12</Number>
                    <NumDesc>Active Semesters</NumDesc>
                </NumContainer>
            </NumbersGroup>
        </Container>
    )
}

export default PSDescription;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 90px;
    // border: solid black;

`
const Title = styled.div`
    color: #EB5B8D;
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 10px;

    @media only screen and (max-width: 400px) {
        width: 280px;
        line-height: 1.5;
        text-align: center;
    }
`

const Description = styled.p`
    font-family: Arial, sans-serif;
    font-size: 30px;
    font-weight: 400;
    color: #656565;
    text-align: center;

    width: 700px;

    @media only screen and (max-width: 400px) {
        width: 300px;
        line-height: 1.2;

    }

`
const NumbersGroup = styled.div`
    width: 700px;
    height: 100px;
    display: flex; 
    flex-direction: row;

    // border: solid yellow;

    @media only screen and (max-width: 400px) {
        width: 300px;
        line-height: 1.5;
    }
`

const NumContainer = styled.div`
    width: 600px;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;


    // border: solid blue;
`
const Number = styled.div`
    font-size: 30px;
    font-weight: 400;
    color: #EB5B8D;
`
const NumDesc = styled.div`

    @media only screen and (max-width: 450px) {
        text-align: center;
        line-height: 1.2;

    }
`