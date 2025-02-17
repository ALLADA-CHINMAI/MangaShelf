import React, { useState, useEffect } from 'react';
import { Dialog } from "radix-ui";
import { MangaCardProps } from '../../types/interfaces';
import MangaCard from '../manga-card/index';
import { Cross2Icon } from '@radix-ui/react-icons';
import "./index.css";

const DetailsPage: React.FC<MangaCardProps> = ({ manga, year, key }) => {

    const formatDate = (timestamp: number) => {
        return new Date(timestamp).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        });
    };

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button>
                    <MangaCard
                        manga={manga}
                        year={year}
                    />
                </button>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent">

                    <Dialog.Title className="DialogTitle">
                        <p className="text-2xl font-semibold">{manga.title}</p>
                    </Dialog.Title>
                    <Dialog.Description></Dialog.Description>
                    <div key={manga.id} className="cursor-pointer justify-center bg-white mt-4 rounded-lg flex flex-col items-center space-x-4">
                        <img src={manga.image} alt={manga.title} className="w-30 h-42 object-cover rounded-md" />
                        <p className="text-sm text-gray-600">Score: {manga.score}</p>
                        <p className="text-sm text-gray-600">Popularity: {manga.popularity}</p>
                        <p className="text-sm text-gray-600">Category: {manga.category}</p>
                        <p className="text-sm text-gray-600">Published On: {formatDate(manga.publishedChapterDate)}</p>
                    </div>

                    <Dialog.Close asChild>
                        <button className="IconButton" aria-label="Close">
                            <Cross2Icon />
                        </button>
                    </Dialog.Close>

                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>

    )
};

export default DetailsPage;
