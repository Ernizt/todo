import axios from 'axios';
import {JsonData} from "../types/types";
export const ApiAxios =  {
    getPosts() {
        return axios.get<JsonData>(`https://jsonplaceholder.typicode.com/posts`).then(
            (res )=>{
                console.log(res.data)
              return  res.data;
            })
    },
}