import Image from 'next/image';
import bp_01 from '../images/Banner_Pattern.svg'
import bs_01 from '../images/Banner_smile_1.svg'
import mb_01 from '../images/mb-01.png'
function BannerComponents() {
    return (
     <div className='bg-[#f9cc69] lg:bg-[#24202d]'> 
     <div className="container mx-auto">
     <div className="flex relative">
<div className="bg-none lg:bg-[url('../images/Banner_Pattern.svg')] bg-no-repeat bg-cover w-full lg:w-[65%]">
   

                <div className="items-center justify-center flex flex-col text-center pt-36 pb-60 pl-1 lg:pb-40 lg:pl-40">
                    <div className='w-full'>
                        <div className='items-center justify-center flex flex-col text-center pr-0 lg:pr-60'><Image src={bs_01} alt="Picture of the author" /></div>
                        <h3 className='text-[#230d4d] font-bold text-[32px] lg:text-[42px] text-center lg:text-left mt-[15px] leading-[42px] lg:leading-[55px]'>G’day Changemaker,<br></br> ready to shake up the world?</h3>
                        <p className='text-[#161f3d] text-[20px] font-semibold text-center lg:text-left leading-8 mt-[15px]'>Transforming pocket change into big change.<br></br>
                            Are you Up 4 Change?</p>
                            <div className="mb-12 items-center justify-center lg:justify-start flex">
                            <button className="shadow-lg bg-[#ff9776] mt-8 ml-1 h-[56px] px-16 font-bold text-[18px] text-white">LEARN MORE</button>
                    </div>              
                     </div>
                    </div>
            </div>
        <div className='absolute right-[110px] lg:right-[158px] top-[629px] lg:top-[94px]'>
<div ><Image className='w-full lg:w-[92%]' src={mb_01} alt="Picture of the author" /></div>
</div>
</div>
</div>
        </div>
   );
}

export default BannerComponents;