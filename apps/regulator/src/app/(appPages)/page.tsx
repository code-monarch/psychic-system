"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const {push} = useRouter();

  useEffect(() => {
    push("/dashboard");
  }, [push]);
  return <></>;
}
