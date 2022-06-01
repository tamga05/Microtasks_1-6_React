import React from 'react';
import './App.css';
import {Mt2} from "./Mt2-map/Mt2";
import {Mt1} from "./Mt1-components/Mt1";
import {Mt2HW} from "./Mt2-map/Mt2HW";


const Students = [
    {id: 1, name: "Andrey", age: 23},
    {id: 2, name: "Ivan", age: 19},
    {id: 4, name: "Marina", age: 21},
    {id: 5, name: "Olga", age: 25},
    {id: 6, name: "Peter", age: 18}
]

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

// topCars.unshift({} as CarType);
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
            <hr/>
            <Mt2 students={Students}/>
            <Mt2HW cars={topCars}/>
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
