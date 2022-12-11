import React from "react";
import { useError } from "../services/ErrorContext";

export default function ErrorPopup() {

    const error = useError();

    const errorStyle = {
        left : '50%',
        transform : 'translateX(-50%)',
        'top' : error.error ? '0' : '-13rem',
    };
    return (
        <div className="absolute mt-5 rounded-lg bg-red-500 text-center top-0 z-50 p-3 ease-in-out duration-300"  style={errorStyle}  >
            <p className="text-white">
                {error.message}
            </p>
        </div>
    );
}

