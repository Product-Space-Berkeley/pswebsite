import styled from 'styled-components'
import { Link } from "react-router-dom"


const handleLinkClick = () => {
    window.scrollTo(0, 1200);
  };


function Timeline() {

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };

    return(
        <Container> 
            <Header>RECRUITMENT TIMELINE</Header>
            <Table>
                <Row> 
                    <DateRow>
                        <DateText>1/20 (Tues)<br />- 1/30 (Fri)</DateText>
                    </DateRow> 
                    <InfoRow> 
                        <RowTitle>Tabling & Coffee Chats Open</RowTitle>
                        <RowDescription>
                            Find us tabling at Sproul or sign up for coffee chats with members at
                            Product Space to learn more about the club, our teams, and the work
                            we do each semester.
                        </RowDescription>
                        <RowActions>
                            <ALink to="../About" onClick={handleLinkClick}>
                                <ActionButton type="button">Coffee Chats</ActionButton>
                            </ALink>
                        </RowActions>
                    </InfoRow>
                </Row>
                <Row>
                    <DateRow>
                        <DateText>1/20 (Tues)</DateText>
                    </DateRow> 
                    <InfoRow> 
                        <RowTitle>Applications Open</RowTitle>
                        <RowDescription>
                            The application opens for interested students. Share your background,
                            interests, and what you hope to learn by joining Product Space.
                        </RowDescription>
                        <RowActions>
                            <ActionButton
                                type="button"
                                onClick={() => openInNewTab("https://forms.gle/JAWhDGXKSKisSuEg7")}>
                                Application
                            </ActionButton>
                        </RowActions>
                    </InfoRow>
                </Row>
                <Row> 
                    <DateRow>
                        <DateText>1/27 (Tues)</DateText>
                    </DateRow>
                    <InfoRow> 
                        <RowTitle>Info Session #1 (8-10 PM PT)</RowTitle>
                        <RowLocation>Tan Hall 775</RowLocation>
                        <RowDescription>
                            Join us to get a glimpse into the way we do things at Product Space @ Berkeley,
                            meet current members, and hear about our programs. 
                        </RowDescription>
                        <RowDescription> Note: both infosessions will present identical information, please only attend one out of the two sessions.</RowDescription>
                    </InfoRow>
                </Row>
                <Row> 
                    <DateRow>
                        <DateText>1/28 (Wed)</DateText>
                    </DateRow>
                    <InfoRow> 
                        <RowTitle>Meet the Members (7-8 PM PT)</RowTitle>
                        <RowLocation>Latimer Courtyard</RowLocation>
                        <RowDescription>
                            Come meet the members of Product Space and mingle!
                        </RowDescription>
                    </InfoRow>
                </Row>
                <Row> 
                    <DateRow>
                        <DateText>1/28 (Wed)</DateText>
                    </DateRow>
                    <InfoRow> 
                        <RowTitle>PS Case Workshop (8-10 PM PT)</RowTitle>
                        <RowLocation>Tan Hall 775</RowLocation>
                        <RowDescription>
                            An intro to PM plus a case interview framework led by a senior PS member,
                            with practical tips and time for questions.
                        </RowDescription>
                    </InfoRow>
                </Row>
                <Row> 
                    <DateRow>
                        <DateText>1/29 (Thurs)</DateText>
                    </DateRow>
                    <InfoRow> 
                        <RowTitle>Info Session #2 (8-10 PM PT)</RowTitle>
                        <RowLocation>Tan Hall 775</RowLocation>
                        <RowDescription>
                            Join us to get a glimpse into the way we do things at Product Space @ Berkeley,
                            meet current members, and hear about our programs. 
                        </RowDescription>
                        <RowDescription> Note: both infosessions will present identical information, please only attend one out of the two sessions.</RowDescription>

                    </InfoRow>
                </Row>
                <Row> 
                    <DateRow>
                        <DateText>1/29 (Thurs)</DateText>
                    </DateRow>
                    <InfoRow> 
                        <RowTitle>Applications Close (11:59PM PST)</RowTitle>
                        <RowDescription>
                            Submit your Product Space application by Thursday 11:59PM Pacific Time. Make sure all
                            required fields are complete before the deadline. There is a 10 minute grace period for technical difficulties.
                        </RowDescription>
                    </InfoRow>
                </Row>
                <Row> 
                    <DateRow>
                        <DateText>1/31 (Sat)<br />- 2/1 (Sun)</DateText>
                    </DateRow>
                    <InfoRow> 
                        <RowTitle>1st Round Interviews (Invite Only)</RowTitle>
                        <RowDescription>
                            Behavioral and product design questions to learn more about you, your experience,
                            and your interest in Product Space.
                        </RowDescription>
                    </InfoRow>
                </Row>
                <Row> 
                    <DateRow>
                        <DateText>2/3 (Tues)</DateText>
                    </DateRow>
                    <InfoRow> 
                        <RowTitle>Final Round Interviews (Invite Only)</RowTitle>
                        <RowDescription>
                            A presentation based on a prompt we provide ahead of time, focused on how you
                            think through product problems.
                        </RowDescription>
                    </InfoRow>
                </Row>
                <Row> 
                    <DateRow>
                        <DateText>2/3 (Tues)</DateText>
                    </DateRow>
                    <InfoRow> 
                        <RowTitle>Social Night (Invite Only)</RowTitle>
                        <RowDescription>
                            Meet all of us in Product Space at our social night and connect with the
                            community in a relaxed setting.
                        </RowDescription>
                    </InfoRow>
                </Row>
            </Table>
        </Container>
    )
}

export default Timeline; 

const Container = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    margin: 120px auto 140px;
    padding: 0 clamp(28px, 8vw, 140px);
`
const Header = styled.h2`
    width: min(1320px, 100%);
    margin: 0 0 24px;
    font-size: 26px;
    font-weight: 500;
    letter-spacing: 0.4px;
    color: #ffffff;
    text-align: center;
`

const Table = styled.div`
    width: min(1320px, 100%);
    --date-col: 220px;
    --row-gap: 40px;
    --line-x: calc(var(--date-col) + (var(--row-gap) / 2));
    margin-top: 28px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 40px;

    &::before {
        content: "";
        position: absolute;
        left: calc(var(--line-x) - 1px);
        top: 12px;
        bottom: 12px;
        width: 2px;
        background: rgba(255, 255, 255, 0.22);
    }

    @media only screen and (max-width: 900px) {
        --date-col: 140px;
        --row-gap: 28px;
        --line-x: calc(var(--date-col) + (var(--row-gap) / 2));
        &::before {
            left: calc(var(--line-x) - 1px);
        }
    }

    @media only screen and (max-width: 720px) {
        --date-col: 90px;
        --row-gap: 18px;
        --line-x: calc(var(--date-col) + (var(--row-gap) / 2));
        &::before {
            left: calc(var(--line-x) - 1px);
        }
    }
`

const Row = styled.div`
    display: grid;
    grid-template-columns: var(--date-col) minmax(0, 1fr);
    gap: var(--row-gap);
    position: relative;

    &::before {
        content: "";
        position: absolute;
        left: calc(var(--line-x) - 5px);
        top: 12px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #ffffff;
        box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.12);
    }

    @media only screen and (max-width: 900px) {
        &::before {
            left: calc(var(--line-x) - 5px);
        }
    }

    @media only screen and (max-width: 720px) {
        &::before {
            left: calc(var(--line-x) - 5px);
        }
    }
`
const DateRow = styled.div`
    display: flex; 
    align-items: flex-start; 
    justify-content: flex-end; 
    padding-top: 6px;
    padding-right: 8px;
`

const DateText = styled.div`
    font-size: 14px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.6);
    text-align: right;
    white-space: pre-line;
`
const InfoRow = styled.div`
    display: flex; 
    flex-direction: column;
    gap: 12px;
    padding: 24px 28px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
`

const RowTitle = styled.div`
    font-size: 20px;
    font-weight: 600;  
    color: #ffffff;
`

const RowDescription = styled.div` 
    font-size: 15px;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.68);
`
const RowLocation = styled.div` 
    font-size: 14px;
    color: rgba(255, 255, 255, 0.55);
`

const RowActions = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 8px;
`

const ALink = styled(Link)`
    text-decoration: none;
`

const ActionButton = styled.button`
    font-size: 11px;
    letter-spacing: 0.9px;
    text-transform: uppercase;
    color: #ffffff;
    font-weight: 600;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 999px;
    background: transparent;
    padding: 8px 18px;

    &:hover {
        cursor: pointer;
        border-color: rgba(255, 255, 255, 0.8);
    }
`
