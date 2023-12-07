import React from "react";
import TopbarGoBackIcon from "../atoms/topbar-goBack-icon";
import { useRouter } from "next/navigation";

const TopbarGoBackBtn = () => {
  const { back } = useRouter();
  return (
    <button onClick={() => back()}>
      <TopbarGoBackIcon />
    </button>
  );
};

export default TopbarGoBackBtn;
