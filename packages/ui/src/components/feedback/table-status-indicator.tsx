import React, { ReactNode, useEffect, useState } from "react";
import { Badge } from "../data-display/badge";

interface IProps {
  status: string;
}

export const StatusIndicator = ({ status }: IProps) => {
  const [indicator, setIndicator] = useState<ReactNode>();

  useEffect(() => {
    switch (status.toLowerCase()) {
      case "active":
        setIndicator(
          <Badge
            size='sm'
            variant='green'
            rounded='lg'
            className='!max-w-[85px]'
          >
            Active
          </Badge>
        );
        break;
      case "approved":
        setIndicator(
          <Badge
            size='sm'
            variant='green'
            rounded='lg'
            className='!max-w-[85px]'
          >
            Approved
          </Badge>
        );
        break;
      case "closed":
        setIndicator(
          <Badge size='sm' variant='red' rounded='lg' className='!max-w-[85px]'>
            Closed
          </Badge>
        );
        break;
      case "pending":
        setIndicator(
          <Badge
            size='sm'
            variant='gold'
            rounded='lg'
            className='!max-w-[85px]'
          >
            Pending
          </Badge>
        );
        break;
      case "success":
        setIndicator(
          <Badge
            size='sm'
            variant='green'
            rounded='lg'
            className='!max-w-[85px]'
          >
            Success
          </Badge>
        );
        break;
      case "failed":
        setIndicator(
          <Badge size='sm' variant='red' rounded='lg' className='!max-w-[85px]'>
            Failed
          </Badge>
        );
        break;
      default:
        setIndicator(
          <Badge size='sm' rounded='lg' className='!max-w-[85px]'>
            Pending
          </Badge>
        );
    }
  }, [status]);

  return <>{indicator}</>;
};
