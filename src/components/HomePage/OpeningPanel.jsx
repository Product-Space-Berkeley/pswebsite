import styled from 'styled-components'
import HomePG from '../images/pictures/HomeBG.png'
import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react'
import psHomeLogo from '../images/miscicons/psHomeLogo.png'
import CompanyPanelPic from '../images/pictures/CompanyPanelPic.png'
import digHealth from '../images/pictures/sp23dighealth.jpg'
import psbasketball from '../images/pictures/sp23basketball.jpg'
import allclubformal from '../images/pictures/sp23allclubformal.png'
import calday from '../images/pictures/caldaysp23.png'
import sp24fellows from '../images/pictures/sp24fellowship.JPG'
import Logo from '../images/miscicons/PSLogo.png'


const handleLinkClick = () => {
    window.scrollTo(0, 1200);
  };

function OpeningPanel() {

    const images = [allclubformal, sp24fellows, digHealth, calday];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        // Calculate the next image index
        const nextIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(nextIndex);
        }, 2500); // 2.5 seconds in milliseconds

        return () => {
        // Clear the interval when the component unmounts
        clearInterval(interval);
        };
    }, [currentImageIndex, images.length]);


    return (
        <div>
            <Panel>
                <OpeningHeader>
                    <HeadingTextContainer>
                        <HeadingTitle> Product Space </HeadingTitle>
                        <HeadingSubtitle> @ UC Berkeley </HeadingSubtitle>
                        <ButtonContainer>
                            <ApplyButton to="../Apply"> Apply </ApplyButton>
                            <CoffeeChatButton to="../About" onClick={handleLinkClick}>Coffee Chats</CoffeeChatButton>
                        </ButtonContainer>
                    </HeadingTextContainer>
                    <TitleImage src={Logo} />
                </OpeningHeader>
            </Panel>
        </div>

    )
}

export default OpeningPanel;

const Panel = styled.div`
    max-width: 80%;
    margin: 0 auto;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    padding-bottom: 10px;
    padding-top: 10px;
    background: radial-gradient(ellipse closest-side, rgb(251, 196, 255) 0%, rgba(234, 208, 248, 0.8) 50%, rgba(255, 255, 255, 1) 100%);
    background-size: 90% 80%; 
    background-position: -9% 10%;
    background-repeat: no-repeat;


    @media only screen and (max-width: 450px) {
        display: flex; 
        flex-direction: column;
        width: 80%;
        text-align: center;
        justify-content: center;
        padding-left: 35px;

    }
    // border: solid yellow;
    
`
const OpeningHeader = styled.div`
    width: auto; 
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    padding: 100px;
    gap: 50px;

    // border: solid yellow;

    @media only screen and (max-width: 800px) {
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        gap: 20px;

        // border: solid yellow;
    }
`

const HeadingTextContainer = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: flex-start; 
    text-align: left;
`;

const HeadingTitle = styled.div`
    font-size: 84px;
    font-weight: 550;
    color: #311543;

    @media only screen and (max-width: 450px) {
        width: 190px;
        display: flex; 
        text-align: center;

        // border: solid black;
    }
`

const HeadingSubtitle = styled.div`
    font-size: 44px;
    color: transparent;
    background-image: linear-gradient(to right, #753D92, #A364A5, #D0909D);
    background-clip: text;
    padding-bottom: 40px;
    font-weight: 450;
    width: 520px;

    @media only screen and (max-width: 450px) {
        width: 230px;
        display: flex; 
        text-align: center;
        // border: solid black;
    }
`

const TitleImage = styled.img`
    width: 500px; 
    height: 500px;
    margin-right: 40px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    width: 300px;
    @media only screen and (max-width: 450px) {
        flex-direction: column;
        align-items: center
    }
`;

const ApplyButton = styled(Link)`

    font-size: 16px;
    font-weight: 700;
    border-radius: 15px;
    color: white; 
    background-color: #592E73; 
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

    border: none;
    text-decoration: none;
    margin-bottom: 20px;

    height: 50px;
    width: 200px;


    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 450px) {
        height: 100px;
        width: 300px;
        display: flex; 
        text-align: center;
        // border: solid black;
    }
`

const CoffeeChatButton = styled(Link)`
    font-size: 16px;
    font-weight: 700;
    border-radius: 15px;
    color: #592E73;
    background-color: transparent;

    border: 1.5px solid #592E73;
    text-decoration: none;
    margin-bottom: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;

    height: 50px;
    width: 200px;

    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 450px) {
        height: 100px;
        width: 300px;
    }
`;

const PSLogo = styled.img`
    width: 660px;
    height: 180px;

    @media only screen and (max-width: 700px) {
        width: 350px;
        height: 90px;
     }

`;

const PictureContainer = styled.div`
    height: 600px;
    width: 700px;


    display: flex; 
    align-items: center;
    justify-content: center;
    padding-top: 25px;

    // border: solid black;

    animation: Appear 0.5s ease-in-out 0.5s both;

    @keyframes Appear {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    @media only screen and (max-width: 700px) {
       display: none;
    }

`
const PictureBox = styled.img`
    width: auto;
    max-height: 500px;
    opacity: 0;
    position: absolute;
    transition: opacity 1s ease-in-out;

`;