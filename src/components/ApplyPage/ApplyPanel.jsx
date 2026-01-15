import styled from 'styled-components'
import sp23funboard from "../images/pictures/fa24JPG.JPG"

function ApplyPanel() {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };

    return (
    <Panel> 
        <HeroGrid>
            <OpeningHeader>
                <HeadingTitle>Apply</HeadingTitle>
                <HeadingSubtitle>
                    Product Space welcomes anyone with a passion for PM to apply. Join
                    us and shape your product journey!
                </HeadingSubtitle>
                <ApplicationButton
                    role="link"
                    onClick={() => openInNewTab("https://forms.gle/JAWhDGXKSKisSuEg7")}>
                    Start Application
                </ApplicationButton>
            </OpeningHeader>
            <PictureContainer> 
                 <PictureBox src={sp23funboard} alt="Product Space team" />
            </PictureContainer>
        </HeroGrid>
     </Panel> 
    )
}

export default ApplyPanel;

const Panel = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: clamp(88px, 14vh, 170px) clamp(32px, 8vw, 140px) 90px;
    position: relative;
    background: transparent;
    overflow: hidden;
`
const HeroGrid = styled.div`
    width: min(1320px, 100%);
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.3fr);
    align-items: center;
    gap: clamp(36px, 7vw, 90px);

    @media only screen and (max-width: 900px) {
        grid-template-columns: 1fr;
        text-align: center;
        justify-items: center;
    }
`

const OpeningHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    position: relative;
    z-index: 1;
`

const HeadingEyebrow = styled.span`
    font-size: 12px;
    letter-spacing: 2.4px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.6);
`

const HeadingTitle = styled.h1`
    font-size: clamp(44px, 6vw, 70px);
    margin: 0;
    letter-spacing: -0.4px;
`

const HeadingSubtitle = styled.p`
    font-size: 17px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.72);
    margin: 0;
    max-width: 560px;

    @media only screen and (max-width: 900px) {
        max-width: 520px;
    }
`

const PictureContainer = styled.div`
    width: min(720px, 100%);
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 32px 80px rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.08);
    position: relative;
    z-index: 1;
`

const PictureBox = styled.img`
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    object-position: 35% center;
`

const ApplicationButton = styled.button`
    margin-top: 12px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1.3px;
    text-transform: uppercase;
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.14);
    padding: 13px 28px;
    width: fit-content;

    &:hover {
        cursor: pointer;
        border-color: rgba(255, 255, 255, 0.9);
    }
`
