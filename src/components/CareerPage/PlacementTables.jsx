import React, { useState } from 'react';
import styled from 'styled-components';

const data = {
  '2026': {
    fulltime: [
      { name: 'Xiao Li', company: 'TikTok', role: 'Product Manager' },
      { name: 'Jordan Huang', company: 'Mercor', role: 'Growth' },
      { name: 'Anisa Majhi', company: 'Microsoft', role: 'Product Manager' },
      { name: 'Nina Cheuck', company: 'Replit', role: 'Product Design' },
      { name: 'Ayami Matsumura', company: 'TikTok', role: 'Product Manager' },
      { name: 'Dasang Dolma', company: 'Capital One', role: 'Associate Product Manager' },
      { name: 'Chris Lee', company: 'Capital One', role: 'Associate Product Manager' },
      { name: 'Anna Cheng', company: 'Sierra', role: 'APX' },
      { name: 'Melanie Hsiang', company: 'The Trade Desk', role: 'Product Manager' },
      { name: 'Andy Wei', company: 'McKinsey', role: 'PDP Fellow' },
      { name: 'Ryan Cho', company: 'UCSF', role: 'Biomechanics Researcher' },
      { name: 'Vicky Xiao', company: 'Mastercard', role: 'Associate Product Specialist' },
    ],
    internship: [
      { name: 'Rick Xu', company: 'Google', role: 'Associate Product Management Intern' },
      { name: 'Amolak Preet Singh', company: 'Salesforce', role: 'Associate Product Management Intern' },
      { name: 'Chenfei Wang', company: 'Microsoft', role: 'Product Management Intern' },
      { name: 'Danica Hartawan', company: 'NVIDIA', role: 'Technical Program Management Intern' },
      { name: 'Liana Kong', company: 'IBM', role: 'Product Management Intern' },
      { name: 'Ryan Lee', company: 'Cisco', role: 'Product Management Intern' },
      { name: 'Nidhi Prakash', company: 'Cisco', role: 'Product Management Intern' },
      { name: 'Kristen Fu', company: 'Amazon', role: 'Program Management Intern' },
      { name: 'Zander Vaux', company: 'IBM', role: 'Product Management Intern' },
      { name: 'Michael Bohm', company: 'Mastercard', role: 'Product Management Intern' },
      { name: 'Steven Zhang', company: 'Typeface', role: 'Product Management Intern' },
      { name: 'Derek Su', company: 'Northrop Grumman', role: 'Software Engineer Intern' },
      { name: 'Carly Chan', company: 'Uber', role: 'Software Engineer Intern' },
      { name: 'Ethan Yang', company: 'Harvey', role: 'Software Engineer Intern' },
      { name: 'Joanna Le', company: 'Mastercard', role: 'UX Research Intern' },
      { name: 'Alex Vennemeyer', company: 'Apple', role: 'Data Engineering Intern' },
      { name: 'Tim Zhou', company: 'Snowflake', role: 'Software Engineer Intern' },
      { name: 'Dean Wu', company: 'Workato', role: 'Product Management Intern' },
      { name: 'Artem Drohobytsky', company: 'Quartus', role: 'Software Engineer Intern' },
      { name: 'Jennifer Huang', company: 'NVIDIA', role: 'Software Engineer Intern' },
      { name: 'Sarah Liang', company: 'Amplify', role: 'Product Trainer Intern' },
      { name: 'Athreya Iyer', company: 'SPARKFUL', role: 'Software Intern' },
      { name: 'Olin Engh', company: 'Bridge Asia Group', role: 'Product Strategy Intern' },
      { name: 'Victoria Tran', company: 'Alcorn', role: 'Product Training Intern' },
      { name: 'Vyoma Patel', company: 'Coinbase', role: 'Associate Product Management Intern' },
      { name: 'Srivar Kalisetti', company: 'Soundverse AI', role: 'Technical Product Management Intern' },
    ],
  },
  '2025': {
    fulltime: [
      { name: 'Cady Hsu', company: 'Atlassian', role: 'Associate Product Manager' },
      { name: 'Christine Wong', company: 'Coinbase', role: 'Associate Product Manager' },
      { name: 'Geetanjali Jain', company: 'Blackstone', role: 'Associate Product Manager' },
      { name: 'Lucas Omori', company: 'Mastercard', role: 'Associate Product Manager' },
      { name: 'Michelle Lee', company: 'Salesforce', role: 'Associate Product Manager' },
      { name: 'Oscar Chow', company: 'Coinbase', role: 'Associate Product Manager' },
      { name: 'Raymond Feng', company: 'Mastercard', role: 'Associate Product Manager' },
      { name: 'Yuta Yamada', company: 'Meta', role: 'Software Engineer' },
    ],
    internship: [
      { name: 'Amolak Preet Singh', company: 'Amazon', role: 'Engineering Program Manager Intern' },
      { name: 'Andy Wei', company: 'Qualtrics', role: 'Product Management Intern' },
      { name: 'Anisa Majhi', company: 'Microsoft', role: 'Product Management Intern' },
      { name: 'Anna Cheng', company: 'Salesforce', role: 'Associate Product Management Intern' },
      { name: 'Ayami Matsumura', company: 'TikTok', role: 'Product Management Intern' },
      { name: 'Chris Lee', company: 'Capital One', role: 'Associate Product Management Intern' },
      { name: 'Dasang Dolma', company: 'Typeface', role: 'Product Management Intern' },
      { name: 'Marissa Jensen', company: 'Amazon', role: 'Program Manager Intern' },
      { name: 'Melanie Hsiang', company: 'The Trade Desk', role: 'Product Management Intern' },
      { name: 'Carly Chan', company: 'Uber', role: 'Software Engineer Intern' },
      { name: 'Jennifer Huang', company: 'NVIDIA', role: 'DGX Cloud Intern' },
      { name: 'Jonathan Chiang', company: 'TikTok', role: 'Product Management Intern' },
      { name: 'Liana Kong', company: 'Times Publishing Limited', role: 'Software Engineer Intern' },
      { name: 'Michael Bohm', company: 'Amazon', role: 'Program Manager Intern' },
      { name: 'Rick Xu', company: 'US Bank', role: 'Product Management Intern' },
      { name: 'Tiffany Lin', company: 'SiriusXM', role: 'Product Management Intern' },
      { name: 'Timothy Zhou', company: 'Toast', role: 'Software Engineer Intern' },
      { name: 'Vaishavi Sahu', company: 'NVIDIA', role: 'AI Enterprise and Product Engineering Intern' },
      { name: 'Nicholas Chua', company: 'TikTok', role: 'Product Management Intern' },
      { name: 'Steven Zhang', company: 'Homethrive', role: 'Product Analytics Intern' },
    ],
  },
  '2024': {
    fulltime: [
      { name: 'Kayden Fu', company: 'Salesforce', role: 'Associate Product Manager' },
      { name: 'Michelle Nguyen', company: 'Salesforce', role: 'Associate Product Manager' },
      { name: 'Jordan Yee', company: 'LinkedIn', role: 'Associate Product Manager' },
      { name: 'Hannah Li', company: 'ServiceNow', role: 'Associate Product Manager' },
      { name: 'Tia Chang', company: 'Databricks', role: 'Associate Product Manager' },
      { name: 'Tsadiku Obolu', company: 'Google', role: 'Associate Product Manager' },
      { name: 'Trinity Huynh', company: 'Meta', role: 'Rotational Product Manager' },
      { name: 'Crystal Chang', company: 'Stripe', role: 'Software Engineer' },
    ],
    internship: [
      { name: 'Lucas Omori', company: 'Mastercard', role: 'Associate Product Specialist Intern' },
      { name: 'Raymond Feng', company: 'Mastercard', role: 'Product Management Intern' },
      { name: 'Hana McNierney', company: 'Salesforce', role: 'Associate Product Management Intern' },
      { name: 'Shashaank Joshi', company: 'Salesforce', role: 'Associate Product Management Intern' },
      { name: 'Michelle Lee', company: 'Salesforce', role: 'Associate Product Management Intern' },
      { name: 'Truong Nguyen', company: 'Atlassian', role: 'Associate Product Management Intern' },
      { name: 'Cady Hsu', company: 'Atlassian', role: 'Associate Product Management Intern' },
      { name: 'Christine Wong', company: 'Coinbase', role: 'Associate Product Management Intern' },
      { name: 'Oscar Chow', company: 'Coinbase', role: 'Associate Product Management Intern' },
      { name: 'Yuta Yamada', company: 'Sony', role: 'Software Engineer Intern' },
      { name: 'Su Lee', company: 'Pitney Bowes', role: 'Product Management Intern' },
      { name: 'Lauren Sung', company: 'Pando Electric', role: 'Product Marketing Intern' },
      { name: 'Geetanjali Jain', company: 'Blackstone', role: 'Product Management Intern' },
      { name: 'Krish Kumar', company: 'MongoDB', role: 'Product Management Intern' },
      { name: 'Wesley Griggs', company: 'Comcast', role: 'Product Management Intern' },
      { name: 'Anthony Tafoya', company: 'Space X', role: 'Software Engineer Intern' },
      { name: 'Anisa Majhi', company: 'Microsoft', role: 'Product Management Intern' },
      { name: 'Vicky Xiao', company: 'American Express', role: 'Product Intern' },
      { name: 'Dasang Dolma', company: 'Amazon', role: 'Business Analyst Intern' },
      { name: 'Melanie Hsiang', company: 'Amazon', role: 'Program Management Intern' },
      { name: 'Marissa Jensen', company: 'Plug and Play Tech Center', role: 'Ventures & Programs Intern' },
      { name: 'Suhani Ramchandra', company: 'MediaLink', role: 'Consulting Intern' },
      { name: 'Anna Cheng', company: 'Capital One', role: 'Business Analyst Intern' },
      { name: 'Andy Wei', company: 'Nike', role: 'Product Management Intern' },
      { name: 'Ayami Matsumura', company: 'Procter & Gamble', role: 'Product Research Intern' },
      { name: 'Nina Cheuck', company: 'k-ID', role: 'Program Design Intern' },
      { name: 'Carly Chan', company: 'Uber', role: 'Software Engineer Intern' },
    ],
  },
  '2023': {
    fulltime: [
      { name: 'Arnav Gupta', company: 'Microsoft', role: 'Product Manager' },
      { name: 'Tyler McNierney', company: 'Google', role: 'Associate Product Manager' },
      { name: 'Brandon Qin', company: 'The Trade Desk', role: 'Product Manager I' },
      { name: 'Daniel Zhu', company: 'Boston Consulting Group', role: 'Associate' },
      { name: 'Momo Siu', company: 'New Relic', role: 'Business Systems Analyst' },
      { name: 'Tarun Sreedhar', company: 'Epic', role: 'Software Developer' },
      { name: 'Saumya Choudhary', company: 'Mastercard', role: 'Associate Product Manager' },
      { name: 'Neal Kothari', company: 'GAP', role: 'Product Manager' },
      { name: 'Katherine Gan', company: 'Microsoft', role: 'Program Manager' },
      { name: 'Maya Haylock', company: 'Mastercard', role: 'Associate Product Specialist' },
      { name: 'Justin Quan', company: 'Retool', role: 'Engineer' },
      { name: 'Vignesh Siva', company: 'Cisco Meraki', role: 'Associate Product Manager' },
      { name: 'Sahil Mehta', company: 'Palo Alto Networks', role: 'Associate Product Manager' },
      { name: 'Ryan Sun', company: 'Salesforce', role: 'Software Engineer' },
    ],
    internship: [
      { name: 'Jordan Yee', company: 'Apple', role: 'Engineering Program Manager Intern' },
      { name: 'Kayden Fu', company: 'Salesforce', role: 'Associate Product Manager Intern' },
      { name: 'Michelle Nguyen', company: 'Salesforce', role: 'Security Product Manager Intern' },
      { name: 'Tsadiku Obolu', company: 'Google', role: 'Associate Product Manager' },
      { name: 'Crystal Chang', company: 'Stripe', role: 'Software Engineer Intern' },
      { name: 'Garrett Chau', company: 'Amazon', role: 'Program Manager Intern' },
      { name: 'Shannon Or', company: 'CBRE', role: 'Program Management Intern' },
      { name: 'Michelle Lee', company: 'Accenture', role: 'Consulting Summer Analyst' },
      { name: 'Geetanjali Jain', company: 'American Express', role: 'Product Intern' },
      { name: 'Krish Kumar', company: 'EA Games', role: 'Product Manager Intern' },
      { name: 'Truong Nguyen', company: "DICK's Sporting Goods", role: 'Product Manager Intern' },
      { name: 'Yuta Yamada', company: 'Blizzard Entertainment', role: 'Product Manager Intern' },
      { name: 'Raymond Feng', company: 'Capital One', role: 'Summer Analyst' },
      { name: 'Cady Hsu', company: 'Amazon', role: 'Business Analyst' },
      { name: 'Angela Zhang', company: 'AdRoll', role: 'Brand Marketing Intern' },
      { name: 'Shashaank Joshi', company: 'Walmart', role: 'Product Manager Intern' },
      { name: 'Imaan Sultan', company: 'Mastercard', role: 'Product Manager Intern' },
      { name: 'Anisa Majhi', company: 'FlowEQ', role: 'Product Intern' },
      { name: 'Anthony Tafoya', company: 'Productfy', role: 'Software Engineer Intern' },
    ],
  },
  '2022': {
    fulltime: [
      { name: 'Atharva Mehendale', company: 'Salesforce', role: 'Associate Product Manager' },
      { name: 'Aadhrik Kuila', company: 'Microsoft', role: 'Program Manager' },
      { name: 'Roma Desai', company: 'Salesforce', role: 'Associate Product Manager' },
      { name: 'Prashant Malyala', company: 'Google', role: 'Associate Product Manager' },
      { name: 'Kayli Jiang', company: 'Google', role: 'Associate Product Manager' },
    ],
    internship: [
      { name: 'Tyler McNierney', company: 'Google', role: 'Associate Product Manager Intern' },
      { name: 'Daniel Zhu', company: 'Boston Consulting Group', role: 'Summer Associate' },
      { name: 'Katherine Gan', company: 'Microsoft', role: 'Program Manager Intern' },
      { name: 'Neal Kothari', company: 'GAP', role: 'Product Manager Intern' },
      { name: 'Trinity Huynh', company: 'JLL Technologies', role: 'Product Manager Intern' },
      { name: 'Vignesh Siva', company: 'Workday', role: 'Associate Product Manager Intern' },
      { name: 'Sahil Mehta', company: 'Palo Alto Networks', role: 'Associate Product Manager Intern' },
      { name: 'Advait Marathe', company: 'Duolingo', role: 'Associate Product Manager Intern' },
      { name: 'Brandon Qin', company: 'Salesforce', role: 'Associate Product Manager Intern' },
      { name: 'Maya Haylock', company: 'Tesla', role: 'Product Management Intern' },
      { name: 'Jerry Zhang', company: 'Databricks', role: 'Software Engineer' },
      { name: 'Tia Chang', company: 'Zoom', role: 'Product Manager Intern' },
      { name: 'Tsadiku Obolu', company: 'Google', role: 'STEP Intern' },
      { name: 'Crystal Chang', company: 'Microsoft', role: 'Software Engineer Intern' },
      { name: 'Kayden Fu', company: 'Accenture', role: 'Consulting Development Analyst' },
      { name: 'Hannah Li', company: 'Amazon', role: 'Program Manager Intern' },
      { name: 'Michelle Nguyen', company: 'Hubspot', role: 'Product Manager Intern' },
      { name: 'Jordan Yee', company: 'Blizzard Entertainment', role: 'Product Manager Intern' },
      { name: 'Rickey McGregor', company: 'Goldman Sachs', role: 'Investment Banking Analyst' },
      { name: 'Yuta Yamada', company: 'NTT DATA', role: 'Software Engineer Intern' },
    ],
  },
};

export function PlacementTables() {
  const [activeType, setActiveType] = useState('fulltime');
  const [activeYear, setActiveYear] = useState('2026');

  const rows = data[activeYear]?.[activeType] ?? [];

  return (
    <Wrapper>
      <FilterControls>
        <FilterButton
          $active={activeType === 'fulltime'}
          onClick={() => setActiveType('fulltime')}
        >
          Full Time
        </FilterButton>
        <FilterButton
          $active={activeType === 'internship'}
          onClick={() => setActiveType('internship')}
        >
          Internship
        </FilterButton>
        <Divider />
        <FilterButton
          $active={activeYear === '2026'}
          onClick={() => setActiveYear('2026')}
        >
          2026
        </FilterButton>
        <FilterButton
          $active={activeYear === '2025'}
          onClick={() => setActiveYear('2025')}
        >
          2025
        </FilterButton>
        <FilterButton
          $active={activeYear === '2024'}
          onClick={() => setActiveYear('2024')}
        >
          2024
        </FilterButton>
        <FilterButton
          $active={activeYear === '2023'}
          onClick={() => setActiveYear('2023')}
        >
          2023
        </FilterButton>
        <FilterButton
          $active={activeYear === '2022'}
          onClick={() => setActiveYear('2022')}
        >
          2022
        </FilterButton>
      </FilterControls>

      <HeaderRow>
        <HeaderName>Name</HeaderName>
        <HeaderCompany>Company</HeaderCompany>
        <HeaderTitle>Role</HeaderTitle>
      </HeaderRow>

      <Body>
        {rows.map((item, index) => (
          <Row key={`${item.name}-${item.company}-${item.role}-${index}`}>
            <Name>{item.name}</Name>
            <Company>{item.company}</Company>
            <Title>{item.role}</Title>
          </Row>
        ))}
      </Body>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const FilterControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 32px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: ${props => props.$active ? 'rgb(58,42,84)' : 'rgba(255,255,255,0.8)'};
  background: ${props => props.$active ? 'rgb(181,162,207)' : 'transparent'};
  border: 1px solid ${props => props.$active ? 'rgb(181,162,207)' : 'rgba(255,255,255,0.4)'};
  border-radius: 999px;
  padding: 6px 14px;
  cursor: pointer;
  transition: color 0.15s, background 0.15s, border-color 0.15s;

  &:hover {
    border-color: rgba(255,255,255,0.6);
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 16px;
  background: rgba(255,255,255,0.15);
  margin: 0 4px;
`;

const HeaderRow = styled.div`
  width: min(960px, 100%);
  min-height: 34px;
  display: grid;
  grid-template-columns: 1.2fr 1.2fr 1.6fr;
  align-items: center;
  background: #b5a2cf;
  color: #3a2a54;
  font-weight: 600;
  border-radius: 10px;
  padding: 0 18px;
`;

const Body = styled.div`
  width: min(960px, 100%);
  margin-top: 10px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(8px);
  overflow: hidden;
`;

const Row = styled.div`
  min-height: 50px;
  display: grid;
  grid-template-columns: 1.2fr 1.2fr 1.6fr;
  align-items: center;
  color: rgba(255, 255, 255, 0.82);
  padding: 8px 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
`;

const HeaderName = styled.div``;
const HeaderCompany = styled.div``;
const HeaderTitle = styled.div``;

const Name = styled.div`
  line-height: 1.5;
  word-break: break-word;
`;

const Company = styled.div`
  line-height: 1.5;
  word-break: break-word;
`;

const Title = styled.div`
  line-height: 1.5;
  word-break: break-word;
`;
