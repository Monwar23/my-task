import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#020043] text-[#FFFFF5] max-w-[1492px] mx-auto lg:h-96 px-8 lg:px-40 pt-[120px] pb-32">
            <img src="/src/assets/Media/logo light.png" alt="" className="mb-8" />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-0">
                <div>
                    <p className="text-base w-[297px]">
                        123 Main Street Anytown, USA <br />Postal Code: 12345
                    </p>
                    <p className="text-base mt-8">
                        Support: support@oyolloo.com <br />
                        (Available: 10:00am to 07:00pm)
                    </p>
                </div>
                <div>
                    <p className="">Home</p>
                    <p className="mt-2">About Us</p>
                    <p className="mt-2">Success Page</p>
                    <p className="mt-2">Terms And Conditions</p>
                </div>
                <div>
                    <p className="">Services</p>
                    <p className="mt-2">Scheduling</p>
                    <p className="mt-2">Contact Us</p>
                    <p className="mt-2">Patient Portal</p>
                </div>
                <div>
                    <p className="">Follow Us</p>
                    <div className="mt-3 flex gap-7">
                        <FaFacebookF aria-label="Facebook" />
                        <FaInstagram aria-label="Instagram" />
                        <FaLinkedinIn aria-label="LinkedIn" />
                        <FaYoutube aria-label="YouTube" />
                    </div>
                    <p className="mt-11">@Docplus 2024</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
