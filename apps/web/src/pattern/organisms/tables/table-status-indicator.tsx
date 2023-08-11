"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { Badge } from "@/ui";

interface IProps {
  status: "Success" | "Pending" | "Failed";
}

const StatusIndicator = ({ status }: IProps) => {
  const [indicator, setIndicator] = useState<ReactNode>();

  useEffect(() => {
    switch (status.toLowerCase()) {
      case "pending":
        setIndicator(
          <Badge size='xs' variant="gold" rounded="lg">
            Pending
          </Badge>
        );
        break;
      case "success":
        setIndicator(
          <Badge size='xs' variant="green" rounded='lg'>
            Success
          </Badge>
        );
        break;
      case "failed":
        setIndicator(
          <Badge size='xs' variant="red" rounded='lg'>
            Failed
          </Badge>
        );
        break;
      default:
        setIndicator(
          <Badge size='xs' rounded='lg'>
            Pending
          </Badge>
        );
    }
  }, [status]);

  return <>{indicator}</>;
};

export default StatusIndicator;
