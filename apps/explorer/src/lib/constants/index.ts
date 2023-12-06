export enum Status {
  PENDING,
  INPROGRESS,
  APPROVED,
  DENIED,
}

export enum TransactionTypeEnum {
  ALL = "",
  TOKENGRANTKYC = "TOKENGRANTKYC",
  TOKENREVOKEKYC = "TOKENREVOKEKYC",
  TOKENMINT = "TOKENMINT",
  TOKENBURN = "TOKENBURN",
  TOKENDELETION = "TOKENDELETION",
  TOKENWIPE = "TOKENWIPE",
  FREEZE = "FREEZE",
  TOKENUNFREEZE = "TOKENUNFREEZE",
}
export enum TransactionNameEnum {
  ALL = "All Types",
  TOKENGRANTKYC = "Token KYC Grant",
  TOKENREVOKEKYC = "Token KYC Revoke",
  TOKENMINT = "Token Mint",
  TOKENBURN = "Token Burn",
  TOKENDELETION = "Token Delete",
  TOKENWIPE = "Token Wipe",
  FREEZE = "Token Freeze",
  TOKENUNFREEZE = "Token Unfreeze",
};

export const TRANSACTION_TYPE = [
  {
    name: TransactionNameEnum.ALL,
    value: TransactionTypeEnum.ALL,
  },
  {
    name: TransactionNameEnum.TOKENGRANTKYC,
    value: TransactionTypeEnum.TOKENGRANTKYC,
  },
  {
    name: TransactionNameEnum.TOKENREVOKEKYC,
    value: TransactionTypeEnum.TOKENREVOKEKYC,
  },
  {
    name: TransactionNameEnum.TOKENMINT,
    value: TransactionTypeEnum.TOKENMINT,
  },
  {
    name: TransactionNameEnum.TOKENBURN,
    value: TransactionTypeEnum.TOKENBURN,
  },
  {
    name: TransactionNameEnum.TOKENDELETION,
    value: TransactionTypeEnum.TOKENDELETION,
  },
  {
    name: TransactionNameEnum.TOKENWIPE,
    value: TransactionTypeEnum.TOKENWIPE,
  },
  {
    name: TransactionNameEnum.FREEZE,
    value: TransactionTypeEnum.FREEZE,
  },
  {
    name: TransactionNameEnum.TOKENUNFREEZE,
    value: TransactionTypeEnum.TOKENUNFREEZE,
  },
];
