import styled from "styled-components";

function PSDescription() {
  return (
    <Section>
      <Inner>
        <Left>
          <Title>WHO WE ARE</Title>
          <Description>
            Product Space @ Berkeley is the UC Berkeley chapter of Product Space,
            a nation-wide family of students who are passionate about product
            management. We strive to cultivate a tight-knit community of product
            leaders who are well-prepared to guide impactful products in
            industry.
          </Description>
        </Left>

        <Right>
          <Stat>
            <Number>40</Number>
            <StatLabel>Active Members</StatLabel>
          </Stat>
          <Stat>
            <Number>30</Number>
            <StatLabel>Client Projects</StatLabel>
          </Stat>
          <Stat>
            <Number>13</Number>
            <StatLabel>Active Semesters</StatLabel>
          </Stat>
        </Right>
      </Inner>
    </Section>
  );
}

export default PSDescription;

/* ============ styles ============ */

const Section = styled.section`
  width: 100%;
  background: transparent; /* remove local background */
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  /* slightly taller section */
  padding: 76px 56px;

  display: grid;
  grid-template-columns: 1.3fr 1fr;
  column-gap: 64px;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    row-gap: 36px;
    padding: 56px 28px;
    align-items: center;
    text-align: center;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 960px) {
    align-items: center;
  }
`;

const Title = styled.h2`
  margin: 0;
  color: #fff;
  font-family: "Instrument Sans", system-ui, -apple-system, Segoe UI, Roboto, Arial,
    sans-serif;
  font-size: 60px;
  font-weight: 500;
  letter-spacing: 0.5px;

  @media (max-width: 968px) {
    font-size: 48px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  margin: 0;
  max-width: 560px;

  color: rgba(255, 255, 255, 0.68);
  font-family: "Instrument Sans", system-ui, -apple-system, Segoe UI, Roboto, Arial,
    sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;

  @media (max-width: 960px) {
    max-width: 100%;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center; /* center stats block in column */
  align-items: center;
  gap: 64px;

  @media (max-width: 960px) {
    justify-content: center;
    gap: 44px;
  }

  @media (max-width: 520px) {
    flex-wrap: wrap;
    gap: 28px;
  }
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-width: 120px;

  @media (max-width: 960px) {
    align-items: flex-start;
    min-width: 110px;
  }
`;

const Number = styled.div`
  color: #fff;
  font-family: "Instrument Sans", system-ui, -apple-system, Segoe UI, Roboto, Arial,
    sans-serif;
  font-size: 50px; /* larger numbers */
  font-weight: 500;
  line-height: 1;

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const StatLabel = styled.div`
  color: rgba(255, 255, 255, 0.55);
  font-family: "Instrument Sans", system-ui, -apple-system, Segoe UI, Roboto, Arial,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
`;
