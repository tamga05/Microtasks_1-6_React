import React, {useState} from 'react';
import s from './Mt6.module.css';
import {FullInput} from './components/FullInput';


function Mt6() { // В видео (микротаски input) эта компонента называется App !!!

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ]);

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message]);
    };


    return (
        <div className={s.inputField}>
            <h3>Mt6 Lesson (Input)</h3>
            {/*<div>*/}
            {/*    <input/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}

            <FullInput addMessage={addMessage}/>

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                );
            })
            }
        </div>
    );
}

export default Mt6;


// export function Example() {

//     // Объявление новой переменной состояния «count»
//     const [count, setCount] = useState(0);
//
//
//     return (
//         <div>
//             <p>Вы кликнули {count} раз(а)</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Нажми на меня
//             </button>
//             <br/>
//             <br/>
//             <hr/>
//         </div>
//     );
// }
