import {IAccordionClasses} from "../components/data-display/accordion";

export default <IAccordionClasses>{
  base: "space-y-[10px]",
  accordionItem:
    "w-[696px] flex flex-col focus-within:ring-none focus-within:ring-none focus:outline-none transition-all duration-700 ease-in-out",
  accordionHeader: "w-full",
  accordionTrigger:
    "group inline-flex w-full items-start justify-between bg-inherit text-left focus:outline-none",
  accordionArrow:
    "ml-2 h-5 w-5 shrink-0 text-gray-700 ease-in-out group-radix-state-open:rotate-180 group-radix-state-open:duration-300",
  accordionContent: "",
};
