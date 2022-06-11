import { useState } from 'react'

// Creamos nuestro custom hook, el mismo nos sirve como contador   
export const useCounter = ( initialState = 10 ) => {

    const [counter, setCounter] = useState( initialState );

    // Para Incrementar
    const increment = () => {
        setCounter( counter + 1 );
    };

    // Para disminuir
    const decrement = () => {
        setCounter( counter - 1 );
    }

    // Para resetear el valoe
    const reset = () => {
        setCounter( initialState );
    }
    

    return {
        counter,
        increment, 
        decrement,
        reset
    }

};

