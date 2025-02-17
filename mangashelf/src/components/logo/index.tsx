import React from 'react';
import LogoIcon from '../../assets/logos/manga.png'


const Logo = () => {
    return (
        <a href='/' className='flex self-center gap-4'>
            <img src={LogoIcon} className='w-10 h-10'/>
            <h1 className="text-2xl font-bold self-center">Manga Shelf</h1>
        </a>

    );
};

export default Logo;