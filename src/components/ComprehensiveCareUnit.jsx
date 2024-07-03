const ComprehensiveCareUnit = () => {
    return (
        <div className="mb-40 flex flex-wrap justify-center">
            <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 h-80 p-5 border bg-white rounded-3xl mb-5 sm:mb-0">
                <h2 className="font-semibold text-4xl mb-2">90%</h2>
                <p className="text-sm mb-7 font-normal max-w-36">Patient satisfaction rate, reflecting our commitment.</p>
                <div className="flex justify-center">
                    <img className="w-32 h-32" src="/Group 12.png" alt="" />
                </div>
            </div>
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-3/5">
                <h2 className="text-5xl text-center font-semibold max-w-lg mx-auto mb-5">Comprehensive Care for Every Patient</h2>
                <div className="flex flex-wrap justify-center">
                    <div className="mt-5 border w-full sm:w-1/3 lg:w-1/4 h-48 bg-[#FFFFF5] p-5 rounded-3xl mb-5 sm:mb-0 sm:ml-5">
                        <h2 className="text-4xl font-semibold">500+</h2>
                        <p className="text-sm font-normal w-28">Board-certified doctors</p>
                        <div className="flex justify-end">
                            <img className="w-20 h-20" src="/contract (1) 1.png" alt="" />
                        </div>
                    </div>
                    <div className="mt-5 border w-full sm:w-1/3 lg:w-1/4 h-40 bg-[#FBFBFB] p-5 rounded-3xl mb-5 sm:mb-0 sm:ml-5">
                        <div className="flex gap-3">
                            <h2 className="text-4xl font-semibold">4.8</h2>
                            <img className="w-8 h-8" src="/fi-sr-star.png" alt="" />
                        </div>
                        <p className="text-sm font-normal">Over 20,000 Patient</p>
                        <div className="flex mt-5">
                            <p className="w-9 h-9 rounded-full flex items-center justify-center text-white text-base font-medium relative shadow-md shadow-black/45 z-0 -mr-2"><img className="rounded-full" src="/1.jpg" alt="" /></p>
                            <p className="w-9 h-9 rounded-full flex items-center justify-center text-white text-base font-medium relative shadow-md shadow-black/45 z-10 -mr-2"><img className="rounded-full" src="/2.jpg" alt="" /></p>
                            <p className="w-9 h-9 rounded-full flex items-center justify-center text-white text-base font-medium relative shadow-md shadow-black/45 z-20 -mr-2"><img className="rounded-full" src="/3..png" alt="" /></p>
                            <p className="w-9 h-9 rounded-full flex items-center justify-center text-white text-base font-medium relative shadow-md shadow-black/45 z-30"><img className="rounded-full" src="/4..jpg" alt="" /></p>
                        </div>
                    </div>
                    <div className="mt-5 border w-full sm:w-1/3 lg:w-1/4 h-48 bg-[#FFFFF5] p-5 rounded-3xl sm:ml-5">
                        <h2 className="text-4xl font-semibold">$5000</h2>
                        <p className="text-sm font-normal w-28">Money spent for poor patients</p>
                        <div className="flex justify-end">
                            <img className="w-24 h-20" src="/Group.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 h-80 p-5 border bg-white rounded-3xl mt-5 sm:mt-0">
                <h2 className="font-semibold text-4xl mb-2">50+</h2>
                <p className="text-sm mb-12 font-normal max-w-36">Free lesson videos for patients</p>
                <div className="flex justify-center">
                    <img className="w-32 h-32" src="/Group1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ComprehensiveCareUnit;
