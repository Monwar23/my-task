import { MdArrowOutward } from "react-icons/md";

const WhoWeAre = () => {
    return (
        <div className="mb-10 md:mb-20 lg:mb-40 flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-8">
                <h2 className="btn border-[#020043] bg-[#FFFFF5] rounded-3xl px-6 py-3 font-normal text-base mb-4 md:mb-0">Who we are</h2>
                <h1 className="w-full my-4 md:w-96 leading-[48px] text-4xl font-semibold">We Help To Get Solutions</h1>
                <p className="w-full md:max-w-[460px] mb-8 md:mb-11 text-[#4D4C7B]">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                </p>
                <button className="btn bg-[#FFC637] rounded-xl hover:bg-[#e7b330] hover:text-white">Learn more <MdArrowOutward /></button>
            </div>
            <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0">
                <img className="w-full" src="/src/assets/Media/Rectangle 24.png" alt="" />
                <div className="relative w-full md:max-w-[360px] h-52 rounded-3xl -mt-20 md:-mt-[165px] md:-ml-16 bg-[#343268] ">
                    <h2 className="font-medium text-white text-2xl pt-8 pl-6 mb-3">Our mission is simple</h2>
                    <p className="w-full pl-6 text-base text-[#FFFFFFCC]">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;
