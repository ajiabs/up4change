import Image from 'next/image';
import bp_01 from '../images/Banner_Pattern.svg'
import bs_01 from '../images/Banner_smile_1.svg'
import mb_01 from '../images/mb-01.png'
function BannerComponents() {
    return (
     <div className='bg-[#f9cc69] md:bg-[#f9cc69] lg:bg-[#24202d]'> 
    
    

<div className="flex relative">

                <div className="w-2/3  bg-none md:bg-none lg:bg-[url('../images/Banner_Pattern.svg')] bg-no-repeat bg-cover
                  items-start justify-start flex flex-col pt-36 pb-32 pl-5 sm:pl-14 md:pl-14 md:pb-16 lg:pb-40 lg:pl-14 xl:pl-40">
                    
                        <div data-aos="fade-up"  data-aos-duration="2000" className='pl-0 lg:pl-60'><Image src={bs_01} alt="Picture of the author" /></div>
                        <h3  data-aos="fade-down"  data-aos-duration="2000" className='text-[#230d4d] font-bold text-[32px] lg:text-[42px]  lg:text-left mt-[15px] leading-[42px] lg:leading-[55px]'>G’day Changemaker,<br></br> ready to shake up the world?</h3>
                        <p  data-aos="fade-up"  data-aos-duration="2000" className='text-[#161f3d] text-[20px] font-semibold  lg:text-left leading-8 mt-[15px]'>Transforming pocket change into big change.<br></br>
                            Are you Up 4 Change?</p>
                            <div className="mb-12">
                            <button className="shadow-lg bg-[#ff9776] mt-8 ml-1 h-[56px] px-16 font-bold text-[18px] text-white">LEARN MORE</button>
                    </div>   
                  
                    </div>

                           
                    <Image  data-aos="fade-up"  data-aos-duration="2000" className='absolute bottom-0 right-[205px] w-[45%]' src={mb_01} alt="Picture of the author" />
                    
  
</div>

        </div>
   );
}

export default BannerComponents;