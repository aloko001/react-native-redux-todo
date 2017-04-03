import TodoActions from './constants';

const initialState = {
    filter: 'all',
    items: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TodoActions.ADD_TODO: {
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload.todo
                ]
            }
        }

        case TodoActions.TOGGLE_TODO:
            const newItems = [...state.items];
            const index = newItems.findIndex(it => it.key === action.payload.id);

            newItems[index].completed = true;

            return {
                ...state,
                items: newItems
            }

        case TodoActions.REMOVE_TODO:
            return {
                ...state,
                items: [...state.items].filter(it => it !== action.payload.id)
            };

        case TodoActions.VISIBILITY_FILTER:
            return {
                ...state,
                filter: action.payload.filter
            }

        default:
            return state;
    }
}