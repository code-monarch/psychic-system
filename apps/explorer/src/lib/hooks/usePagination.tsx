import React, { FC, useState } from "react";
import { IconButton } from "@material-tailwind/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";
import { setPaginationClicked } from "@/redux/features/global-state";
import { useDispatch } from "react-redux";

interface IProps {
  page: number;
  setPage: any;
}

export const Pagination: FC<IProps> = ({ page, setPage }) => {
  const [totalPages, setTotalPages] = useState<number>(5);

  const dispatch = useDispatch();

  // Function to show the next set of pagination
  const showNext = () => {
    if (page + 5 > totalPages) {
      setTotalPages(totalPages + 1);
      setPage(page + 1);
      dispatch(setPaginationClicked(true));
    } else {
      setPage(page + 1);
      dispatch(setPaginationClicked(true));
    }
  };

  // Function to show the previous set of pagination
  const showPrevious = () => {
    if (page > 1) {
      setPage(page - 1);
      dispatch(setPaginationClicked(true));
    }
  };

  const handleButtonClick = (index) => {
    if (index + 5 > totalPages) {
      setTotalPages(totalPages + 1);
      setPage(index);
      dispatch(setPaginationClicked(true));
    } else {
      setTotalPages(totalPages - 1);
      setPage(index);
      dispatch(setPaginationClicked(true));
    }
  };

  // Button Props
  const getButtonProps = (index) =>
    ({
      variant: page === index ? "outlined" : "text",
      color: page === index ? "blue" : "black",
      size: "sm",
      onClick: () => handleButtonClick(index),
    } as any);

  return (
    <div className='flex items-center gap-4'>
      <button
        className='flex items-center gap-2'
        onClick={showPrevious}
        disabled={page === 1}
      >
        <ChevronLeftIcon className='h-4 w-4' />
      </button>

      <div className='flex items-center gap-2'>
        {Array.from({ length: Number(totalPages) }).map((_, i) => (
          <IconButton key={i} {...getButtonProps(i + 1)}>{`${
            i + 1
          }`}</IconButton>
        ))}
      </div>

      <button
        className='flex items-center gap-2'
        onClick={showNext}
        disabled={page === 5}
      >
        <ChevronRightIcon className='h-4 w-4' />
      </button>
    </div>
  );
};
