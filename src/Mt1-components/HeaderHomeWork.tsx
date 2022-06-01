import React from "react";
import s from "./Mt1.module.css";


type HeaderHomeWorkType = {
    titleForHeader: string
}


export const HeaderHomeWork = (props:HeaderHomeWorkType) => {
    return (
        <div className={s.titleHomeWork}>Header</div>
    )
}
