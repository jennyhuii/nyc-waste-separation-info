import React from 'react';
import styled from 'styled-components';
import Logo from './NYC-waste-separation-info-logo.png';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        name: '11/21',
        IDM: 15,
        ITP: 7,
    },
    {
        name: '11/22',
        IDM: 6,
        ITP: 9,
    },
    {
        name: '11/28',
        IDM: 0,
        ITP: 0,
    },
    {
        name: '11/29',
        IDM: 0,
        ITP: 0,
    },
    {
        name: '11/30',
        IDM: 0,
        ITP: 0,
    },
    {
        name: '12/1',
        IDM: 0,
        ITP: 0,
    },
    {
        name: '12/2',
        IDM: 0,
        ITP: 0,
    },
];

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

const StyledDiv = styled.div`
padding: 1rem;
justify-content: center;
`

const StyledImage = styled.img`
width: 50%;  
align-self: center;
`

const StyledP = styled.p`
color: ${prop => prop.color};
font-size: ${prop => prop.fontSize};
font-weight: 600;
`

const IDMProgress = () => {
    return (
        <StyledContainer>
            <StyledImage src={Logo} alt='logo' />
            <StyledDiv>
                <StyledP color='#434343' fontSize='1.5rem'>
                    370 Jay St Recycling
                </StyledP>
                <StyledP color='#434343' fontSize='1rem'>
                    Total Points:
                </StyledP>
                <StyledP color='#57068c' fontSize='1rem'>
                    3rd Floor - IDM: 21
                </StyledP>
                <StyledP color='#8900e1' fontSize='1rem'>
                    4th Floor - ITP: 16
                </StyledP>
            </StyledDiv>
            <BarChart
                width={375}
                height={300}
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="IDM" fill="#57068c" />
                <Bar dataKey="ITP" fill="#8900e1" />
            </BarChart>
        </StyledContainer>
    )
}

export default IDMProgress;