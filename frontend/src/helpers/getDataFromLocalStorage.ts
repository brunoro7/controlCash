const getDataFromLocalStorage = (localStorageKey: string) => {
  const dataFromLocalStorage = JSON.parse(String(localStorage.getItem(localStorageKey)));

  return dataFromLocalStorage;
};

export default getDataFromLocalStorage;
