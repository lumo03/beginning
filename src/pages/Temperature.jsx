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
            setFahrenheit(((wert * 9 / 5) + 32).toFixed(2));
        } else {
            setFahrenheit(wert);
            setCelsius(((wert - 32) * 5 / 9).toFixed(2));
        }
    };

    const setBgColor = () => {
        if (celsius < 0) {

        }
        switch (true) {
            case celsius < 0:
                return "bg-blue-600";
                break;
            case celsius < 24:
                return "bg-blue-400";
                break;
            case celsius > 48:
                return "bg-red-600";
                break;
            case celsius > 24:
                return "bg-red-400";
                break;
            default:
                return "bg-white";
        }
    }

    return (
        <Page title="Temperature" type="temperature">
            <div className="celsius">
                <InputField placeholder="Celsius" value={celsius} onChange={(event) => handleChange(false, event.target.value)} bgColor={setBgColor()} />
                <span className="m-2">in ° C</span>
            </div>

            <div className="fahrenheit">
                <InputField placeholder="Fahrenheit" value={fahrenheit} onChange={(event) => handleChange(true, event.target.value)} bgColor={setBgColor()} />
                <span className="m-2">in ° F</span>
            </div>
        </Page>
    )
}

export default Temperature;