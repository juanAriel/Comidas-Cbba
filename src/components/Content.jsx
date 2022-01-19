import React from 'react'
import Desayuno from '../images/desayuno.jpeg'
import Almuerzo from '../images/almuerzo.jpg'
import Cena from '../images/cena.jpg'

export default function Content() {
    return (
        <>
          <div className="menu-card">
              <img src={Desayuno} alt="" className="h-48 rounded mb-10 shadow md:h-full" />
              <div className="flex flex-col justify-center items-center">
                  <h2 className="text-2xl-mb-2 font-black uppercase">Api con pastel</h2>
                  <p className="mb-2 text-center font-black">Desayuno tradicional de la ciudad de Cochabamba</p>
                  <span className='text-3xl font-black'>10bs</span>
              </div>
          </div>
          <div className="menu-card">
              <img src={Almuerzo} alt="" className="h-48 rounded mb-10 shadow md:h-full" />
              <div className="flex flex-col justify-center items-center">
                  <h2 className="text-2xl-mb-2 font-black uppercase">Sopa de mani</h2>
                  <p className="mb-2 text-center font-black">Sopa tradicional de la ciudad de Cochabamba con ingedientes base como mani, fideo y papas fritas</p>
                  <span className='text-3xl font-black'>12bs</span>
              </div>
          </div>
          <div className="menu-card">
              <img src={Cena} alt="" className="h-48 rounded mb-10 shadow md:h-full" />
              <div className="flex flex-col justify-center items-center">
                  <h2 className="text-2xl-mb-2 font-black uppercase">Silpancho</h2>
                  <p className="mb-2 text-center font-black">Plato que se frecuenta en de Cochabamba</p>
                  <span className='text-3xl font-black'>15bs</span>
              </div>
          </div>  
        </>
    )
}