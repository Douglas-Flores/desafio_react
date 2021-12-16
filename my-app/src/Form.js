import React, { useEffect, useState } from 'react';
import './App.css';

function Form() {
    const [a_num, setAs] = useState(0);
    const [b_num, setBs] = useState(0);
    const [c_num, setCs] = useState(0);
    const [d_num, setDs] = useState(0);
    const [ff_num, setFFs] = useState(0);
    const [result, setResult] = useState(0);
    
    function calcResult(){
        let numerador = a_num + b_num + c_num + d_num + ff_num;
        let denominador = ff_num + (1/3)*d_num + (1/6)*c_num + (1/8)*b_num + (1/10)*a_num;
        setResult(numerador / denominador);
    }

    useEffect(() => {calcResult();}, [a_num]);
    useEffect(() => {calcResult();}, [b_num]);
    useEffect(() => {calcResult();}, [c_num]);
    useEffect(() => {calcResult();}, [d_num]);
    useEffect(() => {calcResult();}, [ff_num]);

    function handleChange(event){
        let id = event.target.id;
        let value = event.target.value;

        if (parseInt(value) === NaN) {value = 0}
        if (value === '') {value = 0}
        if (id == 'A') {setAs(parseInt(value))}
        if (id == 'B') {setBs(parseInt(value))}
        if (id == 'C') {setCs(parseInt(value))}
        if (id == 'D') {setDs(parseInt(value))}
        if (id == 'FF') {setFFs(parseInt(value))}

    }
  
    return (
      <div className="Form">
        <div>
            <label>A:</label>
            <input type="number" name="A" id="A" onChange={e => handleChange(e)}></input>
        </div>
        <div>
            <label>B:</label>
            <input type="number" name="B" id="B" onChange={e => handleChange(e)}></input>
        </div>
        <div>
            <label>C:</label>
            <input type="number" name="C" id="C" onChange={e => handleChange(e)}></input>
        </div>
        <div>
            <label>D:</label>
            <input type="number" name="D" id="D" onChange={e => handleChange(e)}></input>
        </div>
        <div>
            <label>FF:</label>
            <input type="number" name="FF" id="FF" onChange={e => handleChange(e)}></input>
        </div>
        <div>{a_num}A + {b_num}B + {c_num}C + {d_num}D + {ff_num}FF = {result}</div>
      </div>
    );
}

export default Form;
