import React from 'react';
import { connect } from 'react-redux';
import { Router, Link } from "react-router-dom";

function RoutingLinks(props) {
    let page = props.page;
    if (page === 'rechnen') {
        return (
            <>
                <Link
                    to="/home"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                </Link>
    
                <Link
                    to="/rechnen"
                    className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    Rechnen
                </Link>
    
                <Link
                    to="/clonen"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    Clonen
                </Link>
    
                <Link
                    to="/doppeln"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    Doppeln
                </Link>
    
                <Link
                    to="/buttons"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    Buttons
                </Link>
            </>
        )
    } else if (page === 'clonen') {
        return (
            <>
                <Link
                    to="/home"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                </Link>
    
                <Link
                    to="/rechnen"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    Rechnen
                </Link>
    
                <Link
                    to="/clonen"
                    className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    Clonen
                </Link>
    
                <Link
                    to="/doppeln"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    Doppeln
                </Link>
    
                <Link
                    to="/buttons"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    Buttons
                </Link>
            </>
        )
    } else if (page === 'doppeln') {
        return (
            <>
                <Link
                    to="/home"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                </Link>
    
                <Link
                    to="/rechnen"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    Rechnen
                </Link>
    
                <Link
                    to="/clonen"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    Clonen
                </Link>
    
                <Link
                    to="/doppeln"
                    className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    Doppeln
                </Link>
    
                <Link
                    to="/buttons"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    Buttons
                </Link>
            </>
        )
    } else if (page === 'buttons') {
        return (
            <>
                <Link
                    to="/home"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                </Link>
    
                <Link
                    to="/rechnen"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    Rechnen
                </Link>
    
                <Link
                    to="/clonen"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    Clonen
                </Link>
    
                <Link
                    to="/doppeln"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    Doppeln
                </Link>
    
                <Link
                    to="/buttons"
                    className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    Buttons
                </Link>
            </>
        )
    } else {
        return (
            <>
                <Link
                    to="/home"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                </Link>
    
                <Link
                    to="/rechnen"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    Rechnen
                </Link>
    
                <Link
                    to="/clonen"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    Clonen
                </Link>
    
                <Link
                    to="/doppeln"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    Doppeln
                </Link>
    
                <Link
                    to="/buttons"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    Buttons
                </Link>
            </>
        )
    }
    
}

const mapStateToProps = (state) => {
    return { page: state.page };
}

export default connect(mapStateToProps)(RoutingLinks);