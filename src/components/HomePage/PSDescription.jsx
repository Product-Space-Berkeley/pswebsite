import styled from 'styled-components'

function PSDescription() {
    return (
        <Container>
            <HeadingTextContainer>
                <Title> About Us </Title>
                <Description> 
                    Product Space @ Berkeley is the UC Berkeley chapter of 
                    Product Space, a nation-wide family of students who are 
                    passionate about product management. We strive to cultivate a 
                    tight-knit community of product leaders who are well-prepared 
                    to guide impactful products in industry.
                </Description>
            </HeadingTextContainer>
            <NumbersGroup>
                <NumContainer> 
                    <Number>30+</Number>
                    <NumDesc>Active Members</NumDesc>
                </NumContainer>
                <NumContainer>
                    <Number> 10</Number>
                    <NumDesc>Active Semesters</NumDesc>
                </NumContainer>
                <NumContainer> 
                    <Number>100%</Number>
                    <NumDesc>Full-Time Placement</NumDesc>
                </NumContainer>
                <NumContainer>
                    <Number>XX</Number>
                    <NumDesc>Completed Projects</NumDesc>
                </NumContainer>
            </NumbersGroup>
        </Container>
    )
}

export default PSDescription;

const Container = styled.div`
    max-width: 85%;
    margin: 0 auto;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    background-image: linear-gradient(to right, rgba(117, 61, 146, 0.9), rgba(163, 100, 165, 0.9), rgba(208, 144, 157, 0.9));
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);
    flex-direction: row;
    padding: 50px;
    border-radius: 30px;
    margin-bottom: 100px;
    gap: 20px;

    @media only screen and (max-width: 1200px) {
        flex-direction: column;
        padding: 30px;
    }

    @media only screen and (max-width: 900px) {
        flex-direction: column;
        padding: 20px;
        margin-bottom: 40px;
    }
`

const HeadingTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 10px;
    margin: 0 auto;
    width: 45%;
    word-wrap: break-word;

    @media only screen and (max-width: 1200px) {
        width: 100%;
        text-align: center;
        margin-bottom: 10px;
    }

    @media only screen and (max-width: 900px) {
        width: 100%;
    }
`

const Title = styled.div`
    color: white;
    font-size: 3.5rem;
    font-weight: 550;
    padding-bottom: 15px;
    line-height: 1.2;

    @media only screen and (max-width: 1024px) {
        font-size: 3rem;
    }

    @media only screen and (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media only screen and (max-width: 400px) {
        font-size: 2rem;
    }
`

const Description = styled.p`
    font-size: 1.5rem;
    font-weight: 400;
    color: white;
    text-align: left;
    width: 700px;
    line-height: 1.6;
    margin-top: 10px;
    word-wrap: break-word;

    @media only screen and (max-width: 1024px) {
        font-size: 1.3rem;
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
        font-size: 1.2rem;
    }

    @media only screen and (max-width: 400px) {
        width: 300px;
        font-size: 1rem;
        text-align: center;
        line-height: 1.4;
    }
`

const NumbersGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 20px;
    width: 45%;
    padding-top: 80px;

    @media only screen and (max-width: 1200px) {
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
        padding-top: 20px;
    }

    @media only screen and (max-width: 900px) {
        width: 100%;
        grid-template-columns: 1fr; 
    }
`

const NumContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1024px) {
        margin-bottom: 20px;
    }
`

const Number = styled.div`
    font-size: 3.5rem;
    font-weight: 550;
    color: white;
    line-height: 1.2;

    @media only screen and (max-width: 1024px) {
        font-size: 3rem;
    }

    @media only screen and (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media only screen and (max-width: 400px) {
        font-size: 2rem;
    }
`

const NumDesc = styled.div`
    color: white;
    font-size: 1.2rem;
    text-align: center;
    line-height: 1.4;
    word-wrap: break-word;

    @media only screen and (max-width: 1024px) {
        font-size: 1.1rem;
    }

    @media only screen and (max-width: 768px) {
        font-size: 1rem;
    }

    @media only screen and (max-width: 400px) {
        font-size: 0.9rem;
    }
`