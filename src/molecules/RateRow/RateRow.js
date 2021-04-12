import styled, { css } from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editRate } from '../../actions/rates';
import { LoginButton } from '../../components/Button/Button';
import { SubSubHeading } from '../../components/Heading/Heading';
import { Input } from '../../components/Input/Input';
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

    ${({ isEdited }) => isEdited && css`
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        transform: translateX(30px);
    `}
`;

const PositionName = styled(SubSubHeading)`
    font-size: 12px;
`;

const RateParapgraph = styled(Paragraph)`
    font-size: 16px;
`;

const RateInput = styled(Input)`
    width: 70px;
    height: 30px;
    margin: 0;
    padding: 0 10px 0 10px;
    border-radius: 10px;
`;

const EditRateBtn = styled(LoginButton)`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    overflow: visible;
    position: relative;
    left: 30px;
`;

const RateRow = ({ position, rate, id }) => {

    const rateValue = rate.toFixed(2);
    const [ isEdited, setIsEdited ] = useState(false);
    const [ valueEditedRate, setValueEditedRate ] = useState(rate);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setValueEditedRate(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        setIsEdited(false);
        dispatch(editRate(id, Number(valueEditedRate)));

    } 

    return(
        <WrapperRow>
            <LeftBox>
                <EditLink onClick={() => setIsEdited(prev => !prev)}>Edytuj</EditLink>
            </LeftBox>
            <MiddleBox>
                <PositionName>{position}</PositionName>
            </MiddleBox>
            <RightBox isEdited={isEdited}>
                {
                    !isEdited && (<RateParapgraph>{`${rateValue} PLN`}</RateParapgraph>)
                }
                {
                    isEdited && (
                        <>
                            <RateInput type="number" name="rate" value={valueEditedRate} onChange={(e) => handleChange(e)} />
                            <EditRateBtn onClick={(e) => handleClick(e)} >OK</EditRateBtn>
                        </>
                    )
                }
            </RightBox>
        </WrapperRow>
    )
}

export default RateRow;