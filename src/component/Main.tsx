import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (
    <div>
        <StyledDiv>
            Main Page
        </StyledDiv>
    </div>
  );
}

const StyledDiv = styled.div`
    padding:40px;
    font-size:12px;
    background-color:#FFF;
    text-align:center;
    color:#000;
`

export default Main;
