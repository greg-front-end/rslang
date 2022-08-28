import React, { useEffect } from 'react';

import { getCard } from '../../../api/getCard';
import { setGroup } from '../../../features/textBookSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { mixArray } from '../utils/mixArray';

import { WordItems } from './WordItems/WordItems';

// import { URL } from '../../constants/URL';
// import { IWordsItem } from '../../types/IWordsItem';

// import { mixArray } from './utils/mixArray';

// import styles from './AudioGame.module.css';

// interface IAudioGameProps {
//   items: IWordsItem[];
// }

export const GameBody = () => (
  <div>
    <WordItems />
    {/* <GameBtns /> */}
  </div>
);
