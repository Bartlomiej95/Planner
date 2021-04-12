import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchAllRates } from '../actions/rates';
import { LoginButton } from '../components/Button/Button';
import { SubHeading } from '../components/Heading/Heading';
import RateRow from '../molecules/RateRow/RateRow';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 70px auto 0 auto;
    width: 315px;

`;
const RateSectionSubHeading = styled(SubHeading)`
    margin-bottom: 30px;
`;

const RateBtn = styled(LoginButton)`
    margin-top: 40px;
`;

const RatesSection = () => {

    const rates = useSelector(state => state.rates);
    const dispatch = useDispatch();
    console.log(rates);

    useEffect(() => {
        dispatch(fetchAllRates())
    },[])

    return(
        <Wrapper>
            <RateSectionSubHeading>Przeciętne stawki <br /> godzinowe pracowników</RateSectionSubHeading>
            {
                rates.map(item => (
                    <RateRow
                        key={item._id}
                        position={item.position}
                        rate={item.rate} 
                        id={item._id}
                    />
                ))
            }
            <RateBtn>Dodaj stanowisko</RateBtn>

        </Wrapper>
    )
}

export default RatesSection;