// src/Login.tsx
import React from "react";
import { useMsal } from "@azure/msal-react";
import { InteractionRequiredAuthError } from "@azure/msal-browser";
import MangaLogo from '../../assets/logos/manga.png';

const Login: React.FC = () => {
  const { instance } = useMsal();

  const login = async () => {
    try {
      await instance.loginPopup({
        scopes: ["openid", "profile", "email"], // Add required scopes for B2C
      });
    } catch (error) {
      if (error instanceof InteractionRequiredAuthError) {
        instance.loginRedirect({
          scopes: ["openid", "profile", "email"], // Add required scopes for B2C
        });
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
    <div className="text-center border border-black bg-neutral-100 p-16 ">
      {/* Logo Image */}
      <img
        src={MangaLogo} // Replace with your logo
        alt="Microsoft Logo"
        className="w-32 mx-auto mb-4" // Adjust size as needed
      />
      {/* Login Button */}
      <button
        onClick={login}
        className="bg-blue-600 text-white py-2 px-4 rounded-full text-lg w-full max-w-xs mx-auto mt-4"
      >
        Login using Microsoft Account
      </button>
    </div>
  </div>
  );
};

export default Login;
