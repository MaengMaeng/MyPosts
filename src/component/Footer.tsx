import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <StyledDiv>
            <p>
              @ Made By <a href="https://github.com/MaengMaeng" target="_blank" rel="noopener noreferrer">MaengMaeng</a>
            </p>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    border-top:1px solid #d9d9d9;
    font-size:12px;
    background-color:#f1f1f1;
    text-align:center;
    color:#888;

    height: 40px;
`

export default Footer;
