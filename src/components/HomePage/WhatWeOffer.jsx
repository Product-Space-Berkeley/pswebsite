import styled from "styled-components";
import educationImage from "../images/pictures/coconuts.JPG";
import industryImage from "../images/pictures/PS Photoshoot DSCF3630 Large.jpeg";

function WhatWeOffer() {
  return (
    <Section>
      <Inner>
        <SectionTitle>WHAT WE OFFER</SectionTitle>

        <CardsContainer>
          <Card>
            <ImageWrapper>
              <CardImage
                src={educationImage}
                srcSet={`${educationImage} 1200w, ${educationImage} 1800w`}
                sizes="(max-width: 600px) 92vw, (max-width: 968px) 90vw, 520px"
                alt="Education"
              />
            </ImageWrapper>

            <CardContent>
              <Badge>EDUCATION</Badge>
              <CardTitle>FIND YOUR PATH IN PRODUCT</CardTitle>
              <CardDescription>
                Product Space offers two programs designed for students at different
                stages of their product journey: Fellowship, where new members will
                learn the fundamentals of product management, and Client Projects, where
                they gain hands-on experience by working on real product challenges.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <ImageWrapper>
              <CardImage
                src={industryImage}
                srcSet={`${industryImage} 1x, ${industryImage} 2x`}
                sizes="(max-width: 600px) 92vw, (max-width: 968px) 90vw, 520px"
                alt="Industry"
                $zoom={1.12}
              />
            </ImageWrapper>

            <CardContent>
              <Badge>INDUSTRY</Badge>
              <CardTitle>BUILD WITH PRODUCT SPACE</CardTitle>
              <CardDescription>
                Product Space partners with companies to deliver high-quality solutions
                through the first and largest undergraduate PM organization at UC Berkeley.
                All client projects are handled by a dedicated project team, supported by
                4-6 trained product associates and an experienced advisor to ensure
                thoughtful execution and real impact.
              </CardDescription>
            </CardContent>
          </Card>
        </CardsContainer>
      </Inner>
    </Section>
  );
}

export default WhatWeOffer;


const Section = styled.section`
  width: 100%;
  background: transparent;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  padding: clamp(32px, 5vw, 48px) clamp(16px, 5vw, 40px);

  @media only screen and (max-width: 768px) {
    padding: 4px 10px;
  }

  @media only screen and (max-width: 600px) {
    padding: 0px 8px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 60px;
  font-weight: 500;
  color: white;
  text-align: center;
  margin: 0 0 50px 0;

  @media only screen and (max-width: 968px) {
    font-size: 48px;
    margin-bottom: 40px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 40px;
    margin-bottom: 32px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 32px;
    margin-bottom: 4px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;

  /* ✅ reduces the "giant empty space" between cards on mobile */
  gap: clamp(24px, 4vw, 56px);
  width: 100%;

  @media only screen and (max-width: 600px) {
    gap: 8px;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: transparent;

  /* ✅ prevents awkward squeezing */
  justify-content: space-between;
  gap: clamp(16px, 4vw, 56px);

  @media only screen and (max-width: 968px) {
    flex-direction: column;
    justify-content: center;
    gap: 22px;
  }

  @media only screen and (max-width: 600px) {
    gap: 8px;
  }
`;

const ImageWrapper = styled.div`
  flex: 1 1 520px;
  width: 100%;
  max-width: 600px;
  min-width: 0;

  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);

  /* desktop / large */
  height: 380px;

  @media only screen and (max-width: 1100px) {
    height: 340px;
  }

  /* ✅ tablet/mobile: use aspect ratio instead of a fixed height (prevents clipping) */
  @media only screen and (max-width: 968px) {
    max-width: 760px;
    height: auto;
    aspect-ratio: 16 / 10;
  }

  @media only screen and (max-width: 600px) {
    border-radius: 16px;
    aspect-ratio: 4 / 3;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center; /* ✅ less awkward cropping */
  display: block;
  transform: scale(${props => props.$zoom || 1});
`;

const CardContent = styled.div`
  flex: 1 1 520px;
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: 16px;
  color: white;

  @media only screen and (max-width: 968px) {
    text-align: center;
    align-items: center;
  }

  @media only screen and (max-width: 600px) {
    gap: 6px;
  }
`;

const Badge = styled.div`
  display: inline-block;
  padding: 8px 20px;
  background: transparent;
  border: 1.5px solid rgba(255, 255, 255, 0.7);
  border-radius: 25px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  color: white;
  width: fit-content;
  text-transform: uppercase;

  @media only screen and (max-width: 600px) {
    padding: 6px 16px;
    font-size: 10px;
  }
`;

const CardTitle = styled.h3`
  font-size: 38px;
  font-weight: 500;
  color: white;
  line-height: 1.2;
  margin: 0;

  @media only screen and (max-width: 968px) {
    font-size: 32px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 28px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 24px;
  }
`;

const CardDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #c8c8c8;
  line-height: 1.7;
  margin: 0;
  max-width: 560px;

  @media only screen and (max-width: 968px) {
    max-width: 680px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 1.45;
    max-width: 100%;
  }
`;
