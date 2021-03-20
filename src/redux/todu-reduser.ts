import {InferActionsTypes} from "./redux-store";
import {TypesTodu} from "../types/types";

let TodoTypes = {
        toduData:[ {
            id: 0,
            text: '',
            data: '',
        }]

 }


export const todoReducer = ( state = TodoTypes, action: ActionsType): InitialStateType => {
    switch (action.type) {

        case "ADD/TODU":
                        return {

                        ...state,
                            toduData:[...state.toduData,  action.payload]
                        }

        default:
            return state;
    }
}




 export const actions = {
    AddToduTextactions: (payload:TypesTodu) => ({type:'ADD/TODU', payload} as const),
 }
/*

 export const setToduData = () => (dispatch) => {
    dispatch()
 }*/



export type InitialStateType = typeof TodoTypes
type ActionsType = InferActionsTypes<typeof actions>