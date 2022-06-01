import React from "react";
import s from "./Mt1.module.css";


type FooterHomeWorkType = {
    titleForFooter: string
}


export const FooterHomeWork = (props: FooterHomeWorkType) => {
    return (
        <div className={s.titleHomeWork}>Footer</div>
    )
}
