import { FaStar } from "react-icons/fa";

const Testomonial = () => {
    return (
        <div className="mb-20 lg:mb-40">
            <div>
                <h2 className="btn border-[#020043] bg-[#FFFFF5] rounded-3xl px-6 py-3 font-normal text-base mb-4">Testimonial</h2>
                <h1 className="text-4xl font-semibold mb-8">What they say about us</h1>
            </div>
           <div className="flex gap-6">
           <div className="w-[370px] h-60">
                <div className="bg-[#FFFFF5] rounded-lg p-5">
                    <h2 className="font-semibold text-xl mb-3">Expertise and Compassion Combined</h2>
                    <p className="text-sm text-[#4D4C7B] mb-5">
                        I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.
                    </p>
                    <div className="flex items-center gap-3">
                        <img className="rounded-full w-11 h-11" src="/src/assets/1.jpg" alt="Sarah D" />
                        <div>
                            <h3 className="font-semibold text-sm">Sarah D, <span className="text-sm text-[#4D4C7B] font-normal">IT Professional</span></h3>
                            <div className="text-[#FFE03D] flex gap-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[370px] h-60">
                <div className="bg-[#FFFFF5] rounded-lg p-5">
                    <h2 className="font-semibold text-xl mb-3">Life-Saving Care, Life-Changing Experience</h2>
                    <p className="text-sm text-[#4D4C7B] mb-5">
                    My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.
                    </p>
                    <div className="flex items-center gap-3">
                        <img className="rounded-full w-11 h-11" src="/src/assets/2.jpg" alt="Sarah D" />
                        <div>
                            <h3 className="font-semibold text-sm">Michael R, <span className="text-sm text-[#4D4C7B] font-normal">Business Executive</span></h3>
                            <div className="text-[#FFE03D] flex gap-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[370px] h-60">
                <div className="bg-[#FFFFF5] rounded-lg p-5">
                    <h2 className="font-semibold text-xl mb-3">A Partner in Health and
                    Wellness</h2>
                    <p className="text-sm text-[#4D4C7B] mb-5">
                    As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and
                    </p>
                    <div className="flex items-center gap-3">
                        <img className="rounded-full w-11 h-11" src="/src/assets/3..png" alt="Sarah D" />
                        <div>
                            <h3 className="font-semibold text-sm">David S, <span className="text-sm text-[#4D4C7B] font-normal">Lawyer</span></h3>
                            <div className="text-[#FFE03D] flex gap-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
           <div className="flex justify-center gap-1 mt-6">
            <div className="w-3 h-3 bg-[#d1d1d8] rounded-full "></div>
            <div className="w-3 h-3 rounded-full bg-[#FFC637] "></div>
            <div className="w-3 h-3 bg-[#d1d1d8] rounded-full "></div>
           </div>
        </div>
    );
};

export default Testomonial;
