import styled from 'styled-components';
import { SubSubHeading } from '../../components/Heading/Heading';
import { Paragraph } from '../../components/Paragraph/Paragraph';

const WrapperRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    margin: 15px auto;
    width: 100%;
`;

const EditLink = styled(SubSubHeading)`
    font-size: 14px;
    font-weight: 600;
    color: #372FFF;
    cursor: pointer;

    :hover{
        color: #0903B0;
    }
`;

const LeftBox = styled.div`
    display: block;
`;

const MiddleBox = styled.div`
    display: block;
    justify-self: left;
    width: 50%;
    margin-left: 10px;
`;

const RightBox = styled.div`
    display: block;
`;

const PositionName = styled(SubSubHeading)`
    font-size: 12px;
`;

const RateParapgraph = styled(Paragraph)`
    font-size: 16px;
`;

const RateRow = ({ position, rate }) => {

    const rateValue = rate.toFixed(2);

    return(
        <WrapperRow>
            <LeftBox>
                <EditLink>Edytuj</EditLink>
            </LeftBox>
            <MiddleBox>
                <PositionName>{position}</PositionName>
            </MiddleBox>
            <RightBox>
                <RateParapgraph>{`${rateValue} PLN`}</RateParapgraph>
            </RightBox>
        </WrapperRow>
    )
}

export default RateRow;