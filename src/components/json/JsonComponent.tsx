import React, {useEffect, useState} from "react";
import {JsonData} from "../../types/types";
import {getJsonData} from '../../redux/json-reduser'
import {useSelector} from "react-redux";


export const JsonComponent = ():React.ReactElement => {
       let [postData, setPost] = useState<JsonData>();


    useEffect(()=> {

            getJsonData();

        }
    , [])

    return (
        <div>
            <h2>Hello</h2>
            {
              /*  postData.map( post => {
                    return (
                        <div key={post.id}>
                            {post.title}
                        </div>
                    )
                })*/
            }
        </div>
    )
}