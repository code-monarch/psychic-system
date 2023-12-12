"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();

  push("");
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'></div>
  );
}
