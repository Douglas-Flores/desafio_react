import React, { useEffect, useState } from 'react';
import { TextField } from '@material-ui/core';
import logo from './ufrgslogo.webp';
import './Form.css'

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
        if (id === 'A') {setAs(parseInt(value))}
        if (id === 'B') {setBs(parseInt(value))}
        if (id === 'C') {setCs(parseInt(value))}
        if (id === 'D') {setDs(parseInt(value))}
        if (id === 'FF') {setFFs(parseInt(value))}

    }
  
    return (
      <div className="Form">
        <div className="FormItem">
            <img src={logo} className="Ufrgs-logo" alt="UFRGS"></img>
        </div>
        <div className="FormItem" id='calculator-tittle'>
            Calculadora de i3:
        </div>
        <div className="FormItem">
            <TextField className="field" id="A" label="Número de As" variant="outlined" onChange={e => handleChange(e)} />
        </div>
        <div className="FormItem">
            <TextField className="field" id="B" label="Número de Bs" variant="outlined" onChange={e => handleChange(e)} />
        </div>
        <div className="FormItem">
            <TextField className="field" id="C" label="Número de Cs" variant="outlined" onChange={e => handleChange(e)} />
        </div>
        <div className="FormItem">
            <TextField className="field" id="D" label="Número de Ds" variant="outlined" onChange={e => handleChange(e)} />
        </div>
        <div className="FormItem">
            <TextField className="field" id="FF" label="Número de FFs" variant="outlined" onChange={e => handleChange(e)} />
        </div>
        <div className='FormItem' id='result'>
            {a_num} A + {b_num} B + {c_num} C + {d_num} D + {ff_num} FF = {result.toFixed(2)}
        </div>
      </div>
    );
}

export default Form;
