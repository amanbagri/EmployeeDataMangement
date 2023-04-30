import { useState } from 'react';

export default function useToken() {

  const retrieveTokenFromLocalStorage = () => {
    const tokenString = localStorage.getItem('token');
    return tokenString ? JSON.parse(tokenString)?.token : null;
  };

  const [token, setToken] = useState(retrieveTokenFromLocalStorage());

  const saveToken = userToken => {
    if (userToken) {
      localStorage.setItem('token', JSON.stringify(userToken));
      setToken(userToken.token);
    }
  };

  const removeToken = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return {
    setToken: saveToken,
    removeToken,
    token,
  };
}
