import styled from 'styled-components'
import amexLogo from '../images/company/amex.png'
import microsoftLogo from '../images/company/microsoftLogo.png'
import oracleLogo from '../images/company/oracle.png'
import metaLogo from '../images/company/meta.png'
import samsungLogo from '../images/company/samsung.png'

function PastClients() {
    return (
        <Container>
            <Title>PAST CLIENTS</Title>
            <LogoGrid>
                <Logo src={amexLogo} alt="American Express" />
                <Logo src={microsoftLogo} alt="Microsoft" />
                <Logo src={oracleLogo} alt="Oracle" />
                <Logo src={metaLogo} alt="Meta" />
                <Logo src={samsungLogo} alt="Samsung" />
            </LogoGrid>
        </Container>
    )
}

export default PastClients;

const Container = styled.div`
    width: 100%;
    padding: 50px 40px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 999px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);

    @media only screen and (max-width: 768px) {
        padding: 40px 30px;
    }

    @media only screen and (max-width: 450px) {
        padding: 35px 20px;
    }
`

const Title = styled.h2`
    font-size: 14px;
    font-weight: 400;
    color: #888888;
    letter-spacing: 3px;
    margin-bottom: 40px;
    text-align: center;
    text-transform: uppercase;

    @media only screen and (max-width: 450px) {
        font-size: 12px;
        margin-bottom: 30px;
        letter-spacing: 2px;
    }
`

const LogoGrid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    flex-wrap: wrap;
    max-width: 1300px;
    padding: 0 40px;

    @media only screen and (max-width: 968px) {
        gap: 50px;
    }

    @media only screen and (max-width: 768px) {
        gap: 40px;
    }

    @media only screen and (max-width: 450px) {
        gap: 30px;
        padding: 0 20px;
    }
`

const Logo = styled.img`
    height: 44px;
    width: auto;
    max-width: 160px;
    opacity: 0.85;
    filter: none;
    transition: all 0.3s ease;
    object-fit: contain;

    &:hover {
        opacity: 1;
    }

    @media only screen and (max-width: 768px) {
        height: 40px;
        max-width: 140px;
    }

    @media only screen and (max-width: 450px) {
        height: 32px;
        max-width: 120px;
    }
`
