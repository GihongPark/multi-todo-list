import React from 'react';
import { CardsState, Card } from '../modules/list';

type CardsProps = {
    list: CardsState
}
function Cards({list}: CardsProps) {
    const mapToCards = () => {
        return list.map((
            v: Card,
            i: number
            ) => {
            return (
                <div key={i}>{v.text}</div>
            )
        })
    }

    return (
        <>
        {mapToCards()}
        </>
    )
}

export default Cards;