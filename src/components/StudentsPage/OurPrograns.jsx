import styled from "styled-components";
import FA22Fellowship from "../images/pictures/fa24fellowship.jpeg";
import Client from "../images/pictures/clientPic.jpeg";

function OurPrograms() {
  return (
    <Section>
      <Header>OUR PROGRAMS</Header>
      <Subhead>
        We partner with companies to deliver focused product work through PM-led
        student teams, combining real execution with meaningful student experience.
      </Subhead>

      <ProgramBlock>
        <ProgramText>
          <Badge>EDUCATION</Badge>
          <ProgramTitle>FELLOWSHIP</ProgramTitle>
          <ProgramDescription>
            The Fellowship is designed for students exploring product management
            for the first time. Over one semester, members build core PM skills
            through hands-on workshops, mentorship, and collaborative learning.
            You’ll develop a strong foundation in user research, product thinking,
            and PM interviews while joining a tight-knit community of future product
            leaders.
          </ProgramDescription>
          <OutcomeLine>
            Outcomes: PM fundamentals · interview readiness · product thinking · peer &
            mentor network
          </OutcomeLine>
        </ProgramText>
        <ProgramImage src={FA22Fellowship} alt="Fellowship cohort" />
      </ProgramBlock>

      <ProgramBlock $reverse>
        <ProgramImage src={Client} alt="Client project team" />
        <ProgramText>
          <Badge>INDUSTRY</Badge>
          <ProgramTitle>CLIENT</ProgramTitle>
          <ProgramDescription>
            Client Projects give members the opportunity to apply product management
            in real-world settings. Teams work directly with companies to solve
            meaningful product challenges, guided by experienced project managers
            and advisors. From stakeholder collaboration to user research and
            feature definition, members gain practical experience delivering impact
            beyond the classroom.
          </ProgramDescription>
          <OutcomeLine>
            Outcomes: real‑world product execution · stakeholder communication ·
            portfolio‑ready work · leadership experience
          </OutcomeLine>
        </ProgramText>
      </ProgramBlock>
    </Section>
  );
}

export default OurPrograms;

const Section = styled.section`
  width: min(1100px, 100%);
  margin: 0 auto;
  text-align: center;
`;

const Header = styled.h2`
  margin: 0 0 8px;
  font-size: 40px;
  font-weight: 500;
  color: #ffffff;
`;

const Subhead = styled.p`
  margin: 0 auto 34px;
  max-width: 720px;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.72);
`;

const ProgramBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: center;
  margin: 0 0 48px;
  text-align: left;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }

  ${props =>
    props.$reverse
      ? `
    grid-template-columns: 1fr 1fr;
    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  `
      : ""}
`;

const ProgramText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Badge = styled.span`
  font-size: 11px;
  font-weight: 600px;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(255, 255, 255, 0.45);
  padding: 6px 12px;
  border-radius: 999px;
  text-transform: uppercase;
  width: fit-content;

  @media (max-width: 900px) {
    margin: 0 auto;
  }
`;

const ProgramTitle = styled.h3`
  margin: 0;
  font-size: 36px;
  font-weight: 500;
  color: #ffffff;
`;

const ProgramDescription = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.74);
`;

const OutcomeLine = styled.p`
  margin: 8px 0 0;
  font-size: 13px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
`;

const ProgramImage = styled.img`
  width: 100%;
  border-radius: 18px;
  object-fit: cover;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
`;
