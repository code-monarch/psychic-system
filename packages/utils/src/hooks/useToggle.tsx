import { useCallback, useState } from "react";

// Parameter is the boolean, with default "false" value
export const useToggle = (initialState: boolean): [boolean, () => void] => {
  // Initialize the state
  const [state, setState] = useState<boolean>(initialState);

  /**
   * @description A memorize toggler function which toggles the toggle boolean state
   */
  const toggle = useCallback((): void => setState(!state), [state]);

  return [state, toggle];
};
