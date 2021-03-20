import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {JsonData} from "../types/types";
import {ApiAxios} from "../api/api";

const PostData = {
    jData: [
        {
            userId:0,
            id:0,
            title:'',
            body: ''
        }
    ]
}


export const postReducer = ( state = PostData, action: ActionsType): InitialStateType => {
    switch (action.type) {

        case "ADD/JSON":
            return {
                ...state,
                jData: [...action.payload.jData]


            }

        default:
            return state;
    }
}





export const actions = {
    AddPostTextactions: (payload:JsonData) => ({type:'ADD/JSON', payload} as const),
}
export  const getJsonData = (): ThunkType => async  (dispatch) => {
    const data = await ApiAxios.getPosts();
    console.log(data);
    ///dispatch(actions.AddPostTextactions(data));
}


/*

 export const setToduData = () => (dispatch) => {
    dispatch()
 }*/



export type InitialStateType = typeof PostData
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>