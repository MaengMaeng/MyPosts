import React from 'react';
import styled from 'styled-components';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';

function App() {
    return (
        <StyledDiv>
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    height:100%;
` 

export default App;
