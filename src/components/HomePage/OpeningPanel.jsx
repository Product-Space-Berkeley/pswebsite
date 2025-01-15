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
        <Panel>
            <OpeningHeader>
                {/* <HeadingTitle> Product Space @ Berkeley</HeadingTitle> */}
                <PSLogo src={psHomeLogo} />
                <HeadingSubtitle> UC Berkeley Product Management Organization</HeadingSubtitle>
                <ApplyButton to="../Apply"> Apply Now</ApplyButton>
                <ALink to="../About" onClick={handleLinkClick}>
                    <Subtitle> *Click Here to sign up for coffee chats</Subtitle>
                </ALink>

            </OpeningHeader>
            <PictureContainer> 
            {images.map((image, index) => (
                <PictureBox
                    key={index}
                    src={image}
                    style={{
                    opacity: currentImageIndex === index ? 1 : 0, // Control opacity
                    transition: 'opacity 1s ease-in-out', // Add CSS transition
                    }}
                />
            ))}
            </PictureContainer>
        </Panel>

    )
}

export default OpeningPanel;

const Panel = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    padding-bottom: 60px;

    background: url(${HomePG});
    background-size: cover;
    background-position: top;
    background-attachment: fixed;


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
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding-top: 30px;

    // border: solid yellow;

    @media only screen and (max-width: 450px) {
        width: 70%;
        justify-content: center;
        align-items: center;
        left: 0;

        // border: solid yellow;
    }

    
`

const HeadingTitle = styled.div`
    font-size: 60px;
    font-weight: 450;

    @media only screen and (max-width: 450px) {
        width: 190px;
        display: flex; 

        text-align: center;

        // border: solid black;
    }
`

const HeadingSubtitle = styled.div`
    font-size: 25px;
    color: #656565;
    padding-bottom: 40px;
    width: 520px;

    @media only screen and (max-width: 450px) {
        width: 230px;
        display: flex; 
        text-align: center;
        // border: solid black;
    }
`

const ApplyButton = styled(Link)`
    height: 60px;
    width: 150px;

    font-size: 16px;
    font-weight: 700;
    border-radius: 25px;
    color: white; 
    background-image: linear-gradient(to bottom, #DD7977, #DA668C);

    border: none;
    text-decoration: none;
    margin-bottom: 20px;


    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 450px) {
        height: 60px;
        width: 90px;
        display: flex; 
        text-align: center;
        // border: solid black;
    }
`

const Subtitle = styled.div`
    color: #EB5B8D;
    font-size: 18px;
    // font-weight: 500;
    // text-decoration: none;
    width: 330px;
    border-bottom: solid #EB5B8D;
`

const ALink = styled(Link)`
    font-weight: 700;
    text-decoration: none;

    
`

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
