import { createContext, useContext, Dispatch, SetStateAction } from "react";

interface AppShellMobileNavContextType {
  closeNav: () => void;
  openNav: () => void;
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}

export const AppShellMobileNavContext =
  createContext<AppShellMobileNavContextType>({
    closeNav: () => {},
    openNav: () => {},
    opened: false,
    setOpened: () => {},
  });

export function useAppShellMobileNav() {
  return useContext(AppShellMobileNavContext);
}
