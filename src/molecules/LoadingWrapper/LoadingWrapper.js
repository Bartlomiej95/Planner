import styled from 'styled-components';
import loadingIcon from '../../assets/loadingIcon.svg';
import { Heading } from '../../components/Heading/Heading';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    height: 100vh;
`;

const LoadingIcon = styled.img`
    display: block;
`;

const LoadingWrapper = () => {

    return(
        <>
            <Wrapper>
                <LoadingIcon src={loadingIcon} />
                <Heading>Przetwarzam dane...</Heading>
            </Wrapper>
        </>
    )
}

export default LoadingWrapper;