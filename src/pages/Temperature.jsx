import React from 'react';
import { useState } from 'react';
import Page from '../components/Page';
import Button from '../components/Button';
import InputField from '../components/InputField';


function Temperature() {

    const [celsius, setCelsius] = useState();
    const [fahrenheit, setFahrenheit] = useState();

    const handleChange = (rechts, wert) => {
        if (rechts !== true) {
            setCelsius(wert);
            setFahrenheit(((wert * 9/5) + 32).toFixed(2));
        } else {
            setFahrenheit(wert);
            setCelsius(((wert - 32) * 5/9).toFixed(2));
        }
    };

    return (
        <Page title="Temperature" type="temperature">
            <div className="celsius">
                <InputField placeholder="Celsius" value={celsius} onChange={(event) => handleChange(false, event.target.value)} />
            <span className="m-2">in ° C</span>
            </div>
            
            <div className="fahrenheit">
            <InputField placeholder="Fahrenheit" value={fahrenheit} onChange={(event) => handleChange(true, event.target.value)} />
            <span className="m-2">in ° F</span>
            </div>
        </Page>
    )
}

export default Temperature;