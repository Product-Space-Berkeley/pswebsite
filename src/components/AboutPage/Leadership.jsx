import React from "react";
import styled from "styled-components"
import LeadershipInfo from "./LeadershipInfo"

import rickXu from "../images/people/rickxu.png"
import vickyXiao from "../images/people/vickyxiao.png"
import ayamiMatsumura from "../images/people/ayamimatsumura.png"
import xiaoLi from "../images/people/xiaoli.png"
import michaelBohm from "../images/people/michaelbohm.png"
import mischaMikami from "../images/people/mischamikami.png"
import carlyChan from "../images/people/carlychan.png"
import timZhou from "../images/people/timzhou.png"
import jonathanChiang from "../images/people/jonathanchiang.png"
import jordanHuang from "../images/people/jordanhuang.png"
import vaishaviSahu from "../images/people/vaishavisahu.png"
import alexVennemeyer from "../images/people/alexvennemeyer.png"
import danicaHartawan from "../images/people/danicahartawan.png"
import ethanYang from "../images/people/ethanyang.png"
import lianaKong from "../images/people/lianakong.png"
import maanyaRaghuram from "../images/people/maanyaraghuram.png"
import tiffanyLin from "../images/people/tiffanylin.png"
import nicholasChua from "../images/people/nicholaschua.png"
import memberInfo from "../AboutPage/MemberInfo"

// Importing pictures is funky so I'm using a map here

const imageMap = {
    "rickxu": rickXu,
    "vickyxiao": vickyXiao,
    "ayamimatsumura": ayamiMatsumura,
    "xiaoli": xiaoLi,
    "michaelbohm": michaelBohm,
    "mischamikami": mischaMikami,
    "carlychan": carlyChan,
    "timzhou": timZhou,
    "jonathanchiang": jonathanChiang,
    "jordanhuang": jordanHuang,
    "vaishavisahu": vaishaviSahu,
    "alexvennemeyer": alexVennemeyer,
    "danicahartawan": danicaHartawan,
    "ethanyang": ethanYang,
    "lianakong": lianaKong,
    "maanyaraghuram": maanyaRaghuram,
    "tiffanylin": tiffanyLin,
    "nicholaschua": nicholasChua
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
