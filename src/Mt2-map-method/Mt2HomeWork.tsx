import React from 'react';
import s from './Mt2.module.css';


type Mt2HWType = {
    cars: CarType[]
}

type CarType = {
    manufacturer: string,
    model: string
}


export const Mt2HomeWork = (props: Mt2HWType) => {
    return (
        <div>
            <h3>Mt2 HomeWork</h3>
            <table className={s.table}>
                {props.cars.map((rowCar, index) => {
                    return (
                        <tbody key={index}>
                        <tr>
                            <td className={s.td}>{++index}</td>
                            <td className={s.td}>{rowCar.manufacturer}</td>
                            <td className={s.td}>{rowCar.model}</td>
                        </tr>
                        </tbody>
                    );
                })}
            </table>
            <br/>
        </div>
    );
};

