import React, { createContext, ReactNode } from 'react';

import { IWordsItem } from '../../../types/IWordsItem';

interface IGameContent {
  value: IWordsItem[];
  children: ReactNode;
}

export const GameContext = createContext<IWordsItem[]>([]);

export const GameContextProvider = ({ value, children }: IGameContent) => (
  <GameContext.Provider value={value}>
    {children}
  </GameContext.Provider>
);
