"use client";
import { useState } from "react";

export const useSelectItems = () => {
  const [itemsSelected, setItemsSelected] = useState<string[]>([""]);

  const handleSelect = (item: string) => {
    setItemsSelected([...itemsSelected, item]);
  };
  return { handleSelect, itemsSelected };
};
