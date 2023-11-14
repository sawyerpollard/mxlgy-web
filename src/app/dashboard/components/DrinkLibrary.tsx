'use client';

import { useState } from 'react';
import DrinkCard from './DrinkCard';
import DrinkModal, { DrinkModalProps } from './DrinkModal';

import Fuse from 'fuse.js'

export type DrinkLibraryProps = {
    drinks: DrinkModalProps[],
};

export default function DrinkLibrary(props: DrinkLibraryProps) {
    const [drink, setDrink] = useState<DrinkModalProps | null>(null)
    const [filteredDrinks, setFilteredDrinks] = useState<DrinkModalProps[]>(props.drinks)

    const fuse = new Fuse(props.drinks, {
        keys: ['name'],
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.value == '') {
            setFilteredDrinks(props.drinks)
        } else {
            setFilteredDrinks(fuse.search(e.target.value).map((result) => result.item))
        }
    }

    return (
        <>
            <input onChange={handleChange} className="rounded-full max-w-lg w-full text-2xl font-semibold outline-none border-2 border-black focus:border-red-500 placeholder-neutral-600 p-4" type="text" placeholder="Search for a cocktail ..." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {filteredDrinks.map((drink) => <div className="hover:cursor-pointer" key={drink.name} onClick={() => setDrink(drink)}><DrinkCard {...drink} /></div>)}
            </div>
            {drink && <DrinkModal close={() => setDrink(null)} {...drink} />}
        </>
    )
}