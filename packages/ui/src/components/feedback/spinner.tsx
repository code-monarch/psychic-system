import React from "react";
import { joinClasses } from "@emtech/utils";
import { ILoaderClasses } from "./loader";
import classes from "../../design/spinner.icons.classes";

export interface ISpinnerIconClasses {
  size: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
  };
  animation: {
    spin: string;
  };
}

export interface ISpinnerIconProps extends React.SVGProps<SVGSVGElement> {
  size?: keyof ILoaderClasses["size"];
}

export const Spinner = ({}: ISpinnerIconProps) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={joinClasses(classes.animation.spin)}
  >
    <path
      d='M23.5178 15.3675C22.6613 18.297 20.7207 20.79 18.091 22.3393C15.4612 23.8885 12.3399 24.3774 9.3624 23.7065C6.38488 23.0357 3.77488 21.2554 2.0636 18.7281C0.352314 16.2008 -0.331637 13.1164 0.150944 10.1027C0.633525 7.0889 2.24637 4.37226 4.66122 2.50567C7.07608 0.639072 10.1115 -0.237201 13.1496 0.0551909C16.1877 0.347583 19.0002 1.78667 21.0148 4.07955C23.0293 6.37244 24.0945 9.3468 23.9934 12.3973L19.1961 12.2384C19.2567 10.4081 18.6176 8.62346 17.4089 7.24773C16.2002 5.872 14.5126 5.00855 12.6897 4.83311C10.8669 4.65768 9.04565 5.18344 7.59673 6.3034C6.14782 7.42336 5.18011 9.05334 4.89057 10.8616C4.60102 12.6699 5.01139 14.5205 6.03816 16.0369C7.06493 17.5533 8.63093 18.6214 10.4174 19.0239C12.204 19.4264 14.0767 19.1331 15.6546 18.2036C17.2324 17.274 18.3968 15.7782 18.9107 14.0205L23.5178 15.3675Z'
      fill='#0067FC'
    />
    <path
      d='M23.5178 15.3675C22.6613 18.297 20.7207 20.79 18.091 22.3393C15.4612 23.8885 12.3399 24.3774 9.3624 23.7065C6.38488 23.0357 3.77488 21.2554 2.0636 18.7281C0.352314 16.2008 -0.331637 13.1164 0.150944 10.1027C0.633525 7.0889 2.24637 4.37226 4.66122 2.50567C7.07608 0.639072 10.1115 -0.237201 13.1496 0.0551909C16.1877 0.347583 19.0002 1.78667 21.0148 4.07955C23.0293 6.37244 24.0945 9.3468 23.9934 12.3973L19.1961 12.2384C19.2567 10.4081 18.6176 8.62346 17.4089 7.24773C16.2002 5.872 14.5126 5.00855 12.6897 4.83311C10.8669 4.65768 9.04565 5.18344 7.59673 6.3034C6.14782 7.42336 5.18011 9.05334 4.89057 10.8616C4.60102 12.6699 5.01139 14.5205 6.03816 16.0369C7.06493 17.5533 8.63093 18.6214 10.4174 19.0239C12.204 19.4264 14.0767 19.1331 15.6546 18.2036C17.2324 17.274 18.3968 15.7782 18.9107 14.0205L23.5178 15.3675Z'
      fill='white'
      fillOpacity='0.95'
    />
  </svg>
);
