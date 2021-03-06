import { initializeApp } from 'firebase/app';
import axios from 'axios';
import { getFirestore } from 'firebase/firestore';
import credentials from './credentials';

const app = initializeApp(credentials);

export const db = getFirestore(app)

const instance = axios.create({
    baseURL: 'http://localhost:3000'
})

const get = async (url)=>{
    return await instance.get(url,{
        withCredentials:true
    })
}

export {get}