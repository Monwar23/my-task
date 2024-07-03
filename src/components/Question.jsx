import { FaChevronDown } from "react-icons/fa";

const Question = () => {
    return (
        <div className="mb-40">
            <div className=" sm:px-6">
                <div className="px-8 sm:px-0">
                    <h2 className="btn border-[#020043] bg-[#FFFFF5] rounded-3xl px-6 py-3 font-normal text-base mb-4 inline-block">Faq</h2>
                    <h1 className="text-4xl font-semibold mb-8">Frequently Asked Questions</h1>
                </div>
                <div className="max-w-5xl mx-auto">
                    <div className="space-y-3">
                     
                        <div className="">
                            <h3 className="text-xl font-medium mb-2 pl-11 pt-3 pb-4 bg-[#FFFFF5] rounded-lg "> What are your office hours?</h3>
                            <p className="px-11 text-[#343268] text-sm">
                            Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.
                            </p>
                        </div>
                        <div className="bg-[#FFFFF5] rounded-lg pr-6 pt-3 pb-3 flex justify-between">
                            <h3 className="text-xl font-medium mb-2 pl-11">How can I schedule an appointment?</h3>
                            <FaChevronDown></FaChevronDown>
                        </div>
                        <div className="bg-[#FFFFF5] rounded-lg pr-6 pt-3 pb-3 flex justify-between">
                            <h3 className="text-xl font-medium mb-2 pl-11">Do you accept insurance?</h3>
                            <FaChevronDown></FaChevronDown>
                        </div>
                        <div className="bg-[#FFFFF5] rounded-lg pr-6 pt-3 pb-3 flex justify-between">
                            <h3 className="text-xl font-medium mb-2 pl-11">What should I bring to my appointment?</h3>
                            <FaChevronDown></FaChevronDown>
                        </div>
                        <div className="bg-[#FFFFF5] rounded-lg pr-6 pt-3 pb-3 flex justify-between">
                            <h3 className="text-xl font-medium mb-2 pl-11">Do you offer telemedicine appointments?</h3>
                            <FaChevronDown></FaChevronDown>
                        </div>
                        
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;
