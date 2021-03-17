import {
    REGISTRATION_CHANGE_EMAIL,
    REGISTRATION_CHANGE_PASSWORD,
    REGISTRATION_CHANGE_REPEAT_PASSWORD
} from "./actions";

const defaultState = {
    email: '',
    password: '',
    repeatPassword: ''
}

export const registrationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REGISTRATION_CHANGE_EMAIL:
            return { ...state, email: action.payload };

        case REGISTRATION_CHANGE_PASSWORD:
            return { ...state, password: action.payload };

        case REGISTRATION_CHANGE_REPEAT_PASSWORD:
            return { ...state, repeatPassword: action.payload };

        default: return state;
    }
}