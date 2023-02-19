import Image from 'next/image';
import R_01 from '../images/R-01.svg'
function WeComponents() {
    return ( 
        <div className="bg-[#24202d]">
            <div className="container mx-auto px-4 lg:px-48">
                <div className="items-center justify-center flex flex-col text-center">

                <div className="mt-10 lg:mt-44 mb-10 lg:mb-52">
                        <h2 data-aos="fade-up"  data-aos-duration="2000" className="text-[32px] lg:text-[48px]  font-bold text-center  text-white">We 
                       &#10084; generous people</h2>
                        <p  data-aos="fade-down"  data-aos-duration="2000" className="text-[18px] lg:text-[24px] font-semobold text-center mb-5 mt-3 text-white">Up 4 Change is a 
                        social &apos;round up&apos; donation platform that provides a simple way for charities to immediately 
                        connect with potential donors through an engaging digital experience.</p>
                     </div>

                </div>
            </div>
        </div>
     );
}

export default WeComponents;