import React, { createContext, useState } from 'react';

interface IValueProps {
  audio: HTMLAudioElement;
  setAudio: React.Dispatch<React.SetStateAction<HTMLAudioElement>>;
}

interface ITextBookContextProps {
  children: React.ReactNode;
  value: IValueProps;
}

export const TextBookCont = createContext({} as IValueProps);

export const TextBookContext = ({ children, value }: ITextBookContextProps) => (
  <TextBookCont.Provider value={value}>{children}</TextBookCont.Provider>
);
