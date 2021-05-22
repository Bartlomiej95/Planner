import styled from 'styled-components';

export const Paragraph = styled.p`
    font-size: ${({ theme }) => theme.Paragraph.mobileFontSize};
    text-align: left;
`;

export const LPParagraph = styled.p`
    font-size: ${({ theme }) => theme.LPParagraph.mobileFontSize};
    color: ${({ theme }) => theme.buttonsPrimaryHoverBcgColor};
    text-align: center;
`;

export const BackSpan = styled.span`
    color: #0903B0;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
`;