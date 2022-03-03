import styled, { useTheme } from 'styled-components';
import { Transition } from '@mantine/core';
import { useState } from 'react';
import { Cross1Icon } from '@modulz/radix-icons';
import { Flex, Paragraph, Title } from './styled';
import { PrimaryButtonWithoutIcon } from './Buttons';
import robotImg from '../assets/images/robot.png';

export const CurrenyManagementSetupAlert = () => {
  const theme: any = useTheme();
  const { grey } = theme.colors.primary;
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const getStartedhandler = () => {};
  // if (!isVisible) return null;
  return (
    <Transition mounted={isVisible} transition="fade" duration={400} timingFunction="ease">
      {(styles) => (
        <Container style={styles}>
          <CloseIconWrapper onClick={() => setIsVisible(false)}>
            <Cross1Icon />
          </CloseIconWrapper>
          <div>
            <CardTitle>Currency Management Set Up</CardTitle>
            <CardDescription>Manage currency by minting or burning and distributing tokens.</CardDescription>
          </div>
          <PrimaryButtonWithoutIcon title="Get Started" onClick={getStartedhandler} />
        </Container>
      )}
    </Transition>
  );
};

const CloseIconWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 30px;
`;
const CardTitle = styled(Title)`
  text-transform: none;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 12px;
`;

const CardDescription = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.primary.darkgrey};
  font-size: 14px;
  line-height: 21px;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  background: ${({ theme }) => theme.colors.primary.lightgrey};
  border: 0.5px solid ${({ theme }) => theme.colors.secondary.lightgrey};
  border-radius: 6px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${robotImg});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 500px;
`;
