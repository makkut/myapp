export const ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME';
export const ACTION_CHANGE_LAST_NAME = 'ACTION_CHANGE_LAST_NAME';

const initialState = {
    firstName: 'Maxim',
    secondName: 'Kutprot'
};
export default function (state = initialState, action) {
        switch (action.type) {
            case  ACTION_CHANGE_FIRST_NAME:
                return {...state, firstName: action.payload}
            case  ACTION_CHANGE_LAST_NAME:
                return {...state, secondName: action.payload}
        }
return state
    }
