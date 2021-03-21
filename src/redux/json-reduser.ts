import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {GetPostsStateType, Post} from "../types/types";
import {ApiAxios} from "../api/api";


let initialState:GetPostsStateType = {
    posts:  []
}


export const postReducer = ( state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        case "ADD/JSON":
            return {
                ...state,
                posts: action.payload
            };

        default:
            return state;
    }
}





export const actions = {
    AddPostTextactions: (payload:Post[]) => ({type:'ADD/JSON', payload} as const),
}

export  const getJsonData = (): ThunkType => async  (dispatch) => {
    const data = await ApiAxios.getPosts();
       dispatch(actions.AddPostTextactions(data));
}

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType>;