import styled from 'styled-components';


export const LoginButton = styled.button`
    display: block;
    width: ${({ theme }) => theme.LoginButton.mobileWidth};
    height: ${({ theme }) => theme.LoginButton.mobileHeight};
    background-color: ${({ theme }) => theme.buttonsPrimaryBcgColor};
    border-radius: ${({ theme }) => theme.buttonsBorderRadius};
    color: ${({ theme }) => theme.buttonsPrimaryColor};
    cursor: pointer;
    outline: none; 

    :hover {
        background-color: ${({ theme }) => theme.buttonsPrimaryHoverBcgColor}
    }
`;

export const IdLoginButton = styled.button`
    width: ${({ theme }) => theme.IdLoginButton.mobileWidth};
    height: ${({ theme }) => theme.IdLoginButton.mobileHeight};
    background-color: ${({ theme }) => theme.buttonsSecondaryBcgColor};
    border-radius: ${({ theme }) => theme.buttonsBorderRadius};
    color: ${({ theme }) => theme.buttonsSecondaryColor};
    cursor: pointer;
    outline: none;


    :hover {
        background-color: ${({ theme }) => theme.buttonsSecondaryHoverBcgColor};
        color: ${({ theme }) => theme.buttonsSecondaryHoverColor};

    }
`;