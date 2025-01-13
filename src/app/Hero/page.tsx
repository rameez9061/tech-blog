import Image from 'next/image';


export default function Hero(){
    return(

        <>
        <div className="wrapper-hero w-full  mt-5">
            <div className="inside-wrapper relative w-[70%] h-[35vh] xs:h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[80vh]  mx-auto">
<Image src="/images/blog1.jpg" layout="fill"  alt="hero" />
       <div className="info-container w-[45vw] lg:w-[35vw] h-[25vw] md:h-[20vw] absolute top-[65%] md:top-[65%] lg:top-[55%] xs:top-[60%] sm:top-[50%] left-3 xs:left-5 z-30 bg-white px-2 sm:px-4  xs:py-1 sm:py-3 lg:py-8 lg:px-5 rounded-lg lg:rounded-2xl drop-shadow-2xl shadow-black">
   <span className='bg-blue-500 rounded-xl px-2 py-1 text-white text-[1.5vw]'>Technology</span>
   <h1 className='font-black mt-1 text-[2vw] md:text-[1.8vw] md:mt-3'>The Impact of Technology on workplace How Technology is Changing</h1>
   <div className="footer-info flex gap-2 mt-1 items-center md:mt-3">
    <div className="image-info relative w-[5vw] h-[4vw] lg:w-[3vw] lg:h-[3vw]" style={{borderRadius:'50%'}}>
        <Image src="/images/blog11.jpg" layout="fill" alt="profile" style={{borderRadius:"50%"}} />
    </div>
        <h1 className='text-[2vw] lg:text-[1vw]'>Jason Fransisco</h1>
        <p className='text-[2vw] lg:text-[1vw]'>August 20 , 2022</p>
   </div>
       </div>
            </div>
        </div>
        </>
    );
}