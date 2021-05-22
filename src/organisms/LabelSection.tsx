import { useState } from 'react';
import styled from 'styled-components';
import Label from '../molecules/Label/Label';
import { SubHeading } from '../components/Heading/Heading';

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

interface Props {
    title: string, 
    category: string,
    changeStatus: (isActive: boolean) => void,
}

const LabelSection = ({ title, category, changeStatus } :Props) => {

    const [isActive, setIsActive] = useState(false);

    const handleChangeStatus = () => {
        setIsActive(!isActive);
        changeStatus(isActive);
    }

    return(
        <Wrapper>
                <SubHeading>{title}</SubHeading>
                <LabelWrapper>

                    { category === "tasks" && (
                        <>
                         <Label division="UX/UI"  name=""  type="task" getStatus={() => handleChangeStatus()}/>
                         <Label division="Copywriting" name=""  type="task" getStatus={() => handleChangeStatus()} />
                         <Label division="Branding"  name="" type="task" getStatus={() => handleChangeStatus()}/>
                         <Label division="Development"  name="" type="task"  getStatus={() => handleChangeStatus()}/>
                         <Label division="Spotkanie organizacyjne"  name="" type="task" getStatus={() => handleChangeStatus()}/>
                         <Label division="Testy"  name="" type="task" getStatus={() => handleChangeStatus()}/>
                         <Label division="Marketing"  name="" type="task" getStatus={() => handleChangeStatus()}/>
                         <Label division="Konsultacje"  name="" type="task" getStatus={() => handleChangeStatus()}/>
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