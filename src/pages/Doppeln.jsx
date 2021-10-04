import React from 'react';
import { useState } from 'react';
import Page from '../components/Page';
import Button from '../components/Button';
import InputField from '../components/InputField';

function Doppeln() {

    const [zeichen, setZeichen] = useState('');
    const [ergebnis, setErgebnis] = useState('');
    const [bgColor, setBgColor] = useState('');


    const handleChange = event => {
        setZeichen(event.target.value);
    };

    const handleClick = () => {
        setErgebnis(zeichen + zeichen);
        setBgColor(zeichen);
    };

    return (
        <Page title="Doppeln" type="doppeln">
            <div className="my-auto">
                <InputField placeholder="Text zum Doppeln..." value={zeichen} onChange={handleChange} />
                <Button text="Doppeln" onClick={handleClick} />
                <p style={{ backgroundColor: bgColor }} className="w-60">{ergebnis}</p>
            </div>
        </Page>
    )
}

export default Doppeln;