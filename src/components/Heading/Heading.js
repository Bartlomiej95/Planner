import styled from 'styled-components';

export const Heading = styled.h1`
    font-size: ${({ theme }) => theme.Heading.mobileFontSize};
`;

export const SubHeading = styled.h2`
    font-size: ${({ theme }) => theme.SubHeading.mobileFontSize};
`;

export const SubSubHeading = styled.h3`
    font-size: ${({ theme }) => theme.SubSubHeading.mobileFontSize};
`;