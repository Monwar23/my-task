import { MdArrowOutward } from "react-icons/md";

const WhoWeAre = () => {
    return (
        <div className="mb-40 flex">
            <div>
                <h2 className="btn border-[#020043] bg-[#FFFFF5] rounded-3xl px-6 py-3 font-normal text-base">Who we are</h2>
                <h1 className="w-96 my-4 leading-[48px] text-4xl font-semibold">We Help To Get Soultions</h1>
                <p className="w-[460px] mb-11 text-[#4D4C7B]">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                </p>
                <button className="btn bg-[#FFC637] rounded-xl hover:bg-[#e7b330] hover:text-white">Learn more <MdArrowOutward /></button>
            </div>
            <div>
            <img className="absolute ml-32" src="/src/assets/Media/Rectangle 24.png" alt="" />
            <div className="relative w-96 h-52 rounded-3xl mt-64 ml-7 bg-[#343268]">
                <h2 className="font-medium text-white text-2xl pt-12 pl-8 mb-5">Our mission is simple</h2>
            <p className="w-[345px] text-base pl-8 text-[#FFFFFFCC]">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
            </div>
            </div>
        </div>
    );
};

export default WhoWeAre;