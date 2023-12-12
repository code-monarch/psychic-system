"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { SearchIcon } from "@emtech/icons";
import { joinClasses, useToggle } from "@emtech/utils";
import { VisuallyHidden } from "@emtech/ui";
import { usePathname, useRouter } from "next/navigation";

const SearchInput = () => {
  const { push } = useRouter();
  const pathname = usePathname();

  const originalPathname = pathname;
  // Get Rid of the last letter "s" from the pathname
  const cleanedPathName = originalPathname.substring(
    0,
    originalPathname.length - 1
  );

  // Determines whether Search Input field is visible
  const [showInputField, toggleInputField] = useToggle(false);

  // Handles Search input
  const [searchString, setSearchString] = useState<string>("second");

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    console.log("SEARCH STRING");
    e?.preventDefault();
    push(`${cleanedPathName}/${searchString}`);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e?.target?.value);
  };

  return (
    <div className='flex items-center space-x-[8px]'>
      <button onClick={toggleInputField}>
        <SearchIcon color='#fff' />
      </button>

      <VisuallyHidden visible={showInputField ? true : false}>
        <form onSubmit={(e) => handleSearch(e)}>
          <input
            type='search'
            onChange={(e) => handleInputChange(e)}
            autoFocus
            className={joinClasses(
              "bg-transparent w-[200px] h-full placeholder-transparent pb-1 outline-none border-b-[1px] border-b-white transition-all"
            )}
          />
        </form>
      </VisuallyHidden>
    </div>
  );
};

export default SearchInput;
