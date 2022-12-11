import React from "react";
import { useError } from "../services/ErrorContext";

export default function ErrorPopup() {

    const error = useError();
    return (
        <div className="absolute left-1/3 mt-5 rounded bg-red-500 text-center top-0 z-50 p-5 ease-in-out duration-300"  style={ { 'top' : error.error ? '0' : '-13rem' }}  >
            <p className="text-white">
                {error.message}
            </p>
        </div>
    );
}

