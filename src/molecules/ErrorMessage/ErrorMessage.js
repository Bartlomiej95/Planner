import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../components/Paragraph/Paragraph';

const Wrapper = styled.div`
    width: 80%;
    background-color: #FFCDD2;
    border: 1px solid red;
    margin: 10px auto;
`;

const ErrorParagraph = styled(Paragraph)`
    color: red;

`

const ErrorMessage = ({ error }) => {
    return(
        <Wrapper>
            <ErrorParagraph>{error}</ErrorParagraph>
        </Wrapper>
    )
}

export default ErrorMessage;