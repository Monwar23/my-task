import { MdArrowOutward } from "react-icons/md";

const Discount = () => {
    return (
        <div className="mb-40">
            <div className="relative w-full">
                <img src='/Media/Rectangle 32.png' className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#020043] to-transparent">
                    <div className='text-white space-y-7 w-[530px] pl-12'>
                        <h2 className='text-2xl lg:text-5xl font-semibold'>Get Your <br />
                            First Appointment <br />
                            at 50% Off!</h2>
                        <div>
                            <button className="btn bg-[#FFC637] hover:bg-[#e7b330] font-medium hover:text-white border-none rounded-xl">Appointment<MdArrowOutward /> </button>
                            <button className="btn btn-ghost font-medium border-white rounded-xl ml-5">Learn More<MdArrowOutward /> </button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Discount;
