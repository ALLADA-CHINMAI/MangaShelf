import React from "react";
import { googleLogout } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    localStorage.removeItem("profilePic");
    googleLogout();
    navigate("/login")
  };

  return (
    <button
      onClick={logout}
      className="bg-blue-600 text-white py-2 cursor-pointer px-4 rounded-full text-sm w-10 max-w-xs mx-auto "
    >
      Logout
    </button>
  );
};

export default LogoutButton;
