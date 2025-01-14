import React from "react";
import styled from "styled-components"
import LeadershipInfo from "./LeadershipInfo"

import krish from "../images/people/krishkumar.png"
import yuta from "../images/people/yuta.png"
import wesley from "../images/people/wesley.png"
import su from "../images/people/su.png"
import angela from "../images/people/angela.png"
import dasang from "../images/people/dasang.png"
import michelle from "../images/people/michellelee.png"
import anisa from "../images/people/anisa.png"
import chris from "../images/people/chrislee.png"
import suhani from "../images/people/suhaniramchandra.png"
import christine from "../images/people/christine.png"
import rick from "../images/people/rickxu.png"
import anna from "../images/people/annacheng.png"
import lauren from "../images/people/lauren.png"
import andy from "../images/people/andywei.png"
import vicky from "../images/people/vicky.png"
import nina from "../images/people/ninacheuck.png"
import marissa from "../images/people/marissa.png"
import melanie from "../images/people/melanie.png"
import ryan from "../images/people/ryan.png"
import memberInfo from "../AboutPage/MemberInfo"

// Importing pictures is funky so I'm using a map here

const imageMap = {
    "krishkumar": krish,
    "yutayamada": yuta,
    "wesleygriggs": wesley,
    "sulee": su,
    "angelazhang": angela,
    "dasangdolma": dasang,
    "michellelee": michelle,
    "anisamajhi": anisa,
    "chrislee": chris,
    "suhanir": suhani,
    "christinewong": christine,
    "rickxu": rick,
    "annacheng": anna,
    "laurensung": lauren,
    "andywei": andy,
    "vickyxiao": vicky,
    "ninacheuck": nina,
    "marissajensen": marissa,
    "melaniehsiang": melanie,
    "ryancho": ryan
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
