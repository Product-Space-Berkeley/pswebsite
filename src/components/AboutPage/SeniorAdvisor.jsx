import styled from "styled-components"
import SeniorAdvisorInfo from "./SeniorAdvisorInfo"
import memberInfo from "../AboutPage/MemberInfo"
import jordan from "../images/people/jordan.png"
import shannon from "../images/people/shannon.png"
import tyler from "../images/people/tyler.png"
import garrett from "../images/people/garrett.png"
import cady from "../images/people/cady.png"
import kayden from "../images/people/kaydenfu.png"
import truong from "../images/people/truong.png"
import hannah from "../images/people/hannahli.png"
import tia from "../images/people/tiachang.png"
import ryansun from "../images/people/ryansun.png"
import raymond from "../images/people/raymond.png"
import hana from "../images/people/hana.png"
import geetanjali from "../images/people/geetanjali.png"
import lucas from "../images/people/lucas.png"
import maya from "../images/people/mayahaylock.png"
import advait from "../images/people/advaitmarathe.png"
import katherine from "../images/people/katherinegan.png"
import arnav from "../images/people/arnavgupta.png"
import jerry from "../images/people/jerryzhang.png"
import sahil from "../images/people/sahilmehta.png"
import vignesh from "../images/people/vigneshsiva.png"
import brandon from "../images/people/brandonqin.png"
import justin from "../images/people/justinquan.png"
import aadhrik from "../images/people/aadhrikkuila.png"
import kayli from "../images/people/kaylijiang.png"
import prashant from "../images/people/prashantmalyala.png"
import ismail from "../images/people/ismailazam.png"
import lily from "../images/people/lilyli.png"
import atharva from "../images/people/atharvamehendale.png"
import neal from "../images/people/nealkothari.png"
import trinity from "../images/people/trinityhuynh.png"
import momo from "../images/people/momosiu.png"
import dan from "../images/people/danzhu.png"
import michellenguyen from "../images/people/michellenguyen.png"
import tarun from "../images/people/tarunsreedhar.png"
import crystal from "../images/people/crystalchang.png"
import roma from "../images/people/romadesai.png"
import tsadi from "../images/people/tsadiobolu.png"
import rickey from "../images/people/rickeymcgregor.png"
import saumya from "../images/people/saumyachoudhary.png"
import ananya from "../images/people/ananyagupta.png"
import angela from "../images/people/angela.png"

const imageMap = {

    "angelazhang": angela,
    "hanamcnierney": hana,
    "lucasomori": lucas,
    "raymondfeng": raymond,
    "geetanjalijain": geetanjali,
    "jordanyee": jordan,
    "garrettchau": garrett,
    "cadyhsu": cady,
    "truongnguyen": truong,
    "shannonor": shannon,
    "kaydenfu": kayden,
    "hannahli": hannah,
    "tiachang": tia,
    "ryansun": ryansun,
    "tylermcnierney": tyler,
    "mayahaylock": maya,
    "advaitmarathe": advait,
    "katherinegan": katherine,
    "arnavgupta": arnav,
    "jerryzhang": jerry,
    "sahilmehta": sahil,
    "vigneshsiva": vignesh,
    "brandonqin": brandon,
    "justinquan": justin,
    "aadhrikkuila": aadhrik,
    "kaylijiang": kayli,
    "prashantmalyala": prashant,
    "ismailazam": ismail,
    "lilyli": lily,
    "atharvamehendale": atharva,
    "trinityhuynh": trinity,
    "nealkothari": neal,
    "momosiu": momo,
    "danzhu": dan,
    "michellenguyen": michellenguyen,
    "tarunsreedhar": tarun,
    "crystalchang": crystal,
    "romadesai": roma,
    "tsadiobolu": tsadi,
    "rickeymcgregor": rickey,
    "saumyachoudhary": saumya,
    "ananyagupta": ananya
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