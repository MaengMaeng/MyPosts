import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <div>
        <StyledDiv>
            @ Made By <a href="https://github.com/MaengMaeng" target="_blank" rel="noopener noreferrer">MaengMaeng</a>
        </StyledDiv>
    </div>
  );
}

const StyledDiv = styled.div`
    padding:10px 0;
    border-top:1px solid #d9d9d9;
    font-size:12px;
    background-color:#f1f1f1;
    text-align:center;
    color:#888;
`

export default Footer;
