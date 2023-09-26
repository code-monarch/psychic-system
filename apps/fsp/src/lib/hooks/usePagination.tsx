import React, { FC } from "react";
import { IconButton } from "@material-tailwind/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";

interface IProps {
  page: number;
  setPage: any;
  totalPages: number;
}

export const Pagination: FC<IProps> = ({ page, setPage, totalPages }) => {
  const getItemProps = (index) =>
    ({
      variant: page === index ? "filled" : "text",
      color: "blue",
      onClick: () => setPage(index),
    } as any);

  const next = () => {
    if (page === 5) return;

    setPage(page + 1);
  };

  const prev = () => {
    if (page === 1) return;

    setPage(page - 1);
  };

  return (
    <div className='flex items-center gap-4'>
      <button
        className='flex items-center gap-2'
        onClick={prev}
        disabled={page === 1}
      >
        <ChevronLeftIcon className='h-4 w-4' />
      </button>

      <div className='flex items-center gap-2'>
        {Array.from({ length: Number(totalPages) }).map((_, i, a) => (
          <IconButton key={i} {...getItemProps(i + 1)}>{`${i + 1}`}</IconButton>
        ))}
      </div>

      <button
        className='flex items-center gap-2'
        onClick={next}
        disabled={page === 5}
      >
        <ChevronRightIcon className='h-4 w-4' />
      </button>
    </div>
  );
};
