import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    //const key = useId();

    const [state, setState] = useState(() => {
        const persistedStateAsString = localStorage.getItem(key);

        if (persistedStateAsString) {
            const persistedState = JSON.parse(persistedStateAsString);

            return persistedState;
        }

        return initialValue;
    });

    const changeStateOfLocalStorage = (value) => {
        setState(value);

        localStorage.setItem(key, JSON.stringify(value));

    }; 

    return [
        state,
        changeStateOfLocalStorage,
    ];
};