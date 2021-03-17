export const ACTION_CHANGED_NAME = 'ACTION_CHANGED_NAME';
export const ACTION_CHANGED_CAR = 'ACTION_CHANGED_CAR';


const initialState = {
    owner: 'Maxim',
    car: 'BMW'
};

export default function (state=initialState,action){
    switch (action.type){
        case ACTION_CHANGED_NAME:
            return {...state, owner: action.payload}
        case ACTION_CHANGED_CAR:
            return {...state, car: action.payload}
    }
    return state
}