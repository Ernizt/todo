import React from "react";
import { useFormik } from 'formik';
import s from './addtext.module.css';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";


export const AddText: React.FC = ():React.ReactElement => {

    function formatDate(date:any) {
        var year = date.getFullYear().toString();
        var month = (date.getMonth() + 101).toString().substring(1);
        var day = (date.getDate() + 100).toString().substring(1);
        return year + "-" + month + "-" + day;
    }

//Usage example:

      const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            text: '',
        },
        onSubmit: values => {
          const sendTet =  {
                id: parseInt(String(Math.random() * 121231)),
                text: values.text,
                data: formatDate(new Date())
          }
          dispatch({
              type:"ADD/TODU",
              payload: sendTet
          })
        },
    });
    return (

            <div className={s.Container}>
                <Link to='/post'>Post</Link>
                <form onSubmit={formik.handleSubmit}>
                    <div className={s.TextFild}>
                        <input
                            id="text"
                            name="text"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.text}
                        />
                    </div>
                    <div className={s.ButtonStl}>
                        <button type="submit">добавить</button>
                    </div>
                </form>
            </div>


    )
}
