import Link from "next/link"
import { FacebookIcon, InstaIcon, LinkdenIcon, LogoFooter, TwiterIcon } from "./Icons"

const Footer = () => {
    const icons = [{ link: "http://www.facebook.com", logo: (<FacebookIcon />) }, { link: "http://www.instagram.com", logo: (<InstaIcon />) }, { link: "http://www.twitter.com", logo: (<TwiterIcon />) }, { link: "http://www.linkden.com", logo: (<LinkdenIcon />) }]
    return (
        <footer className="bg-[url(/assets/images/webp/footerbg.webp)] bg-cover bg-center bg-no-repeat">
            <div className="container pt-[120px] sm:pt-[138px]">
                <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 mb-10 md:mb-[52px]">
                    <div className="col-span-2 mb-6 sm:mb-10 md:col-span-3 lg:col-span-4 md:mb-0">
                        <div className="flex flex-col">
                            <Link href={"/"}><span><LogoFooter /></span></Link>
                            <div className="flex flex-col mt-3 sm:mt-5 md:mt-7">
                                <p className="!text-white pTag">Follow Us</p>
                                <div className="flex items-center gap-4">
                                    {
                                        icons.map((items, index) => (
                                            <Link className="mt-2" key={index} href={items.link} target="_blank"><span className="w-8 h-8 sm:w-[44px] sm:h-[44px] rounded-full border border-white duration-300 hover:border-[#9551D7] group hover:-translate-y-2 flex justify-center items-center">{items.logo}</span></Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 mr-4 lg:mr-[30px]">
                        <ul className="flex flex-col gap-[10px] sm:gap-[14px]">
                            <li className="text-base font-semibold text-white font-Outfit">Maine</li>
                            <li className="mt-[2px]"><Link href={"#home"} className="links text-[#FDFDFF]">Home</Link></li>
                            <li><Link href={"#aboutUs"} className="links text-[#FDFDFF]">About Us</Link></li>
                            <li><Link href={"#services"} className="links text-[#FDFDFF]">services</Link></li>
                            <li><Link href={"#whyChooseUs"} className="links text-[#FDFDFF]">Why Choose Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-1 ml-4 lg:ml-[30px]">
                        <ul className="flex flex-col gap-[10px] sm:gap-[14px]">
                            <li className="text-base font-semibold text-white font-Outfit">Maine</li>
                            <li className="mt-[2px]"><Link href={"#termsAndCondution"} className="links text-[#FDFDFF]">Term & Conduction</Link></li>
                            <li><Link href={"#privacy"} className="links text-[#FDFDFF]">Privacy Policy</Link></li>
                            <li><Link href={"#contact"} className="links text-[#FDFDFF]">Contact</Link></li>
                            <li><Link href={"#contact"} className="links text-[#FDFDFF]">(629) 555-0129</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="pt-3 px-3 sm:pt-4 text-sm font-normal text-center pb-6 sm:pb-9 font-Exo text-[#B8B8B4] border-t border-[#5A5950]">© Copyright {(new Date().getFullYear())} Noble Mind | All rights reserved. </p>
        </footer>
    )
}

export default Footer
