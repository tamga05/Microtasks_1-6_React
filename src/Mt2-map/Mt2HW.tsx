import React from "react";
import s from "./Mt2HW.module.css";


type Mt2HWType = {
    cars: Array<CarType>
}

type CarType = {
    manufacturer: string,
    model: string
}


export const Mt2HW = (props: Mt2HWType) => {
    return (
        <div>
            <br/>
            <br/>
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
                    )
                })}
            </table>
        </div>
    )
}

