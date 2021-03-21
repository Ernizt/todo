import axios from 'axios';
import { PostActionTypes} from "../types/types";
export const ApiAxios =  {
    getPosts() {
        return axios.get(`https://jsonplaceholder.typicode.com/posts`).then(
            (res )=>{
                return  res.data;
            })
    },
}