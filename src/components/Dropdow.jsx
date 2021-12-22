import React from 'react'
import {Link} from 'react-router-dom'
export default function Dropdow({isOpen, toggle}) {
    return (
        <div className={isOpen ? 'grid grid-rows-4 text-center items-center bg-blue-400':'hidden'}
        onClick={toggle}>
                <Link className="p-4" to="/">Inicio</Link>
                <Link className="p-4" to="/menu">Menu</Link>
                <Link className="p-4" to="/about">Acerca de</Link>
                <Link className="p-4" to="/contact">Contactos</Link>
        </div>
    )
}
