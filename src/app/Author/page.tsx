import Blogs from "../Blogs/page"
import Image from 'next/image';

export default function Author(){

    return(
<>
<div className="author-wrapper w-full">
    <div className="author-inner w-[70%] mx-auto mt-20 flex flex-col items-center">
        <div className="author-image w-[100px] h-[100px]" style={{borderRadius:'50%'}}>
            <Image src="/images/blog11.jpg" alt="author" style={{borderRadius:"50%"}} />
        </div>
        <div className="author-content flex flex-col items-center mt-5">
            <h1 className="text-3xl font-bold">Usman Asif</h1>
            <p className="mt-5 text-gray-500 text-center">I am a full stack developer and a blogger. I have been working in the field of web development for the past 5 years. I have worked on multiple projects and have a good understanding of web development technologies.I have worked on multiple projects and have a good understanding of web development technologies.I have worked on multiple projects and have a good understanding of web development technologies.I have worked on multiple projects and have a good understanding of web development technologies.I have worked on multiple projects and have a good understanding of web development technologies.</p>
        </div>
    </div>
</div>
<Blogs/>


</>

    );

     
}