import styled from 'styled-components';
import sunIcon from '../../assets/sunIcon.svg';

const Wrapper = styled.div`
    width: 36px;
    height: 20px;
    border-radius: 20px;
    background-color: #FEDD2C;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 30px;
`;

const SliderBar = styled.div`
    width: 16px;
    height: 16px;
    background-color: #120D45;
    border-radius: 20px;

`;

const SliderIcon = styled.img`
    display: block;
    color: white;
    width: 12px;
    height: 12px;

`;

const SliderTheme = () => {
    return(
        <Wrapper>
            <SliderIcon src={sunIcon} alt="ikonka"/>
            <SliderBar/>
        </Wrapper>
    )
}

export default SliderTheme;