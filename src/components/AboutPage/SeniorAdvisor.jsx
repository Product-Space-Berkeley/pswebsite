import styled from "styled-components"
import SeniorAdvisorInfo from "./SeniorAdvisorInfo"
import memberInfo from "../AboutPage/MemberInfo"
import jordanYee from "../images/people/jordanyee.png"
import shannonOr from "../images/people/shannonor.png"
import tylerMcnierney from "../images/people/tylermcnierney.png"
import garrettChau from "../images/people/garrettchau.png"
import cadyHsu from "../images/people/cadyhsu.png"
import kaydenFu from "../images/people/kaydenfu.png"
import truongNguyen from "../images/people/truongnguyen.png"
import hannahLi from "../images/people/hannahli.png"
import tiaChang from "../images/people/tiachang.png"
import ryanSun from "../images/people/ryansun.png"
import raymondFeng from "../images/people/raymondfeng.png"
import hanaMcnierney from "../images/people/hanamcnierney.png"
import geetanjaliJain from "../images/people/geetanjalijain.png"
import yutaYamada from "../images/people/yutayamada.png"
import mayaHaylock from "../images/people/mayahaylock.png"
import advaitMarathe from "../images/people/advaitmarathe.png"
import katherineGan from "../images/people/katherinegan.png"
import arnavGupta from "../images/people/arnavgupta.png"
import jerryZhang from "../images/people/jerryzhang.png"
import sahilMehta from "../images/people/sahilmehta.png"
import vigneshSiva from "../images/people/vigneshsiva.png"
import brandonQin from "../images/people/brandonqin.png"
import justinQuan from "../images/people/justinquan.png"
import aadhrikKuila from "../images/people/aadhrikkuila.png"
import kayliJiang from "../images/people/kaylijiang.png"
import prashantMalyala from "../images/people/prashantmalyala.png"
import ismailAzam from "../images/people/ismailazam.png"
import lilyLi from "../images/people/lilyli.png"
import atharvaMehendale from "../images/people/atharvamehendale.png"
import nealKothari from "../images/people/nealkothari.png"
import trinityHuynh from "../images/people/trinityhuynh.png"
import momoSiu from "../images/people/momosiu.png"
import danZhu from "../images/people/danzhu.png"
import michelleNguyen from "../images/people/michellenguyen.png"
import tarunSreedhar from "../images/people/tarunsreedhar.png"
import crystalChang from "../images/people/crystalchang.png"
import romaDesai from "../images/people/romadesai.png"
import tsadiObolu from "../images/people/tsadiobolu.png"
import rickeyMcgregor from "../images/people/rickeymcgregor.png"
import saumyaChoudhary from "../images/people/saumyachoudhary.png"
import ananyaGupta from "../images/people/ananyagupta.png"
import angelaZhang from "../images/people/angelazhang.png"
import marissaJensen from "../images/people/marissajensen.png"
import annaCheng from "../images/people/annacheng.png"
import krishKumar from "../images/people/krishkumar.png"
import suLee from "../images/people/sulee.png"
import laurenSung from "../images/people/laurensung.png"
import michelleLee from "../images/people/michellelee.png"
import wesleyGriggs from "../images/people/wesleygriggs.png"
import suhaniRamchandra from "../images/people/suhaniramchandra.png"

const imageMap = {
    "suhaniramchandra": suhaniRamchandra,
    "wesleygriggs": wesleyGriggs,
    "michellelee": michelleLee,
    "laurensung": laurenSung,
    "krishkumar": krishKumar,
    "sulee": suLee,
    "annacheng": annaCheng,
    "marissajensen": marissaJensen,
    "angelazhang": angelaZhang,
    "hanamcnierney": hanaMcnierney,
    "yutayamada": yutaYamada,
    "raymondfeng": raymondFeng,
    "geetanjalijain": geetanjaliJain,
    "jordanyee": jordanYee,
    "garrettchau": garrettChau,
    "cadyhsu": cadyHsu,
    "truongnguyen": truongNguyen,
    "shannonor": shannonOr,
    "kaydenfu": kaydenFu,
    "hannahli": hannahLi,
    "tiachang": tiaChang,
    "ryansun": ryanSun,
    "tylermcnierney": tylerMcnierney,
    "mayahaylock": mayaHaylock,
    "advaitmarathe": advaitMarathe,
    "katherinegan": katherineGan,
    "arnavgupta": arnavGupta,
    "jerryzhang": jerryZhang,
    "sahilmehta": sahilMehta,
    "vigneshsiva": vigneshSiva,
    "brandonqin": brandonQin,
    "justinquan": justinQuan,
    "aadhrikkuila": aadhrikKuila,
    "kaylijiang": kayliJiang,
    "prashantmalyala": prashantMalyala,
    "ismailazam": ismailAzam,
    "lilyli": lilyLi,
    "atharvamehendale": atharvaMehendale,
    "trinityhuynh": trinityHuynh,
    "nealkothari": nealKothari,
    "momosiu": momoSiu,
    "danzhu": danZhu,
    "michellenguyen": michelleNguyen,
    "tarunsreedhar": tarunSreedhar,
    "crystalchang": crystalChang,
    "romadesai": romaDesai,
    "tsadiobolu": tsadiObolu,
    "rickeymcgregor": rickeyMcgregor,
    "saumyachoudhary": saumyaChoudhary,
    "ananyagupta": ananyaGupta
}

function SeniorAdvisors() {
    return (
       <Container> 
            <Headers>
                <HeadingText> SENIOR ADVISORS & ALUMNI</HeadingText>
                    
            </Headers>
            <SeniorContainer> 
                {memberInfo.senior_advisors.map((senior_advisor) => (
                    <SeniorCard>
                        <SeniorImage src={imageMap[senior_advisor.imagekey]} alt="senior advisor" /> 
                        <SeniorAdvisorInfo fullname={senior_advisor.fullname} position={senior_advisor.position} grade={senior_advisor.grade} major={senior_advisor.major}/>
                    </SeniorCard>
                ))}
            </SeniorContainer>
       </Container>
    )
}

export default SeniorAdvisors;

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


const SeniorContainer = styled.div`
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
const SeniorImage = styled.img`
    width: 190px;
    height: 225px; 
    border-radius: 10px;
    margin-top: 10px;
    padding-bottom: 10px;
    transition: filter 0.5s;

    object-fit: cover;
    object-position: center;
    
    // border: solid black;
`

const SeniorCard = styled.div`
    width: 215px;
    height: 350px; 
    position: relative;
    background: #F9D4DF;
    border-radius: 10px;
    
    display: flex; 
    flex-direction: column;
    align-items: center;

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