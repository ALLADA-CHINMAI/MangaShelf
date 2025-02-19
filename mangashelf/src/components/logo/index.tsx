import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from '../../assets/logos/manga.png'


const Logo = () => {
    const [profilePic, setProfilePic] = useState(localStorage.getItem('profilePic') || '');

    useEffect(() => {
        const storedProfilePic = localStorage.getItem('profilePic');
        console.log(storedProfilePic);
        setProfilePic(storedProfilePic || '');
    }, []);
    
    return (
        <Link to="/" className='flex self-center gap-4'>
            <img 
                src={profilePic || LogoIcon} 
                className={`w-10 h-10 ${profilePic !=='' ? 'rounded-full' : ''} object-cover`} 
                alt="Profile"
            />
            <h1 className="text-2xl font-bold self-center">Manga Shelf</h1>
        </Link>

    );
};

export default Logo;