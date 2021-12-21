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
                  <h2 className="text-2xl-mb-2">Api con pastel</h2>
                  <p className="mb-2 text-center">Desayuno tradicional de la ciudad de Cochabamba</p>
                  <span>10bs</span>
              </div>
          </div>
          <div className="menu-card">
              <img src={Almuerzo} alt="" className="h-48 rounded mb-10 shadow md:h-full" />
              <div className="flex flex-col justify-center items-center">
                  <h2 className="text-2xl-mb-2">Sopa de mani</h2>
                  <p className="mb-2 text-center">Sopa tradicional de la ciudad de Cochabamba con ingedientes base como mani, fideo y papas fritas</p>
                  <span>12bs</span>
              </div>
          </div>
          <div className="menu-card">
              <img src={Cena} alt="" className="h-48 rounded mb-10 shadow md:h-full" />
              <div className="flex flex-col justify-center items-center">
                  <h2 className="text-2xl-mb-2">Silpancho</h2>
                  <p className="mb-2 text-center">Plato que se frecuenta en de Cochabamba</p>
                  <span>15bs</span>
              </div>
          </div>  
        </>
    )
}