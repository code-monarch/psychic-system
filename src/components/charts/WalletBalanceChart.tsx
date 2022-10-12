import styled from 'styled-components';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { LoadingOverlay, Select } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { DateRangePicker } from '@mantine/dates';
import moment from 'moment';
import { Paragraph, ParagraphBold, Title } from '../styled';
import { ReAreaChart } from './AreaChart';
import { useGetWalletGraphData } from '../../hooks/useWallets';
import { chartSelectStyles } from '../../lib/constants';
import { formatAmountWithDecimals, getDateMonthFromTimestamp, getMonthFromTimestamp } from '../../lib/utils';
import { WalletGraphRequest } from '../../services/wallet-service';
import { useTokenDetails } from '../../context/token-details-context';

export const WalletBalanceChart = (): JSX.Element => {
  const { t, i18n } = useTranslation();

  const { tokenDetails, walletSummaryDetails } = useTokenDetails();
  const tokenId = tokenDetails?.[0].id;

  const [isDatePickerVisible, setIsDatePickerVisible] = useState<boolean>(false);
  const [period, setPeriod] = useState('180');

  const [dateFilters, setDateFilters] = useState<[Date | null, Date | null]>([null, null]);

  const wallets = walletSummaryDetails?.wallets || [];
  const distributionWallet = wallets?.find((wallet) => wallet?.category === 'Distribution');
  const { mutate: getGraphData, isLoading: isLoadingGraph, data } = useGetWalletGraphData();

  const creditChartData = data?.creditData || {};
  const debitChartData = data?.debitData || {};
  const creditAmount = data?.credit || 0;
  const debitAmount = data?.debit || 0;

  const getXAxisPoints = (time) => {
    const locale = i18n.resolvedLanguage;

    if (dateFilters[0] && dateFilters[1]) {
      return getDateMonthFromTimestamp(time, locale);
    }
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
      const creditAmount = Number(creditChartData[timeStamp]) / walletSummaryDetails?.decimals || 0;
      const debitAmount = Number(debitChartData[timeStamp]) / walletSummaryDetails?.decimals || 0;
      graphData.push({
        name: getXAxisPoints(timeStamp),
        [t('credit')]: Number(creditAmount),
        [t('debit')]: Number(debitAmount),
      });
    }
    return graphData;
  };

  useEffect(() => {
    if ((dateFilters[0] && dateFilters[1]) || period !== 'custom') {
      fetchData();
    }
  }, [dateFilters, period]);

  useEffect(() => {
    fetchData();
  }, [tokenId, distributionWallet?.id]);

  const fetchData = () => {
    const chartRequest: WalletGraphRequest = {
      tokenId,
      data: {
        distributionWalletId: distributionWallet?.id,
        numDays: Number(period),
      },
    };

    if (dateFilters[0] && dateFilters[1]) {
      chartRequest.data.startDate = moment(dateFilters[0]).format('YYYY-MM-DD');
      chartRequest.data.endDate = moment(dateFilters[1]).format('YYYY-MM-DD');
    }
    if (tokenId) {
      getGraphData(chartRequest);
    }
  };
  const onWalletDurationChange = (val) => {
    setPeriod(() => val);
    setDateFilters([null, null]);

    if (val === 'custom') {
      setIsDatePickerVisible(true);
    } else {
      setIsDatePickerVisible(false);
    }
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

  const { decimals } = walletSummaryDetails;
  return (
    <Wrapper>
      <LoadingOverlay visible={isLoadingGraph} zIndex={5} />
      <TopSection>
        <LeftSection>
          <Title>
            {t('wallets.balance')} ({walletSummaryDetails?.symbol})
          </Title>
          <Amount> {formatAmountWithDecimals(Number(distributionWallet?.balances?.[0]?.amount), decimals) || 0}</Amount>
        </LeftSection>
        <RightSection>
          <WalletTypeLabel>{t('distribution.title')}</WalletTypeLabel>
          <WalletSection style={{ marginBottom: 12 }}>
            <CreditLabel>{t('credit')}</CreditLabel>
            <ParagraphBold>
              {formatAmountWithDecimals(creditAmount, decimals)} {walletSummaryDetails?.symbol}
            </ParagraphBold>
          </WalletSection>
          <WalletSection>
            <DebitLabel>{t('debit')}</DebitLabel>
            <ParagraphBold>
              {formatAmountWithDecimals(debitAmount, decimals)} {walletSummaryDetails?.symbol}
            </ParagraphBold>
          </WalletSection>
        </RightSection>
      </TopSection>

      <DatePickerWrapper>
        <Select
          label=""
          onChange={onWalletDurationChange}
          value={period}
          rightSection={<ChevronDownIcon />}
          styles={chartSelectStyles}
          data={walletDurationOptions}
          maxDropdownHeight={280}
        />
        {isDatePickerVisible && (
          <DateRangePicker
            placeholder="Pick custom date range"
            value={dateFilters}
            onChange={setDateFilters}
            initiallyOpened
            maxDate={dayjs(new Date()).toDate()}
          />
        )}
      </DatePickerWrapper>

      <ReAreaChart data={constructGraphData()} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: rgba(250, 250, 250, 0.8);
  border-radius: 8px;
  padding: 24px;
  margin-top: 42px;
  position: relative;
`;

const DatePickerWrapper = styled.div`
  display: flex;
  align-items: center;
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
