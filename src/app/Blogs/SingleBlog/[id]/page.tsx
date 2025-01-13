"use client";

import Image from "next/image";
import Comment from "../../../Comment/page";

export default async function SingleBlog({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  try {
    // Fetch the data based on the dynamic id
    const jsonData = await fetch("/info.json");
    const data1 = await jsonData.json();

    // Check if the id exists in the data
    const blog = data1[parseInt(id)];
    if (!blog) {
      return <div>Error: Blog not found</div>;
    }

    const selectedImage = blog.mainImage;

    // Fetch content data
    const contentFetch = await fetch("/content.json");
    const contentData = await contentFetch.json();
    const selectedContent = contentData[0];

    return (
      <>
        <div className="single-blog-outer-wrapper w-full">
          <div className="single-blog-inside w-[70%] mx-auto">
            <div className="image-container relative w-full h-[35vh] xs:h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[80vh]">
              <Image src={selectedImage} layout="fill" alt="blog1" />
            </div>

            <div className="content-div mt-10">
              {Object.keys(selectedContent).map((key, index) => {
                if (key.startsWith("heading")) {
                  const paraKey = `para${key.slice(-1)}`;
                  return (
                    <div key={index}>
                      <h1 className="mt-5 font-bold">
                        {selectedContent[key]}
                      </h1>
                      <p className="mt-5 text-gray-500">
                        {selectedContent[paraKey]}
                      </p>
                    </div>
                  );
                }
              })}
            </div>

            <Comment />
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error(error);
    return <div className="text-red-500">Error fetching data</div>;
  }
}
