import React from 'react';
import './App.css';
import {Mt2} from "./Mt2-map/Mt2";
import {Mt1} from "./Mt1-components/Mt1";
import {Mt2HomeWork} from "./Mt2-map/Mt2HomeWork";
import {Mt1HomeWork} from "./Mt1-components/Mt1HomeWork";


const Students = [
    {id: 1, name: "Andrey", age: 50},
    {id: 2, name: "Ivan", age: 19},
    {id: 3, name: "Darya", age: 9},
    {id: 4, name: "Marina", age: 36},
    {id: 5, name: "Anisiya", age: 4},
    {id: 6, name: "Timofey", age: 2}
]

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

// topCars.unshift({} as CarType); // Добавление элемента {} в начало массива
//
//
// type CarType = {
//     manufacturer: string,
//     model: string
// }

function App() {
    return (
        <div className="App">
            <hr/>
            <Mt1/>
            <Mt1HomeWork/>
            <hr/>
            <Mt2 students={Students}/>
            <Mt2HomeWork cars={topCars}/>
            <hr/>
            {/*<Mt3/>*/}
            <hr/>
            {/*<Mt4/>*/}
            <hr/>
            {/*<Mt5/>*/}
            <hr/>
        </div>
    );
}

export default App;
