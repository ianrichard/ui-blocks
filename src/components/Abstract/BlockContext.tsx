import { createContext } from "react";

export type BlockContextType = {
  size?: string;
};

const BlockContext = createContext<BlockContextType>({
  size: "md",
});
export { BlockContext };

export const BlockProvider = BlockContext.Provider;
