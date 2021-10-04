import React from 'react';
import { useSelector } from 'react-redux';
import { Router, Link } from "react-router-dom";

function RoutingLinks(props) {
    const { page } = useSelector((state) => state.page);

    const setCSS = (thisPage) => {
        return (
            thisPage === page ?
                "hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium" :
                "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        );
    }

    return (
        <>
            <Link
                to="/home"
                className={setCSS('home')}>
                Home
            </Link>

            <Link
                to="/rechnen"
                className={setCSS('rechnen')}
            >
                Rechnen
            </Link>

            <Link
                to="/clonen"
                className={setCSS('clonen')}
            >
                Clonen
            </Link>

            <Link
                to="/doppeln"
                className={setCSS('doppeln')}
            >
                Doppeln
            </Link>

            <Link
                to="/buttons"
                className={setCSS('buttons')}
            >
                Buttons
            </Link>
        </>
    )



}

export default RoutingLinks;