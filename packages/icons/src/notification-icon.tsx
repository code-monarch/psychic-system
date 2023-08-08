import { IconProps } from "types";

export const NotificationIcon = ({ ...props }: IconProps) => {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M20.8 23.2H26.3029C27.2402 23.2 28 22.4402 28 21.5029C28 21.0529 27.8212 20.6212 27.5029 20.3029L26.3029 19.1029C25.8529 18.6529 25.6 18.0424 25.6 17.4059L25.6 13.5648C25.6 8.28231 21.3177 4 16.0352 4C10.7415 4 6.45452 8.29983 6.47041 13.5935L6.48177 17.3771C6.48373 18.0306 6.21914 18.6566 5.74911 19.1106L4.51436 20.3032C4.18565 20.6207 4 21.0581 4 21.5151C4 22.4456 4.75435 23.2 5.68489 23.2H11.2C11.2 25.851 13.349 28 16 28C18.651 28 20.8 25.851 20.8 23.2ZM25.0301 20.3757L26.0544 21.4H5.96976L6.99961 20.4053C7.82216 19.6108 8.28519 18.5153 8.28176 17.3717L8.2704 13.5881C8.2575 9.29065 11.7377 5.8 16.0352 5.8C20.3236 5.8 23.8 9.27642 23.8 13.5648L23.8 17.4059C23.8 18.5198 24.2425 19.5881 25.0301 20.3757ZM19 23.2H13C13 24.8569 14.3431 26.2 16 26.2C17.6569 26.2 19 24.8569 19 23.2Z'
        fill='#1E252D'
      />
      <circle
        cx='22.6666'
        cy='7.99935'
        r='5.33333'
        fill='#FF5A5C'
        stroke='#F8F8F8'
        stroke-width='2.66667'
      />
    </svg>
  );
};

