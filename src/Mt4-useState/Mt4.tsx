import React, {useState} from 'react';


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
            <h3>Mt4 Lesson</h3>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>Number</button>
            <button onClick={onClickHandlerDelete}>0</button>
            <br/>
        </div>
    );
};

