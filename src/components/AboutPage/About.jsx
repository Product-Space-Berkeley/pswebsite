import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "../Navbar";
import Footer from "../Footer";
import AboutBg from "../images/pictures/aboutBkg.png";
import HeroImage from "../images/pictures/ovoLarge.jpeg";
import { ReactComponent as CodeIcon } from "../images/miscicons/code-icon.svg";
import { ReactComponent as BrainIcon } from "../images/miscicons/brain-icon.svg";
import { ReactComponent as LaunchIcon } from "../images/miscicons/launch-icon.svg";
import { ReactComponent as SproutIcon } from "../images/miscicons/sprout-icon.svg";

function About() {
  const backgroundRef = useRef(null);
  const heroImageRef = useRef(null);
  const missionRef = useRef(null);
  const coffeeRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = Array.from(document.querySelectorAll("[data-reveal]"));
    const parallaxCards = Array.from(document.querySelectorAll("[data-parallax-card]"));

    if (reduceMotion) {
      revealElements.forEach((element) => {
        element.classList.add("is-visible");
      });
      parallaxCards.forEach((card) => {
        card.style.setProperty("--card-offset", "0px");
      });
      return undefined;
    }

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
    let raf = 0;

    const updateParallax = (scrollY) => {
      const bgOffset = clamp(scrollY * 0.4, 0, 320);
      const heroOffset = clamp(scrollY * 0.24, 0, 200);

      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translate3d(0, ${bgOffset}px, 0)`;
      }
      if (heroImageRef.current) {
        heroImageRef.current.style.transform = `translate3d(0, ${heroOffset}px, 0)`;
      }
      if (missionRef.current) {
        missionRef.current.style.transform = "translate3d(0, 0, 0)";
      }
      if (coffeeRef.current) {
        coffeeRef.current.style.transform = "translate3d(0, 0, 0)";
      }

      parallaxCards.forEach((card) => {
        card.style.setProperty("--card-offset", "0px");
      });
    };

    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (raf) {
        return;
      }
      raf = window.requestAnimationFrame(() => {
        updateParallax(scrollY);
        raf = 0;
      });
    };

    updateParallax(window.scrollY || window.pageYOffset);
    window.addEventListener("scroll", onScroll, { passive: true });

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

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) {
        window.cancelAnimationFrame(raf);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <Page>
      <BackgroundImage ref={backgroundRef} src={AboutBg} alt="" />

      <Content>
        <NavWrap>
          <Navbar />
        </NavWrap>

        <HeroSection>
          <Badge>ABOUT</Badge>
          <Title>Product, Together</Title>
          <Subtitle>
            Product Space @ Berkeley is a community of students passionate about product
            management, building the next generation of thoughtful product leaders.
          </Subtitle>

          <ImageWrap ref={heroImageRef}>
            <HeroPhoto src={HeroImage} alt="Product Space members" />
          </ImageWrap>
        </HeroSection>

        <MissionSection ref={missionRef}>
          <MissionContent className="reveal" data-reveal>
            <MissionBadge>MISSION</MissionBadge>
            <MissionTitle>
              BUIDLING THE NEXT
              <br />
              GENERATION OF
              <br />
              PRODUCT LEADERS.
            </MissionTitle>
            <MissionDescription>
              Our mission is to equip undergraduates with the skills to thrive as product
              leaders, while building a community that learns and grows together.
            </MissionDescription>
          </MissionContent>

          <MissionGrid className="reveal" data-reveal>
            <MissionCardOuter className="reveal" data-reveal data-parallax-card>
              <MissionCard>
                <CardIcon>
                  <CodeIcon aria-hidden="true" focusable="false" />
                </CardIcon>
                <CardTitle>Empathy First.</CardTitle>
                <CardText>
                  A strong PM learns to empathize by listening to teammates, users and the
                  people behind the product.
                </CardText>
              </MissionCard>
            </MissionCardOuter>
            <MissionCardOuter className="reveal" data-reveal data-parallax-card>
              <MissionCard>
                <CardIcon>
                  <SproutIcon aria-hidden="true" focusable="false" />
                </CardIcon>
                <CardTitle>Grow Together.</CardTitle>
                <CardText>
                  We value community: learning, building, and growing alongside people who
                  support one another.
                </CardText>
              </MissionCard>
            </MissionCardOuter>
            <MissionCardOuter className="reveal" data-reveal data-parallax-card>
              <MissionCard>
                <CardIcon>
                  <BrainIcon aria-hidden="true" focusable="false" />
                </CardIcon>
                <CardTitle>Take Responsibility.</CardTitle>
                <CardText>
                  Own your work, learn from your mistakes, and take responsibility for your
                  growth.
                </CardText>
              </MissionCard>
            </MissionCardOuter>
            <MissionCardOuter className="reveal" data-reveal data-parallax-card>
              <MissionCard>
                <CardIcon>
                  <LaunchIcon aria-hidden="true" focusable="false" />
                </CardIcon>
                <CardTitle>Make it Meaningful.</CardTitle>
                <CardText>
                  We focus on solving real problems, not just making things look impressive.
                </CardText>
              </MissionCard>
            </MissionCardOuter>
          </MissionGrid>
        </MissionSection>

        <CoffeeSection ref={coffeeRef} className="reveal" data-reveal>
          <CoffeeTitle>COFFEE CHATS</CoffeeTitle>
          <CoffeeDesc>Please limit yourself to three coffee chats so our members have the chance to speak with all applicants, thank you!</CoffeeDesc>
          <EmbedFrame
            title="Coffee Chats"
            src="https://airtable.com/embed/appZRGxDJGSmu32qP/shrB0JqI2HuvXk2dr?viewControls=on"
          />
        </CoffeeSection>

        <FooterWrap>
          <Footer compactBottom />
        </FooterWrap>
      </Content>
    </Page>
  );
}

export default About;

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 28px, 0);
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

const fadeUpCard = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, calc(var(--card-offset, 0px) + 18px), 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, var(--card-offset, 0px), 0);
  }
`;

const Page = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
    }
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
  pointer-events: none;
  will-change: transform;
  animation: ${fadeIn} 1200ms ease forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  padding: calc(24px + 96px) clamp(24px, 4vw, 60px) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (max-width: 600px) {
    padding: calc(16px + 84px) 16px 0;
  }
`;

const NavWrap = styled.div`
  width: min(1200px, 100%);
  margin: 0 auto;
`;

const HeroSection = styled.section`
  max-width: 1100px;
  margin: 0 auto 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;

  @media (max-width: 768px) {
    margin: 48px auto 64px;
    gap: 14px;
  }

  @media (max-width: 600px) {
    margin: 36px auto 48px;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
    }
  }
`;

const Badge = styled.span`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 8px 18px;
  border-radius: 999px;
  text-transform: uppercase;
  opacity: 0;
  animation: ${fadeUp} 700ms ease forwards;
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 600;
  color: #ffffff;
  opacity: 0;
  animation: ${fadeUp} 800ms ease 80ms forwards;
`;

const Subtitle = styled.p`
  margin: 0;
  max-width: 720px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.72);
  opacity: 0;
  animation: ${fadeUp} 900ms ease 140ms forwards;
`;

const ImageWrap = styled.div`
  width: min(1020px, 100%);
  margin-top: 28px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
  opacity: 0;
  animation: ${fadeUp} 1000ms ease 220ms forwards;
  will-change: transform;

  @media (max-width: 600px) {
    margin-top: 18px;
    border-radius: 18px;
  }
`;

const HeroPhoto = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

const MissionSection = styled.section`
  width: min(1100px, 100%);
  margin: 0 auto 180px;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.4fr);
  gap: 42px;
  align-items: start;
  will-change: transform;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

const MissionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #fff;
  opacity: 0;
  transform: translate3d(0, 22px, 0);

  &.is-visible {
    animation: ${fadeUp} 900ms ease 100ms forwards;
  }
`;

const MissionBadge = styled.span`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2.5px;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.45);
  padding: 6px 16px;
  border-radius: 999px;
  text-transform: uppercase;
  width: fit-content;
`;

const MissionTitle = styled.h2`
  margin: 0;
  font-size: clamp(30px, 4vw, 44px);
  font-weight: 500;
  line-height: 1.15;
`;

const MissionDescription = styled.p`
  margin: 0;
  max-width: 520px;
  font-size: 16px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.72);
`;

const MissionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  align-items: start;
  perspective: 900px;
  opacity: 0;
  transform: translate3d(0, 22px, 0);

  &.is-visible {
    animation: ${fadeUp} 900ms ease 180ms forwards;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const MissionCard = styled.div`
  --card-text: rgba(255, 255, 255, 0.72);
  --card-title: #ffffff;
  --card-icon: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 22px;
  padding: 22px;
  min-height: 150px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
  transition: transform 200ms ease, background 200ms ease, color 200ms ease,
    border-color 200ms ease, box-shadow 200ms ease;
  transform-origin: center;
  transform-style: preserve-3d;
  will-change: transform;

  &:hover {
    transform: rotateX(6deg) rotateY(-6deg) rotateZ(-2deg) scale(1.03);
    background: #E1D7E7;
    border-color: rgba(225, 215, 231, 0.85);
    box-shadow: 0 24px 50px rgba(0, 0, 0, 0.35);
    z-index: 1;
    --card-text: #1E1627;
    --card-title: #1E1627;
    --card-icon: #1E1627;
  }
`;

const MissionCardOuter = styled.div`
  opacity: 0;
  transform: translate3d(0, var(--card-offset, 0px), 0);
  will-change: transform;

  &.is-visible {
    animation: ${fadeUpCard} 750ms ease forwards;
  }

  &:nth-child(1).is-visible {
    animation-delay: 240ms;
  }

  &:nth-child(2).is-visible {
    animation-delay: 300ms;
  }

  &:nth-child(3).is-visible {
    animation-delay: 360ms;
  }

  &:nth-child(4).is-visible {
    animation-delay: 420ms;
  }

  &:hover {
    z-index: 1;
  }
`;

const CardIcon = styled.div`
  color: var(--card-icon);
  margin-bottom: 10px;

  svg {
    width: 20px;
    height: 20px;
    display: block;
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 6px 0;
  font-size: 16px;
  color: var(--card-title);
`;

const CardText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: var(--card-text);
`;

const CoffeeSection = styled.section`
  width: min(1100px, 100%);
  margin: 140px auto 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  will-change: transform;
  opacity: 0;
  transform: translate3d(0, 22px, 0);

  &.is-visible {
    animation: ${fadeUp} 900ms ease 200ms forwards;
  }
`;

const CoffeeTitle = styled.h2`
  margin: 0;
  font-size: clamp(28px, 3vw, 36px);
  font-weight: 500;
  letter-spacing: 1.5px;
  color: #ffffff;
`;

const CoffeeDesc = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.2;
  color: #969696;
`;

const EmbedFrame = styled.iframe`
  width: 100%;
  height: 820px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 18px;
  background: transparent;
`;

const FooterWrap = styled.div`
  width: 100%;
  margin-top: auto;
`;
