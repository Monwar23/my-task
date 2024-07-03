import { MdArrowOutward } from "react-icons/md";

const EmpoweringHealth = () => {
    return (
        <div className="mb-40 bg-[#FFFFF5] p-10">
            <div className="flex flex-col lg:flex-row">
                <div>
                    <h2 className="btn border-[#020043] bg-[#FFFFF5] rounded-3xl px-6 py-3 font-normal text-base">Service</h2>
                    <h1 className="w-full lg:w-96 my-4 leading-[48px] text-4xl font-semibold">Empowering Health, Enriching Lives</h1>
                    <p className="w-full lg:w-[460px] mb-11 text-[#4D4C7B]">We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
                    </p>
                    <button className="btn bg-[#FFC637] rounded-xl hover:bg-[#e7b330] hover:text-white">Appointment <MdArrowOutward /></button>
                </div>
                <div className="mt-10 lg:mt-0 lg:ml-32">
                    <img className="rounded-3xl" src="/src/assets/Media/Rectangle 27-2.png" alt=""/>
                    <div className="relative w-full lg:w-[320px] h-36 rounded-3xl -mt-44 ml-5 bg-[#343268] opacity-80">
                        <h2 className="font-medium text-white text-xl pt-4 pl-4 mb-2">Advanced Technology</h2>
                        <div>
                            <p className="w-[220px] text-xs font-normal pl-4 text-[#FFFFFFCC]">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                            <div className="flex justify-end pr-8 -mt-6">
                                <MdArrowOutward className="w-12 h-12 rounded-full bg-[#FFC637] text-white p-2"></MdArrowOutward>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-7">
                <div className="mt-20">
                    <img className="rounded-3xl" src="/src/assets/Media/Rectangle 27-1.png" alt=""/>
                    <div className="relative w-full lg:w-[320px] h-36 rounded-3xl -mt-44 ml-5 bg-[#343268] opacity-80">
                        <h2 className="font-medium text-white text-xl pt-4 pl-4 mb-2">Online Doctor Meet</h2>
                        <div>
                            <p className="w-[220px] text-xs font-normal pl-4 text-[#FFFFFFCC]">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                            <div className="flex justify-end pr-8 -mt-6">
                                <MdArrowOutward className="w-12 h-12 rounded-full bg-[#FFC637] text-white p-2"></MdArrowOutward>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <img className="rounded-3xl" src="/src/assets/Media/Rectangle 27.png" alt=""/>
                    <div className="relative w-full lg:w-[320px] h-36 rounded-3xl -mt-44 ml-5 bg-[#343268] opacity-80">
                        <h2 className="font-medium text-white text-xl pt-4 pl-4 mb-2">Consultancy your health</h2>
                        <div>
                            <p className="w-[220px] text-xs font-normal pl-4 text-[#FFFFFFCC]">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                            <div className="flex justify-end pr-8 -mt-6">
                                <MdArrowOutward className="w-12 h-12 rounded-full bg-[#FFC637] text-white p-2"></MdArrowOutward>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmpoweringHealth;
