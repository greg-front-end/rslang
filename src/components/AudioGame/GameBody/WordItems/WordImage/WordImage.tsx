import React, { useEffect, useState } from 'react';

import { URL } from '../../../../../constants/URL';
import { useAppSelector } from '../../../../../hooks/useAppSelector';
import Notes from '../../../img/notes.png';
import Stripes from '../../../img/stripes.png';
import Plug from '../../../img/vinil.png';

import styles from './WordImage.module.css';

export const WordImage = () => {
  const item = useAppSelector((state) => state.audioChallenge.currentWord);
  const nextWord = useAppSelector((state) => state.audioChallenge.nextWord);
  const pushNextBtn = useAppSelector((state) => state.audioChallenge.isPushNextBtn);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (nextWord) {
      setShow(true);
    }
  }, [nextWord]);

  useEffect(() => {
    setShow(false);
  }, [pushNextBtn]);

  return (
    <div className={styles.img__wrapper}>
      <img
        src={`${URL}${item.image}`}
        alt={item.word}
        className={show ? styles.img : styles.img_dis}
      />
      <div className={show ? styles.plug_dis : styles.plug}>
        <img
          src={Plug}
          alt={item.word}
        />
        <img src={Notes} alt="_" className={styles.notes} />
        <img src={Stripes} alt="_" className={styles.stripes} />
      </div>
    </div>
  );
};
