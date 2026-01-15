import styled from "styled-components";
import { Link } from "react-router-dom";
import HomeLogo from "./images/miscicons/PSLogo.png";
import instaLogo from "./images/miscicons/instaLogo.png";
import linkedinLogo from "./images/miscicons/linkedinLogo.png";

const handleLinkClick = () => {
  window.scrollTo(0, 0);
};

const navLinks = [
  { label: "Home", to: "/Home" },
  { label: "About", to: "/About" },
  { label: "Clients", to: "/Companies" },
  { label: "Students", to: "/Students" },
  { label: "Careers", to: "/Careers" },
  { label: "Apply", to: "/Apply" }
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/product-space-inc/posts/?feedView=all", icon: linkedinLogo },
  { label: "Instagram", href: "https://www.instagram.com/calproductspace/?hl=en", icon: instaLogo }
];

function Footer({ compactBottom = false }) {
  return (
    <FooterWrap $compactBottom={compactBottom}>
      <FooterInner $compactBottom={compactBottom}>
        <BrandBlock>
          <LogoRow to="/Home" onClick={handleLinkClick}>
            <Logo src={HomeLogo} alt="Product Space logo" />
            <BrandName>Product Space @ UC Berkeley</BrandName>
          </LogoRow>
          <BrandCopy>
            We are a student group acting independently of the University of California.
            We take full responsibility for our organization and this website.
          </BrandCopy>
        </BrandBlock>

        <LinksBlock>
          <BlockTitle>Explore</BlockTitle>
          <LinksGrid>
            {navLinks.map((item) => (
              <FooterLink key={item.to} to={item.to} onClick={handleLinkClick}>
                {item.label}
              </FooterLink>
            ))}
          </LinksGrid>
        </LinksBlock>

        <ContactBlock>
          <BlockTitle>Contact</BlockTitle>
          <ContactText>
            <ContactLink href="mailto:contact@product.berkeley.edu">
              contact@product.berkeley.edu
            </ContactLink>
          </ContactText>
          <SocialRow>
            {socialLinks.map((item) => (
              <SocialLink key={item.label} href={item.href} target="_blank" rel="noreferrer">
                <SocialIcon src={item.icon} alt={item.label} />
              </SocialLink>
            ))}
          </SocialRow>
        </ContactBlock>
      </FooterInner>

      <LegalRow $compactBottom={compactBottom}>
        <LegalText>© {new Date().getFullYear()} Product Space @ Berkeley.</LegalText>
      </LegalRow>
    </FooterWrap>
  );
}

export default Footer;

const FooterWrap = styled.footer`
  width: 100vw;
  margin-top: 40px;
  margin-bottom: 0;
  margin-left: calc(50% - 50vw);
  background: #000000;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: none;
  backdrop-filter: none;
  padding-bottom: 0;

  @media (max-width: 1199px) {
    width: 100%;
    margin-left: 0;
  }
`;

const FooterInner = styled.div`
  width: 100%;
  margin: 0;
  padding: 48px clamp(24px, 6vw, 120px) ${({ $compactBottom }) => ($compactBottom ? "0" : "20px")};
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr;
  gap: 32px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const BrandBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LogoRow = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
`;

const Logo = styled.img`
  width: 56px;
  height: 56px;
  object-fit: contain;
`;

const BrandName = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
`;

const BrandCopy = styled.p`
  margin: 0;
  max-width: 360px;
  font-size: 13px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
`;

const LinksBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const BlockTitle = styled.h4`
  margin: 0;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
`;

const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px 24px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FooterLink = styled(Link)`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #ff7bc6;
  }
`;

const ContactText = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.82);
`;

const ContactLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const SocialLink = styled.a`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.08);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.35);
    background: rgba(255, 255, 255, 0.14);
  }
`;

const SocialIcon = styled.img`
  width: 22px;
  height: 22px;
  object-fit: contain;
`;

const LegalRow = styled.div`
  width: 100%;
  margin: 0;
  padding: 12px clamp(24px, 6vw, 120px) ${({ $compactBottom }) => ($compactBottom ? "0" : "10px")};
  border-top: 1px solid rgba(255, 255, 255, 0.04);
`;

const LegalText = styled.p`
  margin: 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.55);
`;
