import styled from 'styled-components'
import CareerPanelPic from '../images/pictures/CareerPanelPic.png'
import HomePG from '../images/pictures/HomeBG.png'
import yutalineage from '../images/pictures/yutalineage.jpg'
import truonglineage from '../images/pictures/truonglineage.jpg'
import tialineage from '../images/pictures/tialineage.jpg'


function CareerPanel() {
    return (
        <Panel>
            <OpeningHeader>
                <HeadingTitle> Careers</HeadingTitle>
                <HeadingSubtitle> 
                Product Space represents a significant proportion 
                of associate product managers from UC Berkeley. 
                From Google to Reddit to Twitter, 20+ APM and PM 
                programs have had Product Space members as an intern 
                or full-timer. We've compiled our members' career 
                placement for 2024 below.
                </HeadingSubtitle>
            </OpeningHeader>
            <PictureContainer>
                
                <HPictureBox src={yutalineage} />
                <VPictureBox src={tialineage}/> 
                <VPictureBox src={truonglineage}/> 
            </PictureContainer>

        </Panel>

    )
}

export default CareerPanel;

const Panel = styled.div`
    width: 100%;
    min-height: 600px;
    height: auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    background: url(${HomePG});
    background-size: cover;
    background-position: top;
    background-attachment: fixed;


    // border: solid black; 
`
const OpeningHeader = styled.div`
    width: 600px;; 
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    // padding-left: 90px;

    // border: solid yellow;

    @media only screen and (max-width: 450px) {
        align-items: center;
        width: 300px;
    }
`

const HeadingTitle = styled.div`
    font-size: 60px;
    padding-bottom: 20px;

`

const HeadingSubtitle = styled.div`
    font-size: 22px;
    padding-bottom: 40px;
    height: auto; 
    min-width: 250px;

    @media only screen and (max-width: 450px) {
        // width: 350px;
        // height: 300px;
        text-align: center;
        // border: solid red;
    }
`

const PictureContainer = styled.div`
    height: auto;
    width: 600px;

    display: flex; 
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

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
const HPictureBox = styled.img`
    width: 450px;
    height: 300px;

`;
const VPictureBox = styled.img`
    width: 220px;
    height: 300px;

`;
