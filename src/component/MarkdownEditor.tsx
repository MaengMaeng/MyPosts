import React, { useState } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [text, setText] = useState('');

    const handleEditorChange = (event:any) => {
        event.preventDefault();
        setText(event.target.value);
    }

    const handleKeydownTab = (event:any) => {
        if(event.keyCode === 9){
            event.preventDefault();
            setText(text + '  ');
        }
    } 

    return (
        <Container>
            <StyledDiv>
                <StyledTextarea 
                    placeholder='이 곳에 글을 작성해 주세요.'
                    value={text}
                    onChange={handleEditorChange}
                    onKeyDown={handleKeydownTab}>
                </StyledTextarea>
            </StyledDiv>
            <StyledDiv>
                <ReactMarkdown source={text}></ReactMarkdown>
            </StyledDiv>
        </Container>
    );
}


const Container = styled.div`
    width:100%;
    margin:0 auto;
    display:flex;
`
const StyledDiv = styled.div`
    flex:1;
`
const StyledTextarea = styled.textarea`
    min-width:100%;
    min-height:100%;
    margin:0 auto;
    padding:0;
    border:none;
    background:#888;
    color:#FFF;
    resize:none;
    overflow:hidden;
    &:focus{
        outline: none;
        border:none;
    }
`

export default MarkdownEditor;
