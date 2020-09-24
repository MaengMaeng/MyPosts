import React from 'react';
import styled from 'styled-components';
import MarkdownEditor from './MarkdownEditor';

const Main = () => {
    return (
        <StyledDiv>
            <MarkdownEditor></MarkdownEditor>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    height: calc(100% - 101px);
`

export default Main;
