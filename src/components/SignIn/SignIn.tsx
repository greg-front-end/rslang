import React, {
  ChangeEvent, FormEvent, useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { logIn } from '../../api/logIn';
import { signIn } from '../../api/signIn';
import { ReactComponent as EmailICon } from '../../assets/svg/auth/email.svg';
import { ReactComponent as KeyIcon } from '../../assets/svg/auth/key.svg';
import { ReactComponent as UserIcon } from '../../assets/svg/auth/user.svg';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ICreateUser } from '../../types/ICreateUser';

import style from './style.module.css';

export const SignIn = () => {
  const [formState, setFormState] = useState<ICreateUser>({
    name: '', email: '', password: '',
  });
  const userState = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleInutChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const { name, email, password } = formState;
    if (name && email && password) {
      const formBody: ICreateUser = {
        name,
        email,
        password,
      };
      await dispatch(signIn(formBody));
      await dispatch(logIn({ email: formBody.email, password: formBody.password }));
      setFormState({
        name: '',
        email: '',
        password: '',
      });
    }
  };

  useEffect(() => {
    if (userState.token?.token) {
      navigate('/');
    }
  }, [navigate, userState.token?.token]);

  return (
    <div className={style.auth}>
      <div className="container">
        <div className={style.auth_wrapper}>
          <form className={style.form} onSubmit={handleSubmit}>
            <label className="form_label" htmlFor="name">
              <UserIcon className="form_input_icon" />
              <input
                type="text"
                name="name"
                id="name"
                required
                autoComplete="off"
                placeholder="name"
                className="form_input"
                pattern="^[A-Za-z0-9]{3,16}$"
                value={formState.name}
                title="Invalid name, should be more then 3 character and less then 16"
                onChange={handleInutChange}
              />
            </label>
            <label className="form_label" htmlFor="email">
              <EmailICon className="form_input_icon" />
              <input
                type="email"
                name="email"
                required
                autoComplete="off"
                placeholder="email"
                className="form_input"
                title="Invalid email address"
                value={formState.email}
                id="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                onChange={handleInutChange}
              />
            </label>
            <label className="form_label" htmlFor="password">
              <KeyIcon className="form_input_icon" />
              <input
                type="password"
                name="password"
                id="password"
                required
                autoComplete="off"
                placeholder="password"
                className="form_input"
                value={formState.password}
                pattern="^[A-Za-z0-9]{8,16}$"
                title="Invalid password, should be more then 8 character and less then 16"
                onChange={handleInutChange}
              />
            </label>
            <button className="form_btn" type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};
