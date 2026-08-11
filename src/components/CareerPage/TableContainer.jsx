import styled from "styled-components"
import { PlacementTables } from "./PlacementTables"

function TableContainer() {
  return (
    <Container>
      <Header>Our Placements</Header>
      <PlacementTables />
    </Container>
  );
}

export default TableContainer;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`;

const Header = styled.h2`
  text-transform: uppercase;
  color: rgb(176, 167, 192);
  font-size: 20px;
  letter-spacing: 2.5px;
  margin-bottom: 32px;
  font-weight: 400;
`;
