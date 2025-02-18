import React from "react";
import { useMsal } from "@azure/msal-react";

const LogoutButton: React.FC = () => {
  const { instance } = useMsal();

  const logout = () => {
    instance.logoutPopup({
      postLogoutRedirectUri: "https://ALLADA-CHINMAI.github.io/MangaShelf", // Redirect after logout
    }).catch(e => console.error(e));  // Handle any logout errors
  };

  return (
    <button
      onClick={logout}
      className="bg-blue-600 text-white py-2 px-4 rounded-full text-sm w-10 max-w-xs mx-auto "
    >
      Logout
    </button>
  );
};

export default LogoutButton;
