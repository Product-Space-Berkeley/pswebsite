import styled from "styled-components";
import Navbar from "../Navbar";
import Footer from "../Footer";
import OpeningPanel from "./OpeningPanel";
import PSDescription from "./PSDescription";
import WhatWeOffer from "./WhatWeOffer";
import GetInTouch from "./GetInTouch";
import HomeBG from "../images/pictures/HomeBGNew.png";

function Home() {
  return (
    <PageWrapper>
      <BackgroundLayer aria-hidden="true">
        <BackgroundImage src={HomeBG} alt="" />
        <DarkOverlay />
      </BackgroundLayer>

      <ContentWrapper>
        <Navbar />
        <HeroSectionWrap>
          <OpeningPanel />
        </HeroSectionWrap>

        <PSSection>
          <PSDescription />
        </PSSection>

        <OfferSection>
          <WhatWeOffer />
        </OfferSection>

        <GetInTouchSection>
          <GetInTouch />
        </GetInTouchSection>
        <FooterReveal>
          <Footer />
        </FooterReveal>
      </ContentWrapper>
    </PageWrapper>
  );
}

export default Home;

/* ============ styles ============ */

const PageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: visible;
  display: flex;
  flex-direction: column;
`;

const BackgroundLayer = styled.div`
  position: absolute;
  inset: 0;
  height: 100%;
  z-index: -2;
  pointer-events: none;
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

/* ✅ fill viewport only */
const DarkOverlay = styled.div`
  position: absolute;
  inset: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  flex: 1 0 auto;

  padding: 24px clamp(16px, 5vw, 64px) 0;

  @media (max-width: 780px) {
    padding: 20px clamp(16px, 6vw, 32px) 0;
  }


  & > * {
    min-height: 0;
  }
`;

const SectionReveal = styled.section`
  opacity: 0;
  transform: translateY(24px);
  animation: delayedFadeIn 0.7s ease 0.05s forwards;

  @keyframes delayedFadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    animation: none;
  }
`;

const HeroSectionWrap = styled(SectionReveal)`
  margin-bottom: 0;
  animation-delay: 0.05s;

  & [data-hero-item] {
    opacity: 0;
    transform: translateY(24px);
    animation: heroItemFadeIn 0.8s ease forwards;
    animation-delay: var(--reveal-delay, 0ms);
    will-change: opacity, transform;
  }

  @keyframes heroItemFadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    & [data-hero-item] {
      opacity: 1;
      transform: none;
      animation: none;
    }
  }

  @media (max-width: 1200px) {
    margin-bottom: 0;
  }

  @media (max-width: 900px) {
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    margin-bottom: 0;
  }
`;

const GetInTouchSection = styled(SectionReveal)`
  animation-delay: 0.35s;
`;

const FooterReveal = styled(SectionReveal)`
  margin-top: auto;
  width: 100%;
  animation-delay: 0.45s;
`;

/* spacing under PSDescription */
const PSSection = styled(SectionReveal)`
  margin: 80px 0 64px;
  animation-delay: 0.15s;

  @media (max-width: 1200px) {
    margin: 48px 0 48px;
  }

  @media (max-width: 900px) {
    margin: 36px 0 36px;
  }

  @media (max-width: 600px) {
    margin: 24px 0 14px;
  }
`;

/* spacing under WhatWeOffer */
const OfferSection = styled(SectionReveal)`
  margin-bottom: 180px;
  animation-delay: 0.25s;

  @media (max-width: 1200px) {
    margin-bottom: 120px;
  }

  @media (max-width: 900px) {
    margin-bottom: 80px;
  }

  @media (max-width: 600px) {
    margin-bottom: 48px;
  }
`;
