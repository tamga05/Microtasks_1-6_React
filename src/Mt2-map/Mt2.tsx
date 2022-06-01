import React from 'react';
import s from "./Mt2HomeWork.module.css";


type Mt2Type = {
    students: Array<StudentType>
}

type StudentType = {
    id: number
    name: string
    age: number
}


export const Mt2 = (props: Mt2Type) => {
    return (
        <div>
            <h3>Mt2 Lesson</h3>
            <ul className={s.list}>
                {props.students.map((objectFromStudentArray, index) => {
                    return (
                        <li key={objectFromStudentArray.id}>
                            <span> {objectFromStudentArray.name}</span>
                            <span>: {objectFromStudentArray.age} years old</span>
                        </li>
                    )
                })}
            </ul>
            <br/>
        </div>
    );
}

