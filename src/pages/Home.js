
import Hero from '../components/Hero';
import Content from '../components/Content';
import React, {createContext} from 'react'

const Context = createContext()

export default function Home() {
    return (
        <Context.Provider >
            <Hero/>
            <Content/>
        </Context.Provider>
    )
}
export {Context}