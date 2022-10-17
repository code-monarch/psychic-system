import styled from 'styled-components';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { LoadingOverlay, Select } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { DateRangePicker } from '@mantine/dates';
import moment from 'moment';
import { ParagraphBold, Title } from '../styled';
import { useGetFSPDashboardGraphData } from '../../hooks/useWallets';
import { chartSelectStyles } from '../../lib/constants';
import { getDateMonthFromTimestamp, getMonthFromTimestamp } from '../../lib/utils';
import { DashboardGraphRequest } from '../../services/wallet-service';
import { TrendedChart } from './TrendsChart';
import { useTokenDetails } from '../../context/token-details-context';

export const TrendedBalanceChart = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const { walletSummaryDetails, tokenDetails, isLoadingWalletTokenDetails } = useTokenDetails();

  const [endDate, setEndDate] = useState();
  const [startDate, setStartDate] = useState();
  const [isDatePickerVisible, setIsDatePickerVisible] = useState<boolean>(false);
  const [period, setPeriod] = useState('180');

  const [dateFilters, setDateFilters] = useState<[Date | null, Date | null]>([null, null]);

  const wallets = walletSummaryDetails?.wallets || [];
  const distributionWallet = wallets?.find((wallet) => wallet?.category === 'Distribution');
  const { mutate: getGraphData, isLoading: isLoadingGraph, data } = useGetFSPDashboardGraphData();

  const creditChartData = data?.creditData || {};

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
      // Divide by decimals (Decimals value of BYDC) to get actual token values
      const creditAmount = Number(creditChartData[timeStamp]) / walletSummaryDetails?.decimals || 0;
      graphData.push({
        name: getXAxisPoints(timeStamp),
        [t('credit')]: Number(creditAmount),
      });
    }
    return graphData;
  };

  useEffect(() => {
    if ((dateFilters[0] && dateFilters[1]) || period !== 'custom') {
      fetchData();
    }
  }, [dateFilters, period]);

  const tokenId = tokenDetails?.[0].id;
  useEffect(() => {
    fetchData();
  }, [walletSummaryDetails, distributionWallet?.id, tokenId]);

  const fetchData = () => {
    const chartRequest: DashboardGraphRequest = {
      tokenId,
      data: {
        transactionType: 'External',
        numDays: Number(period),
      },
    };

    if (dateFilters[0] && dateFilters[1]) {
      chartRequest.data.startDate = moment(dateFilters[0]).format('YYYY-MM-DD');
      chartRequest.data.endDate = moment(dateFilters[1]).format('YYYY-MM-DD');
    }
    if (tokenId) getGraphData(chartRequest);
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

  return (
    <Wrapper>
      <LoadingOverlay visible={isLoadingGraph || isLoadingWalletTokenDetails} />
      <TopSection>
        <LeftSection>
          <Title>{t('trended.transactions.title')}</Title>
        </LeftSection>
        <RightSection>
          <DatePickerWrapper>
            <Select
              label=""
              onChange={onWalletDurationChange}
              value={period}
              rightSection={<ChevronDownIcon />}
              styles={{
                ...chartSelectStyles,
                root: {
                  marginBottom: 0,
                  width: 140,
                  height: 20,
                },
                input: {
                  ...chartSelectStyles.input,
                  height: 20,
                  minHeight: 20,
                },
              }}
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
        </RightSection>
      </TopSection>

      <TrendedChart data={constructGraphData()} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: rgba(250, 250, 250, 0.8);
  border-radius: 8px;
  padding: 16px;
  position: relative;
`;

const DatePickerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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
