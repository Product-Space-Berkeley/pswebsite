import styled from 'styled-components'
import HomePG from '../images/pictures/HomeBG.png'
import sp23Fellowship from '../images/pictures/fa22fellowship.png'
import AboutPanelPic from '../images/pictures/AboutPanelPic.png'
import fa23banquet from "../images/pictures/fa23banquetfellowship.png"
import fa23retreatfellows from "../images/pictures/fa23retreatfellows.png"

function AboutPanel() {
    return (
        <Panel>
            <OpeningHeader>
                <HeadingTitle> Mission</HeadingTitle>
                <HeadingSubtitle> 
                At Product Space, our mission is to help undergraduate 
                students nurture the skills demanded in this field so 
                they can thrive as product leaders and help others who are
                interested in product management. To accomplish this, we
                continue to build a strong, engaged community of future 
                product managers who are excited to embark on their product 
                journey and desire to give back as much as they take.
                </HeadingSubtitle>
            </OpeningHeader>
            <AboutPanelPicContainer>
                <AboutVPictureBox src={fa23retreatfellows}/>
                <AboutHPictureBox src={fa23banquet} />
            </AboutPanelPicContainer>

    </Panel>

    )
}

export default AboutPanel;

const Panel = styled.div`
    width: 100%;
    min-height: 700px;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    top: 0;
    // margin-top: 70px;

    background: url(${HomePG});
    background-size: cover;
    background-position: top;
    background-attachment: fixed;

    @media only screen and (max-width: 450px) {
        margin-bottom: 100px;
    }

    // border: solid black; 
`
const OpeningHeader = styled.div`
    width: 600px; 
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    // padding-left: 90px;
    align-items: flex-start;

    // border: solid yellow;


    @media only screen and (max-width: 450px) {
        width: 80%;
        text-align: center;
        display: flex; 
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // padding-left: 60px;
        padding-top: 50px;
        // flex-wrap: wrap;
    }
`

const HeadingTitle = styled.div`
    font-size: 60px;
    padding-bottom: 20px;

    // border: solid yellow;

`

const HeadingSubtitle = styled.div`
    font-size: 22px;
    padding-bottom: 40px;
    min-width: 350px;

    // border: solid blue;


    @media only screen and (max-width: 450px) {
        height: 600px;
        
        // border: solid black;

    }
`

const PictureContainer = styled.div`
    height: auto;
    display: flex;
    align-items: center;
    
    animation: Appear 0.5s ease-in-out 0.5s both;

    @keyframes Appear {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @media only screen and (max-width: 450px) {
        display: none;

    }

    // border: solid black;

`

const AboutPanelPicContainer = styled.div`
    // height: auto;
    // width: 800px;

    display: flex; 
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;

    margin-right: 80px;
    margin-top: 40px;
    margin-bottom: 40px;

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

    @media only screen and (max-width: 450px) {
        display: none;
    }

`
const AboutHPictureBox = styled.img`
    width: 460px;
    height: 400px;

    object-fit: cover;
    object-position: center;

`;
const AboutVPictureBox = styled.img`
    width: 360px;
    height: 520px;

    object-fit: cover;
    object-position: center;
    

`;

