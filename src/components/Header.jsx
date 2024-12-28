import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { reset, logout } from "../redux/auth/auth.slice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="header bg-blue-200 w-screen flex justify-between items-center p-4">
      <div className="logo">
        <Link to="/">Task Creator</Link>
      </div>
      <ul className="nav-links flex space-x-4">
        {user ? (
          <li>
            <button className="flex gap-2 items-center justify-center bg-blue-600 text-white px-3 py-1 rounded-lg" onClick={handleLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login" className="nav-link flex items-center gap-2">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="nav-link flex items-center gap-2">
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
