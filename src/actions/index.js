import {ACTION_CHANGE_FIRST_NAME, ACTION_CHANGE_LAST_NAME} from "../reducers/person";
import {ACTION_CHANGED_CAR, ACTION_CHANGED_NAME} from "../reducers/carOwnerList";

export const select = (car)=>{

    return{
        type:'CAR_SELECTED',
        payload: car
    }
};

export const selectStadt = (stadt)=>{

    return{
        type:'STADT_SELECTED',
        stadt: stadt
    }
};

export const selectTier = (tier)=>{

    return{
        type:'TIER_SELECTED',
        tier: tier
    }
};

export const changeFirstName = (newFirstName) => {
    return {
        type: ACTION_CHANGE_FIRST_NAME,
        payload: newFirstName
    }
};

export const changeSecondName = (newSecondName) => {
    return {
        type: ACTION_CHANGE_LAST_NAME,
        payload: newSecondName
    }
};

export const changeName = (newName)=> {
    return{
        type: ACTION_CHANGED_NAME,
        payload: newName
    }
};
export const changeCar = (newCar)=> {
    return{
        type: ACTION_CHANGED_CAR,
        payload: newCar
    }
}
