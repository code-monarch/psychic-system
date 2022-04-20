import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { LoadingOverlay, Select } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { Paragraph, ParagraphBold, Title } from '../styled';
import { ReAreaChart } from './AreaChart';
import { useGetWalletAndTokenDetails, useGetWalletGraphData } from '../../hooks/useWallets';
import { chartSelectStyles } from '../../lib/constants';
import { formatAmount, getDateMonthFromTimestamp, getMonthFromTimestamp } from '../../lib/utils';

const Wrapper = styled.div`
  width: 100%;
  background-color: rgba(250, 250, 250, 0.8);
  border-radius: 8px;
  padding: 24px;
  margin-top: 42px;
  position: relative;
`;

const TopSection = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary.grey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  margin-bottom: 16px;
`;

const LeftSection = styled.div``;
const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const WalletTypeLabel = styled(ParagraphBold)`
  align-items: center;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.primary.green};
`;

const Amount = styled.p`
  font-size: 28px;
  line-height: 42px;
  margin: 0;
  margin-top: 20px;
  font-family: 'ProximaNovaBold', sans-serif;
  color: ${({ theme }) => theme.colors.primary.green};
`;
const WalletSection = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
`;

const CreditLabel = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.primary.green};
`;

const DebitLabel = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.secondary.red};
`;

const DebitPercentage = styled(ParagraphBold)`
  color: ${({ theme }) => theme.colors.secondary.red};
`;

const CreditPercentage = styled(ParagraphBold)`
  color: ${({ theme }) => theme.colors.primary.green};
`;

export const WalletBalanceChart = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const { data: walletBalanceAndTokenDetails, isLoading: isLoadingWalletTokenDetails } = useGetWalletAndTokenDetails();

  const [endDate, setEndDate] = useState();
  const [startDate, setStartDate] = useState();
  const [period, setPeriod] = useState('180');

  const wallets = walletBalanceAndTokenDetails?.walletBalance || [];
  const distributionWallet = wallets?.find((wallet) => wallet?.walletType === 'Distribution');
  const { mutate: getGraphData, isLoading: isLoadingGraph, data } = useGetWalletGraphData();

  const creditChartData = data?.graphDataCredit || {};
  const debitChartData = data?.graphDataDebit || {};
  const creditAmount = data?.credit || 0;
  const debitAmount = data?.debit || 0;

  const getXAxisPoints = (time) => {
    const locale = i18n.resolvedLanguage;
    switch (period) {
      case '7':
        return getDateMonthFromTimestamp(time, locale);
      case '14':
        return getDateMonthFromTimestamp(time, locale);
      case '30':
        return getDateMonthFromTimestamp(time, locale);
      default:
        return getMonthFromTimestamp(time, locale);
    }
  };

  const constructGraphData = () => {
    const graphData = [];
    const timeStamps = Object.keys(creditChartData).sort();
    for (const timeStamp of timeStamps) {
      graphData.push({
        name: getXAxisPoints(timeStamp),
        [t('credit')]: creditChartData[timeStamp],
        [t('debit')]: debitChartData[timeStamp],
      });
    }
    return graphData;
  };

  useEffect(() => {
    fetchData(undefined);
  }, [walletBalanceAndTokenDetails, distributionWallet?.walletId]);

  const fetchData = (val?: string) => {
    getGraphData({
      distributionWalletId: distributionWallet?.walletId,
      walletType: 'distribution',
      tokenId: walletBalanceAndTokenDetails?.tokenId,
      endDate,
      period: Number(val || period),
      startDate,
    });
  };
  const onWalletDurationChange = (val) => {
    setPeriod(() => val);
    fetchData(val);
  };

  const walletDurationOptions = [
    { label: t('duration.one.week'), value: '7' },
    { label: t('duration.two.weeks'), value: '14' },
    { label: t('duration.one.month'), value: '30' },
    { label: t('duration.three.months'), value: '90' },
    { label: t('duration.six.months'), value: '180' },
    { label: t('duration.nine.months'), value: '270' },
    { label: t('duration.custom'), value: 'custom' },
  ];

  return (
    <Wrapper>
      <LoadingOverlay visible={isLoadingGraph} />
      <TopSection>
        <LeftSection>
          <Title>{t('wallets.balance')} (BTKB)</Title>
          <Amount> {formatAmount(Number(distributionWallet?.balances?.[0]?.balance)) || 0}</Amount>
        </LeftSection>
        <RightSection>
          <WalletTypeLabel>{t('distribution.title')}</WalletTypeLabel>
          <WalletSection style={{ marginBottom: 12 }}>
            <CreditLabel>{t('credit')}</CreditLabel>
            <ParagraphBold>{creditAmount} BTKB</ParagraphBold>
          </WalletSection>
          <WalletSection>
            <DebitLabel>{t('debit')}</DebitLabel>
            <ParagraphBold>{debitAmount} BTKB</ParagraphBold>
          </WalletSection>
        </RightSection>
      </TopSection>

      <Select
        label=""
        onChange={onWalletDurationChange}
        value={period}
        rightSection={<ChevronDownIcon />}
        styles={chartSelectStyles}
        data={walletDurationOptions}
      />
      <ReAreaChart data={constructGraphData()} />
    </Wrapper>
  );
};
