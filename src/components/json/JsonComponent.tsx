import React, {useEffect} from "react";
import {getJsonData} from '../../redux/json-reduser'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


export const JsonComponent = ():React.ReactElement => {

        const  dispatch = useDispatch();

    const postData = useSelector((state:AppStateType)=> { return state.post.posts; })
       useEffect(()=> {
           dispatch(getJsonData())
       }, [dispatch])
    console.log(postData)


    return (
        <div>
            <h2>Json</h2>

            {
                postData.map(post => {
                 return (
                     <div key={post.id}>
                        <h3>{post.title} h3</h3>
                        <p>{post.body}p</p>
                    </div>
                 )
                })
            }

        </div>
    )
}