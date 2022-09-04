export const getYesterdayKey = () => {
  const date = new Date(new Date().setDate(new Date().getDate() - 1));
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
