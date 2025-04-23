import groupImg from '../assets/image/group.png'
import Button from '../UI/Button'

const Career = () => {
    return (
        <section id='career' className='text-white font-bdo container-custom my-[100px]'>
            <div className='flex items-center flex-col'>
                <h2 className="text-3xl sm:text-6xl sm:tracking-[-3px] sm:leading-[78px] max-w-[939px]">Drive the Future with Samarth EV®</h2>
                <p className="text-sm sm:text-lg sm:leading-[25.2px] text-[#FFFFFFCC] max-w-[700px] font-normal mt-4">Join hands with Samarth EV and be a part of the eco-friendly future. Whether you're looking to collaborate, explore our innovative products, or simply want to learn more about our mission, we're here to assist you.</p>
            </div>
            <figure>
                <img className='w-[1380px] h-[551px] rounded-[30px] mt-[50px]' src={groupImg} alt="group photo" />
            </figure>
                <Button className="mt-8 lg:mb-0 whitespace-nowrap">Get Revolution →</Button>
        </section>
    )
}

export default Career
