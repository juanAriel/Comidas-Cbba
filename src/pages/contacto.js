import React, {useState, useEffect } from 'react';
import { db } from '../firebase'
const Contacto = () => {

    const [nombre,setName]=useState("");
    const [apellidos,setLastName]=useState("");
    const [gmail,setGmail]=useState("");
    const [celular,setPhone]=useState("");
    const [mensaje,setMessage]=useState("");
    const [loader, setLoader] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setLoader(true);

        db.collection("contacts").add({
            nombre:nombre,
            apellidos:apellidos,
            gmail:gmail,
            celular:celular,
            mensaje:mensaje,
        })
        .then(()=>{
            setLoader(false);
            alert("su mensaje fue enviado con exito");
        })
        .catch((error)=>{
            alert(error.message);
        })
        setName("");
        setLastName("");
        setGmail("");
        setPhone("");
        setMessage("");
        }
    return (
        <div className='h-screen flex justify-center items-center bg-gray-200'>
            <div className='container mx-auto my-20 w-1/3 border border-blue-300 bg-white'>
                <div className='p-5 space-y-5 shadow-xl'>
                    <h4 className='text-center text-3xl'>Contactanos..</h4>
                    <form class="w-full max-w-lg" onSubmit={handleSubmit}>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block  tracking-wide   font-bold mb-2" for="grid-first-name">
                                Nombre
                            </label>
                            <input class="appearance-none block w-full   border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Ingrese su nombre" 
                            value={nombre}
                            onChange={(e)=> setName(e.target.
                            value)}/>
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                            <label class="block  tracking-wide font-bold mb-2" for="grid-last-name">
                                apellidos
                            </label>
                            <input class="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Ingrese sus apellidos"
                            value={apellidos}
                            onChange={(e)=> setLastName(e.target.
                            value)}/>
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                            <label class="block  tracking-wide font-bold mb-2" for="grid-last-name">
                                Gmail
                            </label>
                            <input class="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Ingrese su correo"
                            value={gmail}
                            onChange={(e)=> setGmail(e.target.
                            value)}/>
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                            <label class="block  tracking-wide font-bold mb-2" for="grid-last-name">
                                Celular
                            </label>
                            <input class="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="Ingrese su numero"
                            value={celular}
                            onChange={(e)=> setPhone(e.target.
                            value)}/>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                            <label class="block  tracking-wide  font-bold mb-2" for="grid-password">
                                Mensaje
                            </label>
                            <textarea class="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="Ingrese su comentario aqui"
                            value={mensaje}
                            onChange={(e)=> setMessage(e.target.
                            value)}/>
                            </div>
                        </div>
                       <button  type="submit" class="bg-blue-500    hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Enviar
                    </button>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default Contacto