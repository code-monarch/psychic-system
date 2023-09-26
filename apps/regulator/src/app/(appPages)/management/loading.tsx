"use client"
import React from 'react'
import LoadingIcon from "@/public/loading-icon.svg";

const Loading = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <LoadingIcon />
    </div>
  );
}

export default Loading