import React, { Fragment, useEffect, useState } from 'react';

import { ReactComponent as EmailICon } from '../../../assets/svg/settings/email.svg';
import { ReactComponent as KeyIcon } from '../../../assets/svg/settings/key.svg';
import { ReactComponent as UserIcon } from '../../../assets/svg/settings/user.svg';
import { useAppSelector } from '../../../hooks/useAppSelector';

import style from './style.module.css';

export const SettingsInputs = () => {
  const [name, setName] = useState(useAppSelector((state) => state.auth.name));
  const [mail, setMail] = useState(useAppSelector((state) => state.auth.email));
  const [pswrd, setPswrd] = useState('');
  const [nameToggler, setNameToggler] = useState(true);
  const [mailToggler, setMailToggler] = useState(true);
  const [pswrdToggler, setPswrdToggler] = useState(true);

  const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const mailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  };
  const pswdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPswrd(e.target.value);
  };

  const iconStyle = {
    fill: 'white',
  };

  return (
    <>
      <label className={`form_label ${style.label}`} htmlFor="name">
        <UserIcon className="form_input_icon" style={iconStyle} />
        {nameToggler
          ? <span className={style.field_name}>{name}</span>
          : (
            <input
              type="text"
              name="name"
              id="name"
              required
              autoComplete="off"
              placeholder="name"
              className={`form_input ${style.hide}`}
              pattern="^[A-Za-z0-9]{3,16}$"
              value={name}
              title="Invalid name, should be more then 3 character and less then 16"
              onChange={nameChange}
            />
          )}
        <svg width="100" height="2" viewBox="0 0 100 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1L99 1" stroke="#CEC485" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
        </svg>
        change
      </label>
      <label className={`form_label ${style.label}`} htmlFor="email">
        <EmailICon className="form_input_icon" style={iconStyle} />
        {mailToggler
          ? <span className={style.field_name}>{mail}</span>
          : (
            <input
              type="email"
              name="email"
              required
              autoComplete="off"
              placeholder="email"
              className={`form_input ${style.hide}`}
              title="Invalid email address"
              value={mail}
              id="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              onChange={mailChange}
            // onClick={}
            />
          )}
        <svg width="100" height="2" viewBox="0 0 100 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1L99 1" stroke="#CEC485" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
        </svg>
        change
      </label>
      <label className={`form_label ${style.label}`} htmlFor="password">
        <KeyIcon className="form_input_icon" style={iconStyle} />
        {pswrdToggler
          ? <span className={style.field_name}> password</span>
          : (
            <input
              type="password"
              name="password"
              id="password"
              required
              autoComplete="off"
              placeholder="password"
              className={`form_input ${style.hide}`}
              value={pswrd}
              pattern="^[A-Za-z0-9]{8,16}$"
              title="Invalid password, should be more then 8 character and less then 16"
              onChange={pswdChange}
            />
          )}
        <svg width="100" height="2" viewBox="0 0 100 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1L99 1" stroke="#CEC485" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
        </svg>
        change
      </label>
    </>
  );
};
