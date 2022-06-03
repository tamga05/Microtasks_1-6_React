import React from 'react';
import s from './Mt5.module.css';
import {FilterType} from './Mt5';


type NewComponentType = {
    arrMoney: Array<objArrMoney>;
    onClickFilterHandler: (value: FilterType) => void
}

type objArrMoney = {
    banknots: string,
    value: number,
    number: string
}


export const MT5HomeWork = (props: NewComponentType) => {
    return (
        <div>
            <ul>
                <h3>Mt5 Home Work (Method filter)</h3>

                {props.arrMoney.map((objMoneyArr, index) => {
                        return (
                            <li key={index}>
                                <span>{objMoneyArr.banknots}</span>
                                <span>{objMoneyArr.value}</span>
                                <span>{objMoneyArr.number}</span>
                            </li>
                        );
                    }
                )
                }

            </ul>

            <button className={s.button} onClick={() => props.onClickFilterHandler('All')}>All</button>
            <button className={s.button} onClick={() => props.onClickFilterHandler('Ruble')}>Ruble</button>
            <button className={s.button} onClick={() => props.onClickFilterHandler('Dollar')}>Dollar</button>
            <br/>
            <br/>
        </div>
    );
};


