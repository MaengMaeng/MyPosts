import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <div>
        <StyledDiv>
            <StyledButton>로그인</StyledButton>
        </StyledDiv>
    </div>
  );
}

const StyledDiv = styled.div`
    padding: 10px 10px 10px;
    font-size: 20px;
    background-color: #3d414c;
    text-align: right;
    color: #fff;
`

const StyledButton = styled.button`
    & {
        background: none;
        border: 2px solid #fff;
        border-radius: 5px;
        color: #fff;
        font-size: 1em;
        font-weight: bold;
        margin: 0em auto;
        padding: 0.2em 0.6em;
        position: relative;
        text-transform: uppercase; 
        overflow: hidden;
    }
    
`
export default Header;
