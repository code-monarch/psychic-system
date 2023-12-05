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

export const TRANSACTION_TYPE = [
  {
    name: "All Types",
    value: "all"
  },
  {
    name: "Token KYC Grant",
    value: "kyc-grant",
  },
  {
    name: "Token KYC Revoke",
    value: "kyc-revoke",
  },
  {
    name: "Token Mint",
    value: "mint",
  },
  {
    name: "Token Burn",
    value: "burn",
  },
  {
    name: "Token Delete",
    value: "delete",
  },
  {
    name: "Token Wipe",
    value: "wipe",
  },
  {
    name: "Token Freeze",
    value: "wipe",
  },
  {
    name: "Token Unfreeze",
    value: "wipe",
  },
]