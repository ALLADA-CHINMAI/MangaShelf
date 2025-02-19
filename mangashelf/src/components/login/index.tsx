// src/Login.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MangaLogo from '../../assets/logos/manga.png';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


interface UserData {
  name: string;
  email: string;
  picture: string;
}

const Login = () => {
  
  const [googleLoginError, setGoogleLoginError] = useState(false);
  const navigate = useNavigate()


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <div className="text-center border border-black bg-neutral-100 p-16 ">
        {/* Logo Image */}
        <img
          src={MangaLogo} // Replace with your logo
          alt="Microsoft Logo"
          className="w-32 mx-auto mb-4" // Adjust size as needed
        />


        {/* Gogle OAuth login */}
        <GoogleLogin
          onSuccess={credentialResponse => {
            try {
              const credentialResponseDecoded = jwtDecode<UserData>(credentialResponse.credential ?? '');
            
              //TO-DO : Store user data in backend ang get AuthToken
              localStorage.setItem("userEmail", credentialResponseDecoded.email);
              localStorage.setItem("userName", credentialResponseDecoded.name);
              localStorage.setItem("profilePic", credentialResponseDecoded.picture);
              navigate("/")

            } catch (error) {
              console.error('Token decoding failed:', error);
              setGoogleLoginError(true);
            }
          }}
          onError={() => {
            console.log('Login Failed');
            setGoogleLoginError(true);
          }}
        />

        {googleLoginError && <p style={{ color: 'red' }}>Google Login failed. Please try again.</p>}

      </div>
    </div>
  );
};

export default Login;
