import {combineReducers} from "redux";
import CarsReducers from './car';
import ActiveCar from './CarActive';
import StadtReducers from "./stadt";
import ActiveStadt from './StadtActive';
import TierReducer from "./tier";
import ActiveTier from "./TierActive";
import PersonReducer from "./person";
import CarOwnerReducer from "./carOwnerList";
import {authReducer} from "./auth/reducer";
import {registrationReducer} from "./registration/reducer";


const allReducers = combineReducers({
    cars: CarsReducers,
    active: ActiveCar,

    stadt: StadtReducers,
    activeStadt: ActiveStadt,

    tier: TierReducer,
    activeTier: ActiveTier,

    person: PersonReducer,

    carOwner:  CarOwnerReducer,

    auth: authReducer,
    registration: registrationReducer

});

export default allReducers;