import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "../Navbar";
import Footer from "../Footer";
import OurPrograms from "./OurPrograns";
import AboutBg from "../images/pictures/aboutBkg.png";
import Photo1 from "../images/pictures/ovovo.jpeg";
import Photo2 from "../images/pictures/fa24fellows.jpeg";
import Photo3 from "../images/pictures/Photo3.JPG";
import Photo4 from "../images/pictures/PS Photoshoot 3739.JPG";
import Photo5 from "../images/pictures/PS Photoshoot DSCF3630.JPG";
import Photo6 from "../images/pictures/Past Photoshoot DSCF3622.JPG";
import Photo7 from "../images/pictures/Past Photoshoot DSCF3710.JPG";

function RevealSection({ children, className }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return;
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduceMotion) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <section ref={ref} className={`${className} ${visible ? "is-visible" : ""}`}>
      {children}
    </section>
  );
}

function Students() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));

    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Page>
      <BackgroundImage src={AboutBg} alt="" />

      <Content>
        <NavWrap>
          <Navbar />
        </NavWrap>

        <HeroSection>
          <HeroBadge data-reveal>FOR STUDENTS</HeroBadge>
          <HeroTitle data-reveal>Your Product Community</HeroTitle>
          <HeroSubtitle data-reveal>
            We partner with companies to deliver focused product work through PM-led
            student teams, combining real execution with meaningful student experience.
          </HeroSubtitle>

          <GallerySection data-reveal>
            <GalleryGrid>
              <GalleryCard $span={4} $ratio="4 / 3" data-reveal>
                <GalleryImage src={Photo1} alt="Students group moment" />
              </GalleryCard>
              <GalleryCard $span={4} $ratio="4 / 3" data-reveal>
                <GalleryImage src={Photo2} alt="Students at retreat" />
              </GalleryCard>
              <GalleryCard $span={4} $ratio="4 / 3" data-reveal>
                <GalleryImage src={Photo3} alt="Students at event" />
              </GalleryCard>
              <GalleryCard $span={2} data-reveal>
                <GalleryImage src={Photo4} alt="Fellowship group" />
              </GalleryCard>
              <GalleryCard $span={4} data-reveal>
                <GalleryImage src={Photo5} alt="Board fun photo" />
              </GalleryCard>
              <GalleryCard $span={4} data-reveal>
                <GalleryImage src={Photo6} alt="Fellowship photo" />
              </GalleryCard>
              <GalleryCard $span={2} data-reveal>
                <GalleryImage src={Photo7} alt="Club group photo" />
              </GalleryCard>
            </GalleryGrid>
          </GallerySection>
        </HeroSection>

        <ProgramsReveal>
          <OurPrograms />
        </ProgramsReveal>

        <FooterWrap>
          <Footer />
        </FooterWrap>
      </Content>
    </Page>
  );
}

export default Students;

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 22px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Page = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  overflow-y: visible;
  display: flex;
  flex-direction: column;

  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
    }
  }
`;

const BackgroundImage = styled.img`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
  pointer-events: none;
  animation: ${fadeIn} 1200ms ease forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
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
`;

const NavWrap = styled.div`
  width: 100%;
`;

const HeroSection = styled.section`
  width: min(1100px, 100%);
  min-height: calc(100vh - 24px);
  margin: 0 auto 36px;
  padding: clamp(72px, 10vh, 120px) 0 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
    }
  }

  @media (max-width: 900px) {
    min-height: auto;
    padding: 64px 0 24px;
  }

  @media (max-width: 720px) {
    padding: 48px 0 16px;
  }
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
  opacity: 0;

  &.is-visible {
    animation: ${fadeUp} 700ms ease forwards;
  }
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-size: clamp(34px, 5vw, 56px);
  font-weight: 600;
  color: #ffffff;
  opacity: 0;

  &.is-visible {
    animation: ${fadeUp} 850ms ease 80ms forwards;
  }
`;

const HeroSubtitle = styled.p`
  margin: 0;
  max-width: 720px;
  font-size: 16px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.74);
  opacity: 0;

  &.is-visible {
    animation: ${fadeUp} 900ms ease 160ms forwards;
  }
`;

const GallerySection = styled.section`
  width: 100%;
  margin: 24px auto 0;
  opacity: 0;

  &.is-visible {
    animation: ${fadeUp} 950ms ease 260ms forwards;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryCard = styled.div`
  grid-column: span ${props => props.$span || 1};
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
  height: 240px;
  opacity: 0;

  &.is-visible {
    animation: ${fadeUp} 900ms ease forwards;
  }
  @media (max-width: 1024px) {
    height: 220px;
  }
  @media (max-width: 900px) {
    height: clamp(180px, 42vw, 220px);
  }
  @media (max-width: 720px) {
    height: clamp(180px, 55vw, 220px);
    grid-column: span 2;
  }
  @media (max-width: 520px) {
    height: clamp(190px, 65vw, 240px);
    grid-column: span 1;
  }

  &:nth-child(1).is-visible {
    animation-delay: 320ms;
  }

  &:nth-child(2).is-visible {
    animation-delay: 380ms;
  }

  &:nth-child(3).is-visible {
    animation-delay: 440ms;
  }

  &:nth-child(4).is-visible {
    animation-delay: 500ms;
  }

  &:nth-child(5).is-visible {
    animation-delay: 560ms;
  }

  &:nth-child(6).is-visible {
    animation-delay: 620ms;
  }

  &:nth-child(7).is-visible {
    animation-delay: 680ms;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 200px;
  object-fit: cover;
  display: block;

  @media (max-width: 1199px) {
    min-height: 0;
  }
`;

const FooterWrap = styled.div`
  width: 100%;
  margin-top: auto;
`;

const SectionReveal = styled(RevealSection)`
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

const ProgramsReveal = styled(SectionReveal)`
  width: 100%;
  margin: 20px 0 120px;
`;
