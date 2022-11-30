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
        IDM: 0,
        ITP: 5,
    },
    {
        name: '11/22',
        IDM: 0,
        ITP: 5,
    },
    {
        name: '11/28',
        IDM: 5,
        ITP: 0,
    },
    {
        name: '11/29',
        IDM: 5,
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
  padding: 0.5rem;
`

const StyledDiv = styled.div`
padding: 1rem;
justify-content: center;
text-align: center;
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

const ITPProgress = () => {
    return (
        <StyledContainer>
            <StyledImage src={Logo} alt='logo' />
            <StyledDiv>
                <StyledP color='#434343' fontSize='1.5rem'>
                    ITP vs IDM Waste Separation Competition!
                </StyledP>
            </StyledDiv>
            <div>
                In an effort to improve waste separation habits at 370 Jay Street,
                NYU has implemented a leadership board to keep score of which department is performing better:
                ITP vs IDM. Each week, Facilities will inspect the trash bins on the 3rd and 4th floors and measure:
                <p>

                    (1) the percent accuracy of correct trash items per bin and
                </p>
                <p>

                    (2) the cumulative weight of recyclables (so don't forget to empty the bottles!) by EOD.
                </p>
                At each bag change,
                Facilities will award <b>5 points</b> to the department that scored the highest percent accuracy while
                maintaining the smallest weight of accumulated recyclables. At the end of the day, points are tallied up for
                each department and displayed on our website. The winner will be announced on the last day of classes for Fall 2022.
                Best of luck, ITP!
            </div>
            <br/>
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
            <StyledDiv>
                <StyledP color='#434343' fontSize='1rem'>
                    Total Points:
                </StyledP>
                <StyledP color='#57068c' fontSize='1rem'>
                    3rd Floor - IDM: 10
                </StyledP>
                <StyledP color='#8900e1' fontSize='1rem'>
                    4th Floor - ITP: 10
                </StyledP>
            </StyledDiv>
        </StyledContainer>
    )
}

export default ITPProgress;