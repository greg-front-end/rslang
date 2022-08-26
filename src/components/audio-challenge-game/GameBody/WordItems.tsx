import React, { useContext } from 'react';

import { URL } from '../../../constants/URL';
import { GameContext } from '../GameContext/GameContext';
// import { IWordsItem } from '../../types/IWordsItem';

// import { mixArray } from './utils/mixArray';

// import styles from './AudioGame.module.css';

// interface IAudioGameProps {
//   items: IWordsItem[];
// }

export const WordItems = () => {
  const data = useContext(GameContext);
  return (
    <div>
      {data.map((el) => <img src={`${URL}${el.image}`} alt={el.word} id={el.id} />)}
    </div>
  );
};
