import userBodyToLocalStorage from '../interfaces/user/userBodyToLocalStorage';

const setUserLocalStorage = (user: userBodyToLocalStorage) => {
  const userString = JSON.stringify(user);
  localStorage.setItem('user', userString);
};

export default setUserLocalStorage;
