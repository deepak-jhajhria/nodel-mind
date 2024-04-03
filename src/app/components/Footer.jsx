import Link from "next/link"
import { FacebookIcon, InstaIcon, LinkdenIcon, LogoFooter, TwiterIcon } from "./Icons"

const Footer = () => {
    const icons = [{ id: 1, logo: (<FacebookIcon />) }, { id: 1, logo: (<InstaIcon />) }, { id: 1, logo: (<TwiterIcon />) }, { id: 1, logo: (<LinkdenIcon />) }]
    return (
        <footer className="bg-[#141305]">
            <div className="container pt-10 sm:pt-16 md:pt-[100px] lg:pt-[138px]">
                <div className="grid grid-cols-6">
                    <div className="col-span-4 ">
                        <div className="flex flex-col">
                            <Link href={"/"}><span><LogoFooter /></span></Link>
                            <div className="flex flex-col mt-7">
                                <p className="!text-white pTag">Follow Us</p>
                                <div className="flex items-center gap-4">
                                    {
                                        icons.map((items, index) => (
                                            <Link key={index}><span>{items.logo}</span></Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
