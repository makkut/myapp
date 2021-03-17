export default function (state = null, action) {

    switch (action.type) {
        case 'STADT_SELECTED':
            return action.stadt
            break;
        default:
            return state;
    }}