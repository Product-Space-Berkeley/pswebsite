import styled from 'styled-components'
import ApplyBG from '../images/pictures/applyBG.png'
import HomePG from '../images/pictures/HomeBG.png'
import { Link } from "react-router-dom"
import sp23funboard from "../images/pictures/funboardsp23.jpg"

const handleLinkClick = () => {
    window.scrollTo(0, 1200);
  };


function ApplyPanel() {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };

    return (
    <Panel> 
        <OpeningHeader>
            <HeadingTitle> Apply</HeadingTitle>
            <HeadingSubtitle> 
                <HeadingInfo>
                Product Space welcomes anyone with a passion for PM 
                to apply. Join us and shape your product journey! 
                </HeadingInfo>
                <ApplicationButton style={{border: "none"}}/>
               <ApplicationButton
                        role="link" style={{zIndex: "100"}}
                        onClick={() => openInNewTab("https://forms.gle/3Eri4GnbXJdMcgPh7")}>
                            Start Application
                    </ApplicationButton> 

             </HeadingSubtitle>

            
        </OpeningHeader>
        <PictureContainer> 
             <PictureBox src={sp23funboard} />
        </PictureContainer>
     </Panel> 
    )
}

export default ApplyPanel;

const Panel = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    background: url(${HomePG});
    background-size: cover;
    background-position: top;
    background-attachment: fixed;


    @media only screen and (max-width: 450px){
        display: flex; 
        // justify-content: center;
        // align-items: center;
    }
    // border: solid black; 
`
const OpeningHeader = styled.div`
    width: auto; 
    height: 300px;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    gap: 10px;
    padding-left: 90px;

    // border: solid yellow;

    @media only screen and (max-width: 450px) {
        display: flex; 
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: auto;
        padding-left: 0px;

        // border: solid yellow;
        
    }
`

const HeadingTitle = styled.div`
    font-size: 60px;
    padding-bottom: 20px;

    @media only screen and (max-width: 450px) {
        margin-top: 30px;
        text-align: center;

        // border: solid red;
    }

`

const HeadingSubtitle = styled.div`
    font-size: 22px;
    padding-bottom: 40px;
    width: 600px;

    // border: solid black;

    display: flex;
    flex-direction: column;
    min-height: 0; /* Allow content to expand vertically */

    @media only screen and (max-width: 450px) {
        width: 250px;
        text-align: center;
        // border: solid red;
    }
`


const Subtitle = styled.div`
    color: #EB5B8D;
    font-size: 18px;
    // font-weight: 500;
    text-decoration: none;

    margin-top: 10px;
    width: 400px;

    @media only screen and (max-width: 450px) {
        width: 250px;
        text-align: center;
        // border: solid red;
    }
`

const HeadingInfo = styled.div`

`
const ALink = styled(Link)`
    font-weight: 700;
    text-decoration: none;
`

const MoreInfo = styled.div`
    margin-top: 100px;

    // border: solid red;
`
const PictureContainer = styled.div`
    height: auto;
    width: 700px;

    display: flex; 
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-right: 50px;

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

const ApplicationButton = styled.button`
    font-size: 24px;
    color: #EB5B8D;
    border: solid #EB5B8D 3px;
    border-radius: 15px;
    background: none;
    width: 250px;
    height: auto;

    margin-top: 40px;

    &:hover {
        cursor: pointer;
    } 
    @media only screen and (max-width: 600px) {
        width: auto;

    }

    

    // border: solid black 1px;
`




