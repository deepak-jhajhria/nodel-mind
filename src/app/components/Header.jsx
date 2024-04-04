import { PositionSvg } from "./Icons"
import Navbar from "./Navbar"
import { StarLine } from "./Reuse"

const Header = () => {
    return (
        <div className="relative ">
            <header id="home" className="bg-header min-h-[610px] md:min-h-[810px] 2xl:min-h-[900px] flex-grow-1 flex items-center justify-center relative">
                <Navbar />
                <div className="container grid grid-cols-2">
                    <div className="col-span-2 lg:col-span-1 max-w-[584px]">
                        <StarLine para="AI With Noble Mind" />
                        <h1 className="mt-1 md:mt-2 h1">Inspiring Innovation, Elevating Solutions – <span> Noble Mind"</span></h1>
                        <p className="mt-3 text-center md:mt-4 pTag md:text-start">At Noble Mind is a forward-thinking AI specialised company dedicated to reshaping the future of how we live, work, and learn. Our mission is to create ground-breaking AI solutions for Healthcare, Education, and beyond, aligning with Saudi Arabia’s Vision 2030.”</p>
                    </div>
                </div>
                <span className=" after:absolute w-0 2xl:after:w-full after:blur-[7px] after:h-8 after:-bottom-4 after:right-0 after:bg-[#FFFEFE] after:flex z-20"></span>
            </header>
            <span className="absolute z-30 -translate-y-10 left-12"><PositionSvg /></span>
        </div>

    )
}

export default Header
