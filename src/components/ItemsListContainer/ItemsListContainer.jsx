import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ItemsListContainer.css'
import ItemsList from '../ItemsList/ItemsList'
import Loader from '../Loader/Loader'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const { categoria } = useParams()

    useEffect(() => {
        const fetchData = () => {
            setTimeout(() => {
                fetch('/data/productos.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('error');
                    }
                    return response.json();
                })
                .then(data => {
                    setProductos(data);
                })
                .catch(Error => {
                    console.log('No se pueden obtener los productos correctamente', Error);
                });
            }, 1500); // Simulando un retraso de 1,5 segundos
        };
        
        fetchData()

    }, [])
    
    // Filtrar productos por categoría cuando la categoría cambia
    const productosFiltrados = categoria ? productos.filter(producto => producto.categoria === categoria) : productos;
    


    return (
        <div className='seccion-listContainer'>

            {productos.length == 0 ?

                <Loader/>

                :

                <ItemsList productos={productosFiltrados} />
            }
        </div>
    )
}

export default ItemListContainer