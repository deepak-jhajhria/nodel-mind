import Image from "next/image"
import { CommonBtn, StarLine } from "./Reuse"

const AboutUs = () => {
    return (
        <div className="mt-10 sm:mt-16 md:mt-[100px] lg:mt-[150px]">
            <div className="container grid items-center grid-cols-1 gap-8 sm:gap-12 lg:gap-20 lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                    <Image className="rounded-tr-[50px] w-full h-auto" src="/assets/images/png/aboutusImg.png" alt="image" width={567} height={544} priority/>
                </div>
                <div className="flex flex-col lg:max-w-[521px] order-1 lg:order-2">
                    <StarLine para="About Us" />
                    <h2 className="mt-1 h2 md:mt-2">Pioneering Vision & Mission-<span>Driven Sectoral Innovation</span></h2>
                    <p className="mt-3 md:mr-7 pTag md:mt-4">Imagine a future in Saudi Arabia influenced by the potential of Al, with Noble Mind at the forefront of this transformation. Healthcare stands to gain with the promise of enhanced data precision. In education, there's the potential for individualized learning experiences. Finance could witness seamless transactions, and entertainment may revel in customized experiences. Through Al's promise, transportation could innovate and cities might adapt smarter infrastructures. In every domain, the vision of Noble Mind hints at a brighter, more efficient nation.</p>
                    <div className="mt-[42px]">
                        <CommonBtn name="Read More" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
