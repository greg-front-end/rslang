import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { logIn } from '../../api/logIn';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ICreateUser } from '../../types/ICreateUser';

import style from './style.module.css';

export const LogIn = () => {
  const [formState, setFormState] = useState<Omit<ICreateUser, 'name'>>({
    email: '', password: '',
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userState = useAppSelector((state) => state.auth);
  console.log(userState);

  const handleInutChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { email, password } = formState;
    if (email && password) {
      const formBody: Omit<ICreateUser, 'name'> = {
        email,
        password,
      };
      dispatch(logIn(formBody));
      setFormState({
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
    <div className={style.log_in}>
      <div className="container">
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
};
