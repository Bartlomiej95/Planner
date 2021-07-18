import { useHistory } from 'react-router';
import styled from 'styled-components';
import { SubHeading } from '../../components/Heading/Heading';
import { Paragraph } from '../../components/Paragraph/Paragraph';

const Wrapper = styled.div`
    width: 315px;
    min-height: 110px;
    padding: 8px 20px;
    margin: 0 auto;
    box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    margin-bottom: 25px;
    background-color: '#F8FAFE';
    cursor: pointer;
`;

const WrapperTitleMessage = styled.div`
    overflow: hidden;
    margin-bottom: 8px;
`;

const MessageSubHeading = styled(SubHeading)`
    text-align: left;
    margin-bottom: 3px;
`;

const WrapperMessageContent = styled.div`
    overflow: hidden;
`;

interface IProps {
    title: string,
    content: string,
    sender: string,
    recipient: string,
}

const MessageCard = ({ title, content, sender, recipient }: IProps) => {

    const history = useHistory();

    return(
        <Wrapper onClick={() => history.push({
            pathname: `/homepage/message/${title}`,
            state: {
                title,
                content,
                sender,
                recipient,
            }
        })}>
            <WrapperTitleMessage>
                <MessageSubHeading>{title}</MessageSubHeading>
                <Paragraph>{`Od: ${sender}`}</Paragraph>
            </WrapperTitleMessage>
            <WrapperMessageContent>
                <Paragraph>{content}</Paragraph>
            </WrapperMessageContent>
        </Wrapper>
    )
}


export default MessageCard;