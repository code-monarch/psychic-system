import LoadingIcon from "@/public/loading-icon.svg";

 const Loading = () => {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <LoadingIcon />
    </div>
  );
}
export default Loading