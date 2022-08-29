import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { loginUser } from '../../api/loginUser';
import { ReactComponent as EmailICon } from '../../assets/svg/auth/email.svg';
import { ReactComponent as KeyIcon } from '../../assets/svg/auth/key.svg';
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
      dispatch(loginUser(formBody));
      setFormState({
        email: '',
        password: '',
      });
    }
  };

  useEffect(() => {
    if (userState.token) {
      navigate('/');
    }
  }, [navigate, userState.token]);
  return (
    <div className={style.login}>
      <div className="container">
        <div className={style.login_wrapper}>
          <form className={style.form} onSubmit={handleSubmit}>
            <label className={`${style.form_label_email} form_label`} htmlFor="email">
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
            <label className={`${style.form_label_password} form_label`} htmlFor="password">
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
            <button className={`${style.form_btn} form_btn`} type="submit">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};
