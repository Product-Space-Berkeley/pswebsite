import styled from "styled-components"
import placementData from "./Placements"

function TableContainer() {
  return (
    <Container>
      {placementData.map((placement) => (
        <Table key={placement.timeline}>
          <Header>{placement.timeline}</Header>
          <HeaderRow>
            <HeaderName>Name</HeaderName>
            <HeaderCompany>Company</HeaderCompany>
            <HeaderTitle>Role</HeaderTitle>
          </HeaderRow>
          <Body>
            {placement.data.map((item) => (
              <Row key={`${item.name}-${item.company}-${item.title}`}>
                <Name>{item.name}</Name>
                <Company>{item.company}</Company>
                <Title>{item.title}</Title>
              </Row>
            ))}
          </Body>
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
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0 50px;
  width: 100%;
`;

const Header = styled.div`
  color: #ffffff;
  font-size: 22px;
  font-weight: 500;
  padding-bottom: 18px;
  display: flex;
  justify-content: center;
`;

const HeaderRow = styled.div`
  width: min(960px, 100%);
  min-height: 34px;
  display: grid;
  grid-template-columns: 1.2fr 1.2fr 1.6fr;
  align-items: center;
  background: #b5a2cf;
  color: #3a2a54;
  font-weight: 600;
  border-radius: 10px;
  padding: 0 18px;
`;

const Body = styled.div`
  width: min(960px, 100%);
  margin-top: 10px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(8px);
  overflow: hidden;
`;

const Row = styled.div`
  min-height: 50px;
  display: grid;
  grid-template-columns: 1.2fr 1.2fr 1.6fr;
  align-items: center;
  color: rgba(255, 255, 255, 0.82);
  padding: 8px 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
`;

const HeaderName = styled.div``;
const HeaderCompany = styled.div``;
const HeaderTitle = styled.div``;

const Name = styled.div`
  line-height: 1.5;
  word-break: break-word;
`;
const Company = styled.div`
  line-height: 1.5;
  word-break: break-word;
`;
const Title = styled.div`
  line-height: 1.5;
  word-break: break-word;
`;
