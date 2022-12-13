import Image from 'next/image';
import Logo_Fotter from '../images/footer-logo.svg'
function FooterComponents() {
    return (
        <div className='bg-black pt-[3rem] lg:pt-10 pb-[2rem] lg:pb-10'>
            <div className="container mx-auto px-4 lg:px-28 ">
                <div className="flex flex-wrap ">
                    <div className="w-full lg:w-1/3 items-center justify-center flex  text-center" >
                        <div><Image src={Logo_Fotter} alt="Picture of the author" /></div>
                    </div>
                    <div className="w-full lg:w-2/3 items-center justify-center lg:justify-start flex  text-center lg:text-start pt-[2rem] lg:pt-0">
                        <ul className='text-white items-center justify-center flex flex-wrap text-[20px] font-semibold'>
                            <li className='pr-5'><p>About</p></li>
                            <li className='pr-5'><p>How to donate</p></li>
                            <li className='pr-5'><p>Charities</p></li>
                            <li className='pr-5'><p>Features</p></li>
                            <li className='pr-5'><p>Contact</p></li>
                        </ul>
                    </div>

                </div>
                
            </div>
            <div className='w-full text-center text-white font-normal text-[12px] pt-[2rem] pb-[2rem]'>
                    <p>Copyright © 2021 Up4Change. All rights reserved</p>
                </div>
        </div>
    );
}

export default FooterComponents;