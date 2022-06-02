import React, {useState} from 'react';
import s from './Mt4.module.css';


export const Mt4 = () => {

// ИНИЦИАЛИЗИРУЮ useState
    let [a, setA] = useState(0)


    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }

    const onClickHandlerDelete = () => {
        setA(0)
    }


    return (
        <div>
            <h3>Mt4 Lesson (useState)</h3>
            <h1>{a}</h1>
            <button className={s.button1} onClick={onClickHandler}>Number</button>
            <button className={s.button2} onClick={onClickHandlerDelete}>0</button>
            <br/>
            <br/>
        </div>
    );
};

