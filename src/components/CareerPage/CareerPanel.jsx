import styled from 'styled-components'
import CareerPanelPic from '../images/pictures/CareerPanelPic.png'
import HomePG from '../images/pictures/HomeBG.png'


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
    padding-left: 90px;

    // border: solid yellow;
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

    @media only screen and (max-width: 400px) {
        // width: 350px;
        // height: 300px;
        text-align: center;
        // border: solid red;
    }
`

const PictureContainer = styled.div`
    height: auto;
    width: 700px;

    display: flex; 
    align-items: center;
    justify-content: center;

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

    @media only screen and (max-width: 400px) {
        display: none;
    }

`
const PictureBox = styled.img`
    width: 680px;
    height: 430px;

`;

function CareerPanel() {
    return (
        <Panel>
            <OpeningHeader>
                <HeadingTitle> Careers</HeadingTitle>
                <HeadingSubtitle> 
                Product Space represents a significant proportion 
                of associate product managers from UC Berkeley. 
                From Google to Reddit to Twitter, 17 APM and PM 
                programs have had Product Space members as an intern 
                or full-timer. We've compiled our members' career 
                placement for 2023 below.
                </HeadingSubtitle>
            </OpeningHeader>
            <PictureContainer> 
                <PictureBox src={CareerPanelPic} />
            </PictureContainer>

        </Panel>

    )
}

export default CareerPanel;