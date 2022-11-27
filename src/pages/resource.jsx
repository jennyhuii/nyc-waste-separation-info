import React from 'react';
import styled from 'styled-components';
import Logo from './NYC-waste-separation-info-logo.png';
import Blue from './blue.png';
import Green from './green.png';

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

const StyledSign = styled.img`
width: 100%;  
align-self: center;
`

const StyledP = styled.p`
color: ${prop => prop.color};
font-size: ${prop => prop.fontSize};
font-weight: 600;
`

const Resource = () => {
    return (
        <StyledContainer>
            <StyledImage src={Logo} alt='logo' />
            <StyledDiv>
                <p>
                    Hello! We're working on a more comprehensive and interactive guide to answer all your waste separation questions!
                    For now, please refer to guidance below.
                    Source: nyc.gov/zerowaste
                </p>
            </StyledDiv>
            <StyledDiv>
                <StyledP color='#0015D7' fontSize='1rem'>
                    Metal, glass, plastic and cartons go in the blue bin (EMPTY AND RINSE if contains food/liquid!)
                </StyledP>
                <StyledSign src={Blue} alt='blue' />
                <StyledP color='#47B81F' fontSize='1rem'>
                    Mixed paper and carboard go in the green bin (place in trash bin if your pizza box is too oily)
                </StyledP>
                <StyledSign src={Green} alt='green' />
                <StyledP color='#434343' fontSize='1rem'>
                    Everything else goes in the garbage bin because NEW YORK CITY DOESN'T COMPOST, unfortunately.
                    Good news is we're working on it!
                </StyledP>
            </StyledDiv>
        </StyledContainer>
    )
}

export default Resource;