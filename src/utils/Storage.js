const getLocalStorage = (key) => {
  if (!key || key === "") return;

  const value = localStorage.getItem(key);
  if (value) return JSON.parse(value);
};

const setLocalStorage = (key, value) => {
  if (!key || key === "") return;

  const data = JSON.stringify(value);
  localStorage.setItem(key, data);
};

export { getLocalStorage, setLocalStorage };
