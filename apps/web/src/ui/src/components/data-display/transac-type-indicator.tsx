import { ReactNode, useEffect, useState } from "react";
import { CreditIndicatorIcon } from "@emtech/icons";
import { DebitIndicatorIcon } from "@emtech/icons";

interface IProps {
  transacType: "credit" | "debit";
}

export const TransacTypeIndicator = ({ transacType }: IProps) => {
  const [indicator, setIndicator] = useState<ReactNode>();

  useEffect(() => {
    switch (transacType.toLowerCase()) {
      case "credit":
        setIndicator(
         <CreditIndicatorIcon />
        );
        break;
      case "debit":
        setIndicator(<DebitIndicatorIcon />);
        break;
      default:
        setIndicator(<DebitIndicatorIcon />);
    }
  }, [transacType]);

  return <span>{indicator}</span>;
};
