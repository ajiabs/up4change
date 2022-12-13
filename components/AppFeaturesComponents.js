import Image from 'next/image';
import App_Main from '../images/App-main.png'
import App_01 from '../images/App-01.svg'
import App_02 from '../images/App-02.svg'
import App_03 from '../images/App-03.svg'
import App_04 from '../images/App-04.svg'
function AppFeaturesComponents() {
    return (
        <div className="bg-[#f9cc69] pb-10 lg:pb-16 pt-10 lg:pt-16">
            <div className="container mx-auto px-4 lg:px-28  ">
                <div className="items-center justify-center flex flex-col text-center">
                    <div className='relative'>
                    <h2 className="text-[32px] lg:text-[48px]  font-bold text-center  text-[#230d4d] mb-12">App features</h2>
                    <div className='w-[100px] h-[3px] bg-[#230d4d] absolute top-[110px] left-[35%] lg:top-[88px] lg:left-[32%]'></div>
                    </div>

                    <div className="flex w-full flex-wrap">

                        <div className="w-full lg:w-1/3 pr-0 lg:pr-8">
                            <div>
                                <div className='items-center justify-center flex flex-col text-center'><Image src={App_01} alt="Picture of the author" /></div>
                                <h3 className='text-[#230d4d] font-bold text-[22px] text-center lg:text-right mt-[15px]'>Find charities that match your values</h3>
                                <p className='text-[#161f3d] text-[18px] font-semibold text-center lg:text-right leading-7 mt-[15px]'>Capture your interests and values during onboarding, tailoring the charities
                                    visible on the platform to those which fit their beliefs.</p>
                            </div>
                            <div>
                                <div className='mt-14 items-center justify-center flex flex-col text-center'><Image src={App_02} alt="Picture of the author" /></div>
                                <h3 className='text-[#230d4d] font-bold text-[22px] text-center lg:text-right mt-[15px]'>Discover the great work being done</h3>
                                <p className='text-[#161f3d] text-[18px] font-semibold text-center lg:text-right leading-7 mt-[15px]'>Learn about new organisations and see your 
                                funds at work through a central social feed. Direct your funds to your favorite charities ‘micro goals’ so 
                                they know what’s important to you!

</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 my-10 lg:my-0">
                            <div><Image className='drop-shadow-2xl' src={App_Main} alt="Picture of the author" /></div>
                        </div>
                        <div className="w-full lg:w-1/3 pl-0 lg:pl-8">
                        <div>
                                <div className='items-center justify-center flex flex-col text-center'><Image src={App_03} alt="Picture of the author" /></div>
                                <h3 className='text-[#230d4d] font-bold text-[22px] text-center lg:text-left mt-[15px]'>Automate your giving</h3>
                                <p className='text-[#161f3d] text-[18px] font-semibold text-center lg:text-left leading-7 mt-[15px]'>Link your debit card to the platform and 
                                round up a small amount on each transaction. Lots of little donations makes for a big impact.</p>
                            </div>
                            <div>
                                <div className='mt-14 items-center justify-center flex flex-col text-center'><Image src={App_04} alt="Picture of the author" /></div>
                                <h3 className='text-[#230d4d] font-bold text-[22px] text-center lg:text-left mt-[15px]'>Work together with others</h3>
                                <p className='text-[#161f3d] text-[18px] font-semibold text-center lg:text-left leading-7 mt-[15px]'>Join a group of people all working together 
                                towards a common goal. Whether you’re part of a school or another organization, you 
                                can pool resources and make massive change! It’s common cents!</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
}

export default AppFeaturesComponents;