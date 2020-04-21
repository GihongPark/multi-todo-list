import * as actions from './actions';

// 액션 타입
export type CardsAction = 
    | ReturnType<typeof actions.addCard>;

// 상태 타입
export type Card = {
    text: string;
    done: boolean;
}

export type CardsState = Card[];