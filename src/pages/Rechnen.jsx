import React from 'react';
import { useState } from 'react';
import Page from '../components/Page';
import Button from '../components/Button';
import InputField from '../components/InputField';


function Rechnen() {
    const [x, setX] = useState('');
    const [y, setY] = useState('');
    const [sum, setSum] = useState('');

    const handleChangeX = (event) => {
        const temp = event.target.value;
        console.log(event);
        setX(temp)

    }

    const handleChangeY = (event) => {
        const temp = event.target.value;
        console.log(event);
        setY(temp)

    }


    const handleClick = () => {
        const temp = +x + +y;
        setSum(temp);
    }

    return (
        <Page title="Rechnen" type="rechnen">
            <InputField placeholder="1. Zahl" value={x} onChange={handleChangeX} />
            <InputField placeholder="2. Zahl" value={y} onChange={handleChangeY} />
            <Button text="Addiere" onClick={handleClick} />
            <div>Summe: {sum}</div>
        </Page>
    )
}

export default Rechnen;