import { FC } from "react";
import { ITranslateIcon } from "types";

export const ExpandIcon: FC<ITranslateIcon> = ({ translateX = false }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`${translateX ? "rotate-180" : ""}`}
    >
      <g clipPath='url(#clip0_354_8527)'>
        <circle
          cx='12'
          cy='12'
          r='12'
          fill='url(#paint0_linear_354_8527)'
          fillOpacity='0.08'
        />
        <circle cx='12' cy='12' r='12' fill='url(#paint1_linear_354_8527)' />
        <circle
          cx='12'
          cy='12'
          r='11.8229'
          stroke='url(#paint2_linear_354_8527)'
          strokeOpacity='0.08'
          strokeWidth='0.354167'
        />
        <mask
          id='mask0_354_8527'
          //   style='mask-type:alpha'
          maskUnits='userSpaceOnUse'
          x='3'
          y='3'
          width='18'
          height='18'
        >
          <rect
            x='3.5293'
            y='3.5293'
            width='16.9412'
            height='16.9412'
            fill='#F8F8F8'
          />
        </mask>
        <g mask='url(#mask0_354_8527)'>
          <path
            d='M8.69181 18.308C8.55154 18.1677 8.4814 18.0008 8.4814 17.8071C8.4814 17.6134 8.55154 17.4465 8.69181 17.3062L13.9982 11.9999L8.67416 6.67586C8.54113 6.54284 8.47461 6.37994 8.47461 6.18718C8.47461 5.99442 8.54701 5.82565 8.69181 5.68087C8.83208 5.54059 8.99905 5.47046 9.1927 5.47046C9.38636 5.47046 9.55333 5.54059 9.6936 5.68087L15.5551 11.5533C15.6212 11.6193 15.6678 11.689 15.695 11.7623C15.7221 11.8356 15.7357 11.9148 15.7357 11.9999C15.7357 12.0849 15.7221 12.1641 15.695 12.2374C15.6678 12.3107 15.6212 12.3804 15.5551 12.4464L9.67595 18.3256C9.54293 18.4587 9.38185 18.5252 9.1927 18.5252C9.00356 18.5252 8.8366 18.4528 8.69181 18.308Z'
            fill='#F8F8F8'
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_354_8527'
          x1='5.49818'
          y1='17.7778'
          x2='22.995'
          y2='14.342'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#0D2A8C' />
          <stop offset='1' stopColor='#E8EDFF' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_354_8527'
          x1='3.27273'
          y1='20.5714'
          x2='29.3677'
          y2='10.2937'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#0D2A8C' />
          <stop offset='0.909375' stopColor='#2376FA' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_354_8527'
          x1='2.66667'
          y1='4'
          x2='25.3333'
          y2='23.3333'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#2054AE' />
          <stop offset='1' stopColor='#264170' stopOpacity='0' />
        </linearGradient>
        <clipPath id='clip0_354_8527'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
