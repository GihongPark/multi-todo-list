export const ADD_CARD = 'cards/ADD_CARD' as const;

export const addCard = (text: string) => ({
    type: ADD_CARD,
    payload: {
        text
    }
})
