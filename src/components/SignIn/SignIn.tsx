import React, {
  ChangeEvent, FormEvent, useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { logIn } from '../../api/logIn';
import { signIn } from '../../api/signIn';
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            required
            autoComplete="off"
            placeholder="name"
            value={formState.name}
            onChange={handleInutChange}
          />
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            placeholder="email"
            value={formState.email}
            onChange={handleInutChange}
          />
          <input
            type="password"
            name="password"
            required
            autoComplete="off"
            placeholder="password"
            value={formState.password}
            onChange={handleInutChange}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};
