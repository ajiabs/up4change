function SubscribeComponents() {
    return (

        <div className="bg-[#fc8965]">
            <div className="container mx-auto px-5 lg:px-28  ">
                <div className="items-center justify-center flex flex-col text-center">
                    <div data-aos="fade-up" data-aos-duration="2000" className="mt-8 lg:mt-20 mb-12 lg:mb-28">
                        <h2 className="text-[31px] lg:text-[36px]  font-bold text-center  text-[#230d4d]">Ready to get started?</h2>
                        <p className="text-[18px] font-medium text-center mb-5 mt-3 text-[#161f3d]">Up 4 Change will be live soon but we&apos;d love you to connect and stay in the loop to start making change NOW!</p>
                        <div>
                            <form action="/send-data-here" method="post" className="mt-9">
                                <input className='dark:placeholder-gray-400 h-11 w-[10rem] lg:w-72 mr-3 border-hidden' type="text" id="last" name="last" placeholder='Email' />
                                <button className="bg-[#230d4d]  ml-1 h-11 px-5 font-semibold text-[16px] text-white">Subscribe</button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubscribeComponents;