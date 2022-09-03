import {
  useEffect,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import { IToken } from '../types/IToken';
import { getValueLocalStorage } from '../utils/getValueLocalStorage';
import { removeValueLocalStorage } from '../utils/removeValueLocalStorage';

export const useLogOutAfterTokenExp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isUserLoggined, setIsUserLoggined] = useState(false);
  const token = JSON.parse(getValueLocalStorage('Token')!) as IToken && jwtDecode(JSON.parse(getValueLocalStorage('Token')!)) as IToken;
  const timer = token && Math.ceil(+((token.exp - Date.now() / 1000) * 1000).toFixed(2));

  useEffect(() => {
    if (timer) {
      setTimeout(() => {
        removeValueLocalStorage('Token');
        removeValueLocalStorage('UserId');
        navigate('log-in');
        setIsUserLoggined(false);
      }, timer);
    }
    if (token) {
      setIsUserLoggined(true);
    }
    if (!token) {
      setIsUserLoggined(false);
    }
  }, [dispatch, navigate, timer, token]);
  return isUserLoggined;
};
