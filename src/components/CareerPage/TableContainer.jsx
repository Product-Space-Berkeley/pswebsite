import styled from "styled-components"
import placementData from "./Placements"

function TableContainer() {
    return (
      <Container>
            {placementData.map((placement) => (
            <Table key={placement.timeline}>
                <Header>{placement.timeline}</Header>
                <HeaderRow>
                    <HeaderName >Name</HeaderName>
                    <HeaderCompany>Company</HeaderCompany>
                    <HeaderTitle>Title</HeaderTitle>
                    <HeaderYear>Year</HeaderYear>
                </HeaderRow>
                {placement.data.map((item) => (
                    <Row key={item.name}>
                        <Name>{item.name}</Name>
                        <Company>{item.company}</Company>
                        <Title>{item.title}</Title>
                        <Year>{item.year}</Year>
                </Row>
                ))}
            </Table>
            ))}
      </Container>
    );
  }
  
  export default TableContainer;
  

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;

    // border: solid black;
`

const Table = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    padding-bottom: 50px;
    padding-top: 50px;

    // border: solid purple;
`
const Header = styled.div`
    color: #EB5B8D;
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 50px;
    display: flex; 
    justify-content: center;

    // border: solid red;

`

const Row = styled.div`
    width: 80%;
    height: 50px;
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    border-bottom: 1px solid gray;

    // border: solid blue;

`
const HeaderRow = styled.div`
    width: 80%;
    height: 40px;
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    background: #6F358E;
    font-weight: bold;
    color: white;

    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`

const HeaderName = styled.div`
    padding-left: 15px;
    color: white; 
    width: 300px;

    @media only screen and (max-width: 1000px) {
        width: 200px;
    }
`
const HeaderCompany = styled.div`
    color: white; 
    width: 300px;

    @media only screen and (max-width: 1000px) {
        width: 200px;
    }

`
const HeaderTitle = styled.div`
    width: 350px;
    color: white; 
    padding-right: 20px;


    @media only screen and (max-width: 1000px) {
        width: 200px;
    }

    @media only screen and (max-width: 450px) {
        display: none;
    }


`
const HeaderYear = styled.div`
    color: white; 
    width: 300px;

    @media only screen and (max-width: 1000px) {
        display: none;
    }
`

const Name = styled.div`
    padding-left: 15px;
    color: #656565; 
    width: 300px;

    @media only screen and (max-width: 1000px) {
        width: 200px;
    }
`
const Company = styled.div`
    color: #656565; 
    width: 300px;

    @media only screen and (max-width: 1000px) {
        width: 200px;
    }

`
const Title = styled.div`
    width: 350px;
    color: #656565; 
    padding-right: 20px;

    @media only screen and (max-width: 1000px) {
        width: 200px;
    }
    
    @media only screen and (max-width: 450px) {
        display: none;
    }
`
const Year = styled.div`
    color: #656565; 
    width: 300px;

    @media only screen and (max-width: 1000px) {
        display: none;
    }


`
