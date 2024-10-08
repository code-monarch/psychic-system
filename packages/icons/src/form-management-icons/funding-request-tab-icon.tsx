import { IconProps } from "types";

export const FundingRequestTabIcon = ({
  width,
  height,
  color,
}: IconProps) => {
  return (
    <svg
      width={width ?? '18'}
      height={height ?? '18'}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_2072_88889)'>
        <path
          d='M5.25 8.25C5.25 7.85218 5.40804 7.47064 5.68934 7.18934C5.97064 6.90804 6.35218 6.75 6.75 6.75H14.25C14.6478 6.75 15.0294 6.90804 15.3107 7.18934C15.592 7.47064 15.75 7.85218 15.75 8.25V12.75C15.75 13.1478 15.592 13.5294 15.3107 13.8107C15.0294 14.092 14.6478 14.25 14.25 14.25H6.75C6.35218 14.25 5.97064 14.092 5.68934 13.8107C5.40804 13.5294 5.25 13.1478 5.25 12.75V8.25Z'
          stroke={color ?? '#1E252D'}
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M9 10.5C9 10.8978 9.15804 11.2794 9.43934 11.5607C9.72064 11.842 10.1022 12 10.5 12C10.8978 12 11.2794 11.842 11.5607 11.5607C11.842 11.2794 12 10.8978 12 10.5C12 10.1022 11.842 9.72064 11.5607 9.43934C11.2794 9.15804 10.8978 9 10.5 9C10.1022 9 9.72064 9.15804 9.43934 9.43934C9.15804 9.72064 9 10.1022 9 10.5Z'
          stroke={color ?? '#1E252D'}
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12.75 6.75V5.25C12.75 4.85218 12.592 4.47064 12.3107 4.18934C12.0294 3.90804 11.6478 3.75 11.25 3.75H3.75C3.35218 3.75 2.97064 3.90804 2.68934 4.18934C2.40804 4.47064 2.25 4.85218 2.25 5.25V9.75C2.25 10.1478 2.40804 10.5294 2.68934 10.8107C2.97064 11.092 3.35218 11.25 3.75 11.25H5.25'
          stroke={color ?? '#1E252D'}
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_2072_88889'>
          <rect width='18' height='18' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
