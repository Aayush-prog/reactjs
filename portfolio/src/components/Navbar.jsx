import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar(){
    const hoverStyle={
        backgroundColor: '#0F1B61',
        color: '#F4F9FC',
        borderRadius: '15px',
        transition:'duration:0.5s'   
    }
    return(
        <nav 
        className="text-xl absolute w-full px-10 pt-5 flex justify-between items-center"
        >
            <h1 className="text-3xl font-bold" >Bombhu</h1>
            <ul className="flex justify-start items-center m-0 p-0 list-none">
                <motion.li whileHover={hoverStyle}><a className="m-0 text-decoration-none px-6 py-2 rounded-full" href="">Home</a></motion.li>
                <motion.li whileHover={hoverStyle}><a className="m-0 text-decoration-none px-6 py-2 rounded-full" href="">About</a></motion.li>
                <motion.li whileHover={hoverStyle}><a className="m-0 text-decoration-none px-6 py-2 rounded-full" href="">Contact</a></motion.li>
            </ul>
        </nav>
    )
}