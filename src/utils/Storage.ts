function getLocalStorage(key: string) {
  if (!key || key === "") return;

  const value = localStorage.getItem(key);
  if (value) return JSON.parse(value);
}

function setLocalStorage(key: string, value: any) {
  if (!key || key === "") return;

  const data = JSON.stringify(value);
  localStorage.setItem(key, data);
}

export { getLocalStorage, setLocalStorage };
