import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReactDOM from 'react-dom/client';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup
    .object()
    .shape({
        name: yup.string().required("Name is required"),
        surname: yup.string().required("Surame is required"),
        user_email: yup.string().required("Email is required").email('Email is not valid'),
        message: yup.string(),
    })
    .required();

// check validity
schema
    .validate({
        email: 'not.a.valid.email',
    })
    .catch((err) => {
        console.log(err.name); // ValidationError
        console.log(err.errors); // ['Not a proper email']
    });

function EnquiryFormComponents() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        console.log(data);
        sendEmail(data);
    };
    const form = useRef();
    const [formvalue, setFormvalue] = useState({ name: '', surname: '', user_email:''});
    const [successmsg, setSuccessmsg] = useState();

    const handlevalidation = (e) => {
        const { name, value } = e.target;
        setFormvalue({ ...formvalue, [name]: value });
    }


    const sendEmail = (e) => {
      

        emailjs.sendForm('service_gj25ey7', 'template_oj7fhqc', form.current, 'H-OUv6evnaVb1Oqlz')
            .then((result) => {
                setSuccessmsg("Your message has been sent.")
                reset({ name: "", surname: "", user_email: "", message: "" });
            }, (error) => {
                setSuccessmsg("There was a problem sending your message.")
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
                    <div className="px-5 lg:px-5 xl:px-48">
                        <form data-aos="fade-down" data-aos-duration="2000" id='#myForm' ref={form} onSubmit={handleSubmit(onSubmit)} className="mt-9">
                            <div className="flex flex-col lg:flex-row mb-5 lg:mb-12">
                                <div className="mr-5 w-full mb-5 lg:mb-0">
                                    <label for="website" class="text-left block mb-2 font-semibold text-[16px] text-white">Name*</label>
                                    <input {...register("name")} value={ formvalue.name} onChange={handlevalidation} className='bg-transparent border-solid border-1 border-white h-[55px] w-full mr-0 lg:mr-20 text-white font-semibold'
                                        type="text" id="name" name="name" placeholder='Name' />
                                        {errors.name && (
                                    <span className="text-[#e94333] text-sm font-sans">
                                        {errors.name.message}
                                    </span>
                                    )}
                                </div>
                                <div className="w-full">
                                    <label for="website" class="text-left block mb-2 font-semibold text-[16px] text-white">Surname*</label>
                                    <input {...register("surname")} value={ formvalue.surname} onChange={handlevalidation} className=' bg-transparent border-solid border-1 border-white h-[55px] w-full mr-0 lg:mr-20 text-white font-semibold'
                                        type="text" id="surname" name="surname" placeholder='Surname' />
                                        {errors.surname && (
                                    <span className="text-[#e94333] text-sm font-sans">
                                        {errors.surname.message}
                                    </span>
                                    )}
                                </div>
                            </div>
                            <div className="mb-5 lg:mb-12 ">
                                <div>
                                    <label for="website" class="text-left block mb-2  font-semibold text-[16px] text-white">Email*</label>
                                    <input {...register("user_email")} value={ formvalue.user_email} onChange={handlevalidation} className='bg-transparent border-solid border-1 border-white h-[55px] w-full mr-0 lg:mr-20 text-white font-semibold'
                                        type="text" id="user_email" name="user_email" placeholder='Email' />
                                         {errors.user_email && (
                                    <span className="text-[#e94333] text-sm font-sans">
                                        {errors.user_email.message}
                                    </span>
                                    )}
                                </div>
                            </div>
                            <div className="mb-12">
                                <div>
                                    <label for="website" class="text-left block mb-2  font-semibold text-[16px] text-white">Message*</label>
                                    <textarea {...register("message")} name='message' id="message" rows="4" class="text-white font-semibold bg-transparent border-solid border-1 border-white block p-2.5 w-full  focus:ring-blue-500
                                     focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                      dark:focus:ring-blue-500 dark:focus:border-blue-500 h-48" placeholder="Write your thoughts here..."></textarea>
                                </div>

                            </div>
                            <div className="mb-12 items-center justify-start flex">
                                <div>
                                    <button className="shadow-lg bg-[#fc8965] shadow-[#fc896552]  ml-1 h-[52px] px-24 font-bold text-[16px] text-white">SUBMIT</button>
                                    <p className="text-[#f9cc6a] mt-3 p-[15px] font-medium text-base">{successmsg}</p>
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