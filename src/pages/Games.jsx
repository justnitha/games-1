import React, { useState } from 'react'
import Picked from '../components/Picked'

export default function Games() {
    const [rules,setrules] = useState(false);
    const [score, setScore] = useState(0);
    const [selectIcon, setSelectIcon] = useState(null);
    
    function handleRules () {
        setrules(!rules)
    }
    function handleClose () {
        setrules(false)
    }
    return (
        <div className='respon iphone6:h-[120vh] h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1f3756] to-[#141539] overflow-hidden'>
            <div className='pt-8 lg:pt-4'>
                <section className='w-[80%] lg:w-[50%] uppercase mx-auto border flex justify-between p-5 rounded-md'>
                    <div>
                    <img src={require("../assets/logo-bonus.svg").default} alt="logo"/>
                    
                    </div>
                    <div className='bg-white px-7 lg:px-10 pt-2 rounded-xl tracking-wider lg:text-lg text-center'>
                        <p className='text-score'>Score</p>
                        <p className='text-5xl text-gray-500'>{score}</p>
                    </div>
                </section>

                <section className=''>
                    <Picked 
                        score={score} 
                        setScore={setScore}
                        selectIcon={selectIcon}
                        setSelectIcon={setSelectIcon}
                    />
                    {rules ? (
                        <>
                            <div className='bg-black opacity-60 absolute top-0 left-0 w-full h-full z-30'></div>
                            <div className='w-full lg:w-[30%] lg:h-[29rem] 2xl:h-[45rem] h-full iphone6:h-[120vh] absolute top-0 lg:top-[9.5rem] lg:rounded-md lg:left-[35%] bg-white px-10 pb-16 z-40'>
                                <div className='lg:flex justify-between items-center py-7'>
                                    <h1 className='text-3xl font-bold text-center iphone6:mt-[5%] mt-[50%] lg:mt-0'>RULES</h1>
                                    <img 
                                        src={require('../assets/icon-close.svg').default} 
                                        alt="close" 
                                        onClick={handleClose}
                                        className='cursor-pointer lg:block hidden'
                                    />
                                </div>
                                <img 
                                    src={require('../assets/image-rules-bonus.svg').default} 
                                    alt="rules"
                                    className='w-full mt-10 lg:mt-0 2xl:block' 
                                />
                                 <img 
                                    src={require('../assets/icon-close.svg').default} 
                                    alt="close" 
                                    onClick={handleClose}
                                    className='cursor-pointer text-center absolute iphone6:bottom-44 close left-[49.4%] lg:hidden '
                                />
                            </div>
                        </>
                    ) : (
                        <div className={selectIcon ? 'hidden' : 'w-[8rem] lg:w-[5rem] mx-auto right-10 lg:absolute bottom-8 mt-10 iphone6:mt-36' }>
                        <p 
                            className='text-white tracking-wider rounded-lg border text-2xl lg:text-lg py-1 mt-32 iphone6:mt-0 lg:mt-16 text-center cursor-pointer'
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