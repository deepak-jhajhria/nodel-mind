"use client";
import { useEffect, useState } from "react";

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);
    return (
        isVisible &&
        <div onClick={scrollToTop} className='fixed z-30 bottom-5 right-3 sm:right-5'>
            <button className="rounded-full hover:shadow-[0_0_20px_1px_#8F61E7] group z-50 w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] bg-gradient-to-br from-[#A456E9] from-15% to-[#8869EF] flex items-center justify-center shadow-[0_0_0_4px_rgba(180,160,255,0.253)] overflow-hidden">
                <svg className="w-3 duration-300 fill-white" viewBox="0 0 384 512">
                    <path
                        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                    ></path>
                </svg>
            </button>

        </div>
    );
}

export default ScrollTop
