import styled from 'styled-components';
import { Paragraph } from '../components/Paragraph/Paragraph';

const Aside = styled.aside`
    padding: 0 35px;
`;

const AsideParagraph = styled(Paragraph)`
    font-weight: 700;
    text-align: right;
    margin-top: 35px;
    margin-bottom: 80px;
    cursor: pointer;
`;

const AsideSection = () => {
    return(
        <Aside>
            <AsideParagraph>Wróć</AsideParagraph>
        </Aside>
    )
}

export default AsideSection;