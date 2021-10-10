import { SELL_PHONE } from '../types/types';

const initialState = {
    numberOfPhones: 300,
}

const phoneReducer = (state = initialState, action) => {
    switch (action.type) {

        case SELL_PHONE:
            return { ...state, numberOfPhones: state.numberOfPhones - action.payload }

        default:
            return state
    }
}

export default phoneReducer;