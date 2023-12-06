import React, { useEffect, useState } from "react";

interface IProps {
  transactionType: string;
}

export const TransactionType = ({ transactionType }: IProps) => {
  const [type, setType] = useState<string>();

  useEffect(() => {
    switch (transactionType.toLowerCase()) {
      case "consensussubmitmessage":
        setType("HCS SUBMIT MESSAGE");
        break;
      case "tokengrantkyc":
        setType("TOKEN KYC GRANT");
        break;
      case "tokenrevokekyc":
        setType("TOKEN KYC REVOKE");
        break;
      case "tokenmint":
        setType("MINT");
        break;
      case "tokenburn":
        setType("BURN");
        break;
      case "tokendeletion":
        setType("TOKEN DELETION");
        break;
      case "tokenwipe":
        setType("TOKEN WIPE");
        break;
      case "freeze":
        setType("FREEZE");
        break;
      case "tokenunfreeze":
        setType("TOKEN UNFREEZE");
        break;
      default:
        setType("NO TYPE");
    }
  }, [transactionType]);

  return <>{type}</>;
};
