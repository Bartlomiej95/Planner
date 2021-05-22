import styled from 'styled-components';
import { SubSubHeading } from '../../components/Heading/Heading';
import { Paragraph } from '../../components/Paragraph/Paragraph';

const WrapperBannerCard = styled.div`
    width: 325px;
    height: 150px;
    background-color: #FEDD2C;
    border-top-left-radius: 0;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.16);
    margin: 50px auto;
`;

const SubSubHeadingBannerCard = styled(SubSubHeading)`
    padding: 25px 0 30px 25px;
`;

const ParagraphBannerCard = styled(Paragraph)`
    padding: 0 50px 25px 25px;
`;



export const BannerCardAboutPlanner = () => {
    return(
        <WrapperBannerCard>
            <SubSubHeadingBannerCard>Rozwiązanie 1</SubSubHeadingBannerCard>
            <ParagraphBannerCard>Lorem ipsum dolor sit amet, consector adpiscing elit. Intege valupate est eget eros dignissim egestas. Nam sed sapien sapien</ParagraphBannerCard>
        </WrapperBannerCard>
    )
}