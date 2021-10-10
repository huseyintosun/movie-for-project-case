import { SELL_COMPUTER, SELL_LAPTOP, SELL_PHONE, SELL_WATCH } from '../types/types';

export const sellLaptop = (number = 1) => {
    return {
        type: SELL_LAPTOP,
        payload: number
    }
};
export const sellComputer = () => {
    return {
        type: SELL_COMPUTER,
    }
};
export const sellWatch = () => {
    return {
        type: SELL_WATCH,
    }
};
export const sellPhone = (number = 1) => {
    return {
        type: SELL_PHONE,
        payload: number
    }
};