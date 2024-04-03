import Navbar from "./Navbar"
import { StarLine } from "./Reuse"

const Header = () => {
    return (
        <div>
            <header className="bg-[url(/assets/images/png/herobg2.png)] lg:bg-[url(/assets/images/png/herobg.png)] bg-no-repeat bg-cover bg-left md:bg-center min-h-[610px] md:min-h-[810px] 2xl:min-h-[900px] flex-grow-1 flex items-center justify-center relative">
                <Navbar />
                <div className="container grid grid-cols-2">
                    <div className="col-span-2 lg:col-span-1 max-w-[584px]">
                        <StarLine para="AI With Noble Mind" />
                        <h1 className="mt-1 md:mt-2 h1">Inspiring Innovation, Elevating Solutions –<span> Noble Mind"</span></h1>
                        <p className="mt-3 md:mt-4 pTag">At Noble Mind is a forward-thinking AI specialised company dedicated to reshaping the future of how we live, work, and learn. Our mission is to create ground-breaking AI solutions for Healthcare, Education, and beyond, aligning with Saudi Arabia’s Vision 2030.”</p>
                    </div>
                </div>
            </header>
        </div>

    )
}

export default Header
