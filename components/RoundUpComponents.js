import Image from 'next/image';
import App_Main from '../images/App-main.png'
import R_01 from '../images/R-01.svg'
import R_02 from '../images/R-02.svg'
import R_03 from '../images/R-03.svg'
import R_04 from '../images/R-04.svg'
import BG_01 from '../images/bg-01-t.png'
import BG_02 from '../images/bg-02-b.png'
function RoundUpComponents() {
    return (
        <div className="orange_bg pb-10 lg:pb-16 pt-4 lg:pt-16 relative">
            <div className='absolute top-0 right-0'><Image src={BG_01} alt="Picture of the author" /></div>
            <div className='absolute bottom-0 left-0'><Image src={BG_02} alt="Picture of the author" /></div>
            
            <div className="container mx-auto px-4 lg:px-40 pt-3 lg:pt-12  ">
                <div className="items-center justify-center flex flex-col text-center">
                    <div data-aos="fade-up"  data-aos-duration="2000" className='relative'><h2 className="text-[32px] lg:text-[48px] px-10 lg:px-0 font-bold text-center  head_text_main pb-10 lg:pb-40">Round-up in 4 simple steps.</h2>
                    <div className='w-[100px] h-[3px] under_line_bg absolute top-[110px] left-[35%] lg:top-[88px] lg:left-[45%]'></div>
                    </div>
                    
                       <div className="flex flex-col-reverse lg:flex-row w-full pb-0 lg:pb-36 flex-wrap ">

                        <div data-aos="fade-up"  data-aos-duration="2000" className="w-full lg:w-1/2 pr-8">
                            <div className='relative'>
                                <h1 className='text-[200px] absolute font-semibold  text-white opacity-25 top-[-138px]'>1</h1>
                                <h3 className='head_text_main font-semibold text-[26px] lg:text-[36px] leading-[32px] lg:leading-[50px] text-left mt-[15px]'>Choose a cause you care <br></br>about.</h3>
                                <p className='sub_head_text_main text-[14px] lg:text-[18px] font-semibold text-left leading-[25px] lg:leading-[36px] mt-[15px]'>Connect with causes
                                    you care about through a centralised tailored social feed. Add them to your favourites!</p>
                            </div>

                        </div>
                        <div className="w-full lg:w-1/2 pr-8">
                            <div>
                                <div data-aos="fade-down" data-aos-duration="2000" className='items-center justify-center flex flex-col text-center h-60'><Image src={R_01} alt="Picture of the author" /></div>

                            </div>

                        </div>
                    </div>

                    <div className="flex w-full pb-0 lg:pb-36 flex-wrap">
                        <div data-aos="fade-up" data-aos-duration="2000" className="w-full lg:w-1/2 pr-8">
                            <div>
                                <div className='items-center justify-center flex flex-col text-center h-[200px] lg:h-60'><Image src={R_02} alt="Picture of the author" /></div>

                            </div>

                        </div>

                        <div data-aos="fade-down" data-aos-duration="2000" className="w-full lg:w-1/2 pr-8">
                            <div className='relative'>
                            <h1 className='text-[200px] absolute font-semibold  text-white opacity-25 right-[0px] top-[-138px]'>2</h1>
                                <h3 className='head_text_main font-semibold text-[26px] lg:text-[36px] leading-[32px] lg:leading-[50px] text-left lg:text-right mt-[15px]'>Tell us what amount you want <br></br>to round up to.</h3>
                                <p className='sub_head_text_main text-[14px] lg:text-[18px] font-semibold text-left lg:text-right leading-[25px] lg:leading-[36px] mt-[15px]'>Select round up limits for each 
                                transaction as well as monthly limits.You can also choose a one-off donation.</p>
                            </div>

                        </div>

                    </div>

                    <div className="flex w-full pb-0 lg:pb-36 flex-wrap flex-col-reverse lg:flex-row">

                        <div data-aos="fade-down" data-aos-duration="2000" className="w-full lg:w-1/2 pr-8">
                        <div className='relative'>
                            <h1 className='text-[200px] absolute font-semibold  text-white opacity-25 top-[-138px]'>3</h1>
                                <h3 className='head_text_main font-semibold text-[26px] lg:text-[36px] leading-[32px] lg:leading-[50px] text-left mt-[15px]'>Securely link your everyday <br></br>transaction account and spend <br></br>normally!</h3>
                                <p className='sub_head_text_main text-[14px] lg:text-[18px] font-semibold text-left leading-[25px] lg:leading-[36px] mt-[15px]'>Up 4 Change seamlessly rounds up your transactions in the background to the 
                                nearest $1 and automatically donates your spare change to your preferred charity.</p>
                            </div>

                        </div>
                        <div className="w-full lg:w-1/2 pr-8">
                            <div>
                                <div data-aos="fade-up" data-aos-duration="2000" className='items-center justify-center flex flex-col text-center h-60'><Image src={R_03} alt="Picture of the author" /></div>

                            </div>

                        </div>
                    </div>

                    <div className="flex w-full pb-0 lg:pb-36 flex-wrap">
                        <div className="w-full lg:w-1/2 pr-8">
                            <div>
                                <div data-aos="fade-down" data-aos-duration="2000" className='items-center justify-center flex flex-col text-center h-60'><Image src={R_04} alt="Picture of the author" /></div>

                            </div>

                        </div>

                        <div data-aos="fade-down" data-aos-duration="2000" className="w-full lg:w-1/2 pr-8 flex-wrap">
                        <div className='relative'>
                            <h1 className='text-[200px] absolute font-semibold  text-white opacity-25 right-[0px] top-[-138px]'>4</h1>
                                <h3 className='head_text_main font-semibold text-[26px] lg:text-[36px] leading-[32px] lg:leading-[50px] text-left lg:text-right mt-[15px]'>Have a say in where your <br></br>funds go!</h3>
                                <p className='sub_head_text_main text-[14px] lg:text-[18px] font-semibold text-left lg:text-right leading-[25px] lg:leading-[36px] mt-[15px]'>Have the choice to direct your<br></br>
                                 funds to your favorite charities ‘micro goals’ so they know what’s important to you and where you want your funds to go!</p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default RoundUpComponents;