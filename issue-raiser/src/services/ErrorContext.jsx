// Error Context Provider
import React, { createContext, useState, useContext } from 'react';

export const ErrorContext = createContext();
export const ToggleErrorContext = createContext();

export function useError() {
    return useContext(ErrorContext);
}

export function useToggleError() {
    return useContext(ToggleErrorContext);
}

export const ErrorContextProvider = (props) => {
    const [error, setError] = useState({
        error: false,
        message: 'asdasd',
    });

    // toggle
    const toggleError = (error) => {
        setError({
            error: error,
            message: error ? error.message : '',
        });
        setTimeout(() => {
                setError({
                    error: false,
                    message: '',
                });
            }, 3000);
    };

    return (
        <ErrorContext.Provider value={error}>
            <ToggleErrorContext.Provider value={toggleError}>
            {props.children}
            </ToggleErrorContext.Provider>
        </ErrorContext.Provider>
    );
};