import React, { useState } from 'react'
import Picked from '../components/Picked'

export default function Games() {
    const [rules,setrules] = useState(false);
    const [score, setScore] = useState(0);
    
    function handleRules () {
        setrules(!rules)
    }
    function handleClose () {
        setrules(false)
    }
    return (
        <div className='h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1f3756] to-[#141539] overflow-hidden'>
            <div className='pt-4'>
                <section className='w-[50%] uppercase mx-auto border flex justify-between p-5 rounded-md'>
                    <div>
                    <img src={require("../assets/logo-bonus.svg").default} alt="logo"/>
                    
                    </div>
                    <div className='bg-white px-10 pt-2 rounded-xl tracking-wider text-lg text-center'>
                        <p className='text-score'>Score</p>
                        <p className='text-5xl text-gray-500'>{score}</p>
                    </div>
                </section>

                <section className=''>
                    <Picked score={score} setScore={setScore}/>
                    {rules ? (
                        <>
                            <div className='bg-black opacity-60 absolute top-0 left-0 w-full h-full z-30'></div>
                            <div className='absolute top-[9.5rem] rounded-md left-[36%] bg-white px-10 pb-16 z-40'>
                                <div className='flex justify-between items-center py-7'>
                                    <h1 className='text-3xl font-bold'>RULES</h1>
                                    <img 
                                        src={require('../assets/icon-close.svg').default} 
                                        alt="close" 
                                        onClick={handleClose}
                                        className='cursor-pointer'
                                    />
                                </div>
                                <img src={require('../assets/image-rules.svg').default} alt="rules" />
                            </div>
                        </>
                    ) : (
                    <div className='w-[5rem] right-10 absolute bottom-8'>
                    <p 
                        className='text-white border py-1 mt-16 text-center cursor-pointer'
                        onClick={handleRules}
                    >
                        Rules
                    </p>
                    
                    </div>
                )}
                </section>
                
                
                
            </div>
        </div>
    )
}