import { IconProps } from "types";

export const DigitalRegulationIcon = ({ width, height, color, ...props }: IconProps) => {
  return (
    <>
      <svg
        width={width ?? "103"}
        height={height ?? "115"}
        viewBox='0 0 103 115'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path
          d='M98.4671 78.6486V35.9151C98.4652 34.0416 97.981 32.2016 97.0631 30.5796C96.1452 28.9576 94.8259 27.6107 93.2375 26.674L56.6302 5.30728C55.0402 4.36961 53.2365 3.87598 51.4005 3.87598C49.5646 3.87598 47.7609 4.36961 46.1709 5.30728L9.5636 26.674C7.97517 27.6107 6.65583 28.9576 5.73794 30.5796C4.82004 32.2016 4.33587 34.0416 4.33398 35.9151V78.6486C4.33587 80.522 4.82004 82.362 5.73794 83.984C6.65583 85.606 7.97517 86.9529 9.5636 87.8897L46.1709 109.256C47.7609 110.194 49.5646 110.688 51.4005 110.688C53.2365 110.688 55.0402 110.194 56.6302 109.256L93.2375 87.8897C94.8259 86.9529 96.1452 85.606 97.0631 83.984C97.981 82.362 98.4652 80.522 98.4671 78.6486Z'
          stroke={color ?? "#1E252D"}
          stroke-width='7.15'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M5.74609 30.3623L51.4006 57.3378L97.0552 30.3623'
          stroke={color ?? "#1E252D"}
          stroke-width='7.15'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M51.4102 111.124V57.2803'
          stroke={color ?? "#1E252D"}
          stroke-width='7.15'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </>
  );
};
