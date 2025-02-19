import { useEffect, useState } from 'react';
import './index.css';
import MangaList from '../manga-list/index';
import mangaListData from '../../data/index.json';
import SortedMangaList from '../sorted-manga-list';
import NavItems from '../nav-items';
import FavouriteCards from '../saved-list';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [userData, setUserData] = useState<any | null>(null);
    const [sortField, setSortField] = useState<string>("");
    const navigate = useNavigate();

    const handleSortFieldData = (field: string) => {
        setSortField(field);
    };

    useEffect(()=>{
        navigate("/");
    },[])

    return (

        <>
            <FavouriteCards />
            <NavItems sendData={handleSortFieldData} />
            {sortField ? (
                <SortedMangaList sortField={sortField} mangaData={mangaListData} />
            ) : (
                <MangaList mangaData={mangaListData} />
            )}
        </>
    );
};

export default Home;