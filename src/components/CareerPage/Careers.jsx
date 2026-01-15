import styled from "styled-components";
import { useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import AboutBg from "../images/pictures/aboutBkg.png";
import TableContainer from "./TableContainer";
import PhotoA from "../images/pictures/ayami+yuta.jpeg";
import PhotoB from "../images/pictures/Photo3.JPG";
import PhotoC from "../images/pictures/sp25grads.jpeg";
import PhotoD from "../images/pictures/krish+christine.jpeg";
import PhotoE from "../images/pictures/lucasFellows.jpeg";
import PhotoF from "../images/pictures/michelle+cady.jpeg";
import PhotoG from "../images/pictures/lianaLineage.jpeg";

import amexLogo from "../images/pastClients/amex.png";
import metaLogo from "../images/pastClients/meta.png";
import microsoftLogo from "../images/pastClients/microsoftLogo.png";
import oracleLogo from "../images/pastClients/oracle.png";
import samsungLogo from "../images/pastClients/samsung.png";
import uberLogo from "../images/pastClients/uber.png";
import salesforceLogo from "../images/company/salesforceLogo.png";
import teslaLogo from "../images/company/tesla2.png";
import googleLogo from "../images/company/googleLogo.png";
import coinbaseLogo from "../images/company/coinbaseLogo.svg.png";
import atlassianLogo from "../images/company/atlassianLogo.svg.png";
import mastercardLogo from "../images/company/mastercardLogo.png";
import toastLogo from "../images/company/Toast_logo.svg.png";
import siriusxmLogo from "../images/company/siriusxmLogo.png";
import tiktokLogo from "../images/company/tiktok.webp";
import capitalOneLogo from "../images/company/capitaloneLogo.svg";

function Careers() {
  const heroRef = useRef(null);
  const galleryRef = useRef(null);
  const logosRef = useRef(null);
  const tablesRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const sections = [
      { ref: heroRef, factor: 0.3, max: 160 },
      { ref: galleryRef, factor: 0.26, max: 140 },
      { ref: logosRef, factor: 0.24, max: 130 },
      { ref: tablesRef, factor: 0.22, max: 120 }
    ];
    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
    let frame = 0;

    const update = () => {
      sections.forEach(({ ref, factor, max }) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const offset = clamp(rect.top * -factor, -max, max);
        ref.current.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
      frame = 0;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <Page>
      <BackgroundImage src={AboutBg} alt="" />

      <Content>
        <NavWrap>
          <Navbar />
        </NavWrap>

        <HeroSection ref={heroRef}>
          <HeroBadge>CAREERS</HeroBadge>
          <HeroTitle>Beyond Product Space</HeroTitle>
        </HeroSection>

        <GallerySection ref={galleryRef}>
          <GalleryGrid>
            <GalleryCard $span={1} $ratio="3 / 4">
              <GalleryImage src={PhotoA} alt="Students outside" />
            </GalleryCard>
            <GalleryCard $span={2} $ratio="3 / 2">
              <GalleryImage src={PhotoB} alt="Students together" />
            </GalleryCard>
            <GalleryCard $span={1} $ratio="3 / 4">
              <GalleryImage src={PhotoC} alt="Students group" />
            </GalleryCard>
            <GalleryCard $span={1} $ratio="3 / 4">
              <GalleryImage src={PhotoD} alt="Students posing" />
            </GalleryCard>
            <GalleryCard $span={1} $ratio="3 / 4">
              <GalleryImage src={PhotoE} alt="Students social" />
            </GalleryCard>
            <GalleryCard $span={1} $ratio="3 / 4">
              <GalleryImage src={PhotoF} alt="Students outside campus" />
            </GalleryCard>
            <GalleryCard $span={1} $ratio="3 / 4">
              <GalleryImage src={PhotoG} alt="Students in a group" />
            </GalleryCard>
          </GalleryGrid>
        </GallerySection>

        <LogosSection ref={logosRef}>
          <LogosTitle>Where We Work</LogosTitle>
          <CarouselContainer>
            <CarouselTrack>
              {[
                amexLogo,
                microsoftLogo,
                oracleLogo,
                metaLogo,
                samsungLogo,
                uberLogo,
                salesforceLogo,
                teslaLogo,
                coinbaseLogo,
                googleLogo,
                tiktokLogo,
                capitalOneLogo,
                atlassianLogo,
                mastercardLogo,
                toastLogo,
                siriusxmLogo,
                amexLogo,
                microsoftLogo,
                oracleLogo,
                metaLogo,
                samsungLogo,
                uberLogo,
                salesforceLogo,
                teslaLogo,
                coinbaseLogo,
                googleLogo,
                tiktokLogo,
                capitalOneLogo,
                atlassianLogo,
                mastercardLogo,
                toastLogo,
                siriusxmLogo
              ].map((logo, index) => {
                const isUber = logo === uberLogo;
                const isCoinbase = logo === coinbaseLogo;
                const isTiktok = logo === tiktokLogo;
                const isCapitalOne = logo === capitalOneLogo;
                const isAtlassian = logo === atlassianLogo;
                const isMastercard = logo === mastercardLogo;
                const isToast = logo === toastLogo;
                const isSirius = logo === siriusxmLogo;

                return (
                  <LogoWrapper key={`${logo}-${index}`}>
                    <ClientLogo
                      src={logo}
                      alt="Client logo"
                      $meta={logo === metaLogo}
                      $isUber={isUber}
                      $isCoinbase={isCoinbase}
                      $isTiktok={isTiktok}
                      $isCapitalOne={isCapitalOne}
                      $isAtlassian={isAtlassian}
                      $isMastercard={isMastercard}
                      $isToast={isToast}
                      $isSirius={isSirius}
                    />
                  </LogoWrapper>
                );
              })}
            </CarouselTrack>
          </CarouselContainer>
        </LogosSection>

        <TablesSection ref={tablesRef}>
          <TableContainer />
        </TablesSection>

        <FooterWrap ref={footerRef}>
          <Footer />
        </FooterWrap>
      </Content>
    </Page>
  );
}

export default Careers;

const Page = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

const BackgroundImage = styled.img`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
  pointer-events: none;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  width: min(1200px, 100%);
  margin: 0 auto;
  padding: clamp(24px, 4vw, 60px) clamp(16px, 3vw, 32px) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;

  @media (max-width: 720px) {
    padding: 20px 16px 0;
  }
`;

const NavWrap = styled.div`
  width: 100%;
`;

const HeroSection = styled.section`
  width: min(900px, 100%);
  margin: 120px auto 48px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  will-change: transform;
`;

const HeroBadge = styled.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2.5px;
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 6px 14px;
  border-radius: 999px;
  text-transform: uppercase;
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-size: clamp(34px, 5vw, 56px);
  font-weight: 600;
  color: #ffffff;
`;

const GallerySection = styled.section`
  width: 100%;
  margin: 10px auto 60px;
  will-change: transform;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryCard = styled.div`
  grid-column: span ${props => props.$span || 1};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
  aspect-ratio: ${props => props.$ratio || "4 / 5"};
  min-height: 220px;

  @media (max-width: 1024px) {
    min-height: 200px;
  }

  @media (max-width: 720px) {
    grid-column: span 1;
    aspect-ratio: 4 / 5;
    min-height: 220px;
  }

  @media (max-width: 520px) {
    min-height: 220px;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const LogosSection = styled.section`
  width: 100%;
  margin: 180px 0 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  will-change: transform;
`;

const LogosTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 2.5px;
  color: #b0a7c0;
  text-transform: uppercase;
`;

const CarouselContainer = styled.div`
  --logo-w: 230px;
  --logo-h: 70px;
  --gap: 40px;
  width: calc(var(--logo-w) * 3 + var(--gap) * 2);
  overflow: hidden;

  @media (max-width: 900px) {
    --logo-w: 190px;
    --logo-h: 60px;
    --gap: 28px;
    width: 100%;
  }

  @media (max-width: 600px) {
    --logo-w: 150px;
    --logo-h: 52px;
    --gap: 22px;
  }
`;

const CarouselTrack = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap);
  width: max-content;
  animation: scroll 28s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const LogoWrapper = styled.div`
  width: var(--logo-w);
  height: var(--logo-h);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const ClientLogo = styled.img`
  max-width: 100%;
  max-height: 100%;
  opacity: 1;
  object-fit: contain;
  filter: ${props => {
    if (props.$isUber) return "brightness(0) invert(1)";
    return "none";
  }};
  transform: ${props => {
    if (props.$meta) return "scale(1.64)";
    if (props.$isUber) return "scale(0.76)";
    if (props.$isAmazon) return "scale(0.94)";
    if (props.$isCoinbase) return "scale(0.78)";
    if (props.$isTiktok) return "scale(1.1)";
    if (props.$isCapitalOne) return "scale(1.1)";
    if (props.$isAtlassian) return "scale(0.9)";
    if (props.$isMastercard) return "scale(0.86)";
    if (props.$isToast) return "scale(0.88)";
    if (props.$isSirius) return "scale(0.82)";
    return "scale(1)";
  }};
`;

const FooterWrap = styled.div`
  width: 100%;
  will-change: transform;
`;

const TablesSection = styled.section`
  width: 100%;
  margin: 0 auto 120px;
  will-change: transform;
`;
