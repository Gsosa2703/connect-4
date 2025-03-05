import { createContext } from "react";

type Connect4ContextType = {
 board: number[][];
 winner: number | null;
 currentPlayer: number;
 play: (col:number) => void;
 onResetGame: () => void;
}

export const Connect4Context = createContext<Connect4ContextType | null>(null)
