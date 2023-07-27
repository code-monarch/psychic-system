import { joinClasses } from "@emtech/utils";
import * as ProgressPrimitive from "@radix-ui/react-progress";

interface IProgressProps {
  rootClassName?: string;
  indicatorClassName?: string;
  progress: number;
}

export const Progress = ({
  rootClassName,
  indicatorClassName,
  progress,
}: IProgressProps) => {
  return (
    <ProgressPrimitive.Root
      className={joinClasses(
        "relative overflow-hidden bg-transparent rounded-[8px] w-[275px] h-[40px]",
        rootClassName
      )}
      style={{
        // Fix overflow clipping in Safari
        // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
        transform: "translateZ(0)",
      }}
      value={progress}
    >
      <ProgressPrimitive.Indicator
        className={joinClasses(
          "w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)] rounded-[8px]",
          100 - progress <= 50 ? "bg-[rgba(0,103,252,0.65)] " : "bg-[#E6E6F0]",
          indicatorClassName
        )}
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </ProgressPrimitive.Root>
  );
};
