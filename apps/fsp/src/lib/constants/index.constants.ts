/* eslint-disable no-unused-vars */
export const COOKIE_TOKEN = "cookieToken";
export const REFRESH_TOKEN = "refreshToken";
export const WEBSITE_URL = "";
export const APP_URL = "";
export const SIDEBAR_STATE = "sidebar_state";

// ISO 4217 currency codes
export enum CurrencyCode {
  AED = "AED",
  AFN = "AFN",
  ALL = "ALL",
  AMD = "AMD",
  ANG = "ANG",
  AOA = "AOA",
  ARS = "ARS",
  AUD = "AUD",
  AWG = "AWG",
  AZN = "AZN",
  BAM = "BAM",
  BBD = "BBD",
  BDT = "BDT",
  BGN = "BGN",
  BHD = "BHD",
  BIF = "BIF",
  BMD = "BMD",
  BND = "BND",
  BOB = "BOB",
  BOV = "BOV",
  BRL = "BRL",
  BSD = "BSD",
  BTN = "BTN",
  BWP = "BWP",
  BYN = "BYN",
  BZD = "BZD",
  CAD = "CAD",
  CDF = "CDF",
  CHE = "CHE",
  CHF = "CHF",
  CHW = "CHW",
  CLF = "CLF",
  CLP = "CLP",
  CNY = "CNY",
  COP = "COP",
  COU = "COU",
  CRC = "CRC",
  CUC = "CUC",
  CUP = "CUP",
  CVE = "CVE",
  CZK = "CZK",
  DJF = "DJF",
  DKK = "DKK",
  DOP = "DOP",
  DZD = "DZD",
  EGP = "EGP",
  ERN = "ERN",
  ETB = "ETB",
  EUR = "EUR",
  FJD = "FJD",
  FKP = "FKP",
  GBP = "GBP",
  GEL = "GEL",
  GHS = "GHS",
  GIP = "GIP",
  GMD = "GMD",
  GNF = "GNF",
  GTQ = "GTQ",
  GYD = "GYD",
  HKD = "HKD",
  HNL = "HNL",
  HRK = "HRK",
  HTG = "HTG",
  HUF = "HUF",
  IDR = "IDR",
  ILS = "ILS",
  INR = "INR",
  IQD = "IQD",
  IRR = "IRR",
  ISK = "ISK",
  JMD = "JMD",
  JOD = "JOD",
  JPY = "JPY",
  KES = "KES",
  KGS = "KGS",
  KHR = "KHR",
  KMF = "KMF",
  KPW = "KPW",
  KRW = "KRW",
  KWD = "KWD",
  KYD = "KYD",
  KZT = "KZT",
  LAK = "LAK",
  LBP = "LBP",
  LKR = "LKR",
  LRD = "LRD",
  LSL = "LSL",
  LYD = "LYD",
  MAD = "MAD",
  MDL = "MDL",
  MGA = "MGA",
  MKD = "MKD",
  MMK = "MMK",
  MNT = "MNT",
  MOP = "MOP",
  MRU = "MRU",
  MUR = "MUR",
  MVR = "MVR",
  MWK = "MWK",
  MXN = "MXN",
  MXV = "MXV",
  MYR = "MYR",
  MZN = "MZN",
  NAD = "NAD",
  NGN = "NGN",
  NIO = "NIO",
  NOK = "NOK",
  NPR = "NPR",
  NZD = "NZD",
  OMR = "OMR",
  PAB = "PAB",
  PEN = "PEN",
  PGK = "PGK",
  PHP = "PHP",
  PKR = "PKR",
  PLN = "PLN",
  PYG = "PYG",
  QAR = "QAR",
  RON = "RON",
  RSD = "RSD",
  RUB = "RUB",
  RWF = "RWF",
  SAR = "SAR",
  SBD = "SBD",
  SCR = "SCR",
  SDG = "SDG",
  SEK = "SEK",
  SGD = "SGD",
  SHP = "SHP",
  SLL = "SLL",
  SOS = "SOS",
  SRD = "SRD",
  SSP = "SSP",
  STN = "STN",
  SVC = "SVC",
  SYP = "SYP",
  SZL = "SZL",
  THB = "THB",
  TJS = "TJS",
  TMT = "TMT",
  TND = "TND",
  TOP = "TOP",
  TRY = "TRY",
  TTD = "TTD",
  TWD = "TWD",
  TZS = "TZS",
  UAH = "UAH",
  UGX = "UGX",
  USD = "USD",
  USN = "USN",
  UYI = "UYI",
  UYU = "UYU",
  UYW = "UYW",
  UZS = "UZS",
  VED = "VED",
  VES = "VES",
  VND = "VND",
  VUV = "VUV",
  WST = "WST",
  XAF = "XAF",
  XCD = "XCD",
  XDR = "XDR",
  XOF = "XOF",
  XPF = "XPF",
  XSU = "XSU",
  XUA = "XUA",
  YER = "YER",
  ZAR = "ZAR",
  ZMW = "ZMW",
  ZWL = "ZWL",
}

type CurrencyName = {
  name_formal: string;
  name_formal_plural: string;
  name_informal: string;
  name_informal_plural: string;
  country?: string;
};

// ISO 4217 currency names
export const CURRENCY_NAMES: Record<CurrencyCode, CurrencyName> = {
  XUA: {
    name_formal: "ADB Unit of Account",
    name_formal_plural: "ADB Units of Account",
    name_informal: "ADB Unit of Account",
    name_informal_plural: "ADB Units of Account",
  },
  AFN: {
    name_formal: "Afghani",
    name_formal_plural: "Afghanis",
    name_informal: "Afghani",
    name_informal_plural: "Afghanis",
  },
  DZD: {
    name_formal: "Algerian Dinar",
    name_formal_plural: "Algerian Dinars",
    name_informal: "Dinar",
    name_informal_plural: "Dinars",
  },
  ARS: {
    name_formal: "Argentine Peso",
    name_formal_plural: "Argentine Pesos",
    name_informal: "Peso",
    name_informal_plural: "Pesos",
  },
  AMD: {
    name_formal: "Armenian Dram",
    name_formal_plural: "Armenian Dram",
    name_informal: "Dram",
    name_informal_plural: "Dram",
  },
  AWG: {
    name_formal: "Aruban Florin",
    name_formal_plural: "Aruban Florins",
    name_informal: "Florin",
    name_informal_plural: "Florins",
  },
  AUD: {
    name_formal: "Australian Dollar",
    name_formal_plural: "Australian Dollars",
    name_informal: "Dollar",
    name_informal_plural: "Dollars",
  },
  AZN: {
    name_formal: "Azerbaijan Manat",
    name_formal_plural: "Azerbaijan Manats",
    name_informal: "Manat",
    name_informal_plural: "Manats",
  },
  BSD: {
    name_formal: "Bahamian Dollar",
    name_formal_plural: "Bahamian Dollars",
    name_informal: "Dollar",
    name_informal_plural: "Dollars",
  },
  BHD: {
    name_formal: "Bahraini Dinar",
    name_formal_plural: "Bahraini Dinars",
    name_informal: "Dinar",
    name_informal_plural: "Dinars",
  },
  THB: {
    name_formal: "Baht",
    name_formal_plural: "Baht",
    name_informal: "Baht",
    name_informal_plural: "Baht",
  },
  PAB: {
    name_formal: "Balboa",
    name_formal_plural: "Balboas",
    name_informal: "Balboa",
    name_informal_plural: "Balboas",
  },
  BBD: {
    name_formal: "Barbados Dollar",
    name_formal_plural: "Barbados Dollars",
    name_informal: "Dollar",
    name_informal_plural: "Dollars",
  },
  BYN: {
    name_formal: "Belarusian Ruble",
    name_formal_plural: "Belarusian Rubles",
    name_informal: "Ruble",
    name_informal_plural: "Rubles",
  },
  BZD: {
    name_formal: "Belize Dollar",
    name_formal_plural: "Belize Dollars",
    name_informal: "Dollar",
    name_informal_plural: "Dollars",
  },
  BMD: {
    name_formal: "Bermudian Dollar",
    name_formal_plural: "Bermudian Dollars",
    name_informal: "Dollar",
    name_informal_plural: "Dollars",
  },
  BOB: {
    name_formal: "Boliviano",
    name_formal_plural: "Bolivianos",
    name_informal: "Boliviano",
    name_informal_plural: "Bolivianos",
  },
  VED: {
    name_formal: "Bolivar Soberano",
    name_formal_plural: "Bolivares Soberano",
    name_informal: "Bolivar",
    name_informal_plural: "Bolivares",
  },
  VES: {
    name_formal: "Bolivar Soberano",
    name_formal_plural: "Bolivares Soberano",
    name_informal: "Bolivar",
    name_informal_plural: "Bolivares",
  },
  BRL: {
    name_formal: "Brazilian Real",
    name_formal_plural: "Brazilian Reals",
    name_informal: "Real",
    name_informal_plural: "Reals",
  },
  BND: {
    name_formal: "Brunei Dollar",
    name_formal_plural: "Brunei Dollars",
    name_informal: "Dollar",
    name_informal_plural: "Dollars",
  },
  BGN: {
    name_formal: "Bulgarian Lev",
    name_formal_plural: "Bulgarian Leva",
    name_informal: "Lev",
    name_informal_plural: "Leva",
  },
  BIF: {
    name_formal: "Burundi Franc",
    name_formal_plural: "Burundi Francs",
    name_informal: "Franc",
    name_informal_plural: "Francs",
  },
  CVE: {
    name_formal: "Cabo Verde Escudo",
    name_formal_plural: "Cabo Verde Escudos",
    name_informal: "Escudo",
    name_informal_plural: "Escudos",
  },
  CAD: {
    name_formal: "Canadian Dollar",
    name_formal_plural: "Canadian Dollars",
    name_informal: "Dollar",
    name_informal_plural: "Dollars",
    country: "Canada",
  },
  KYD: {
    name_formal: "Cayman Islands Dollar",
    name_formal_plural: "Cayman Islands Dollars",
    name_informal: "Dollar",
    name_informal_plural: "Dollars",
  },
  XOF: {
    name_formal: "CFA Franc BCEAO",
    name_formal_plural: "CFA Francs BCEAO",
    name_informal: "CFA Franc BCEAO",
    name_informal_plural: "CFA Francs BCEAO",
  },
  XAF: {
    name_formal: "CFA Franc BEAC",
    name_formal_plural: "CFA Francs BCEAO",
    name_informal: "CFA Franc BCEAO",
    name_informal_plural: "CFA Francs BCEAO",
  },
  XPF: {
    name_formal: "CFP Franc",
    name_formal_plural: "CFP Francs",
    name_informal: "CFP Franc",
    name_informal_plural: "CFP Francs",
  },
  CLP: {
    name_formal: "Chilean Peso",
    name_formal_plural: "Chilean Pesos",
    name_informal: "Peso",
    name_informal_plural: "Pesos",
  },
  COP: {
    name_formal: "Colombian Peso",
    name_formal_plural: "Colombian Pesos",
    name_informal: "Peso",
    name_informal_plural: "Pesos",
  },
  KMF: {
    name_formal: "Comorian Franc ",
    name_formal_plural: "Comorian Francs",
    name_informal: "Franc",
    name_informal_plural: "Francs",
  },
  CDF: {
    name_formal: "Congolese Franc",
    name_formal_plural: "Congolese Francs",
    name_informal: "Franc",
    name_informal_plural: "Francs",
  },
  BAM: {
    name_formal: "Convertible Mark",
    name_formal_plural: "Convertible Marka",
    name_informal: "Convertible Mark",
    name_informal_plural: "Convertible Marka",
  },
  NIO: {
    name_formal: "Cordoba Oro",
    name_formal_plural: "Cordobas",
    name_informal: "Cordoba",
    name_informal_plural: "Cordobas",
  },
  CRC: {
    name_formal: "Costa Rican Colon",
    name_formal_plural: "Costa Rican Colones",
    name_informal: "Colon",
    name_informal_plural: "Colones",
  },
  CUP: {
    name_formal: "Cuban Peso",
    name_formal_plural: "Cuban Pesos",
    name_informal: "Peso",
    name_informal_plural: "Pesos",
  },
  CZK: {
    name_formal: "Czech Koruna",
    name_formal_plural: "Czech Koruny",
    name_informal: "Koruna",
    name_informal_plural: "Koruny",
  },
  GMD: {
    name_formal: "Dalasi",
    name_formal_plural: "Dalasi",
    name_informal: "Dalasi",
    name_informal_plural: "Dalasi",
  },
  DKK: {
    name_formal: "Danish Krone",
    name_formal_plural: "Danish Kroner",
    name_informal: "Krone",
    name_informal_plural: "Kroner",
  },
  MKD: {
    name_formal: "Denar",
    name_formal_plural: "Denars",
    name_informal: "Denar",
    name_informal_plural: "Denars",
  },
  DJF: {
    name_formal: "Djibouti Franc",
    name_formal_plural: "Djibouti Francs",
    name_informal: "Franc",
    name_informal_plural: "Francs",
  },
  STN: {
    name_formal: "Dobra",
    name_formal_plural: "Dobras",
    name_informal: "Dobra",
    name_informal_plural: "Dobras",
  },
  DOP: {
    name_formal: "Dominican Peso",
    name_formal_plural: "Dominican Pesos",
    name_informal: "Dominican Peso",
    name_informal_plural: "Dominican Pesos",
    country: "Dominican Republic",
  },
  VND: {
    name_formal: "Dong",
    name_formal_plural: "Dong",
    name_informal: "Dong",
    name_informal_plural: "Dong",
  },
  XCD: {
    name_formal: "East Caribbean Dollar",
    name_formal_plural: "East Caribbean Dollars",
    name_informal: "Dollar",
    name_informal_plural: "Dollars",
  },
  EGP: {
    name_formal: "Egyptian Pound",
    name_formal_plural: "Egyptian Pounds",
    name_informal: "Pound",
    name_informal_plural: "Pounds",
  },
  SVC: {
    name_formal: "El Salvador Colon",
    name_formal_plural: "El Salvador Colones",
    name_informal: "Colon",
    name_informal_plural: "Colones",
  },
  ETB: {
    name_formal: "Ethiopian Birr",
    name_formal_plural: "Ethiopian Birr",
    name_informal: "Birr",
    name_informal_plural: "Birr",
  },
  EUR: {
    name_formal: "Euro",
    name_formal_plural: "Euro",
    name_informal: "Euro",
    name_informal_plural: "Euro",
    country: "UK",
  },
  FKP: {
    name_formal: "Falkland Islands Pound",
    name_formal_plural: "Falkland Islands Pounds",
    name_informal: "Pound",
    name_informal_plural: "Pounds",
  },
  FJD: {
    name_formal: "Fiji Dollar",
    name_formal_plural: "Fiji Dollars",
    name_informal: "Dollar",
    name_informal_plural: "Dollars",
  },
  HUF: {
    name_formal: "Forint",
    name_formal_plural: "Forints",
    name_informal: "Forint",
    name_informal_plural: "Forints",
  },
  GHS: {
    name_formal: "Ghana Cedi",
    name_formal_plural: "Ghana Cedis",
    name_informal: "Cedi",
    name_informal_plural: "Cedis",
  },
  GIP: {
    name_formal: "Gibraltar Pound",
    name_formal_plural: "Gibraltar Pounds",
    name_informal: "Pound",
    name_informal_plural: "Pounds",
  },
  HTG: {
    name_formal: "Haitian Gourde",
    name_formal_plural: "Haitian Gourdes",
    name_informal: "Gourde",
    name_informal_plural: "Gourdes",
  },
  PYG: {
    name_formal: "Guarani",
    name_formal_plural: "Guarani",
    name_informal: "Guarani",
    name_informal_plural: "Guarani",
  },
  GNF: {
    name_formal: "Guinean Franc",
    name_formal_plural: "Guinean Francs",
    name_informal: "Franc",
    name_informal_plural: "Francs",
  },
  GYD: {
    name_formal: "Guyana Dollar",
    name_formal_plural: "Guyana Dollars",
    name_informal: "Dollar",
    name_informal_plural: "Dollars",
  },
  HKD: {
    name_formal: "Hong Kong Dollar",
    name_formal_plural: "Hong Kong Dollars",
    name_informal: "Dollar",
    name_informal_plural: "Dollars",
  },
  UAH: {
    name_formal: "Hryvnia",
    name_formal_plural: "Hryvnia",
    name_informal: "Hryvnia",
    name_informal_plural: "Hryvnia",
  },
  ISK: {
    name_formal: "Iceland Krona",
    name_formal_plural: "Kronur",
    name_informal: "Krona",
    name_informal_plural: "Kronur",
  },
  INR: {
    name_formal: "Indian Rupee",
    name_formal_plural: "Indian Rupees",
    name_informal: "Rupee",
    name_informal_plural: "Rupees",
  },
  IRR: {
    name_formal: "Iranian Rial",
    name_formal_plural: "Iranian Rials",
    name_informal: "Rial",
    name_informal_plural: "Rials",
  },
  IQD: {
    name_formal: "Iraqi Dinar",
    name_formal_plural: "Iraqi Dinars",
    name_informal: "Dinar",
    name_informal_plural: "Dinars",
  },
  JMD: {
    name_formal: "Jamaican Dollar",
    name_formal_plural: "Jamaican Dollars",
    name_informal: "Dollar",
    name_informal_plural: "Dollars",
  },
  JOD: {
    name_formal: "Jordanian Dinar",
    name_formal_plural: "Jordanian Dinars",
    name_informal: "Dinar",
    name_informal_plural: "Dinars",
  },
  KES: {
    name_formal: "Kenyan Shilling",
    name_formal_plural: "Kenyan Shillings",
    name_informal: "Shilling",
    name_informal_plural: "Shillings",
  },
  PGK: {
    name_formal: "Kina",
    name_formal_plural: "Kina",
    name_informal: "Kina",
    name_informal_plural: "Kina",
  },
  HRK: {
    name_formal: "Kuna",
    name_formal_plural: "Kuna",
    name_informal: "Kuna",
    name_informal_plural: "Kuna",
  },
  KWD: {
    name_formal: "Kuwaiti Dinar",
    name_formal_plural: "Kuwaiti Dinars",
    name_informal: "Dinar",
    name_informal_plural: "Dinars",
  },
  AOA: {
    name_formal: "Kwanza",
    name_formal_plural: "Kwanza",
    name_informal: "Kwanza",
    name_informal_plural: "Kwanza",
  },
  MMK: {
    name_formal: "Kyat",
    name_formal_plural: "Kyats",
    name_informal: "Kyat",
    name_informal_plural: "Kyats",
  },
  LAK: {
    name_formal: "Lao Kip",
    name_formal_plural: "Lao Kips",
    name_informal: "Kip",
    name_informal_plural: "Kips",
  },
  GEL: {
    name_formal: "Lari",
    name_formal_plural: "Lari",
    name_informal: "Lari",
    name_informal_plural: "Lari",
  },
  LBP: {
    name_formal: "Lebanese Pound",
    name_formal_plural: "Lebanese Pounds",
    name_informal: "Pound",
    name_informal_plural: "Pounds",
  },
  ALL: {
    name_formal: "Lek",
    name_formal_plural: "Leke",
    name_informal: "Lek",
    name_informal_plural: "Leke",
  },
  HNL: {
    name_formal: "Lempira",
    name_formal_plural: "Lempiras",
    name_informal: "Lempiras",
    name_informal_plural: "Lempiras",
  },
  SLL: {
    name_formal: "Leone",
    name_formal_plural: "Leones",
    name_informal: "Leone",
    name_informal_plural: "Leones",
  },
  LRD: {
    name_formal: "Liberian Dollar",
    name_formal_plural: "Liberian Dollars",
    name_informal: "Dollar",
    name_informal_plural: "Dollars",
  },
  LYD: {
    name_formal: "Libyan Dinar",
    name_formal_plural: "Libyan Dinars",
    name_informal: "Dinar",
    name_informal_plural: "Dinars",
  },
  SZL: {
    name_formal: "Lilangeni",
    name_formal_plural: "Emalangeni",
    name_informal: "Lilangeni",
    name_informal_plural: "Emalangeni",
  },
  LSL: {
    name_formal: "Loti",
    name_formal_plural: "Maloti",
    name_informal: "Loti",
    name_informal_plural: "Maloti",
  },
  MGA: {
    name_formal: "Malagasy Ariary",
    name_formal_plural: "Malagasy Ariary",
    name_informal: "Ariary",
    name_informal_plural: "Ariary",
  },
  MWK: {
    name_formal: "Malawi Kwacha",
    name_formal_plural: "Malawi Kwacha",
    name_informal: "Kwacha",
    name_informal_plural: "Kwacha",
  },
  MYR: {
    name_formal: "Malaysian Ringgit",
    name_formal_plural: "Malaysian Ringgits",
    name_informal: "Ringgits",
    name_informal_plural: "Ringgits",
  },
  MUR: {
    name_formal: "Mauritius Rupee",
    name_formal_plural: "Mauritius Rupees",
    name_informal: "Rupee",
    name_informal_plural: "Rupees",
  },
  MXN: {
    name_formal: "Mexican Peso",
    name_formal_plural: "Mexican Pesos",
    name_informal: "Peso",
    name_informal_plural: "Pesos",
  },
  MXV: {
    name_formal: "Mexican Unidad de Inversion (UDI)",
    name_formal_plural: "Mexican Unidades de Inversion (UDI)",
    name_informal: "Mexican Unidad de Inversion (UDI)",
    name_informal_plural: "Mexican Unidades de Inversion (UDI)",
  },
  MDL: {
    name_formal: "Moldovan Leu",
    name_formal_plural: "Moldovan Lei",
    name_informal: "Leu",
    name_informal_plural: "Lei",
  },
  MAD: {
    name_formal: "Moroccan Dirham",
    name_formal_plural: "Moroccan Dirhams",
    name_informal: "Dirham",
    name_informal_plural: "Dirhams",
  },
  MZN: {
    name_formal: "Mozambique Metical",
    name_formal_plural: "Mozambique Meticais",
    name_informal: "Metical",
    name_informal_plural: "Meticais",
  },
  BOV: {
    name_formal: "Mvdol",
    name_formal_plural: "Mvdol",
    name_informal: "Mvdol",
    name_informal_plural: "Mvdol",
  },
  NGN: {
    name_formal: "Naira",
    name_formal_plural: "Nairas",
    name_informal: "Naira",
    name_informal_plural: "Nairas",
  },
  ERN: {
    name_formal: "Nakfa",
    name_formal_plural: "Nakfa",
    name_informal: "Nakfa",
    name_informal_plural: "Nakfa",
  },
  NAD: {
    name_formal: "Namibia Dollar",
    name_formal_plural: "Namibia Dollars",
    name_informal: "Dollar",
    name_informal_plural: "Dollars",
  },
  NPR: {
    name_formal: "Nepalese Rupee",
    name_formal_plural: "Nepalese Rupees",
    name_informal: "Rupee",
    name_informal_plural: "Rupees",
  },
  ANG: {
    name_formal: "Netherlands Antillean Guilder",
    name_formal_plural: "Netherlands Antillean Guilders",
    name_informal: "Guilder",
    name_informal_plural: "Guilders",
  },
  ILS: {
    name_formal: "New Israeli Sheqel",
    name_formal_plural: "New Israeli Sheqels",
    name_informal: "Sheqel",
    name_informal_plural: "Sheqels",
  },
  TWD: {
    name_formal: "New Taiwan Dollar",
    name_formal_plural: "New Taiwan Dollars",
    name_informal: "New Taiwan Dollar",
    name_informal_plural: "New Taiwan Dollars",
  },
  NZD: {
    name_formal: "New Zealand Dollar",
    name_formal_plural: "New Zealand Dollars",
    name_informal: "Dollar",
    name_informal_plural: "Dollars",
  },
  BTN: {
    name_formal: "Ngultrum",
    name_formal_plural: "Ngultrum",
    name_informal: "Ngultrum",
    name_informal_plural: "Ngultrum",
  },
  KPW: {
    name_formal: "North Korean Won",
    name_formal_plural: "North Korean Won",
    name_informal: "North Korean Won",
    name_informal_plural: "North Korean Won",
  },
  NOK: {
    name_formal: "Norwegian Krone",
    name_formal_plural: "Norwegian Kroner",
    name_informal: "Krone",
    name_informal_plural: "Kroner",
  },
  MRU: {
    name_formal: "Ouguiya",
    name_formal_plural: "Ouguiyas",
    name_informal: "Ouguiya",
    name_informal_plural: "Ouguiyas",
  },
  PKR: {
    name_formal: "Pakistan Rupee",
    name_formal_plural: "Pakistan Rupees",
    name_informal: "Rupee",
    name_informal_plural: "Rupees",
  },
  MOP: {
    name_formal: "Pataca",
    name_formal_plural: "Patacas",
    name_informal: "Pataca",
    name_informal_plural: "Patacas",
  },
  TOP: {
    name_formal: "Pa'anga",
    name_formal_plural: "Pa'anga",
    name_informal: "Pa'anga",
    name_informal_plural: "Pa'anga",
  },
  CUC: {
    name_formal: "Peso Convertible",
    name_formal_plural: "Pesos Convertible",
    name_informal: "Peso Convertible",
    name_informal_plural: "Pesos Convertible",
  },
  UYU: {
    name_formal: "Peso Uruguayo",
    name_formal_plural: "Pesos Uruguayo",
    name_informal: "Peso",
    name_informal_plural: "Pesos",
  },
  PHP: {
    name_formal: "Philippine Peso",
    name_formal_plural: "Philippine Pesos",
    name_informal: "Peso",
    name_informal_plural: "Pesos",
  },
  GBP: {
    name_formal: "Pound Sterling",
    name_formal_plural: "Pounds Sterling",
    name_informal: "Pound",
    name_informal_plural: "Pounds",
  },
  BWP: {
    name_formal: "Pula",
    name_formal_plural: "Pulas",
    name_informal: "Pula",
    name_informal_plural: "Pulas",
  },
  QAR: {
    name_formal: "Qatari Rial",
    name_formal_plural: "Qatari Rials",
    name_informal: "Rial",
    name_informal_plural: "Rials",
  },
  GTQ: {
    name_formal: "Quetzal",
    name_formal_plural: "Quetzales",
    name_informal: "Quetzal",
    name_informal_plural: "Quetzales",
  },
  ZAR: {
    name_formal: "Rand",
    name_formal_plural: "Rand",
    name_informal: "Rand",
    name_informal_plural: "Rand",
  },
  OMR: {
    name_formal: "Rial Omani",
    name_formal_plural: "Rials Omani",
    name_informal: "Rial",
    name_informal_plural: "Rials",
  },
  KHR: {
    name_formal: "Riel",
    name_formal_plural: "Riels",
    name_informal: "Riels",
    name_informal_plural: "Riels",
  },
  RON: {
    name_formal: "Romanian Leu",
    name_formal_plural: "Romanian Lei",
    name_informal: "Leu",
    name_informal_plural: "Lei",
  },
  MVR: {
    name_formal: "Rufiyaa",
    name_formal_plural: "Rufiyaa",
    name_informal: "Rufiyaa",
    name_informal_plural: "Rufiyaa",
  },
  IDR: {
    name_formal: "Rupiah",
    name_formal_plural: "Rupiahs",
    name_informal: "Rupiah",
    name_informal_plural: "Rupiahs",
  },
  RUB: {
    name_formal: "Russian Ruble",
    name_formal_plural: "Russian Rubles",
    name_informal: "Ruble",
    name_informal_plural: "Rubles",
  },
  RWF: {
    name_formal: "Rwanda Franc",
    name_formal_plural: "Rwanda Francs",
    name_informal: "Franc",
    name_informal_plural: "Francs",
  },
  SHP: {
    name_formal: "Saint Helena Pound",
    name_formal_plural: "Saint Helena Pounds",
    name_informal: "Pound",
    name_informal_plural: "Pounds",
  },
  SAR: {
    name_formal: "Saudi Riyal",
    name_formal_plural: "Saudi Riyals",
    name_informal: "Riyal",
    name_informal_plural: "Riyals",
  },
  XDR: {
    name_formal: "SDR (Special Drawing Right)",
    name_formal_plural: "SDR (Special Drawing Right)",
    name_informal: "SDR (Special Drawing Right)",
    name_informal_plural: "SDR (Special Drawing Right)",
  },
  RSD: {
    name_formal: "Serbian Dinar",
    name_formal_plural: "Serbian Dinars",
    name_informal: "Dinar",
    name_informal_plural: "Dinars",
  },
  SCR: {
    name_formal: "Seychelles Rupee",
    name_formal_plural: "Seychelles Rupees",
    name_informal: "Rupee",
    name_informal_plural: "Rupees",
  },
  SGD: {
    name_formal: "Singapore Dollar",
    name_formal_plural: "Singapore Dollars",
    name_informal: "Dollar",
    name_informal_plural: "Dollars",
  },
  PEN: {
    name_formal: "Sol",
    name_formal_plural: "Soles",
    name_informal: "Sol",
    name_informal_plural: "Soles",
  },
  SBD: {
    name_formal: "Solomon Islands Dollar",
    name_formal_plural: "Solomon Islands Dollars",
    name_informal: "Dollar",
    name_informal_plural: "Dollars",
  },
  KGS: {
    name_formal: "Som",
    name_formal_plural: "Som",
    name_informal: "Som",
    name_informal_plural: "Som",
  },
  SOS: {
    name_formal: "Somali Shilling",
    name_formal_plural: "Somali Shillings",
    name_informal: "Shilling",
    name_informal_plural: "Shillings",
  },
  TJS: {
    name_formal: "Somoni",
    name_formal_plural: "Somoni",
    name_informal: "Somoni",
    name_informal_plural: "Somoni",
  },
  SSP: {
    name_formal: "South Sudanese Pound",
    name_formal_plural: "South Sudanese Pounds",
    name_informal: "Pound",
    name_informal_plural: "Pounds",
  },
  LKR: {
    name_formal: "Sri Lanka Rupee",
    name_formal_plural: "Sri Lanka Rupees",
    name_informal: "Rupee",
    name_informal_plural: "Rupees",
  },
  XSU: {
    name_formal: "Sucre",
    name_formal_plural: "Sucres",
    name_informal: "Sucre",
    name_informal_plural: "Sucres",
  },
  SDG: {
    name_formal: "Sudanese Pound",
    name_formal_plural: "Sudanese Pounds",
    name_informal: "Pound",
    name_informal_plural: "Pounds",
  },
  SRD: {
    name_formal: "Surinam Dollar",
    name_formal_plural: "Surinam Dollars",
    name_informal: "Dollar",
    name_informal_plural: "Dollars",
  },
  SEK: {
    name_formal: "Swedish Krona",
    name_formal_plural: "Swedish Kronor",
    name_informal: "Krona",
    name_informal_plural: "Kronor",
  },
  CHF: {
    name_formal: "Swiss Franc",
    name_formal_plural: "Swiss Francs",
    name_informal: "Franc",
    name_informal_plural: "Francs",
  },
  SYP: {
    name_formal: "Syrian Pound",
    name_formal_plural: "Syrian Pounds",
    name_informal: "Pound",
    name_informal_plural: "Pounds",
  },
  BDT: {
    name_formal: "Taka",
    name_formal_plural: "Taka",
    name_informal: "Taka",
    name_informal_plural: "Taka",
  },
  WST: {
    name_formal: "Tala",
    name_formal_plural: "Tala",
    name_informal: "Tala",
    name_informal_plural: "Tala",
  },
  TZS: {
    name_formal: "Tanzanian Shilling",
    name_formal_plural: "Tanzanian Shillings",
    name_informal: "Shilling",
    name_informal_plural: "Shillings",
  },
  KZT: {
    name_formal: "Tenge",
    name_formal_plural: "Tenge",
    name_informal: "Tenge",
    name_informal_plural: "Tenge",
  },
  TTD: {
    name_formal: "Trinidad and Tobago Dollar",
    name_formal_plural: "Trinidad and Tobago Dollars",
    name_informal: "Dollar",
    name_informal_plural: "Dollars",
  },
  MNT: {
    name_formal: "Tugrik",
    name_formal_plural: "Tugriks",
    name_informal: "Tugrik",
    name_informal_plural: "Tugriks",
  },
  TND: {
    name_formal: "Tunisian Dinar",
    name_formal_plural: "Tunisian Dinars",
    name_informal: "Dinar",
    name_informal_plural: "Dinars",
  },
  TRY: {
    name_formal: "Turkish Lira",
    name_formal_plural: "Turkish Lira",
    name_informal: "Lira",
    name_informal_plural: "Lira",
  },
  TMT: {
    name_formal: "Turkmenistan New Manat",
    name_formal_plural: "Turkmenistan New Manats",
    name_informal: "New Manat",
    name_informal_plural: "New Manats",
  },
  AED: {
    name_formal: "UAE Dirham",
    name_formal_plural: "UAE Dirhams",
    name_informal: "Dirham",
    name_informal_plural: "Dirhams",
  },
  UGX: {
    name_formal: "Uganda Shilling",
    name_formal_plural: "Uganda Shillings",
    name_informal: "Shilling",
    name_informal_plural: "Shillings",
  },
  CLF: {
    name_formal: "Unidad de Fomento",
    name_formal_plural: "Unidades de Fomento",
    name_informal: "Unidad de Fomento",
    name_informal_plural: "Unidades de Fomento",
  },
  COU: {
    name_formal: "Unidad de Valor Real",
    name_formal_plural: "Unidades de Valor Real",
    name_informal: "Unidad de Valor Real",
    name_informal_plural: "Unidades de Valor Real",
  },
  UYW: {
    name_formal: "Unidad Previsional",
    name_formal_plural: "Unidad Previsional",
    name_informal: "Unidad Previsional",
    name_informal_plural: "Unidad Previsional",
  },
  UYI: {
    name_formal: "Uruguay Peso en Unidades Indexadas (UI)",
    name_formal_plural: "Uruguay Peso en Unidades",
    name_informal: "Uruguay Peso en Unidades",
    name_informal_plural: "Uruguay Peso en Unidades",
  },
  USN: {
    name_formal: "US Dollar (Next day)",
    name_formal_plural: "US Dollars (Next day)",
    name_informal: "US Dollar (Next day)",
    name_informal_plural: "US Dollars (Next day)",
  },
  USD: {
    name_formal: "US Dollar",
    name_formal_plural: "Dollars",
    name_informal: "Dollar",
    name_informal_plural: "Dollars",
    country: "USA",
  },
  UZS: {
    name_formal: "Uzbekistan Sum",
    name_formal_plural: "Uzbekistan Sum",
    name_informal: "Sum",
    name_informal_plural: "Sum",
  },
  VUV: {
    name_formal: "Vatu",
    name_formal_plural: "Vatu",
    name_informal: "Vatu",
    name_informal_plural: "Vatu",
  },
  CHE: {
    name_formal: "WIR Euro",
    name_formal_plural: "WIR Euro",
    name_informal: "WIR Euro",
    name_informal_plural: "WIR Euro",
  },
  CHW: {
    name_formal: "WIR Franc",
    name_formal_plural: "WIR Francs",
    name_informal: "WIR Franc",
    name_informal_plural: "WIR Francs",
  },
  KRW: {
    name_formal: "Won",
    name_formal_plural: "Won",
    name_informal: "Won",
    name_informal_plural: "Won",
  },
  YER: {
    name_formal: "Yemeni Rial",
    name_formal_plural: "Yemeni Rials",
    name_informal: "Rial",
    name_informal_plural: "Rials",
  },
  JPY: {
    name_formal: "Yen",
    name_formal_plural: "Yen",
    name_informal: "Yen",
    name_informal_plural: "Yen",
  },
  CNY: {
    name_formal: "Yuan Renminbi",
    name_formal_plural: "Yuan Renminbi",
    name_informal: "Yuan",
    name_informal_plural: "Yuan",
  },
  ZMW: {
    name_formal: "Zambian Kwacha",
    name_formal_plural: "Zambian Kwacha",
    name_informal: "Kwacha",
    name_informal_plural: "Kwacha",
  },
  ZWL: {
    name_formal: "Zimbabwe Dollar",
    name_formal_plural: "Zimbabwe Dollars",
    name_informal: "Dollar",
    name_informal_plural: "Dollars",
  },
  PLN: {
    name_formal: "Zloty",
    name_formal_plural: "Zlotych",
    name_informal: "Zloty",
    name_informal_plural: "Zlotych",
  },
};

export enum Status {
  PENDING,
  INPROGRESS,
  APPROVED,
  DENIED,
}

export enum TransactionType {
  DEBIT,
  CREDIT,
}

type StatusRenderMappings = {
  [key in Status]: { color: string; text: string };
};
type TransactionTypeRenderMappings = {
  [key in TransactionType]: { color: string; text: string };
};

export const transactionTypeRenderMappings: TransactionTypeRenderMappings = {
  [TransactionType.DEBIT]: { color: "#EC3D08", text: "Debit" },
  [TransactionType.CREDIT]: { color: "#4AB0A6", text: "Credit" },
};
export const statusRenderMappings: StatusRenderMappings = {
  [Status.PENDING]: { color: "#F5C14F", text: "Pending" },
  [Status.INPROGRESS]: { color: "#233984", text: "In Progress" },
  [Status.APPROVED]: { color: "#279F70", text: "Approved" },
  [Status.DENIED]: { color: "#EC3D08", text: "Denied" },
};

export const isValidEmailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
