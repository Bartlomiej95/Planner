import styled from 'styled-components';

export const Input = styled.input`
    display: block;
    width: ${({ theme }) => theme.Input.mobileWidth};
    height: ${({ theme }) => theme.Input.mobileHeight};
    border: 1px solid #0903B0;
    border-radius: ${({ theme }) => theme.Input.borderRadius};
    padding: ${({ theme }) => theme.Input.mobilePadding};
    margin: 10px auto;
    outline: none;
    
    ::placeholder{
        padding-left: 25px;
        color: rgb(55, 47, 255, 0.5);
    }
`;