import logo from '../assets/samarth-logo_2 1.svg'


const Footer = () => {
    return (
        <footer className="text-white font-bdo container-custom ">

            <div className="text-left flex flex-col md:flex-row justify-between items-start md:items-center">
                <h2 className="sm:text-[80px] text-5xl font-medium leading-[65px] sm:leading-[104px] tracking-[-2.5px] text-left max-w-[577px]">
                    Driving into the <br />
                    Future <span className="text-green-500">→</span>
                </h2>

                <div className="text-sm">
                    <h3 className="text-lg mt-3 md:mt-0 font-semibold mb-[10px]">Head Office</h3>
                    <address>Plot No 121, G.I.D.C. Kalol, Ta. Kalol, Dist. Gandhinagar, Gujarat, India - 382721</address>
                    <p className="my-[10px]">Phone: +91 7089269208</p>
                    <p>Email: info@samarthev.com</p>
                </div>
            </div>
            <div className="flex items-center justify-center gap-4 md:gap-0 text-center mt-[34px] text-sm flex-wrap md:flex-nowrap md:text-lg">
                <a href="#" className='block w-[170px]' ><img className='soft-bg p-[10px]' src={logo} alt="logo" /></a>
                <p className='w-full'>
                    © 2024 Samarth E-Mobility Powered By 
                    <a href="https://appsrow.com" className="underline">
                         Appsrow Solutions llp
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
