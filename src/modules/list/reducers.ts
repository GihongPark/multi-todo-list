import { ADD_CARD } from './actions';
import { CardsAction, CardsState } from './types';

const initialState: CardsState = [];

function reducer(
    state: CardsState = initialState,
    action: CardsAction
): CardsState {
    switch(action.type) {
        case ADD_CARD: 
            return state.concat({
                text: action.payload.text,
                done: false
            })
        default :
            return state;
    }
}

export default reducer;