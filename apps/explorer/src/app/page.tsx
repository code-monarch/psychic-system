"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { push } = useRouter();

  // Change route as soon as the page mounts
  useEffect(() => {
    push("/transactions");
  }, [push])

  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'></div>
  );
}
