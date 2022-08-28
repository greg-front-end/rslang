import React, {
  ChangeEvent, FormEvent, useState,
} from 'react';

import { logIn } from '../../api/logIn';
import { registerUser } from '../../api/registerUser';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { ICreateUser } from '../../types/ICreateUser';

import style from './style.module.css';

export const Auth = () => {
  const [formState, setFormState] = useState<ICreateUser>({
    name: '', email: '', password: '',
  });
  const dispatch = useAppDispatch();

  const handleInutChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { name, email, password } = formState;
    if (name && email && password) {
      const formBody: ICreateUser = {
        name,
        email,
        password,
      };
      dispatch(registerUser(formBody));
      dispatch(logIn({ email: formBody.email, password: formBody.password }));
      setFormState({
        name: '',
        email: '',
        password: '',
      });
    }
  };

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
