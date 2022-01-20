import React from 'react'
/* import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Product from '../components/Product' */

const Menu = () => {
    return (
        <div className=' grid justify-center items-center bg-blue-200'>
            <h1 className='mx-auto justify-center text-6xl font-bold mb-5 mt-4 '>Desayunos</h1>
            <div className='   grid grid-cols-3 gap-5 max-w-7xl mx-auto justify-center items-center bg-blue-200'>
            
            <article className='shadow bg-white rounded-lg  text-center'>
            <img className='rounded-t-lg' src='https://mylatinatable.com/wp-content/uploads/2014/03/Open-Saltena-1024x764-1.jpg'></img>
            <section className='p-5 items-center  '>
                <h4 className='text-xl font-bold mb-3'>Salteña</h4>
                <p>La salteña es un bocadillo delicioso para comenzar el dia.</p>
                <button className='bg-green-400 hover:bg-green-100 mt-5 p-2 rounded-md' >Agregar al desayuno</button>
            </section>
        </article>
        <article className='shadow bg-white rounded-lg text-center'>
            <img className='rounded-t-lg' src='https://mylatinatable.com/wp-content/uploads/2014/03/Open-Saltena-1024x764-1.jpg'></img>
            <section className='p-5'>
                <h4 className='text-xl font-bold mb-3'>Salteña</h4>
                <p>La salteña es un bocadillo delicioso para comenzar el dia.</p>
                <button className='bg-green-400 hover:bg-green-100 mt-5 p-2 rounded-md' >Agregar al desayuno</button>
            </section>
        </article>
        <article className='shadow bg-white rounded-lg text-center'>
            <img className='rounded-t-lg' src='https://mylatinatable.com/wp-content/uploads/2014/03/Open-Saltena-1024x764-1.jpg'></img>
            <section className='p-5'>
                <h4 className='text-xl font-bold mb-3'>Salteña</h4>
                <p>La salteña es un bocadillo delicioso para comenzar el dia.</p>
                <button className='bg-green-400 hover:bg-green-100 mt-5 p-2 rounded-md' >Agregar al desayuno</button>
            </section>
        </article>

        </div>
        <h1 className='text-6xl font-bold mb-4 mt-5 mx-auto'>Almuerzos</h1>
            <div className='   grid grid-cols-3 gap-5 max-w-7xl mx-auto justify-center items-center bg-blue-200'>
            <article className='shadow bg-white rounded-lg text-center'>
            <img className='rounded-t-lg' src='https://tipsparatuviaje.com/wp-content/uploads/2019/12/ranga-comida.jpg'></img>
            <section className='p-5'>
                <h4 className='text-xl font-bold mb-3'>Aji de fideo</h4>
                <p>Esta es la sopa que se frecuenta a medio dia.</p>
                <button className='bg-green-400 hover:bg-green-100 mt-5 p-2 rounded-md' >Agregar al desayuno</button>
            </section>
        </article>
        <article className='shadow bg-white rounded-lg text-center'>
            <img className='rounded-t-lg' src='https://tipsparatuviaje.com/wp-content/uploads/2019/12/ranga-comida.jpg'></img>
            <section className='p-5'>
                <h4 className='text-xl font-bold mb-3'>Aji de fideo</h4>
                <p>Esta es la sopa que se frecuenta a medio dia.</p>
                <button className='bg-green-400 hover:bg-green-100 mt-5 p-2 rounded-md' >Agregar al desayuno</button>
            </section>
        </article>
        <article className='shadow bg-white rounded-lg text-center'>
            <img className='rounded-t-lg' src='https://tipsparatuviaje.com/wp-content/uploads/2019/12/ranga-comida.jpg'></img>
            <section className='p-5'>
                <h4 className='text-xl font-bold mb-3'>Aji de fideo</h4>
                <p>Esta es la sopa que se frecuenta a medio dia.</p>
                <button className='bg-green-400 hover:bg-green-100 mt-5 p-2 rounded-md' >Agregar al desayuno</button>
            </section>
        </article>

        </div>
        <h1 className='mx-auto justify-center text-6xl font-bold mb-5 mt-4'>Cenas</h1>
            <div className='   grid grid-cols-3 gap-5 max-w-7xl mx-auto justify-center items-center bg-blue-200'>
            <article className='shadow bg-white rounded-lg text-center'>
            <img className='rounded-t-lg' src='https://www.eabolivia.com/images/stories/a33/silpancho-cochabambino.jpg'></img>
            <section className='p-5'>
                <h4 className='text-xl font-bold mb-3 '>Silpancho</h4>
                <p>El silpancho es muy frecuentado en las tardes de la ciudad de CBBA.</p>
                <button className='bg-green-400 hover:bg-green-100 mt-5 p-2 rounded-md' >Agregar a la cena</button>
            </section>
        </article>
        <article className='shadow bg-white rounded-lg text-center'>
            <img className='rounded-t-lg' src='https://www.eabolivia.com/images/stories/a33/silpancho-cochabambino.jpg'></img>
            <section className='p-5'>
                <h4 className='text-xl font-bold mb-3'>Silpancho</h4>
                <p>El silpancho es muy frecuentado en las tardes de la ciudad de CBBA.</p>
                <button className='bg-green-400 hover:bg-green-100 mt-5 p-2 rounded-md' >Agregar a la cena</button>
            </section>
        </article>
        <article className='shadow bg-white rounded-lg text-center'>
            <img className='rounded-t-lg' src='https://www.eabolivia.com/images/stories/a33/silpancho-cochabambino.jpg'></img>
            <section className='p-5'>
                <h4 className='text-xl font-bold mb-3'>Silpancho</h4>
                <p>El silpancho es muy frecuentado en las tardes de la ciudad de CBBA.</p>
                <button className='bg-green-400 hover:bg-green-100 mt-5 p-2 rounded-md' >Agregar a la cena</button>
            </section>
        </article>

        </div>
        </div>
        
    )
}

export default Menu
