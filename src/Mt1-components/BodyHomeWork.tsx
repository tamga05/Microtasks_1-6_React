import React from "react";
import s from "./Mt1.module.css";


type BodyHomeWorkType = {
    titleForBody: string
}


export const BodyHomeWork = (props: BodyHomeWorkType) => {
    return (
        <div className={s.titleHomeWork}>Body</div>
    )
}
