import styled from 'styled-components'
import HomePG from '../images/pictures/HomeBG.png'
import StudentPanelPic from '../images/pictures/StudentsPanelPic.png'


function StudentPanel() {
    return (
        <Panel>
            <OpeningHeader>
                <HeadingTitle> Curricula</HeadingTitle>
                <HeadingSubtitle> 
                At Product Space, we invest a lot of our energies
                into creating educational programs that are relevant,
                high-impact, and full of insights into product management. 
                From tackling interviews to performing case studies on
                real-world issues, our members have made remarkable achievements
                    putting what they’ve learned at Product Space into their
                    internships and beyond.
                </HeadingSubtitle>
            </OpeningHeader>
            <PictureContainer> 
                <PictureBox src={StudentPanelPic} />
            </PictureContainer>
        </Panel>

    )
}

export default StudentPanel;

const Panel = styled.div`
    min-height: 650px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    background: url(${HomePG});
    background-size: cover;
    background-position: top;
    background-attachment: fixed;

    // border: solid black; 
    
    @media only screen and (max-width: 450px) {
        width: 100%;

        // border: solid black;

    }

`
const OpeningHeader = styled.div`
    width: 500px;; 
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    // padding-left: 90px;

    @media only screen and (max-width: 450px) {
        display: flex; 
        align-items: center;

        // border: solid black;

    }

    // border: solid yellow;
`

const HeadingTitle = styled.div`
    font-size: 60px;
    padding-bottom: 20px;

`

const HeadingSubtitle = styled.div`
    font-size: 22px;
    padding-bottom: 40px;
    min-width: 350px;

    @media only screen and (max-width: 450px) {
        width: 350px;
        height: 300px;
        text-align: center;
        // border: solid red;
    }

`
const PictureContainer = styled.div`
    height: auto;
    width: 800px;
    margin-top: 50px;
    margin-bottom: 50px;

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

    @media only screen and (max-width: 600px) {
        display: none;
    }

`
const PictureBox = styled.img`
    width: 700px;
    height: 550px;

`;
