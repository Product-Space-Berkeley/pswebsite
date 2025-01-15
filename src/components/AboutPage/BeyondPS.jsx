import styled from "styled-components"
import duolingo from "../images/company/duolingoLogo.png"
import databricks from "../images/company/databricksLogo.png"
import google from "../images/company/googleLogo.png"
import salesforce from "../images/company/salesforceLogo.png"
import microsoft from "../images/company/microsoftLogo.png"
import hubspot from "../images/company/hubspot2.png"
import amex from "../images/company/amex.png"
import eagames from "../images/company/eagames2.png"
import tesla from "../images/company/tesla2.png"
import robinhood from "../images/company/robinhood2.png"
import apple from "../images/company/apple2.png"
import blizzard from "../images/company/blizzard2.png"
import zoom from "../images/company/zoom2.png"
import bcg from "../images/company/BCGLogo.png"
import cisco from "../images/company/ciscoLogo.png"
import stripe from "../images/company/stripeLogo.png"
import amazon from "../images/company/amazonLogo.png"
import workday from "../images/company/workdayLogo.png"
import pan from "../images/company/paloaltonetowrksLogo.png"
import roblox from "../images/company/robloxLogo.png"
import twitter from "../images/company/TwitterLogo.png"
import uber from "../images/company/uberLogo.png"
import IBM from "../images/company/IBMLogo.png"
import nvidia from "../images/company/NVIDIALogo.png"
import retool from "../images/company/retoolLogo.png"
import tackle from "../images/company/tackleioLogo.png"
import bain from "../images/company/bainLogo.png"

function BeyondPS() {
    return(
        <Container>
            <TextContainer>
                 <HeaderText>BEYOND PRODUCT SPACE</HeaderText>
                 <Description> 
                 Our members and alumni have continued their product 
                 management journeys at a variety of companies through 
                 internships and full-time opportunities.
                 </Description>
            </TextContainer>
                <LogoContainerBeta>
                    <Logos src={salesforce} alt="Salesforce" width={125}  height={90}/>
                    <Logos src={google} alt="Google" width={90}  height={90}/>
                    <Logos src={duolingo} alt="Duolingo" width={90}  height={90}/>
                    <Logos src={databricks} alt="Databricks" width={100}  height={90}/>
                    <Logos src={microsoft} alt="Microsoft" width={90}  height={90}/>
                    <Logos src={hubspot} alt="hubspot" width={140}  height={90}/>
                    <Logos src={amex} alt="AMEX" width={90}  height={90}/>
                    <Logos src={eagames} alt="EAGames" width={90}  height={90}/>
                    <Logos src={tesla} alt="Tesla" width={120}  height={80}/>
                    <Logos src={robinhood} alt="Robinhood" width={150}  height={90}/>
                    <Logos src={apple} alt="Apple" width={160}  height={90}/>
                    <Logos src={blizzard} alt="Blizzard" width={160}  height={80}/>
                    <Logos src={bcg} alt="Boston Consulting Group" width={140}  height={90}/>
                    <Logos src={cisco} alt="Cisco" width={125}  height={80}/>
                    <Logos src={stripe} alt="Stripe" width={145}  height={65}/>
                    <Logos src={amazon} alt="Amazon" width={145}  height={75}/>
                    <Logos src={workday} alt="Workday" width={140}  height={90}/>
                    <Logos src={pan} alt="Palo Alto Networks" width={200}  height={70}/>
                    <Logos src={roblox} alt="Roblox" width={90}  height={90}/>
                    <Logos src={twitter} alt="Twitter" width={90}  height={90}/>
                    <Logos src={uber} alt="Uber" width={100}  height={75}/>
                    <Logos src={IBM} alt="IBM" width={130}  height={70}/>
                    <Logos src={nvidia} alt="NVIDIA" width={200}  height={80}/>
                    <Logos src={retool} alt="Retool" width={180}  height={60}/>
                    <Logos src={tackle} alt="Tackle.io" width={190}  height={60}/>
                    <Logos src={bain} alt="Bain" width={120}  height={50}/>



            
                </LogoContainerBeta>

        </Container>
    )
}

export default BeyondPS;

const Container = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 450px) {
        display: none;

    }
`

const TextContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 80px;

    // border: solid black;
`
const HeaderText = styled.h1`
    color: #EB5B8D;
    font-size: 24px;
    font-weight: 500;
    font-size: 30px;
`
const Description = styled.h2`
    color: purple;
    font-size: 20px;
    font-weight: normal;
    width: 60%;
    text-align: center;
    line-height: 2;

`

const Logos = styled.img`
    width: ${(props) => props.width ? `${props.width}px` : 'auto'};
    height: ${(props) => props.height ? `${props.height}px` : 'auto'};
    // transform: scale(0.7);



    // border: solid black;

`
const LogoContainerBeta = styled.div`
    display: flex;
    height: auto;
    width: 1000px;
    flex-wrap: wrap;
    justify-content: center;

    padding-bottom: 80px;
    gap: 70px;
    // border: solid black; 

    @media only screen and (max-width: 1400px) {
        max-width: 1000px;
        width: auto;
    }
    @media only screen and (max-width: 450px) {
        display: none;

    }
`

