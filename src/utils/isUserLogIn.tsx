export const isUserLogIn = () => {
  if (localStorage.getItem('token')) {
    return true;
  }
  return false;
};
