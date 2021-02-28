import styled from 'styled-components';

const TextArea = styled.textarea`
    display: block;
    min-width: 275px;
    min-height: 213px;
    border: 1px solid #0903B0;
    border-radius: 5px;
    margin: 30px auto;
    padding: 15px 15px 0 15px;
    outline: none;

    ::placeholder{
        color: #0903B0;
    }

`;

export default TextArea;