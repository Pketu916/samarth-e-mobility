import Button from '../UI/Button'
import reel1 from '../assets/video/reel1.mp4'
import reel2 from '../assets/video/reel2.mp4'
import reel3 from '../assets/video/reel3.mp4'

const LifeAtSamarth = () => {

    return (
        <section id='lifeAtSamarth' className='text-white font-bdo container-custom my-[100px]'>
            <div className='flex flex-col items-center text-center'>
                <h2 className="text-3xl sm:text-6xl sm:tracking-[-3px] sm:leading-[78px] max-w-[917px]">Living the Samarth EV Experience</h2>
                <p className="text-sm sm:text-lg sm:leading-[25.2px] text-[#FFFFFFCC] max-w-[634px] font-normal mt-4">Immerse yourself in a journey of innovation, sustainability, and comfort. At Samarth EV, we redefine mobility with advanced technology, eco-friendly solutions, and an unparalleled commitment to excellence.</p>
            </div>
            <div className='flex justify-between max-w-[966px] mt-[50px] mb-8 mx-auto overflow-auto snap-x snap-mandatory scrollbar-none'>
                <video
                    className="border-[5px] border-[#FFFFFF0D] rounded-[26px] snap-start"
                    src={reel1}
                    width="296"
                    height="524"
                    autoPlay
                    loop
                    controls
                    playsInline
                    muted
                >
                </video>
                <video
                    className="border-[5px] border-[#FFFFFF0D] rounded-[26px] snap-start"
                    src={reel2}
                    width="296"
                    height="524"
                    autoPlay
                    loop
                    controls
                    playsInline
                    muted
                >
                </video>
                <video
                    className="border-[5px] border-[#FFFFFF0D] rounded-[26px] snap-start"
                    src={reel3}
                    width="296"
                    height="524"
                    autoPlay
                    loop
                    controls
                    playsInline
                    muted
                >
                </video>
            </div>
            <Button>Get Revolution →</Button>

        </section>
    )
}

export default LifeAtSamarth
