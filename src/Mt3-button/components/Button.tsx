import React from 'react';
import s from '../Mt3.module.css';


type ButtonType = {
    name: string
    callBack: () => void
}


export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <div className={s.button}>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    )
}
