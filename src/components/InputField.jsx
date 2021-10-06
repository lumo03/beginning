import React from 'react';

function InputField(props) {
    let bgColor = props.bgColor ? props.bgColor : "bg-white";
    let styling = "m-1 w-60 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"+" "+bgColor;
    return (
        <input type={props.type} placeholder={props.placeholder} onChange={props.onChange} value={props.value} className={styling} />
    )
}

export default InputField;