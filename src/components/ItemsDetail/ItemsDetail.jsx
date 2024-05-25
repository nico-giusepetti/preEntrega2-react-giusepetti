import React from 'react'
import './ItemsDetail.css'
import ItemCount from '../Count/ItemCount'

const ItemsDetail = ({detail}) => {
    return (
        <div key={detail.id} className='container-detail'>
            <img src={detail.imagen} alt="img del producto seleccionado" className="product-image" />
            <div className="product-details">
                <h3>{detail.nombre}</h3>
                <p>{detail.descripcion}</p>
                <p>Precio unitario: ${detail.precio}</p>
                <p>Marca: {detail.marca}</p>
                <p>Contiene: {detail.contenido}</p>
                <p>Tipo: {detail.categoria}</p>
                <p>Unidades: <ItemCount stock={detail.stock} /></p>
            </div>
            
        </div>
    )
}

export default ItemsDetail