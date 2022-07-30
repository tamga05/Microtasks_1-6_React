import React from 'react';
import {Button} from './components/Button';


export const Mt3 = () => {

    // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello, I\'m Vasya !!!');
    // };
    //
    // const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello, I\'m Ivan !!!');
    // };

    // const foo1 = () => {
    //     console.log('100200');
    // };
    //

    // const foo2 = (number: string) => {
    //     console.log(number);
    // };

    // const onClickHandler =
    //     (name: string) => {
    //         console.log(name)
    //     }

    const Button1Foo = (subscriber: string, age: string, address: string) => {
        console.log(subscriber, age, address);
    };

    const Button2Foo = (subscriber: string) => {
        console.log(subscriber);
    };

    const Button3Foo = () => {
        console.log('I\'m stupid button');
    };


    return (
        <div>
            <h3>Mt3 Lesson (Button)</h3>
            {/*<button>MyYouTubeChannel-1</button>*/}
            {/*<button>MyYouTubeChannel-2</button>*/}
            <Button name={'MyYouTubeChannel-1'} callBack={() => Button1Foo('I\'m Vasya', ', 25', ', live in Moscow')}/>
            <Button name={'MyYouTubeChannel-2'} callBack={() => Button2Foo('I\'m Ivan')}/>
            <Button name={'Stupid button'} callBack={Button3Foo}/>
            <br/>
        </div>
    );
};


{/*<button onClick={() => onClickHandler('Vasya')}>MyYouTubeChannel-1</button>*/
}
{/*<button onClick={() => onClickHandler('Ivan')}>MyYouTubeChannel-2</button>*/
}

{/*<button onClick={(event) => {*/
}
{/*    console.log('Hello!!!');*/
}
{/*}}>MyYouTubeChannel-1*/
}
{/*</button>*/
}
{/*<button onClick={foo1}>1</button>*/
}
{/*В этом случае, на клик кнопки ВЫЗЫВАЕТСЯ функция foo1, которая отконсолит ИМЕННО захардкорженную СТРОКУ 100200 */
}

{/*<button onClick={() => foo2('100200')}>2</button>*/
}
{/*В этом случае, на клик кнопки В ФУНКЦИЮ foo2 ПЕРЕДАЕТСЯ аргументом ЗНАЧЕНИЕ и функция уже отконсолит ЗНАЧЕНИЕ */
}
