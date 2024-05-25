import React from 'react'
import './ItemsDetailContainer.css'
import ItemsDetail from '../ItemsDetail/ItemsDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'


const ItemsDetailContainer = () => {

    const [detail, setDetail] = useState()
    const { id } = useParams()
    const idArray= id - 1

    useEffect(() => {
        const fetchData = () => {
            setTimeout(() => {
                fetch(`/data/productos.json`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('error');
                    }
                    return response.json();
                })
                .then(data => {
                    setDetail(data[idArray]);
                })
                .catch(Error => {
                    console.log('No se pueden obtener el producto correctamente', Error);
                });
            }, 1500); // Simulando un retraso de 1,5 segundos
        };

        fetchData()

    }, [])

    console.log(detail);

    if (!detail) {
        // Mostrar un mensaje de carga o un mensaje de error si item es undefined
        return <Loader/>
    }

    return (
        <>
            <ItemsDetail detail={detail}/>
            
        </>
        
    )
}

export default ItemsDetailContainer

