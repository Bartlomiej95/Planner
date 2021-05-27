import React, { useState } from 'react';
import styled from 'styled-components';
import { Heading } from '../components/Heading/Heading';
import { data } from '../data';
import QAPlannerCard from '../molecules/QAPlannerCard/QAPlannerCard';

const Wrapper = styled.section`
    width: 100vw;
    min-height: 800px;
`;


const FAQSection = () => {

    const [activeCard, setActiveCard] = useState(false)

    const handleClick = () => {
        setActiveCard(!activeCard)
    }

    return(
        <Wrapper >
            <Heading>Chcesz poznać nasze narzędzie?</Heading>
            {
                data.faq.map(item => (
                    <QAPlannerCard 
                        key={item.id}
                        id={item.id}
                        question={item.question}
                        answer={item.answer}
                    />
                ))
            }
        </Wrapper>
    )
}

export default FAQSection;