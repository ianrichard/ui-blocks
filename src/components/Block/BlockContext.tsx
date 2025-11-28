import { createContext } from "react";
import type { BlockContextValue } from "./Block.types";

const BlockContext = createContext<BlockContextValue>({});
export { BlockContext };

export const BlockProvider = BlockContext.Provider;
