import { db } from "..";
import {getDoc,setDoc,doc} from 'firebase/firestore'

export async function saveCart(id,productos){
    const documento = doc(db,"carritos",id)
    const carrito = await setDoc(documento,{productos})
    return carrito
}
export async function getCart(id){
    const documento=doc(db,"carritos",id)
    const snapshot = await getDoc(documento)
    if(snapshot.exists()){
         return snapshot.data()
    }else{
        console.log("no se encontro el desayuno");
    }
   
}