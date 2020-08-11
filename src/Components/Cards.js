import React, { useState } from 'react';
import Form from './Form';

function Cards() {
    const [ cards, setCards ] = useState([]);

    const addNewCard = (card) => {
        setCards([...cards, card]);
    };

    return (
        <div>
        <h1 className="pt-10 text-center mt-6 text-3xl leading-9 font-extrabold text-gray-900">
            Search a GitHub User
        </h1>

        <Form 
        onSubmit={addNewCard}/>
        </div>
    )
};

export default Cards;