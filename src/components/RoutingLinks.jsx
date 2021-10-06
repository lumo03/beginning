import React from 'react';
import { useSelector } from 'react-redux';
import { Router, Link } from "react-router-dom";
import { pages } from '../data.js';

function RoutingLinks(props) {
    const name = useSelector((state) => state.page.name);

    const setCSS = (thisPage) => {
        return (
            thisPage === name ?
                "hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium" :
                "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        );
    }

    return (
        <>
            {pages.map(({url, name, title}) => (
                <Link key={name} to={url} className={setCSS(name)}>{title}</Link>
            ))}
        </>
    )



}

export default RoutingLinks;