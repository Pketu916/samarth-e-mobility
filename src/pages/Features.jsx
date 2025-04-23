import React from 'react'
import Button from '../UI/Button'
import FeaturesCard from '../UI/FeaturesCard'
import featureLogo1 from "../assets/image/Fully-Integrated-Vehicle-Systems 1.svg"
import featureLogo2 from "../assets/image/Group 66.svg"
import featureLogo3 from "../assets/image/Group.svg"
import featureLogo4 from "../assets/image/electric-bike 1.svg"
import featureLogo5 from "../assets/image/AI-Driven-Battery-BMS 1.svg"
import featureLogo6 from "../assets/image/7-Inch-Infotainment-Display 1.svg"

const Features = () => {
    return (
        <section id='features' className='text-white font-bdo container-custom relative'>
            <div className='flex items-center flex-col lg:absolute top-1/2 left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2'>
                <h2 className="text-3xl sm:text-6xl sm:tracking-[-3px] sm:leading-[78px] max-w-[568px]">Samarth EV Features</h2>
                <p className="text-sm sm:text-lg sm:leading-[25.2px] text-[#FFFFFFCC] max-w-[764px] font-normal mt-4">Samarth EV offers cutting-edge features for a sustainable future: high-performance electric motors, long-range batteries, rapid charging, smart connectivity, and eco-friendly design. Experience innovation, efficiency, and reliability in every drive.</p>
                <Button className="my-8 lg:mb-0 whitespace-nowrap">Get Revolution →</Button>
            </div>
            <div className="flex flex-wrap justify-evenly gap-12 lg:grid grid-cols-3 grid-rows-6 lg:justify-items-center mx-auto relative overflow-visible">
                <FeaturesCard
                    className="col-start-2 row-span-2 w-[338px] h-[361px] px-[30px] soft-bg"
                    src={featureLogo1}
                    heading="Fully Intelligent Vehicle Systems"
                    desc="Seamlessly Interconnected Systems For Streamlined Vehicle Operation And Enhanced User Experience."
                />

                <FeaturesCard
                    className="col-start-3 row-start-2 row-span-2 w-[338px] h-[361px] px-[30px] soft-bg "
                    src={featureLogo2}
                    heading="Advanced Cooling System"
                    desc="Samarth EV offers cutting-edge features for a sustainable future..."
                />

                <FeaturesCard
                    className="col-start-3 row-start-4 row-span-2 w-[338px] h-[361px] px-[30px] soft-bg lg:mt-16"
                    src={featureLogo3}
                    heading="Reinforced & Lightweight Chassis"
                    desc="A Robust Chassis That Enhances Vehicle Durability And Crash Safety."
                />

                <FeaturesCard
                    className="col-start-2 row-start-5 row-span-2 w-[338px] h-[361px] px-[30px] soft-bg lg:mt-16"
                    src={featureLogo4}
                    heading="Reinforced & Lightweight Chassis"
                    desc="A Robust Chassis That Enhances Vehicle Durability And Crash Safety."
                />

                <FeaturesCard
                    className="col-start-1 row-start-4 row-span-2 w-[338px] h-[361px] px-[30px] soft-bg lg:mt-16"
                    src={featureLogo5}
                    heading="AI-Driven Battery BMS"
                    desc="An Advanced System That Optimizes Battery Performance And Lifespan Through AI."
                />

                <FeaturesCard
                    className="col-start-1 row-start-2 row-span-2 w-[338px] h-[361px] px-[30px] soft-bg"
                    src={featureLogo6}
                    heading="7-Inch Infotainment Display"
                    desc="A User-Friendly Touchscreen That Provides Access To Entertainment, Navigation, And Settings."
                />
            </div>
        </section>
    )
}

export default Features
