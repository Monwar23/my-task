
const ComprehensiveCareUnit = () => {
    return (
        <div className="mb-40 flex">
            <div className="w-56 h-80 p-5 border bg-white rounded-3xl">
                <h2 className="font-semibold text-4xl mb-2">90%</h2>
                <p className="text-sm mb-7 font-normal max-w-36">Patient satisfaction rate, reflecting our commitment.</p>
                {/* <div>
                    <div className="border w-24 h-32 bg-[#2196F3] rounded-full absolute"></div>
                    <div className="border-4 border-white w-16 h-16 bg-[#FFC107] rounded-tr-full relative ml-10 -top-2"></div>

                    <div className="border-4 border-white w-14 h-12 bg-[#4CAF50] rounded-full relative ml-12 -top-2"></div>
                </div> */}
                <div className="flex justify-center">
                    <img className="w-32 h-32" src="/src/assets/Group 12.png" alt="" />
                </div>
            </div>
            <div>
                <h2 className="text-5xl text-center font-semibold max-w-lg mx-24">Comprehensive Care for Every Patient</h2>
                <div className="flex ">
                    <div className="mt-5 border w-52 h-48 bg-[#FFFFF5] ml-5 p-5 rounded-3xl">
                        <h2 className="text-4xl font-semibold">500+</h2>
                        <p className="text-sm font-normal w-28">Board-certified doctors</p>
                        <div className="flex justify-end">
                            <img className="w-20 h-20" src="/src/assets/contract (1) 1.png" alt="" />
                        </div>
                    </div>
                    <div className="mt-5 border w-52 h-40 bg-[#FBFBFB] ml-5 p-5 rounded-3xl">
                        <div className="flex gap-3">
                            <h2 className="text-4xl font-semibold">4.8</h2>
                            <img className="w-8 h-8" src="/src/assets/fi-sr-star.png" alt="" />
                        </div>
                        <p className="text-sm font-normal">Over 20,000 Patient</p>
                        <div className="flex mt-5">
                            
                            <p className="w-9 h-9 rounded-full flex items-center justify-center text-white text-base font-medium relative shadow-md shadow-black/45 z-0 -mr-2"><img className="rounded-full" src="/src/assets/1.jpg" alt="" /></p>
                            <p className="w-9 h-9 rounded-full flex items-center justify-center text-white text-base font-medium relative shadow-md shadow-black/45 z-10 -mr-2"><img className="rounded-full" src="/src/assets/2.jpg" alt="" /></p>
                            <p className="w-9 h-9 rounded-full flex items-center justify-center text-white text-base font-medium relative shadow-md shadow-black/45 z-20 -mr-2"><img className="rounded-full" src="/src/assets/3..png" alt="" /></p>
                            <p className="w-9 h-9 rounded-full flex items-center justify-center text-white text-base font-medium relative shadow-md shadow-black/45 z-30"><img className="rounded-full" src="/src/assets/4..jpg" alt="" /></p>
                        </div>
                    </div>
                    <div className="mt-5 border w-52 h-48 bg-[#FFFFF5] ml-5 p-5 rounded-3xl">
                        <h2 className="text-4xl font-semibold">$5000</h2>
                        <p className="text-sm font-normal w-28">Money spend
                            for poor patient</p>
                        <div className="flex justify-end">
                            <img className="w-24 h-20" src="/src/assets/group.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-56 h-80 p-5 border bg-white rounded-3xl">
                <h2 className="font-semibold text-4xl mb-2">50+</h2>
                <p className="text-sm mb-12 font-normal max-w-36">Free lession video 
                for patient</p>
                <div className="flex justify-center">
                    <img className="w-32 h-32" src="/src/assets/Group1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ComprehensiveCareUnit;