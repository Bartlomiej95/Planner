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

const LabelSection = ({ title, category }) => {
    return(
        <Wrapper>
                <SubHeading>{title}</SubHeading>
                <LabelWrapper>

                    { category === "tasks" && (
                        <>
                         <Label division="UX/UI" isSelect={true} />
                         <Label division="Copywriting" isSelect={false} />
                         <Label division="Branding" isSelect={false} />
                         <Label division="Development" isSelect={false} />
                         <Label division="Spotkanie organizacyjne" isSelect={false} />
                         <Label division="Testy" isSelect={false} />
                         <Label division="Marketing" isSelect={false} />
                         <Label division="Konsultacje" isSelect={false} />

                         <Input placeholder="Podaj czas pracy w minutach" />
                         <ParagraphNote><SpanNote>Uwaga!</SpanNote> W ramach tego projektu <br/>zostało do zagospodarowania <SpanNote>47 godzin</SpanNote></ParagraphNote>

                        </>
                    )}
                     { category === "department" && (
                        <>
                         <Label division="Dział graficzny" isSelect={true} />
                         <Label division="Dział marketingu" isSelect={false} />
                         <Label division="Dział programistyczny" isSelect={false} />
                         <Label division="Administracja" isSelect={false} />
                         <Label division="Testerzy" isSelect={false} />
                         <Label division="Dział obsługi klienta" isSelect={false} />
                        </>
                    )
                    }
                </LabelWrapper>
        </Wrapper>
    )
}

export default LabelSection;