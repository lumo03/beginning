import React from 'react';
import Page from '../components/Page';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { useState } from 'react';

function Clonen() {

    const [result, setResult] = useState([])
    const [value, setValue] = useState('');

    const appendToResult = () => {
        setResult([
            ...result,
            {
                id: result.length,
                value: value
            }
        ])
    }

    return (
        <Page title="Clonen" type="clonen">
            <InputField placeholder="Text zum Clonen..." value={value} onChange={(event) => setValue(event.target.value)} />
            <Button text="Anhängen" onClick={appendToResult} />
            <ul>
                {result.map(result => (
                    <li key={result.id}>{result.value}</li>
                ))}
            </ul>
        </Page>
    )
}

export default Clonen;