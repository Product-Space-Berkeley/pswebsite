import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PS3DLogo from '../images/miscicons/ps3dlogo.png'

// Import all client logos from pastClients folder
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

const clientLogos = [
    amexLogo,
    lenovoLogo,
    microsoftLogo,
    metaLogo,
    samsungLogo,
    lucidLogo,
    oracleLogo,
    twitchLogo,
    uberLogo
]

function OpeningPanel({ logoSrc = PS3DLogo }) {
    return (
        <HeroSection>
            <HeroContent>
                <ContentWrapper>
                    <TextContent>
                        <HeadingWrapper data-hero-item style={{ '--reveal-delay': '0ms' }}>
                            <HeadingLine1>PRODUCT SPACE</HeadingLine1>
                            <HeadingLine2>@ UC BERKELEY</HeadingLine2>
                        </HeadingWrapper>
                        <Subheading data-hero-item style={{ '--reveal-delay': '120ms' }}>
                            UC Berkeley's First Product Management Organization
                        </Subheading>
                        <ButtonGroup data-hero-item style={{ '--reveal-delay': '240ms' }}>
                            <ApplyButton to="/Apply">Apply</ApplyButton>
                            <LearnMoreButton to="/About">Learn More</LearnMoreButton>
                        </ButtonGroup>
                    </TextContent>
                    <ImageContent data-hero-item style={{ '--reveal-delay': '180ms' }}>
                        <LogoImage src={logoSrc} alt="Product Space 3D Logo" />
                    </ImageContent>
                </ContentWrapper>

                <PastClientsSection data-hero-item style={{ '--reveal-delay': '320ms' }}>
                    <PastClientsLabel>PAST CLIENTS</PastClientsLabel>
                    <CarouselContainer>
                        <CarouselTrack>
                            {/* Duplicate logos for seamless infinite scroll */}
                            {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => {
                                const isUberOrLucid = logo === uberLogo || logo === lucidLogo;
                                const isMeta = logo === metaLogo;
                                const isUber = logo === uberLogo;
                                const isLucid = logo === lucidLogo;
                                return (
                                    <LogoWrapper key={index}>
                                        <ClientLogo
                                            src={logo}
                                            alt="Client logo"
                                            $inverted={isUberOrLucid}
                                            $metaStyle={isMeta}
                                            $isUber={isUber}
                                            $isLucid={isLucid}
                                        />
                                    </LogoWrapper>
                                );
                            })}
                        </CarouselTrack>
                    </CarouselContainer>
                </PastClientsSection>
            </HeroContent>
        </HeroSection>
    )
}

export default OpeningPanel;

const HeroSection = styled.section`
    width: 100%;
    min-height: 100vh;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 0 0;
    position: relative;
    box-sizing: border-box;

    @media only screen and (max-width: 1024px) {
        min-height: auto;
        padding: 60px 0 0;
    }

    @media only screen and (max-width: 768px) {
        padding: 50px 0 0;
    }

    @media only screen and (max-width: 640px) {
        padding: 40px 0 0;
    }
`

const HeroContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;

    @media only screen and (max-width: 968px) {
        gap: 40px;
    }

    @media only screen and (max-width: 640px) {
        gap: 35px;
    }
`

const ContentWrapper = styled.div`
    max-width: 1280px;
    width: 100%;
    padding: 0 80px;
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
    gap: 120px;
    align-items: center;

    @media only screen and (max-width: 1200px) {
        gap: 80px;
        padding: 0 60px;
    }

    @media only screen and (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 60px;
        text-align: center;
        padding: 0 40px;
    }

    @media only screen and (max-width: 640px) {
        gap: 48px;
        padding: 0 24px;
    }
`

const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 620px;

    @media only screen and (max-width: 968px) {
        align-items: center;
        max-width: 100%;
    }

    @media only screen and (max-width: 640px) {
        gap: 24px;
    }
`

const HeadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`

const HeadingLine1 = styled.h1`
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 64px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 1.1;
    margin: 0;

    @media only screen and (max-width: 1200px) {
        font-size: 56px;
    }

    @media only screen and (max-width: 968px) {
        font-size: 48px;
    }

    @media only screen and (max-width: 640px) {
        font-size: 40px;
    }

    @media only screen and (max-width: 480px) {
        font-size: 32px;
    }
`

const HeadingLine2 = styled.h1`
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 50px;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 1.1;
    margin: 0;

    @media only screen and (max-width: 1200px) {
        font-size: 56px;
    }

    @media only screen and (max-width: 968px) {
        font-size: 48px;
    }

    @media only screen and (max-width: 640px) {
        font-size: 40px;
    }

    @media only screen and (max-width: 480px) {
        font-size: 32px;
    }
`

const Subheading = styled.p`
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 1.6;
    margin: -2px 0 0;
    max-width: 560px;

    @media only screen and (max-width: 968px) {
        max-width: 100%;
    }

    @media only screen and (max-width: 768px) {
        font-size: 18px;
    }

    @media only screen and (max-width: 640px) {
        font-size: 16px;
    }

    @media only screen and (max-width: 480px) {
        font-size: 15px;
    }
`


const ButtonGroup = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 8px;

    @media only screen and (max-width: 968px) {
        justify-content: center;
    }

    @media only screen and (max-width: 480px) {
        flex-direction: column;
        width: 100%;
        gap: 12px;
        margin-top: 4px;
    }
`

const ApplyButton = styled(Link)`
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 55px;
    padding: 0 40px;
    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    border-radius: 15px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    color: #000000;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;

    &:hover {
        background: #f5f5f5;
        transform: translateY(-2px);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
    }

    @media only screen and (max-width: 768px) {
        font-size: 18px;
        height: 50px;
        padding: 0 35px;
    }

    @media only screen and (max-width: 480px) {
        width: 100%;
        max-width: 320px;
        font-size: 18px;
    }
`

const LearnMoreButton = styled(Link)`
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 55px;
    padding: 0 40px;
    background: transparent;
    border: 1px solid #FFFFFF;
    border-radius: 15px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;

    &:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: translateY(-2px);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
    }

    @media only screen and (max-width: 768px) {
        font-size: 18px;
        height: 50px;
        padding: 0 35px;
    }

    @media only screen and (max-width: 480px) {
        width: 100%;
        max-width: 320px;
        font-size: 18px;
    }
`

const ImageContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 600px;

    @media only screen and (max-width: 1200px) {
        max-width: 520px;
    }

    @media only screen and (max-width: 968px) {
        max-width: 450px;
        justify-content: center;
        align-self: center;
    }

    @media only screen and (max-width: 640px) {
        max-width: 350px;
        margin: 0 auto;
    }

    @media only screen and (max-width: 480px) {
        max-width: 280px;
        margin: 0 auto;
    }
`

const LogoImage = styled.img`
    width: 100%;
    height: auto;
    max-width: 600px;
    max-height: 590px;
    object-fit: contain;
    filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3));

    @media only screen and (max-width: 1200px) {
        max-width: 520px;
        max-height: 510px;
    }

    @media only screen and (max-width: 968px) {
        max-width: 450px;
        max-height: 440px;
    }

    @media only screen and (max-width: 640px) {
        max-width: 350px;
        max-height: 340px;
    }

    @media only screen and (max-width: 480px) {
        max-width: 280px;
        max-height: 275px;
    }

`

const CredibilityLine = styled.div`
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 13px;
    letter-spacing: 0.6px;
    color: rgba(255, 255, 255, 0.7);
    margin-top: -6px;
`

const PastClientsSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;

    @media only screen and (max-width: 640px) {
        gap: 24px;
    }
`

const PastClientsLabel = styled.h2`
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 20px;
    font-weight: 400;
    font-style: normal;
    line-height: normal;
    color: #969696;
    text-align: center;
    margin: 0;
    letter-spacing: 0.5px;

    @media only screen and (max-width: 640px) {
        font-size: 20px;
    }

    @media only screen and (max-width: 480px) {
        font-size: 18px;
    }
`

const CarouselContainer = styled.div`
    width: 100%;
    max-width: 900px;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    mask-image: linear-gradient(
        to right,
        transparent,
        black 10%,
        black 90%,
        transparent
    );
    -webkit-mask-image: linear-gradient(
        to right,
        transparent,
        black 10%,
        black 90%,
        transparent
    );

    @media only screen and (max-width: 968px) {
        max-width: 720px;
    }

    @media only screen and (max-width: 640px) {
        max-width: 600px;
    }
`

const CarouselTrack = styled.div`
    display: flex;
    gap: 60px;
    align-items: center;
    width: max-content;
    animation: scroll 30s linear infinite;

    @media (prefers-reduced-motion: reduce) {
        animation: none;
        overflow-x: auto;
        justify-content: center;
        padding: 0 40px;
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-33.333%);
        }
    }

    @media only screen and (max-width: 968px) {
        gap: 50px;
    }

    @media only screen and (max-width: 640px) {
        gap: 40px;
    }
`

const LogoWrapper = styled.div`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 76px;

    @media only screen and (max-width: 640px) {
        width: 120px;
        height: 62px;
    }

    @media only screen and (max-width: 480px) {
        width: 95px;
        height: 48px;
    }
`

const ClientLogo = styled.img`
    max-width: ${props => {
        if (props.$isUber) return '65%';
        if (props.$metaStyle) return '180%';
        if (props.$isLucid) return '150%';
        return '100%';
    }};
    max-height: ${props => {
        if (props.$isUber) return '65%';
        if (props.$metaStyle) return '180%';
        if (props.$isLucid) return '150%';
        return '100%';
    }};
    width: auto;
    height: auto;
    object-fit: contain;
    opacity: 0.85;
    transition: all 0.3s ease;
    filter: ${props => {
        if (props.$inverted) return 'brightness(0) invert(1)';
        if (props.$metaStyle) return 'brightness(1.8) saturate(1.5)';
        return 'none';
    }};

    &:hover {
        opacity: 1;
        transform: scale(1.05);
    }
`
