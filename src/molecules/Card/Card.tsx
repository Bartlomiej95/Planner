import styled from 'styled-components';
import { SubSubHeading } from '../../components/Heading/Heading';
import { Paragraph } from '../../components/Paragraph/Paragraph';

const WrapperBannerCard = styled.div<{ readonly activeId: number}>`
    width: 325px;
    min-width: 325px;
    height: 150px;
    background-color: #FEDD2C;
    border-top-left-radius: 0;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.16);
    margin: 50px 10px;
    flex-basis: 1;

    transform: translateX(calc( -345px * ${props => (props.activeId - 1)} ));

    @media(min-width: 600px) {
        width: 350px;
        min-width: 350px;
        transform: translateX(calc( -370px * ${props => (props.activeId - 1)}));
    }
`;

const SubSubHeadingBannerCard = styled(SubSubHeading)`
    padding: 25px 0 30px 25px;
`;

const ParagraphBannerCard = styled(Paragraph)`
    padding: 0 50px 25px 25px;
`;

interface Props {
    id: number,
    content: string,
    activeId: number,
}


export const BannerCardAboutPlanner = ({id, content, activeId}: Props) => {
    return(
        <WrapperBannerCard activeId={activeId}>
            <SubSubHeadingBannerCard>Rozwiązanie {id}</SubSubHeadingBannerCard>
            <ParagraphBannerCard>{content}</ParagraphBannerCard>
        </WrapperBannerCard>
    )
}