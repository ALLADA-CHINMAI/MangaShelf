export interface Manga {
  id: string;
  title: string;
  image: string;
  score: number;
  popularity: number;
  category: string;
  publishedChapterDate: number;
  isFav?: boolean;
}

export interface MangaCardProps {
  manga: Manga;
  year?: number;
  key?: string;
}

export interface MangaListProps {
  mangaData: Manga[];
}

export interface SortedMangaListProps {
  sortField: string;
  mangaData: Manga[];
}

export interface SortButtonsProps {
  onSort: (field: "score" | "popularity") => void;
}

export interface SendSortFieldProps {
	sendData: (field: string) => void;
}
