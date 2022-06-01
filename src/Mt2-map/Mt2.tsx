import React from 'react';


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
        <ul>
            {props.students.map((objectFromStudentArray, index) => {
                return (
                    <li key={objectFromStudentArray.id}>
                        <span> {objectFromStudentArray.name}</span>
                        <span>: {objectFromStudentArray.age} years old</span>
                    </li>
                )
            })}
        </ul>
    );
}

