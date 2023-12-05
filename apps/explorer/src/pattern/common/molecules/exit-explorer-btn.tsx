import React from "react";
import ExitIcon from "../atoms/exit-icon";

const ExitExplorerBtn = () => {
  const handleExitExplorer = () => {

  };
  return (
    <button
      className='h-full w-fit flex items-center space-x-[8px]'
      onClick={handleExitExplorer}
    >
      <div className='text-base text-secondaryText font-[500] font-sans'>
        Exit Explorer
      </div>
      <span>
        <ExitIcon />
      </span>
    </button>
  );
};

export default ExitExplorerBtn;
