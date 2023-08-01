interface IProps {
  rotate?: boolean;
}

export const CollapsibleTriggerIcon = ({
  rotate,
}: IProps) => {
  return (
    <svg
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`${rotate ? "rotate-180" : ""}`}
    >
      <g clip-path='url(#clip0_369_23518)'>
        <path
          d='M9 7.5L6 4.5L3 7.5L9 7.5Z'
          fill='#FCFCFC'
          stroke='#FCFCFC'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_369_23518'>
          <rect
            width='12'
            height='12'
            fill='white'
            transform='translate(12 12) rotate(-180)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};
