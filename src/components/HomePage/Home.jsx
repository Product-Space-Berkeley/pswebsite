import styled from 'styled-components'
import Navbar from '../Navbar'
import Footer from '../Footer'
import OpeningPanel from './OpeningPanel'
import PSDescription from './PSDescription'
import ForStudents from './ForStudents'
import ForCompanies from './ForCompanies'
import Membership from './Membership'
import HomePG from '../images/pictures/HomeBG.png'

const Container = styled.div`

@media only screen and (max-width: 800px) {
    overflow-x: hidden;
}

`

function Home() {
    return (
        <Container>
            <Navbar/>
            <OpeningPanel/>
            <PSDescription/>
            <ForCompanies/>
            <ForStudents/>
            <Membership/>
            <Footer/>
        </Container>
    )
}

export default Home