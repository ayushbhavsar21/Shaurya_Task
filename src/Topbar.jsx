import React from 'react'
import twitter from './assets/twitter.png'
import insta from './assets/insta.png'
import facebook from './assets/facebook.png'
import bcci from './assets/bcci.svg'

function Topbar() {
    return (
        <header class="text-gray-400 font-serif font-semibold bg-[#061e59] body-font">
            <div class="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
                <a class=" pl-20 flex title-font font-medium items-center text-gray-200 mb-4 md:mb-0">
                  <img className='h-10 py-2' src={bcci} alt="" />  
                  <div className='pl-2 ' > BCCI.TV </div>
                  <img className=' ml-2 h-5'  src="https://www.iplt20.com/assets/images/womens-premier-league-logo.svg" alt="" />
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center mr-[5vw] ">
                    <div class="mr-5 ">Follow Us</div>
                    <a href="" class=" hover:text-gray-900">
                         <img className='h-6 ' src={twitter} alt="" /> 
                    </a>
                    <a href="" class=" hover:text-gray-900">
                         <img className='h-6 ' src={insta} alt="" /> 
                    </a>
                    <a href="" class="  hover:text-gray-900">
                         <img className='h-6 ' src={facebook} alt="" /> 
                    </a>
                    
                </nav>
                
            </div>
        </header>
    )
}

export default Topbar
