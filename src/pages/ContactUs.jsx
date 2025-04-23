import React from "react";
import Button from "../UI/Button";

const ContactUs = () => {
    return (
        <section id="contactUs" className="text-white font-bdo container-custom mb-[100px] flex flex-col sm:flex-row justify-between font-bdo">
            <div className="max-w-[474px] pb-5 sm:pb-0">
                <h2 className="text-3xl sm:text-6xl sm:tracking-[-3px] sm:leading-[78px] max-w-[500px] text-left mt-[18px]">
                    Let's <span className="text-[#52C923]">collaborate </span>together
                </h2>

                <p className="text-sm sm:text-lg sm:leading-[25.2px] text-[#FFFFFFCC] max-w-[764px] font-normal text-left mt-4">
                    Partner with Samarth EV to drive innovation and sustainability. Together, we can create groundbreaking solutions and shape the future of electric mobility.</p>
            </div>
            <form className="w-full max-w-[774px] text-white flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Name *"
                        className="bg-[#D9D9D912] rounded-[10px] py-4 px-5 transition-all duration-300 hover:bg-[#D9D9D933] outline-none"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email *"
                        className="bg-[#D9D9D912] rounded-[10px] py-4 px-5 transition-all duration-300 hover:bg-[#D9D9D933] outline-none"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Number *"
                        className="bg-[#D9D9D912] rounded-[10px] py-4 px-5 transition-all duration-300 hover:bg-[#D9D9D933] outline-none"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Company Name *"
                        className="bg-[#D9D9D912] rounded-[10px] py-4 px-5 transition-all duration-300 hover:bg-[#D9D9D933] outline-none"
                        required
                    />
                </div>

                <textarea
                    placeholder="Message (Optional)"
                    rows={4}
                    className="bg-[#D9D9D912] rounded-[10px] py-4 px-5 transition-all duration-300 hover:bg-[#D9D9D933] outline-none"
                />
                <Button className="soft-bg max-w-[119px] hover:brightness-110 transition-all duration-300">
                    Submit
                </Button>
            </form>

        </section>
    );
};

export default ContactUs;
