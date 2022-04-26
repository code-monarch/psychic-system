import styled, { useTheme } from 'styled-components';
import { Transition } from '@mantine/core';
import { useState } from 'react';
import { ArrowRightIcon, Cross1Icon } from '@modulz/radix-icons';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Flex, Paragraph, ParagraphBold, Title } from './styled';
import { PrimaryButtonWithoutIcon } from './Buttons';
import robotImg from '../assets/images/robot2.png';
import { MEMBER_ROUTE } from '../lib/constants';

export const CurrenyManagementSetupAlert = () => {
  const theme: any = useTheme();
  const history = useHistory();
  const { grey, green } = theme.colors.primary;
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const getStartedhandler = () => {
    history.push(MEMBER_ROUTE.CURRENCY_MANAGEMENT);
  };
  // if (!isVisible) return null;
  return (
    <Transition mounted={isVisible} transition="fade" duration={400} timingFunction="ease">
      {(styles) => (
        <Container style={styles}>
          {/* <CloseIconWrapper onClick={() => setIsVisible(false)}> */}
          {/*  <Cross1Icon color="white" /> */}
          {/* </CloseIconWrapper> */}
          <div>
            <CardTitle>{t('manage.currency.title')}</CardTitle>
            {/* <CardDescription>{t('mint.transfer.tokens.description')}</CardDescription> */}
          </div>
          <DashboardLink>
            <LinkText onClick={getStartedhandler}>{t('tokens.manage')}</LinkText>
            <ArrowRightIcon fontWeight={600} color="white" />
          </DashboardLink>
          <RobotImage src={robotImg} />
        </Container>
      )}
    </Transition>
  );
};

const RobotImage = styled.img`
  width: 163px;
  height: 213px;
  position: absolute;
  top: -37px;
  right: 107px;
`;

const CloseIconWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 30px;
`;

const CardTitle = styled(ParagraphBold)`
  text-transform: none;
  font-size: 24px;
  line-height: 26px;
  margin-bottom: 12px;
  color: white;
  width: 230px;
`;

const CardDescription = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.primary.darkgrey};
  font-size: 14px;
  line-height: 21px;
  max-width: 550px;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 114px;
  background: ${({ theme }) => theme.colors.primary.green};
  border: 0.5px solid ${({ theme }) => theme.colors.secondary.lightgrey};
  border-radius: 6px;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-repeat: no-repeat;
  background-position: right;
  background-size: 500px;
`;

const LinkText = styled(ParagraphBold)`
  color: ${({ theme }) => theme.colors.primary.white};
  font-size: 14px;
  font-family: ProximaNovaBold;
  margin-right: 10px;
`;

const DashboardLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
