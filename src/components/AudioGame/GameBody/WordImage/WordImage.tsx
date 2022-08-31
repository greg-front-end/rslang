import React, { useEffect, useState } from 'react';

import { URL } from '../../../../constants/URL';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import Plug from '../../img/img-plug.svg';

import styles from '../WordItems/WordItems.module.css';

export const WordImage = () => {
  const item = useAppSelector((state) => state.audioChallenge.currentWord);
  const isStop = useAppSelector((state) => state.audioChallenge.timerStop);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isStop) {
      setShow(true);
    }
  }, [isStop]);

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
