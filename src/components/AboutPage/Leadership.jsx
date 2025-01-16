import React from "react";
import styled from "styled-components"
import LeadershipInfo from "./LeadershipInfo"

import anisa from "../images/people/anisa.png"
import chris from "../images/people/chrislee.png"
import andy from "../images/people/andywei.png"
import christine from "../images/people/christine.png"
import melanie from "../images/people/melanie.png"
import ryan from "../images/people/ryan.png"
import rick from "../images/people/rickxu.png"
import nina from "../images/people/ninacheuck.png"
import ayami from "../images/people/ayami.png"
import lucas from "../images/people/lucas.png"
import xiao from "../images/people/xiao.png"
import oscar from "../images/people/oscar.png"
import carly from "../images/people/carlychan.png"
import jonathan from "../images/people/jonathanchiang.png"
import michael from "../images/people/michaelbohm.png"
import mischa from "../images/people/mischa.png"
import tim from "../images/people/timzhou.png"
import vyoma from "../images/people/vyoma.png"
import dasang from "../images/people/dasang.png"
import vaishavi from "../images/people/dasang.png"

import memberInfo from "../AboutPage/MemberInfo"

// Importing pictures is funky so I'm using a map here

const imageMap = {
    "anisamajhi": anisa,
    "chrislee": chris,
    "andywei": andy,
    "christinewong": christine,
    "melaniehsiang": melanie,
    "ryancho": ryan,
    "rickxu": rick,
    "ninacheuck": nina,
    "melaniehsiang": melanie,
    "ryancho": ryan,
    "ninacheuck": nina,
    "ayami": ayami,
    "lucasomori": lucas,
    "xiao": xiao,
    "carlychan": carly,
    "jonathanchiang": jonathan,
    "michaelbohm": michael,
    "mischa": mischa,
    "timzhou": tim,
    "vyoma": vyoma,
    "oscarchow": oscar,
    "dasangdolma": dasang
}

function Leadership() {
    return (
       <Container> 
            <Headers>
                <HeadingText> LEADERSHIP</HeadingText>
                <Subtitle> Hover over the cards to sign up for coffee chats and to learn more about our leadership!</Subtitle>
                <Subtitle> Note* -  number of coffee chats are limited to 2 per person</Subtitle>
                    
            </Headers>
            <LeadersContainer> 
                {memberInfo.leadership.map((leader) => (
                    <LeaderCard>
                        <LeaderImage src={imageMap[leader.imagekey]} alt="leader " /> 
                        <LeaderInfo> 
                            <LeadershipInfo fullname={leader.fullname} position={leader.position} grade={leader.grade}
                            major={leader.major} hobbies={leader.hobbies}
                            email={leader.email} linkedin={leader.linkedin}
                            calendlylink={leader.calendlylink}/>
                        </LeaderInfo>
                    </LeaderCard>
                ))}
            </LeadersContainer>
       </Container>
    )
}

export default Leadership;
const Container = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center; 
    flex-direction: column;
    gap: 0px;

    @media only screen and (max-width: 400px) {
        margin-top: 70px;

    }
`


const LeadersContainer = styled.div`
    width: 80%;
    height: auto;
    align-content: flex-start;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around; 
    gap: 50px;

    // border: black solid;
`
const LeaderImage = styled.img`
    // NOTE!!!! Frame radio: 1 (width) to 1.46 (height)
    width: 225px;
    height: 305px; 
    border-radius: 10px;
    margin-top: 10px;
    padding-bottom: 10px;
    transition: filter 0.5s;

    object-fit: cover;
    object-position: center;
    

    
    // border: solid black;
`
const LeaderInfo = styled.div`
    width: 250px;
    height: 500px;
    position: absolute;
    overflow: hidden;
    margin-top: 330px;
    
    display: flex; 
    flex-direction: column;
    align-items: center;
    
    transition: margin-top 0.5s;
    background-color: white;
    opacity: 0.95;
    border-radius: 10px;

    // border: solid purple;
`

const LeaderCard = styled.div`
    width: 280px;
    height: 430px; 
    position: relative;
    background: #F9D4DF;
    border-radius: 10px;
    
    overflow: hidden; 
    display: flex; 
    flex-direction: column;
    align-items: center;


    &:hover ${LeaderInfo} {
        margin-top: 70px;
      }

    &:hover ${LeaderImage} {
        filter: blur(2px);
    }
    
    padding-top: 10px;

    // border: solid blue;
`

const HeadingText = styled.h2`
    color: #EB5B8D;
    font-size: 24px;
    font-weight: 500;
    font-size: 30px;

    padding-top: 70px;

    // border: solid black;

`

const Subtitle = styled.div`
    color: #EB5B8D;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    
    margin-bottom: 30px; 
    // padding-left: 100px;
    width: 480px;

    // border: solid red;

    @media only screen and (max-width: 450px) {
        width: 80%;

    }
`

const Headers = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    // border: solid blue;

    @media only screen and (max-width: 450px) {
        width: 80%;

    }
`
