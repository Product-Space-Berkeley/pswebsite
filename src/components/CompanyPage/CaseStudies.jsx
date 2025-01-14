import styled from 'styled-components'
import hubspot from "../images/company/hubspot2.png"
import amex from "../images/company/amex.png"
import box from "../images/company/box.png"
import edmodo from "../images/company/edmodo.png"
import bartleby from "../images/company/bartleby.png"
import sega from "../images/company/sega.png"
import atsign from "../images/company/atsign.png"
import microsoft from "../images/company/microsoftLogo.png"
import samsung from "../images/company/samsung.png"
import verizon from "../images/company/verizon.png"
import meta from "../images/company/meta.png"
import oracle from "../images/company/oracle.png"

function CaseStudies() {
    return (
       <Container>
        <Heading> PAST CLIENTS </Heading>
        <LogoContainerBeta>
                    <Logos src={microsoft} alt="Microsoft" weight={150}  height={100}/>
                    <Logos src={meta} alt="Meta" weight={100}  height={100}/>
                    <Logos src={oracle} alt="Oracle" weight={100}  height={100}/>
                    <Logos src={samsung} alt="Samsung" weight={100}  height={95}/>
                    <Logos src={verizon} alt="verizon" weight={100}  height={60}/>
                    <Logos src={amex} alt="AMEX" weight={150}  height={100}/>
                    <Logos src={box} alt="box" weight={150}  height={100}/>
                    <Logos src={hubspot} alt="hubspot" weight={180}  height={100}/>
                    <Logos src={sega} alt="sega" weight={75}  height={75}/>
                    <Logos src={bartleby} alt="bartleby" weight={60} height={60}/>
                    <Logos src={edmodo} alt="edmodo" weight={150}  height={100}/>
                    <Logos src={atsign} alt="atsign" weight={70}  height={75}/>
                </LogoContainerBeta>
       </Container>
    )
}

export default CaseStudies

const Container = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    gap: 30px;
    padding-top: 100px;
    padding-bottom: 70px;

    @media only screen and (max-width: 450px) {
        display: none;
     }
`
const Heading = styled.div`
    color: #EB5B8D;
    font-size: 24px;
    font-weight: 500;

    padding-bottom: 50px;

`

const Logos = styled.img`
    width: ${(props) => props.width ? `${props.width}px` : 'auto'};
    height: ${(props) => props.height ? `${props.height}px` : 'auto'};

    object-fit: cover;
    object-position: center;
    // transform: scale(0.7);

    // border: solid black;

`
const LogoContainerBeta = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    padding-bottom: 80px;
    gap: 70px;
    width: 1200px;

    // border: solid black; 

    @media only screen and (max-width: 1500px) {
        max-width: 1200px;
        width: auto; 
    }
    
`