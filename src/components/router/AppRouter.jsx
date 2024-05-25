import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ItemListContainer from '../ItemsListContainer/ItemsListContainer';
import NavBar from '../NavBar/NavBar';
import ItemsDetailContainer from '../ItemsDetailContainer/ItemsDetailContainer';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/categoria/:categoria" element={<ItemListContainer/>} />
                <Route path="/item/:id" element={<ItemsDetailContainer/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter