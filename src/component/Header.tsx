import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <StyledDiv>
            <StyledButton>로그인</StyledButton>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    padding: 0px 30px 0px;
    font-size: 20px;
    background-color: #3d414c;
    text-align: right;
    color: #fff;

    height: 60px;
`

const StyledButton = styled.button`
    & {
        background: none;
        border: 2px solid #fff;
        border-radius: 5px;
        color: #fff;
        font-size: 1em;
        font-weight: bold;
        margin: 10px auto;
        padding: 0.2em 0.6em;
        position: relative;
        text-transform: uppercase; 
        overflow: hidden;
    }
    
`
export default Header;
