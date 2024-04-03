import Image from "next/image"
import { CommonBtn } from "./Reuse"

const ContactUs = () => {
    return (
        <div className="mt-10 sm:mt-16 md:mt-[100px] lg:mt-[150px]">
            <div className="container grid grid-cols-2 gap-[64px]">
                <div className="col-span-1">
                    <h2 className="h2"><span>Contact</span> Us</h2>
                    <p className="mt-3 pTag md:mt-4 max-w-[409px] leading-6">Feel free to contact us any time . We will get back to you as soon as we can! </p>
                    <form className="mt-5" action="submit">
                        <div className="flex items-center gap-3">
                            <div className="flex flex-col w-full">
                                <label className="pTag" htmlFor="name">Name</label>
                                <input className="border border-[#D0D0CC] rounded-lg outline-none pTag py-[11px] px-2" type="text" name="Name" id="firstName" />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="pTag" htmlFor="name">Last Name</label>
                                <input className="border border-[#D0D0CC] rounded-lg outline-none pTag py-[11px] px-2" type="text" name="Name" id="firstName" />
                            </div>
                        </div>
                        <div className="flex flex-col w-full mt-4">
                            <label className="pTag" htmlFor="name">Email</label>
                            <input className="border border-[#D0D0CC] rounded-lg outline-none pTag py-[11px] px-2" type="text" name="Name" id="firstName" />
                        </div>
                        <div className="flex flex-col w-full mt-4">
                            <label className="pTag" htmlFor="name">Message</label>
                            <textarea className="border border-[#D0D0CC] rounded-lg outline-none pTag py-[11px] px-2 min-h-[135px]" type="text" name="Name" id="firstName" />
                        </div>
                        <CommonBtn cstm="mt-6" name="Submit" />
                    </form>
                </div>
                <div>
                    <Image className="rounded-xl" src="/assets/images/png/contactusimg.png" alt="image" width={1000} height={1000} />
                </div>
            </div>
        </div>
    )
}

export default ContactUs
