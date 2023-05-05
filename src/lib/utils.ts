import { TFunction } from 'react-i18next';
import moment from 'moment';
import { TransactionRow } from '../pages/transactions/table-config';
import { navIconsActive as activeIcons, navIconsDefault as defaultIcons } from '../assets/images/icons/navigation';
import { MEMBER_ROUTE } from './constants';
import 'moment/locale/fr';

/**
 * Returns a scaling function which will normalize a value within the given values array to between newMax (default 0) and newMin (default 1)
 * @param values values to be scaled
 * @returns
 */
export function normalize(
  values: number[],
): (val: number, newMin?: number, newMax?: number, constant?: number) => number {
  const min = Math.min(...values);
  const max = Math.max(...values);
  return function (val: number, newMin = 0, newMax = 1, constant = 0.5) {
    val = Math.min(Math.max(val, min), max);
    const normalized = min < max ? (val - min) / (max - min) : constant;
    return normalized * (newMax - newMin) + newMin;
  };
}

/**
 * Returns the date value formatted like MM-DD-YYYY
 * @param date to be formatted
 * @returns
 */
// TODO: Replace with Intl.DateTimeFormat
export const formatDate = (date: Date): string => {
  const year = `${date.getFullYear()}`;
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');

  return [month, day, year].join('-');
};

export const createMultipleTableRowData = (input: TransactionRow[], multiple: number): TransactionRow[] => {
  let multipliedRowData: TransactionRow[] = [];
  for (let i = 0; i < multiple; i += 1) {
    multipliedRowData = multipliedRowData.concat(input);
  }
  return multipliedRowData;
};

// Create our number formatter.
const formatter = new Intl.NumberFormat('en-US', {
  notation: 'standard',
  // style:'currency',
  // currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
});

const integerFormatter = new Intl.NumberFormat('en-US', {
  notation: 'standard',
  // style:'currency',
  // currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export const formatAmount = (amount: number | string): string => {
  if (!amount) return '0';
  return formatter.format(Number(amount));
};

export const formatAmountInteger = (amount: number | string): string => {
  if (!amount) return '0';
  return integerFormatter.format(Number(amount));
};

export const formatAmountWithDecimals = (amount: number | string | undefined, decimals?: number): string => {
  if (!amount) return '0';
  if (!decimals) return formatAmount(amount);

  const divisor = 10 ** decimals;
  const amountWithDecimals = Number(amount) / divisor;
  return formatAmount(amountWithDecimals);
};

export const formatEntity = (entity: string): string => {
  if (!entity) return '';
  if (entity === 'haiti-pay-test') return 'HaitiPay';
  if (entity === 'emtech-cli') return 'BRH';

  return entity;
};

export const getNavigationItems = (t: TFunction) => {
  const navigationItems = [
    {
      to: MEMBER_ROUTE.GET_STARTED,
      text: t('navigation.home'),
      icon: { default: defaultIcons.home, active: activeIcons.home },
    },
    {
      to: MEMBER_ROUTE.DASHBOARD,
      text: t('navigation.dashboard'),
      icon: { default: defaultIcons.dashboard, active: activeIcons.dashboard },
    },
    {
      to: MEMBER_ROUTE.WALLETS,
      text: t('wallets.title'),
      icon: { default: defaultIcons.wallets, active: activeIcons.wallets },
    },
    {
      to: MEMBER_ROUTE.TRANSACTIONS,
      text: t('navigation.transactions'),
      icon: { default: defaultIcons.transactions, active: activeIcons.transactions },
    },
    {
      to: MEMBER_ROUTE.REQUESTS,
      text: t('navigation.requests'),
      icon: { default: defaultIcons.requests, active: activeIcons.requests },
    },
    {
      to: '/manage',
      text: t('navigation.manage'),
      icon: { default: defaultIcons.manage, active: activeIcons.manage },
      subNavigationItems: [
        {
          to: MEMBER_ROUTE.CURRENCY_MANAGEMENT,
          text: t('navigation.currency.management'),
        },
      ],
    },
  ];

  return navigationItems;
};

export const getNavigationTabs = (t: TFunction): { title: string; route: string }[] => [
  {
    title: t('overview.title'),
    route: 'overview',
  },
  {
    title: t('international.tab.title'),
    route: 'international',
  },
  {
    title: t('local.tab.title'),
    route: 'local',
  },
];

export const getTransactionTabs = (t: TFunction): { title: string; route: string }[] => [
  {
    title: t('internal.tab.title'),
    route: 'internal',
  },
  {
    title: t('external.tab.title'),
    route: 'external',
  },
];

export const getMonthFromTimestamp = (time: number, locale: string): string => {
  moment.locale([locale, 'en']);
  return moment(time).format('Do MMM');
};

export const getDateFromTimestamp = (time: number, t: TFunction): string => moment(Number(time)).format('ddd Do');

export const getDateMonthFromTimestamp = (time: number, locale: string): string => {
  moment.locale([locale, 'en']);
  return moment(time).format('Do MMM');
};
// return String(date.getDate());

export const setWithExpiry = (key, value, ttl) => {
  const now = new Date();

  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

export const getWithExpiry = (key) => {
  const itemStr = localStorage.getItem(key);

  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};
