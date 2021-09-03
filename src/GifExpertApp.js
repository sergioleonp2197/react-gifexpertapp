import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Rick and Morty']);


    // const handleAdd = () => {
    //     // setCategories(['Hunter X Hunter', ...categories]);
    //     setCategories(cats =>['Me la pela',...cats])
    // }

    return (

        <>
            <h2 className="animate__animated animate__backInLeft">GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />



            <ol>
                {
                    //esto es un pequeño ciclo 
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category} />
                    ))
                }
            </ol>
        </>
    )
}