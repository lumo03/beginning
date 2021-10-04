import React from 'react';
import Page from '../components/Page';
import Button from '../components/Button';

function Buttons() {
    let buttons = [];

    /* for (let i = 0; i < buttons.length; i++) {
        buttons[i] = <Button text="Click me!" />;
    } */

    for (let i = 0; i < 48; i++) {
        buttons[i] = <Button text="Click me!" />;
    }

    function randomNum(x, y) {
        if (isNaN(x)) {
            x = 1;
        }
        if (isNaN(y)) {
            y = 1;
        }

        return Math.floor(Math.random() * y + x);
    }

    const alertMessage = () => {
        alert("You've found me!");
    }

    buttons[randomNum(0, buttons.length)] = <Button text="Click me!" onClick={alertMessage} />;


    return (
        <Page title="Buttons" type="buttons">
            <p className="text-xl"> Find the button:</p>
            <ul className="">
                {buttons.map(button => (
                    <li className="inline-block">{button}</li>
                ))}
            </ul>
        </Page>
    )
}

export default Buttons;