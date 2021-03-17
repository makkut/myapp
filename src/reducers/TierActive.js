export default function (state = null, action) {
    switch (action.type) {
        case 'TIER_SELECTED':
            return action.tier
            break;
        default:
            return state;
    }
}