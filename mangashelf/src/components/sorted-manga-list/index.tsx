import { useState, useEffect } from "react";
import { Manga, SortedMangaListProps } from "SRC/types/interfaces";
import DetailsPage from "../details-page";
import dayjs from "dayjs";


const SortedMangaList = ({ sortField, mangaData }: SortedMangaListProps) => {

    const [sortedManga, setSortedManga] = useState<Manga[]>([])

    useEffect(() => {
        switch (sortField) {
            case 'scoreDesc':
                setSortedManga([...mangaData].sort((a: any, b: any) => b.score - a.score));
                break;
            case 'scoreAsc':
                setSortedManga([...mangaData].sort((a: any, b: any) => a.score - b.score));
                break;
            case 'popularityDesc':
                setSortedManga([...mangaData].sort((a: any, b: any) => b.popularity - a.popularity));
                break;
            case 'popularityAsc':
                setSortedManga([...mangaData].sort((a: any, b: any) => a.popularity - b.popularity));
                break;
            default:
                setSortedManga([]);

        }
    }, [sortField])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 px-4">
            {sortedManga.map((manga) => (
                // <div key={manga.id} className="bg-white shadow-lg rounded-lg p-3 flex items-center space-x-4">
                //     <img src={manga.image} alt={manga.title} className="w-24 h-36 object-cover rounded-md" />
                //     <div>
                //         <h3 className="text-lg font-semibold">{manga.title}</h3>
                //         <p className="text-sm text-gray-600">Score: {manga.score}</p>
                //         <p className="text-sm text-gray-600">Popularity: {manga.popularity}</p>
                //         <p className="text-sm text-gray-500 italic">{manga.category}</p>
                //     </div>
                // </div>
                <DetailsPage
                    manga={manga}
                    year={dayjs.unix(manga.publishedChapterDate).year()}
                />
            ))}
        </div>
    );
};

export default SortedMangaList;
