"use client";
import Image from "next/image"
import { CommonBtn } from "./Reuse"
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
const ContactUs = () => {
    const form = useRef();
    const [show, setShow] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        if (document.getElementById('firstName').value !== '' && document.getElementById('email').value !== '' && document.getElementById('massege').value !== '') {
            emailjs
                .sendForm('service_29d4v7n', 'template_pbr1t4p', form.current, {
                    publicKey: 'lx417-9z_PTKeaRVv',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        setShow(true)
                        document.body.classList.add("overflow-hidden")
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
        else {
            alert('Please fill in all fields');
        }
    };
    const handlePopupClose = () => {
        document.querySelectorAll(".input").value == '';
        // window.location.reload(true)
        document.body.classList.remove("overflow-hidden")
        setShow(false)
    }
    return (
        <div id="services" className="mt-10 sm:mt-16 md:mt-[100px] lg:mt-[150px]">
            <div id="contact" className="container grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-[64px]">
                <div className="col-span-1">
                    <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease" className="h2"><span>Contact</span> Us</h2>
                    <p data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease" className="mt-2 sm:mt-3 pTag md:mt-4 max-w-[409px] text-center md:text-start leading-6 mx-auto md:mx-0">Feel free to contact us any time . We will get back to you as soon as we can! </p>
                    <form ref={form} className="mt-4 sm:mt-5" action="submit" onSubmit={sendEmail}>
                        <div className="flex items-center w-full">
                            <div className="flex flex-col w-1/2 mr-[6]">
                                <label data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease" className="pTag" htmlFor="name">Name</label>
                                <input data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease" className="border input border-[#D0D0CC] rounded-lg outline-none pTag py-[10px] sm:py-3 px-2" type="text" name="Name" id="firstName" required />
                            </div>
                            <div className="flex flex-col w-1/2 ml-[6px]">
                                <label data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease" className="pTag" htmlFor="name">Last Name</label>
                                <input data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease" className="border input border-[#D0D0CC] rounded-lg outline-none pTag py-[10px] sm:py-3 px-2" type="text" name="Name" id="lastName" required />
                            </div>
                        </div>
                        <div className="flex flex-col w-full mt-3 sm:mt-4">
                            <label data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease" className="pTag" htmlFor="name">Email</label>
                            <input data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease" className="border input border-[#D0D0CC] rounded-lg outline-none pTag py-[10px] sm:py-3 px-2" type="text" name="Name" id="email" required />
                        </div>
                        <div className="flex flex-col w-full mt-3 sm:mt-4">
                            <label data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease" className="pTag" htmlFor="name">Message</label>
                            <textarea data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease" className="border input border-[#D0D0CC] rounded-lg outline-none pTag py-[10px] sm:py-3 px-2 min-h-[100px] sm:min-h-[135px] resize-none" type="text" name="Name" id="massege" required />
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease">
                            <CommonBtn  cstm="mt-5 sm:mt-6" name="Submit" />
                        </div>
                    </form>
                </div>
                <div className="flex">
                    <Image data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease" className="object-cover w-full rounded-xl max-h-[560px]" src="/assets/images/webp/contactusimg.webp" alt="image" width={598} height={572} />
                </div>
                {show && (
                    <div className="fixed w-[300px] h-[200px] bg-white shadow-xl rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 flex flex-col justify-center items-center gap-8 z-30">
                        <p className="text-xl text-center pTag">submitted successfully!</p>
                        <button className="bg-gradient-to-br from-[#A456E9] from-15% to-[#8869EF] duration-300 hover:shadow-md hover:from-70% rounded-md py-[14px] px-6 font-Outfit font-semibold text-sm text-white" onClick={handlePopupClose}>Close</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ContactUs
