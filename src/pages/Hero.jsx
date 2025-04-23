import Button from "../UI/Button";
import heroMp4 from "../assets/video/hero.mp4";
import mainMp4 from "../assets/video/main.mp4";
import image1 from "../assets/image/main1.png";
import image2 from "../assets/image/main2.png";

const Hero = () => {
    return (
        <section className="text-white font-bdo container-custom  my-12 md:my-[100px]">
            <h1 className="sm:text-[80px] text-5xl font-medium leading-[65px] sm:leading-[104px] tracking-[-2.5px] text-left max-w-[1055px]">
                Join the E-Bike Revolution with <span className="text-[#52C923]">Samarth EV®</span>
            </h1>

            <p className="max-w-[615px] font-normal text-sm sm:text-lg sm:leading-[25.2px] tracking-[0px] text-left my-4">
                Join hands with Samarth EV and be a part of the eco-friendly future. Whether you're looking to collaborate, explore our innovative products, or simply want to learn more about our mission, we're here to assist you.
            </p>

            <div className="lg:flex justify-between items-start">
                <Button className="mb-8 mt-4 lg:mb-0 tracking-tighter whitespace-nowrap">Get Revolution →</Button>
                <div className="flex lg:items-end items-center flex-col-reverse lg:flex-row gap-8">
                    <p className="text-lg text-[#FFFFFFCC] leading-[25.2px] font-normal whitespace-nowrap">© 2024 Samarth</p>
                    <video
                        className="border-[5px] border-[#FFFFFF0D] rounded-[26px]"
                        src={heroMp4}
                        width="639"
                        height="331"
                        autoPlay
                        loop
                        controls
                        playsInline
                    >
                    </video>
                </div>
            </div>

            <div>
                <h2 className="text-3xl sm:text-6xl sm:tracking-[-3px] sm:leading-[78px] max-w-[500px] text-left mt-[18px]">
                    Samarth <span className="block">EV Innovators</span>
                </h2>

                <p className="text-sm sm:text-lg sm:leading-[25.2px] text-[#FFFFFFCC] max-w-[764px] font-normal text-left mt-4">
                    Our mission is to partner in the green revolution process by excelling in technology upgrade and serving the society with eco-friendly solutions. We are dedicated to developing innovative products that contribute to a cleaner and greener world.
                </p>

                <div className="flex lg:flex-nowrap flex-wrap items-center justify-center lg:justify-between mt-[50px] mb-[30px] overflow-hidden gap-6">
                    <figure className="order-1 lg:order-2">
                        <video
                            className="border-[5px] border-[#FFFFFF0D] rounded-[26px] lg:w-[616px] h-[420px] object-cover"
                            src={mainMp4}
                            autoPlay
                            loop
                            playsInline
                            controls
                        />
                    </figure>
                    <figure className="order-2 lg:order-1">
                        <img
                            className="w-[352px] h-[420px] rounded-[30px] border-[5px] border-[#FFFFFF0D]"
                            src={image1}
                            alt="main image"
                        />
                    </figure>
                    <figure className="order-3 lg:order-3">
                        <img
                            className="w-[352px] h-[420px] rounded-[30px] border-[5px] border-[#FFFFFF0D]"
                            src={image2}
                            alt="main image"
                        />
                    </figure>
                </div>
            </div>

            <article className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center sm:justify-between bg-[#FFFFFF0D] p-10 rounded-[26px] mt-[30px]">
                <p className="text-4xl lg:text-6xl text-left font-normal">60<span className="text-[#52C923]">+</span>
                    <span className="block text-sm lg:text-lg font-normal lg:leading-[25.2px]">Professional <br />Team</span>
                </p>
                <p className="text-4xl lg:text-6xl text-left font-normal">51<span className="text-[#52C923]">+</span>
                    <span className="block text-sm lg:text-lg font-normal lg:leading-[25.2px]">Copy Rights &<br />Patents In Pipeline</span>
                </p>
                <p className="text-4xl lg:text-6xl text-left font-normal">12<span className="text-[#52C923]">+</span>
                    <span className="block text-sm lg:text-lg font-normal lg:leading-[25.2px]">Years Of<br />Leadership Excellence</span>
                </p>
                <p className="text-4xl lg:text-6xl text-left font-normal">5000<span className="text-[#52C923]">+</span>
                    <span className="block text-sm lg:text-lg font-normal lg:leading-[25.2px]">Square Meter<br />Manufacturing Facility</span>
                </p>
            </article>
        </section>
    );
};

export default Hero;