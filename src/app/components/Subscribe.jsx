
const Subscribe = () => {
    return (
        <div className="-mt-8 sm:mt-16 translate-y-[86px] mx-2">
            <div className="container py-8 sm:py-[60px] flex flex-col items-center justify-center rounded-[20px] bg-[url(/assets/images/png/subscribe.png)] bg-cover bg-center bg-no-repeat">
                <h2 className="!text-white h2 text-center">Subscribe to our <span className="!text-white">Newsletter!</span></h2>
                <p className="mt-1 text-base font-normal text-center text-white md:mt-2 font-Exo">Be the first to get exclusive offers and the latest news.</p>
                <label htmlFor="email" className="border border-[#A57FE0] rounded-md bg-[#8D60D9] mt-9 max-w-[448px] w-full flex flex-col sm:flex-row justify-between items-center p-[10px]">
                    <input type="email" className="p-4 text-base font-semibold text-white bg-transparent border-0 outline-none font-Outfit placeholder:text-[#FDFDFF] w-full" placeholder="Enter your email" />
                    <button type="submit" className=" py-2 sm:py-[14px] px-6 border border-white rounded text-white flex max-sm:w-full justify-center font-Outfit font-semibold text-base">Subscribe</button>
                </label>
            </div>
        </div>
    )
}

export default Subscribe
