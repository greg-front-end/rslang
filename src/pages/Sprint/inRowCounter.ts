export const inRowCounter = (currectWrongWords: string[]) => {
  const currentWords = currectWrongWords.join('').split('0').sort();
  return currentWords[currentWords.length - 1].length;
};
