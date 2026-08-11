import styled, { keyframes } from "styled-components";
import { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import AboutBg from "../images/pictures/aboutBkg.png";
import ClientGraphic from "../images/pictures/clientGraphic.png";
import amexLogo from '../images/pastClients/amex.png'
import lenovoLogo from '../images/pastClients/lenovo.png'
import lucidLogo from '../images/pastClients/lucid.png'
import metaLogo from '../images/pastClients/meta.png'
import microsoftLogo from '../images/pastClients/microsoftLogo.png'
import oracleLogo from '../images/pastClients/oracle.png'
import oracleSvgLogo from '../images/pastClients/oracle.svg.png'
import samsungLogo from '../images/pastClients/samsung.png'
import twitchLogo from '../images/pastClients/twitch.svg.png'
import uberLogo from '../images/pastClients/uber.png'
import teamIcon from "../images/miscicons/team-icon.svg";
import timelineIcon from "../images/miscicons/timeline-icon.svg";
import checklistIcon from "../images/miscicons/checklist-icon.svg";
import studentIcon from "../images/miscicons/student-icon.svg";

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

function Companies() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    notes: ""
  });
  const [status, setStatus] = useState(null);
  const [heroEmail, setHeroEmail] = useState("");
  const [heroStatus, setHeroStatus] = useState(null);

  useEffect(() => {
    // No parallax effects - just static page with animations on load
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const endpoint = process.env.REACT_APP_CONTACT_ENDPOINT;
    if (!endpoint) {
      setStatus({ type: "error", message: "Missing contact endpoint. Set REACT_APP_CONTACT_ENDPOINT (Formspree URL)." });
      return;
    }
    setStatus({ type: "pending", message: "Sending..." });
    try {
      const payload = {
        name: formData.fullName,
        email: formData.email,
        company: formData.company,
        message: formData.notes,
        _subject: "[Product Space] Contact Us Form Response",
        source: "companies"
      };
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Request failed");
      setStatus({ type: "success", message: "Thanks! We received your message." });
      setFormData({ fullName: "", email: "", company: "", notes: "" });
    } catch (err) {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    }
  };

  const handleHeroSubmit = async (event) => {
    event.preventDefault();
    const endpoint = process.env.REACT_APP_CONTACT_ENDPOINT;
    if (!endpoint) {
      setHeroStatus({ type: "error", message: "Missing contact endpoint. Set REACT_APP_CONTACT_ENDPOINT (Formspree URL)." });
      return;
    }
    setHeroStatus({ type: "pending", message: "Sending..." });
    try {
      const payload = {
        name: "Work Together CTA",
        email: heroEmail,
        message: "Interested in working together (hero CTA).",
        _subject: "[Product Space] Contact Us Form Response",
        source: "companies-hero"
      };
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Request failed");
      setHeroStatus({ type: "success", message: "Thanks! We received your email." });
      setHeroEmail("");
    } catch (err) {
      setHeroStatus({ type: "error", message: "Something went wrong. Please try again." });
    }
  };

  return (
    <Page>
      <BackgroundImage src={AboutBg} alt="" />

      <Content>
        <NavWrap>
          <Navbar />
        </NavWrap>

        <HeroSection>
          <HeroBox>
            {/* the graphic IS the entire hero box */}
            <HeroGraphic src={ClientGraphic} alt="" />

            {/* text sits on top */}
            <HeroOverlay>
              <HeroContent>
                <HeroBadge>INDUSTRY CLIENTS</HeroBadge>
                <HeroTitle>Let’s Work Together</HeroTitle>
                <HeroSubtitle>
                  We partner with companies to deliver focused product work through PM-led
                  student teams, combining real execution with meaningful student experience.
                </HeroSubtitle>

                <CtaRow method="POST" onSubmit={handleHeroSubmit}>
                  <EmailInput
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={heroEmail}
                    onChange={(event) => setHeroEmail(event.target.value)}
                    required
                  />
                  <CtaButton type="submit">Work with Us</CtaButton>
                </CtaRow>
                {heroStatus && <FormStatus data-type={heroStatus.type}>{heroStatus.message}</FormStatus>}
              </HeroContent>
            </HeroOverlay>
          </HeroBox>
        </HeroSection>

        <PastClientsReveal>
          <PastClientsTitle>PAST CLIENTS</PastClientsTitle>
          <CarouselContainer>
            <CarouselTrack>
              {[amexLogo, microsoftLogo, oracleLogo, metaLogo, samsungLogo, amexLogo, microsoftLogo, oracleLogo, metaLogo, samsungLogo].map(
                (logo, index) => (
                  <LogoWrapper key={`${logo}-${index}`}>
                    <ClientLogo src={logo} alt="Client logo" $meta={logo === metaLogo} />
                  </LogoWrapper>
                )
              )}
            </CarouselTrack>
          </CarouselContainer>
        </PastClientsReveal>

        <HowItWorksReveal>
          <SectionTitle>HOW IT WORKS</SectionTitle>
          <SectionSubtitle>
            We partner with companies to ship focused product work through PM‑led student
            teams, pairing fast execution with thoughtful, measurable outcomes.
          </SectionSubtitle>

          <CardsGrid>
            {[
              {
                icon: teamIcon,
                iconShiftX: "-4px",
                iconShiftY: "-4px",
                title: "Team Structure",
                text:
                  "Each team is led by an experienced project lead and advisor, supported by 4–6 trained product associates. This structure keeps ownership clear, execution efficient, and communication consistent."
              },
              {
                icon: timelineIcon,
                title: "Timeline",
                text:
                  "Projects run on a structured, semester‑length cadence with defined milestones and regular check‑ins. This keeps teams moving quickly while maintaining quality and accountability."
              },
              {
                icon: checklistIcon,
                iconScale: "0.82",
                title: "Project Scopes",
                text:
                  "Each engagement is tailored to your goals, constraints, and product stage. Common scopes include data analysis, full‑stack, user research, prototyping, usability testing, and GTM strategy."
              },
              {
                icon: studentIcon,
                title: "Why Student Teams",
                text:
                  "Our students bring strong product training, technical depth, and fresh perspective to every project. With senior guidance, they deliver thoughtful, high‑quality outcomes."
              }
            ].map(card => (
              <InfoCard key={card.title}>
                <CardIcon
                  aria-hidden="true"
                  $icon={card.icon}
                  style={{
                    "--icon-shift-x": card.iconShiftX,
                    "--icon-shift-y": card.iconShiftY,
                    "--icon-scale": card.iconScale
                  }}
                />
                <CardTitle>{card.title}</CardTitle>
                <CardText>{card.text}</CardText>
              </InfoCard>
            ))}
          </CardsGrid>
        </HowItWorksReveal>

        <GetInTouchReveal>
          <SectionTitle>GET IN TOUCH</SectionTitle>
          <SectionSubtitle>
            Get in touch to learn how Product Space can support your company goals.
            Reach out to discuss potential collaborations, project scopes, and
            upcoming opportunities to work with our teams.
          </SectionSubtitle>

          <ContactForm method="POST" onSubmit={handleSubmit}>
            <FieldGroup>
              <FieldLabel>FULL NAME</FieldLabel>
              <FieldInput
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </FieldGroup>
            <FieldRow>
              <FieldGroup>
                <FieldLabel>EMAIL ADDRESS</FieldLabel>
                <FieldInput
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FieldGroup>
              <FieldGroup>
                <FieldLabel>COMPANY</FieldLabel>
                <FieldInput
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </FieldGroup>
            </FieldRow>
            <FieldGroup>
              <FieldLabel>ADDITIONAL NOTES</FieldLabel>
              <FieldTextarea
                name="notes"
                rows={5}
                value={formData.notes}
                onChange={handleChange}
              />
            </FieldGroup>
            <SubmitButton type="submit">Submit</SubmitButton>
            {status && <FormStatus data-type={status.type}>{status.message}</FormStatus>}
          </ContactForm>
        </GetInTouchReveal>

        <FooterWrap>
          <Footer />
        </FooterWrap>
      </Content>
    </Page>
  );
}

export default Companies;

/* ============ animations ============ */

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

/* ============ layout ============ */

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

const Page = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
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
  min-height: 100vh;
  flex: 1 0 auto;
`;

const NavWrap = styled.div`
  width: 100%;
`;

const HeroSection = styled.section`
  width: 100%;
  margin: 120px 0 80px;
`;

/* ✅ Container for the exported PNG */
const HeroBox = styled.div`
  position: relative;
  width: 100%;

  /* keep the same proportions as your Figma “card” */
  aspect-ratio: 1261 / 643;
  min-height: 420px;

  /* IMPORTANT: allow triangle overhang to show */
  overflow: visible;

  @media (max-width: 1024px) {
    min-height: 380px;
  }

  @media (max-width: 860px) {
    min-height: 340px;
  }

  @media (max-width: 720px) {
    aspect-ratio: auto;
    min-height: 520px;
  }

  @media (max-width: 520px) {
    display: flex;
    flex-direction: column;
    min-height: auto;
  }
`;

/* ✅ The PNG itself (no CSS "card" behind it) */
const HeroGraphic = styled.img`
  position: absolute;
  inset: 0;
  width: 115%;
  height: 115%;

  /* Use contain so the graphic stays EXACT (no cropping) */
  object-fit: contain;
  object-position: center;

  pointer-events: none;
  user-select: none;
  opacity: 0;
  animation: ${fadeIn} 1000ms ease 100ms forwards;

  @media (max-width: 1024px) {
    width: 108%;
    height: 108%;
  }

  @media (max-width: 860px) {
    width: 102%;
    height: 102%;
  }

  @media (max-width: 720px) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 520px) {
    position: relative;
    inset: auto;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

/* ✅ Text overlay positioned on top of the PNG */
const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;

  /* match your left padding in the design */
  padding: clamp(44px, 5vw, 72px);

  @media (max-width: 1024px) {
    padding: clamp(36px, 4.5vw, 60px);
  }

  @media (max-width: 860px) {
    padding: 32px;
  }

  @media (max-width: 720px) {
    padding: 28px;
  }

  @media (max-width: 520px) {
    position: relative;
    inset: auto;
    padding: 20px 22px 26px;
    align-items: flex-start;
  }
`;

/* ============ typography & CTA ============ */

const HeroContent = styled.div`
  max-width: 560px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 1024px) {
    max-width: 520px;
    gap: 10px;
  }

  @media (max-width: 860px) {
    max-width: 420px;
  }

  @media (max-width: 720px) {
    max-width: 380px;
  }

  @media (max-width: 600px) {
    max-width: 320px;
  }
`;

const HeroBadge = styled.span`
  font-size: 11px;
  letter-spacing: 2px;
  font-weight: 600;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.40);
  padding: 6px 12px;
  border-radius: 999px;
  text-transform: uppercase;
  width: fit-content;
  opacity: 0;
  animation: ${fadeUp} 700ms ease forwards;

  @media (max-width: 720px) {
    font-size: 10px;
    padding: 5px 10px;
  }
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-size: clamp(36px, 4.6vw, 56px);
  font-weight: 600;
  color: #fff;
  opacity: 0;
  animation: ${fadeUp} 800ms ease 80ms forwards;

  @media (max-width: 720px) {
    font-size: 28px;
  }
`;

const HeroSubtitle = styled.p`
  margin: 0;
  max-width: 520px;
  font-size: 16px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.72);
  opacity: 0;
  animation: ${fadeUp} 900ms ease 140ms forwards;

  @media (max-width: 720px) {
    font-size: 12px;
    line-height: 1.5;
  }
`;

const CtaRow = styled.form`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 10px;
  opacity: 0;
  animation: ${fadeUp} 1000ms ease 220ms forwards;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const EmailInput = styled.input`
  height: 42px;
  width: 320px;
  max-width: 100%;
  padding: 0 16px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  background: rgba(12, 8, 20, 0.35);
  color: #fff;
  font-size: 13px;
  outline: none;
  backdrop-filter: blur(8px);

  &::placeholder {
    color: rgba(255, 255, 255, 0.62);
  }

  @media (max-width: 640px) {
    width: 100%;
    height: 36px;
    font-size: 12px;
  }

  @media (max-width: 520px) {
    width: 100%;
  }

  @media (max-width: 720px) {
    height: 38px;
    font-size: 12px;
  }
`;

const CtaButton = styled.button`
  height: 42px;
  font-weight: 600;
  padding: 0 18px;
  border-radius: 999px;
  border: 1px solid #fff;
  background: #fff;
  color: #1f132a;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;

  @media (max-width: 640px) {
    width: 100%;
    height: 36px;
    font-size: 12px;
  }

  @media (max-width: 520px) {
    width: 100%;
  }

  @media (max-width: 720px) {
    height: 38px;
    font-size: 12px;
  }
`;

const FooterWrap = styled.div`
  width: 100%;
  margin-top: auto;
`;

const HowItWorksReveal = styled(SectionReveal)`
  width: min(760px, 100%);
  margin: 80px auto 80px;
  text-align: center;
`;

const SectionTitle = styled.h3`
  margin: 0 0 12px;
  font-size: 38px;
  font-weight: 500;
  color: #ffffff;
`;

const SectionSubtitle = styled.p`
  margin: 0 auto 28px;
  max-width: 640px;
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.68);
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  text-align: left;
  --card-text: rgba(255, 255, 255, 0.72);
  --card-title: #ffffff;
  --card-icon: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 16px;
  padding: 18px 16px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
  transition: transform 200ms ease, background 200ms ease, color 200ms ease,
    border-color 200ms ease, box-shadow 200ms ease;
  transform-origin: center;

  &:hover {
    transform: rotate(-1.5deg) scale(1.02);
    background: #E1D7E7;
    border-color: rgba(225, 215, 231, 0.85);
    box-shadow: 0 24px 50px rgba(0, 0, 0, 0.35);
    z-index: 1;
    --card-text: #1E1627;
    --card-title: #1E1627;
    --card-icon: #1E1627;
  }
`;

const CardIcon = styled.div`
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  background-color: var(--card-icon);
  -webkit-mask: url(${(props) => props.$icon}) center / contain no-repeat;
  mask: url(${(props) => props.$icon}) center / contain no-repeat;
  transform: translate(var(--icon-shift-x, 0px), var(--icon-shift-y, 0px))
    scale(var(--icon-scale, 1));
  opacity: 0.9;
`;

const CardTitle = styled.h3`
  margin: 0 0 6px;
  font-size: 16px;
  font-weight: 600;
  color: var(--card-title);
`;

const CardText = styled.p`
  margin: 2;
  font-size: 14px;
  line-height: 1.6;
  color: var(--card-text);
`;

const GetInTouchReveal = styled(SectionReveal)`
  width: min(760px, 100%);
  margin: 80px auto 140px;
  text-align: center;
`;

const ContactForm = styled.form`
  margin-top: 26px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FieldRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FieldGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: left;
`;

const FieldLabel = styled.span`
  font-size: 10px;
  letter-spacing: 1.6px;
  color: rgba(255, 255, 255, 0.7);
`;

const FieldInput = styled.input`
  height: 36px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(10, 7, 20, 0.35);
  color: #ffffff;
  font-size: 12px;
  outline: none;
`;

const FieldTextarea = styled.textarea`
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(10, 7, 20, 0.35);
  color: #ffffff;
  font-size: 12px;
  outline: none;
  resize: vertical;
`;

const SubmitButton = styled.button`
  align-self: center;
  height: 32px;
  padding: 0 26px;
  border-radius: 999px;
  border: 1px solid #ffffff;
  background: #ffffff;
  color: #1f132a;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
`;

const FormStatus = styled.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
`;

const PastClientsReveal = styled(SectionReveal)`
  width: 100%;
  margin: 60px 0 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;

const PastClientsTitle = styled.h2`
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
  filter: none;
  object-fit: contain;
  transform: ${props => (props.$meta ? "scale(1.64)" : "scale(1)")};
`;
