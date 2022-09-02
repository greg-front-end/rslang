import React, { useEffect, useState } from 'react';

import { URL } from '../../../../../constants/URL';
import { useAppSelector } from '../../../../../hooks/useAppSelector';
import Plug from '../../../img/img-plug.svg';

import styles from './WordImage.module.css';

export const WordImage = () => {
  const item = useAppSelector((state) => state.audioChallenge.currentWord);
  const nextWord = useAppSelector((state) => state.audioChallenge.nextWord);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (nextWord) {
      setShow(true);
    }
  }, [nextWord]);

  useEffect(() => {
    setShow(false);
  }, [item]);

  return (
    <div className={styles.img__wrapper}>
      <img
        src={`${URL}${item.image}`}
        alt={item.word}
        className={styles.img}
      />
      <img
        src={Plug}
        alt={item.word}
        className={show ? styles.plug_dis : styles.plug}
      />
    </div>
  );
};
