import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReactDOM from 'react-dom/client';

function EnquiryFormComponents() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_gj25ey7', 'template_ojowf4j', form.current, 'H-OUv6evnaVb1Oqlz')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      };
    return (

        <div className="bg-[#24202d] pb-5 lg:pb-16 pt-5 lg:pt-16">
            <div className="container mx-auto px-4 lg:px-28 ">
                <div className=" flex flex-col text-center">
                    <div className="relative">
                    <h2 data-aos="fade-up" data-aos-duration="2000" className="text-[32px] lg:text-[48px]  font-bold text-center  text-white">Enquiry Form</h2>
                    <div className='w-[100px] h-[3px] bg-[#ff9776] absolute top-[65px] left-[35%] lg:top-[88px] lg:left-[45%]'></div>
                    </div>
                    <div  className="px-5 lg:px-5 xl:px-48">
                    <form data-aos="fade-down" data-aos-duration="2000" id='#myForm' ref={form}  onSubmit={sendEmail} className="mt-9">
                            <div className="flex flex-col lg:flex-row mb-5 lg:mb-12">
                                <div className="mr-5 w-full mb-5 lg:mb-0">
                                    <label for="website" class="text-left block mb-2 font-semibold text-[16px] text-white">Name*</label>
                                    <input className='bg-transparent border-solid border-1 border-white h-[55px] w-full mr-0 lg:mr-20 text-white font-semibold' type="text" id="Name" name="name" placeholder='Name' />
                                </div>
                                <div  className="w-full">
                                    <label for="website" class="text-left block mb-2 font-semibold text-[16px] text-white">Surname*</label>
                                    <input className=' bg-transparent border-solid border-1 border-white h-[55px] w-full mr-0 lg:mr-20 text-white font-semibold' type="text" id="Surname" name="lastName" placeholder='Surname' />
                                </div>
                            </div>
                            <div  className="mb-5 lg:mb-12 ">
                                <div>
                                    <label for="website" class="text-left block mb-2  font-semibold text-[16px] text-white">Email*</label>
                                    <input className='bg-transparent border-solid border-1 border-white h-[55px] w-full mr-0 lg:mr-20 text-white font-semibold' type="text" id="last" name="email" placeholder='Email' />
                                </div>
                            </div>
                            <div  className="mb-12">
                                <div>
                                    <label for="website" class="text-left block mb-2  font-semibold text-[16px] text-white">Message*</label>
                                    <textarea name='message' id="msg" rows="4" class="text-white font-semibold bg-transparent border-solid border-1 border-white block p-2.5 w-full  focus:ring-blue-500
                                     focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                      dark:focus:ring-blue-500 dark:focus:border-blue-500 h-48" placeholder="Write your thoughts here..."></textarea>
                                </div>

                            </div>
                            <div className="mb-12 items-center justify-start flex">
                                <div>
                                    <button className="shadow-lg bg-[#fc8965] shadow-[#fc896552]  ml-1 h-[52px] px-24 font-bold text-[16px] text-white">SUBMIT</button>
                                </div>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>



    );
}

export default EnquiryFormComponents; 