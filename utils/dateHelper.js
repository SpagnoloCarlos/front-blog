export const getDate = () => {
  const fechaActual = new Date();

  const day = fechaActual.getDate();
  const month = fechaActual.getMonth() + 1;
  const year = fechaActual.getFullYear();
  const hours = fechaActual.getHours();
  const minutes = fechaActual.getMinutes();
  const seconds = fechaActual.getSeconds();

  const date = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  return date;
};
