import React, {useState} from 'react';
import s from './Mt5.module.css';
import {MT5HomeWork} from './MT5HomeWork';


export type FilterType = 'All' | 'Dollar' | 'Ruble';


export const Mt5 = () => {

    const [money, setMoney] = useState([
        {banknots: 'Dollar', value: 100, number: ' a1234567890'},
        {banknots: 'Dollar', value: 50, number: ' z1234567890'},
        {banknots: 'Ruble', value: 100, number: ' w1234567890'},
        {banknots: 'Dollar', value: 100, number: ' e1234567890'},
        {banknots: 'Dollar', value: 50, number: ' c1234567890'},
        {banknots: 'Ruble', value: 100, number: ' r1234567890'},
        {banknots: 'Dollar', value: 50, number: ' x1234567890'},
        {banknots: 'Ruble', value: 50, number: ' v1234567890'},
    ]);

    const [filter, setFilter] = useState<FilterType>('All');

    let currentMoney = money;


    if (filter === 'Dollar') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Dollar');
    }

    if (filter === 'Ruble') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Ruble');
    }


    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton);
    };


    return (
        <div>
            <ul>
                <h3>Mt5 Lesson (Method filter)</h3>
                {currentMoney.map((objMoneyArr, index) => {
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
            <button className={s.button} onClick={() => onClickFilterHandler('All')}>All</button>
            <button className={s.button} onClick={() => onClickFilterHandler('Ruble')}>Ruble</button>
            <button className={s.button} onClick={() => onClickFilterHandler('Dollar')}>Dollar</button>
            <br/>

            {/*MT5HomeWork это отдедьная компонента, в которую передаются Отфильтрованные объекты из массива и функция onClickFilterHandler*/}
            <MT5HomeWork arrMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>

        </div>
    );
};

