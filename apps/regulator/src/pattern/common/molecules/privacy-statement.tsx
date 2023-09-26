import React from "react";
import { LinkButton } from "@emtech/ui";

const style = {
  linkBtn: `!text-secondaryText !text-base !font-medium`,
};

const PrivacyStatement = () => {
  return (
    <div className='text-center max-w-[458px] whitespace-pre-wrap'>
      <p>
        By continuing, you are setting up an account and agree to our&nbsp;
        <LinkButton className={style.linkBtn}>User Agreement</LinkButton>
        &nbsp;and&nbsp;
        <LinkButton className={style.linkBtn}>Privacy Policy</LinkButton>
      </p>
    </div>
  );
};

export default PrivacyStatement;
