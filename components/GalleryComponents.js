import Image from 'next/image';
import Gallery_Main from '../images/Gallery.svg'
function GalleryComponents() {
    return (
        <div className="bg-[#24202d] pb-10 lg:pb-28 pt-10 lg:pt-32">
            <div className="container mx-auto px-4 lg:px-28  ">
                <div className='relative'>
                <div className="items-center justify-center flex flex-col text-center">
                <div className='w-[100px] h-[3px] bg-[#ff9776] absolute top-[110px] left-[35%] lg:top-[88px] lg:left-[45%]'></div>
                </div>
                    <h2 data-aos="fade-up" data-aos-duration="2000"className="text-[32px] lg:text-[48px] font-bold text-center  text-white mb-12">Find a cause you care about</h2>
                    <div data-aos="fade-down" data-aos-duration="2000" className='flex justify-center items-center'><Image className='drop-shadow-2xl' src={Gallery_Main} alt="Picture of the author" /></div>
                </div>
            </div>
        </div>
    );
}

export default GalleryComponents;