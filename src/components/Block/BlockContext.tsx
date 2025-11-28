import { createContext } from "react";
import type { SizeProp } from "../Size/sizeTypes";

export type BlockContextType = {
  size?: SizeProp;
};

const BlockContext = createContext<BlockContextType>({
  size: "md",
});
export { BlockContext };

export const BlockProvider = BlockContext.Provider;
