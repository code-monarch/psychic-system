export const formatTime = (time: string | number) => {
  let timeToFormat = new Date(time);
  return timeToFormat.toLocaleTimeString("en-US");
};
