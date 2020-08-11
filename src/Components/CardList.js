import React, { useState } from 'react';
import Cards from './Cards';

function CardList(props) {

    return (
        <div id="container" className="mt-10">
            {props.cards.map((card) => (
            <Cards {...card} />
            ))}
        </div>
    )
};

export default CardList;