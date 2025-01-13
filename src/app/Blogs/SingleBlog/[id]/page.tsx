"use client"


import Image from 'next/image';
import Comment from "../../../Comment/page"



export default async function SingleBlog({ params, }: { params: Promise<{ id: string }> }){
     
  const { id } = await params;

  // Fetch the data based on the dynamic id
  const jsonData = await fetch("/info.json");
  const data1 = await jsonData.json();
  const selectedImage = data1[parseInt(id)].mainImage;

  const contentFetch = await fetch("/content.json");
  const contentData= await contentFetch.json();
  const selectedContent = contentData[0];
       return(
<>

    <div className="single-blog-outer-wrapper w-full">

        <div className="single-blog-inside w-[70%] mx-auto">
                     
                          
                          <div className="image-container relative w-full  h-[35vh] xs:h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[80vh]">
                        <Image src={selectedImage} layout="fill" alt="blog1" />
                      </div>
                      <div className="content-div mt-10 ">
                        <h1 className='mt-5 font-bold'>{selectedContent.heading1}</h1>
                        <p className='mt-5 text-gray-500'>{selectedContent.para1}</p>
                        <h1 className='mt-5 font-bold'>{selectedContent.heading2}</h1>
                        <p className='mt-5 text-gray-500'>{selectedContent.para2}</p>
                        <h1 className='mt-5 font-bold'>{selectedContent.heading3}</h1>
                        <p className='mt-5 text-gray-500'>{selectedContent.para3}</p>
                        <p className='mt-5 text-gray-500'>{selectedContent.para4}</p>
       <h1 className='mt-5 font-bold'>{selectedContent.heading4}</h1>
       <p className='mt-5 text-gray-500'>{selectedContent.para5}</p>
       <p className='mt-5 text-gray-500'>{selectedContent.para6}</p>
       <h1 className='mt-5 font-bold'>{selectedContent.heading5}</h1>
       <p className='mt-5 text-gray-500'>{selectedContent.para7}</p>
       <p className='mt-5 text-gray-500'>{selectedContent.para8}</p>
       <h1 className='mt-5 font-bold'>{selectedContent.heading6}</h1>
       <p className='mt-5 text-gray-500'>{selectedContent.para9}</p>
       <p className='mt-5 text-gray-500'>{selectedContent.para10}</p>
       <h1 className='mt-5 font-bold'>{selectedContent.heading7}</h1>
       <p className='mt-5 text-gray-500'>{selectedContent.para11}</p>
       <p className='mt-5 text-gray-500'>{selectedContent.para12}</p>
       <h1 className='mt-5 font-bold'>{selectedContent.heading8}</h1>
       <p className='mt-5 text-gray-500'>{selectedContent.para13}</p>
       <p className='mt-5 text-gray-500'>{selectedContent.para14}</p>
       <h1 className='mt-5 font-bold'>{selectedContent.heading9}</h1>
       <p className='mt-5 text-gray-500'>{selectedContent.para15}</p>
                             </div>
                          <Comment/>   
                   
        </div>

    </div>
  
</>

       );
}