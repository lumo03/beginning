import React from 'react';
import Page from '../components/Page';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { useState } from 'react';

function Clonen() {

    const [zeichen, setZeichen] = useState('');
    const [ergebnis, setErgebnis] = useState([1, 2]);
    const [display, setDisplay] = useState(ergebnis.map(e => (
        <div key={e}>{e}</div>
    )));


    const appendErgebnis = (append) => {
        setErgebnis([...ergebnis, append]);
    }
    const handleChange = event => {
        setZeichen(event.target.value);
    };

    const handleClick = () => {
        appendErgebnis(zeichen)
    };

    return (
        <Page title="Clonen" type="clonen">

            <InputField placeholder="Text zum Clonen..." value={zeichen} onChange={handleChange} />
            <Button text="Anhängen" />

            <div>
                {display}
            </div>

        </Page>
    )
}

export default Clonen;