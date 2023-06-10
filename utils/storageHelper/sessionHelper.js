export const setItemSession = (key, value) => {
  sessionStorage.setItem(key, value);
};

export const getItemSession = (key) => {
  return sessionStorage.getItem(key);
};
