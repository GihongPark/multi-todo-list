import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { addCard } from '../modules/list';

import ListInput from './ListInput';
import Cards from './Cards';

function List() {
    const list = useSelector((state: RootState) => state.list);

    const dispatch = useDispatch();
    const onAddCard = (text: string) => dispatch(addCard(text));

    return (
        <div className='list'>
            <Cards list={list} />
            <ListInput onAddCard={onAddCard} />
        </div>
    );
}

export default List;