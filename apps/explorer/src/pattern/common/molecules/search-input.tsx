import React, { useState } from "react";
import { SearchIcon } from "@emtech/icons";
import { joinClasses, useToggle } from "@emtech/utils";
import { VisuallyHidden } from "@emtech/ui";

const SearchInput = () => {
  // Determines whether Search Input field is visible
  const [showInputField, toggleInputField] = useToggle(false);

  return (
    <div className='flex items-center space-x-[8px]'>
      <button onClick={toggleInputField}>
        <SearchIcon color='#fff' />
      </button>

      <VisuallyHidden visible={showInputField ? true : false}>
        <input
          type='search'
          autoFocus
          className={joinClasses(
            "bg-transparent w-[200px] h-full placeholder-transparent pb-1 outline-none border-b-[1px] border-b-white transition-all"
          )}
        />
      </VisuallyHidden>
    </div>
  );
};

export default SearchInput;
