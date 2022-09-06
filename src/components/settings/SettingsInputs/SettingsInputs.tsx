import React, { Fragment, useEffect, useState } from 'react';

import { updateUser } from '../../../api/updateUser';
import { ReactComponent as EmailICon } from '../../../assets/svg/settings/email.svg';
import { ReactComponent as KeyIcon } from '../../../assets/svg/settings/key.svg';
import { ReactComponent as UserIcon } from '../../../assets/svg/settings/user.svg';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';

import style from './style.module.css';

export const SettingsInputs = () => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.auth.name);
  const userMail = useAppSelector((state) => state.auth.email);
  const [email, setMail] = useState(userMail);
  const [password, setPswrd] = useState('');
  const [toggler, setToggler] = useState(true);

  const mailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  };
  const pswdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPswrd(e.target.value);
  };

  const iconStyleW = {
    fill: 'white',
  };
  const iconStyleB = {
    fill: 'black',
  };

  const toggleFilds = () => setToggler(!toggler);

  const clickOnField = () => toggleFilds();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    if (email && password) {
      const formBody = {
        email,
        password,
      };
      toggleFilds();
      dispatch(updateUser(formBody));
      setMail('');
      setPswrd('');
    }
  };

  return (
    <>
      <div className={`${style.name_block}`}>
        <h3 className={`${style.name}`}>
          {userName}
        </h3>
      </div>
      <form className={style.form} onSubmit={handleSubmit}>
        <label
          className={`form_label ${style.label}`}
          htmlFor="email"
        >
          <EmailICon className="form_input_icon" style={toggler ? iconStyleW : iconStyleB} />
          {toggler
            ? (
              <>
                <span className={style.field_name}>{userMail}</span>
                <svg width="100" height="2" viewBox="0 0 100 2" fill="none" className={style.line}>
                  <path d="M0 1L99 1" stroke="#CEC485" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
                </svg>
              </>
            )
            : (
              <input
                type="email"
                name="mail"
                required
                autoComplete="off"
                placeholder="email"
                className={`form_input ${style.input}`}
                title="Invalid email address"
                value={email}
                id="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                onChange={mailChange}
              />
            )}
          <div className={style.btn} />
        </label>
        <label className={`form_label ${style.label}`} htmlFor="password">
          <KeyIcon className="form_input_icon" style={toggler ? iconStyleW : iconStyleB} />
          {toggler
            ? (
              <>
                <span className={style.field_name}>password</span>
                <svg width="100" height="2" viewBox="0 0 100 2" fill="none" className={style.line}>
                  <path d="M0 1L99 1" stroke="#CEC485" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
                </svg>
              </>
            )
            : (
              <input
                type="password"
                name="password"
                id=""
                required
                autoComplete="off"
                placeholder="password"
                className={`form_input ${style.input}`}
                value={password}
                pattern="^[A-Za-z0-9]{8,16}$"
                title="Invalid password, should be more then 8 character and less then 16"
                onChange={pswdChange}
                readOnly
                onFocus={(e) => e.currentTarget.removeAttribute('readonly')}
              />
            )}
        </label>
        {!toggler
          && (
            <button
              type="submit"
              className={style.btn}
            >
              submit
            </button>
          )}
      </form>
      {
        toggler
        && (
          <button
            type="button"
            className={style.btn}
            onClick={clickOnField}
            name="pswrd"
          >
            change
          </button>
        )
      }
    </>
  );
};
