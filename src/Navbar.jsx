import React from 'react'
import search from './assets/search.svg'

function Navbar() {
    return (
        <div className='bg-[#19398A]  '  >
            <header class="text-white body-font">
                <div class="container mx-auto flex flex-wrap p-4  flex-col md:flex-row items-center">
                    <div class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0  ">
                        <img className='pl-20  h-10 ' src="https://www.iplt20.com/assets/images/ipl-logo-new-old.png" alt="" />
                        
                    </div>
                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center gap-8 text-base justify-center font-serif cursor-pointer ">
                        <a class="mr-5">MATCHES</a>
                        <a class="mr-5 ">VIDEOS</a>
                        <a class="mr-5 ">STATS</a>
                        <a class="mr-5 ">POINT TABLE</a>
                        <a class="mr-5">TEAMS</a>
                        <a class="mr-5 ">NEWS</a>
                        <a class="mr-5 ">MORE</a>
                    </nav>
                    <button class="inline-flex items-center  border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
                        <img className='h-8'  src={search} alt="" />
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Navbar
