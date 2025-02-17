import React, { useState, useEffect, useRef } from "react";
import mangaListData from '../../data/index.json';
import dayjs from "dayjs";
import NavItems from "../nav-items/index";
import Logo from "../logo/index";
import { Manga, MangaCardProps, MangaListProps } from "../../types/interfaces";
import DetailsPage from "../details-page/index";


const years = [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014];

const MangaList: React.FC<MangaListProps> = ({mangaData}) => {
  const [activeYear, setActiveYear] = useState<number>(2007);
  const listRef = useRef<HTMLDivElement>(null);
  const [favList, setFavList] = useState([]);



  // useEffect(() => {
  //   setMangaData(mangaListData);
  // }, []);

  useEffect(() => {
    console.log(favList, 'favList');
    localStorage.setItem('favMangas', JSON.stringify(favList));
  }, [favList])

  // Group manga by year
  const mangaByYear: Record<number, Manga[]> = mangaData.reduce((acc, manga) => {
    const year = dayjs.unix(manga.publishedChapterDate).year(); //changing timestamp to year
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year]?.push(manga);
    return acc;
  }, {} as Record<number, Manga[]>);


  //  Detect Scroll Position and Update Active Year
  const handleScroll = () => {
    if (!listRef.current) return;
    const listTop = listRef.current.getBoundingClientRect().top;

    for (const year of years) {
      const section = document.getElementById(`year-${year}`);
      if (section) {
        const { top } = section.getBoundingClientRect();
        if (top <= listTop + 50) {
          setActiveYear(year);
        }
      }
    }
  };

  useEffect(() => {
    const container = listRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col">
      {/*  Fixed Year Tabs */}
      <div className="bg-white shadow-md fixed top-12 w-full z-10 p-2">
        <div className="flex justify-center  ml-4 mr-4 ">
          {/* <Logo /> */}

          <div className="flex justify-center space-x-4">
            {years.map((year, index) => (
              <button
                key={index}
                onClick={() => {
                  const section = document.getElementById(`year-${year}`);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className={`px-4 py-2 text-lg font-bold ${activeYear === year ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
                  }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* <NavItems /> */}
        </div>

      </div>

      {/*  Scrollable Manga List */}
      <div ref={listRef} className="mt-28 overflow-y-auto flex-1 px-4">
        {years.map((year, index) => (
          <div key={index} id={`year-${year}`} className="mb-6">
            {mangaByYear[year] ? (
              <>
                <h2 className="text-2xl font-bold mb-3 text-gray-700">{year}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {mangaByYear[year].map((manga: Manga) => (
                      <DetailsPage
                        manga={manga}
                        year={year}
                      />
                  ))}
                </div>
              </>
            ) : (
              <h2 className="text-xl font-bold text-gray-500">{year} - No Data</h2>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MangaList;
