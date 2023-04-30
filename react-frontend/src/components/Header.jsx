import React from 'react';
import { Link } from 'react-router-dom';
import useToken from './useToken';

const Header = () => {
  const { token, removeToken } = useToken();

  const handleLogout = () => {
    removeToken();
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/employee" className="navbar-brand">
          Employee Management App
        </Link>
        <ul className="navbar-nav ml-auto">
          {token ? (
            <li className="nav-item">
              <Link to="/login" className="nav-link" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
