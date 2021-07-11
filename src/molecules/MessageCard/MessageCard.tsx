import styled from 'styled-components';
import { SubHeading } from '../../components/Heading/Heading';
import { Paragraph } from '../../components/Paragraph/Paragraph';

const Wrapper = styled.div`
    width: 315px;
    min-height: 110px;
    padding: 13px 42px;
    margin: 0 auto;
    box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    margin-bottom: 25px;
    background-color: '#F8FAFE';
`;

const WrapperTitleMessage = styled.div`
    overflow: hidden;
`;

const MessageSubHeading = styled(SubHeading)`
    text-align: left;
    margin-bottom: 10px;
`;

const WrapperMessageContent = styled.div`
    overflow: hidden;
`;

interface IProps {
    title: string,
    content: string,
}

const MessageCard = ({ title, content}: IProps) => {
    return(
        <Wrapper>
            <WrapperTitleMessage>
                <MessageSubHeading>{title}</MessageSubHeading>
            </WrapperTitleMessage>
            <WrapperMessageContent>
                <Paragraph>{content}</Paragraph>
            </WrapperMessageContent>
        </Wrapper>
    )
}


export default MessageCard;