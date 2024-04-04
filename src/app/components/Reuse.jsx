import { Star } from "./Icons"

export const StarLine = (props) => {
    return (
        <p className="flex items-center gap-[6px] font-Exo font-normal text-sm md:text-base justify-center md:justify-start text-[#131200]"><span><Star /></span>{props.para}</p>
    )
}
export const CommonBtn = (props) => {
    return (
        <button className={`bg-gradient-to-br from-[#A456E9] from-15% to-[#8869EF] duration-300 hover:shadow-md hover:from-70% rounded-md py-[14px] px-6 font-Outfit font-semibold text-sm md:text-base text-white ${props.cstm}`}>
            {props.name}
        </button>)
}
