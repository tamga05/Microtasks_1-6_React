import React, {useState} from 'react';
import s from './Mt6.module.css';
import {FullInput} from './components/FullInput';
import {Input} from './components/Input';
import {Button} from './components/Button';


function Mt6() { // В видео (микротаски input) эта компонента называется App !!!

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ]);

    let [title, setTitle] = useState('');

    // console.log(title);

    const addMessage = (title: string) => {

        let newMessage = {message: title};
        
        setMessage([newMessage, ...message]);
    };

    const callBackButtonHandler = () => {
        addMessage(title);
        setTitle('');
    };


    return (
        <div className={s.inputField}>
            <h3>Mt6 Lesson (Input)</h3>

            {/* !!!!! 1. Раскомментировать находящуюся НИЖЕ компоненту FullInput, если надо продемонстрировать работу универсального инпута в режиме FullInput (1-я часть видоса (ДО 39 мин 20 сек)) !!!!! */}

            {/*<FullInput addMessage={addMessage}/>*/}

            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>

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
