import { useState } from 'react';
import styled from 'styled-components';
import Label from '../molecules/Label/Label';
import { SubHeading } from '../components/Heading/Heading';
import { Input } from '../components/Input/Input';
import { Paragraph } from '../components/Paragraph/Paragraph';

const Wrapper = styled.section`
     max-width: 300px;
     margin: 0 auto 45px auto;
     padding-top: 75px;
`;

const LabelWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 40px auto;
`;

const ParagraphNote = styled(Paragraph)`
    color: #0903B0;
    text-align: center;
`;

const SpanNote = styled.span`
    font-weight: 700;
`;

const LabelSection = ({ title, category, changeStatus }) => {

    const [isActive, setIsActive] = useState(false);

    const handleChangeStatus = () => {
        setIsActive(!isActive)
        changeStatus(isActive)
    }

    return(
        <Wrapper>
                <SubHeading>{title}</SubHeading>
                <LabelWrapper>

                    { category === "tasks" && (
                        <>
                         <Label division="UX/UI"  />
                         <Label division="Copywriting"  />
                         <Label division="Branding" />
                         <Label division="Development"  />
                         <Label division="Spotkanie organizacyjne" />
                         <Label division="Testy" />
                         <Label division="Marketing" />
                         <Label division="Konsultacje" />

                         <Input placeholder="Podaj czas pracy w minutach" />
                         <ParagraphNote><SpanNote>Uwaga!</SpanNote> W ramach tego projektu <br/>zostało do zagospodarowania <SpanNote>47 godzin</SpanNote></ParagraphNote>

                        </>
                    )}
                     { category === "department" && (
                        <>
                         <Label division="Dział graficzny" name="graphic" status={isActive} getStatus={() => handleChangeStatus()} />
                         <Label division="Dział marketingu" name="marketing" status={isActive} getStatus={() => handleChangeStatus()} />
                         <Label division="Dział programistyczny" name="programming" status={isActive} getStatus={() => handleChangeStatus()} />
                         <Label division="Administracja" name="administration" status={isActive} getStatus={() => handleChangeStatus()} />
                         <Label division="Testerzy" name="tester" status={isActive} getStatus={() => handleChangeStatus()} />
                         <Label division="Dział handlowy" name="sales" status={isActive} getStatus={() => handleChangeStatus()} />
                        </>
                    )
                    }
                </LabelWrapper>
        </Wrapper>
    )
}

export default LabelSection;