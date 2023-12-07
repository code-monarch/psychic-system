import { joinClasses } from "@emtech/utils";
import React, { FC } from "react";

// Destination Prop Should be passed only when type prop === "amount" is passed
type Props = {
  value: string | number;
} & (AmountProps | AccountProps);

type AmountProps = {
  type: "amount";
  destination: "to" | "from";
};
type AccountProps = {
  type: "account";
};

const TransferValue: FC<Props> = (props) => {
  return (
    <>
      {/* If type prop === "account" */}
      {props.type === "account" && (
        <div
          className={joinClasses("text-black", "text-[1.125rem] font-[500]")}
        >
          {props.value}
        </div>
      )}

      {/* If type prop === "amount" */}
      {props.type === "amount" && (
        <div
          className={joinClasses(
            props.destination === "to" && "text-[#3FCC6A]",
            props.destination === "from" && "text-[#FF5A5C]",
            "text-[1.125rem] font-[500]"
          )}
        >
          {props.value}
          <span
            className={joinClasses(
              props.destination === "to" ? "text-[#3FCC6A]" : "text-[#FF5A5C]",
              "italic"
            )}
          >
            h
          </span>
        </div>
      )}
    </>
  );
};

export default TransferValue;
