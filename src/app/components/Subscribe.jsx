
const Subscribe = () => {
    return (
        <div className="mt-10 sm:mt-16 md:mt-[100px] lg:my-[150px]">
            <div className="container py-[60px] flex flex-col items-center justify-center rounded-[20px] bg-[url(/assets/images/png/subscribe.png)]">
                <h2 className="!text-white h2">Subscribe to our <span className="!text-white">Newsletter!</span></h2>
                <p className="mt-1 text-base font-normal text-white md:mt-2 font-Exo">Be the first to get exclusive offers and the latest news.</p>
                <label htmlFor="email" className="border border-[#A57FE0] rounded-md bg-[#8D60D9] mt-9 max-w-[448px] w-full flex justify-between items-center">
                    <input type="email" className="p-6 text-base font-semibold text-white bg-transparent border-0 outline-none font-Outfit placeholder:text-[#FDFDFF] w-full" placeholder="Enter your email" />
                    <button type="submit" className="py-[14px] px-6 border border-white rounded text-white font-Outfit font-semibold text-base mr-[10px]">Subscribe</button>
                </label>
            </div>
        </div>
    )
}

export default Subscribe
