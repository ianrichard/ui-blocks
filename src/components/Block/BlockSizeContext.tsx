import { createContext } from "react";
import type { SizeProp } from "../Size/sizeTypes";

export type BlockSizeContextType = {
  size?: SizeProp;
};

const BlockSizeContext = createContext<BlockSizeContextType>({
  size: "md",
});
export { BlockSizeContext };

export const BlockProvider = BlockSizeContext.Provider;
