import React from 'react';
import s from './showTodo.module.css';
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

export const ShowTodo = (): React.ReactElement => {

    const toduData = useSelector((state:AppStateType) => state.todu.toduData);
    if(toduData.length < 2) {
        return  (<div>
            Looding...
        </div>)
    }
    return (
        <>
                       {
            toduData.map(toduD => {
               return ( <div key = {toduD.id}className={s.ConteinerTodo}>
                    <div className={s.ToduText}>
                        <h3>{toduD.text}</h3>
                        <span>{toduD.data}</span>
                                  </div>
                </div>
               )
            })
        }


        </>
    )

}