import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Logo_Main from '../images/logo-main.svg'
function NavBarComponents() {
const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#f9cc6a") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("7rem") : setnavSize("10rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (


    
    <div>
      <nav 
      
      style={{
        backgroundColor: navColor,
        height: navSize,
        transition: "all 1s"
      }}
      
      class="bg-white px-3 lg:px-40 py-5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
        <div class="container flex flex-wrap items-center justify-start mx-auto">
          <a href="https://flowbite.com/" class="flex items-center">
            <Image className='w-[124px] mr-12' src={Logo_Main} alt="Picture of the author" />
          </a>
          
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm 
            md:font-medium md:border-0">
              <li className='ml-3'>
                <a href="#" class="text-[17px] font-semibold block py-2  pr-4 text-[#230d4d] rounded md:bg-transparent dark:text-white" aria-current="page">About</a>
              </li>
               <li className='ml-3'>
                <a href="#" class="text-[17px] font-semibold block py-2  pr-4text-[#230d4d]">How to donate</a>
              </li>
              <li className='ml-3'>
                <a href="#" class="text-[17px] font-semibold block py-2  pr-4text-[#230d4d]">Charities</a>
              </li>
              <li className='ml-3'>
                <a href="#" class="text-[17px] font-semibold block py-2  pr-4text-[#230d4d]">Features</a>
              </li>
              <li className='ml-3'>
                <a href="#" class="text-[17px] font-semibold block py-2  pr-4text-[#230d4d]">Contact</a>
              </li>
              <li className='block lg:hidden'><div>
            <button type="button" class="text-white bg-[#ff9776] focus:ring-4 focus:outline-none focus:ring-blue-300 text-[17px] font-semibold px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enquire Now</button>
            </div></li>
            </ul>
          </div>

          <div class="flex md:order-2 ml-auto">
            <div className='hidden lg:block'>
            <button type="button" class="text-white bg-[#ff9776] focus:ring-4 focus:outline-none focus:ring-blue-300 text-[17px] font-semibold px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enquire Now</button>
            </div>
            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
        </div>
      </nav>

 </div>

  );
}

export default NavBarComponents;