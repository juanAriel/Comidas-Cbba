import React from 'react'
export default function about() {
    const img = require('../images/aboust-us.png');
    return (
        <div className='h-screen flex justify-center items-center bg-yellow-300'>
                <div className='grid lg:grid-cols-2 py-20 max-w-7xl mx-auto'>
                    <div className="py-10 px-10">
                        <h1 className="text-6xl font-black">Acerca de</h1>
                        <p className="py-10 text-base">Estudié Ingenieria de Sistemas con poca experiencia en el mundo del desarrollo me anime a tomar un BootCamp en Tzuzul y con esta pequeña App trato de demostrar todo lo apredido.
                        Me gusta incurcionar en diferentes sectores relacionado con el desarrollo de software y me encantan los nuevos retos.
                        si te interesaria conocer mas sobre mi, el desarrollo y/o implementacion de esta App no dudes en dejarnos tu mensaje en el apartado de.</p>
                          
                   <a href='/contacto' class="bg-blue-500    hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl">Contactos</a> 
                    </div>
                    <div className="hero-image-container w-4/6 mx-auto" >
                            <img className='bg-transparent rounded-full' src={img}></img>   
                    </div>
                </div>
        </div>
    )
}
