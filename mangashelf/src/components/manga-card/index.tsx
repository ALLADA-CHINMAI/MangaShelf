import React, { useEffect, useState } from 'react';
import { MangaCardProps } from '../../types/interfaces';
import favOutline from '../../assets/icons/favOutline.png';
import favFilled from '../../assets/icons/favFilled.png';
import saveOutline from '../../assets/icons/saveOutline.png';
import saveFilled from '../../assets/icons/saveFilled.png';

const MangaCard: React.FC<MangaCardProps> = ({ manga, year }) => {

    const [isFav, setIsFav] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const handleFavClick = () => {
        const newFavStatus = !isFav;
        setIsFav(newFavStatus);
        localStorage.setItem(`fav-${manga.id}`, JSON.stringify(newFavStatus));
    };

    const handleSavedClick = () => {
        const newSavedStatus = !isSaved;
        setIsSaved(newSavedStatus);
        localStorage.setItem(`saved-${manga.id}`, JSON.stringify(newSavedStatus));
    };

    // Load from localStorage when the component mounts
    useEffect(() => {
        const storedFav = localStorage.getItem(`fav-${manga.id}`);
        const storedSaved = localStorage.getItem(`saved-${manga.id}`);

        if (storedFav !== null) {
            setIsFav(JSON.parse(storedFav));
        }
        if (storedSaved !== null) {
            setIsSaved(JSON.parse(storedSaved));
        }
    }, [manga.id]);


    return (
        <div key={manga.id} className="cursor-pointer bg-white shadow-md p-3 rounded-lg flex items-center space-x-4">
            <img src={manga.image} alt={manga.title} className="w-24 h-36 object-cover rounded-md" />
            <div>
                <h3 className="text-lg font-semibold">{manga.title}</h3>
                <p className="text-sm text-gray-600">Score: {manga.score}</p>
                <p className="text-sm text-gray-600">Popularity: {manga.popularity}</p>
                <p className="text-sm text-gray-600">Year of Publication: {year}</p>
            </div>
            <div className='justify-self-end'>
                <img
                    src={isFav ? favFilled : favOutline}
                    className="w-6 h-6 cursor-pointer"
                    onClick={handleFavClick}
                />
                <img
                    src={isSaved ? saveFilled : saveOutline}
                    className="w-6 h-6 cursor-pointer"
                    onClick={handleSavedClick}
                />
            </div>
        </div>
    )
}

export default MangaCard;