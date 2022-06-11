import { useState, useEffect, useRef } from 'react'

// Construimos un hook que nos permite consumir una api
export const useFetch = (url) => {

    // Utilizamos el hook useRef para resolver el error producido cuando llamamos a la funcion y aun no se ha completado el tiempo del timeout

    const isMounted = useRef(true);

    // Establecemos el estado inicial de la consulta
    const [state, setState] = useState({ data: null, loading: true, error: null })

    useEffect(() =>{
        return () => {
            isMounted.current = false;

        }
    }, [])
    

    useEffect(() => {
        
        // Cuando este cargando la data que regrese al estado original en este caso
        setState( {data:null, loading: true, error: null})

        // De esta manera utilizamos una url para consumir una api
        fetch(url)

            .then(resp => resp.json())
            .then(data => {

                    if ( isMounted.current) {
                        setState({
                            loading: false,
                            error: null,
                            data
                        })
                    }
                
            })
            .catch( () => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la informacion'
                })
            })
    }, [url])

    return state;
}
