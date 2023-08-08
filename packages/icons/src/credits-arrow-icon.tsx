import React from "react";
import { joinClasses } from "@emtech/utils";

export interface IArrowIconClasses {
  rotate: {
    yes: string;
    no: string;
  };
  color: {
    green: string;
    red: string;
  };
}

const arrowClasses: IArrowIconClasses = {
  rotate: {
    yes: "rotate-180",
    no: 'rotate-0',
  },
  color: {
    green: "fill-[#3FCC6A] text-[#3FCC6A]",
    red: "fill-[#FF5A5C] text-[#FF5A5C]"
  }
};

export interface IArrowIconProps extends React.SVGProps<SVGSVGElement> {
  rotate?: keyof IArrowIconClasses["rotate"];
  color?: keyof IArrowIconClasses["color"]
}

export const CreditsArrow = ({ rotate, color }: IArrowIconProps) => (
  <svg
    className={joinClasses(
      arrowClasses.rotate[rotate ?? "no"],
      arrowClasses.color[color ?? "green"]
    )}
    width='24'
    height='25'
    viewBox='0 0 24 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clip-path='url(#clip0_600_49441)'>
      <path
        d='M12 19.5L12 5.5'
        stroke={color === "green" ? '#3FCC6A' : '#FF5A5C'}
        stroke-width='2.25'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M18 11.5L12 5.5'
        stroke={color === "green" ? '#3FCC6A' : '#FF5A5C'}
        stroke-width='2.25'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M6 11.5L12 5.5'
        stroke={color === "green" ? '#3FCC6A' : '#FF5A5C'}
        stroke-width='2.25'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_600_49441'>
        <rect
          width='24'
          height='24'
          fill='white'
          transform='translate(0 24.5) rotate(-90)'
        />
      </clipPath>
    </defs>
  </svg>
);
