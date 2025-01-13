"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Comment from "../../../Comment/page";
import { usePathname } from "next/navigation";

interface BlogItem {
  id: number;
  title: string;
  author: string;
  date: string;
  heading: string;
  mainImage: string;
}

interface ContentItem {
  heading1: string;
  para1: string;
  heading2: string;
  para2: string;
  heading3: string;
  para3: string;
  heading4: string;
  para4: string;
  heading5: string;
  para5: string;
  heading6: string;
  para7: string;
  para8: string;
  heading7: string;
  para9: string;
  para10: string;
  heading8: string;
  para11: string;
  para12: string;
  heading9: string;
  para13: string;
  para14: string;
  para15: string;
}

const SingleBlog = () => {
  const pathname = usePathname(); // Get the current path
  const id = pathname.split("/").pop(); // Extract the dynamic `id` from the path

  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedContent, setSelectedContent] = useState<ContentItem | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        setError("Error: ID not found");
        return;
      }

      try {
        const jsonData = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/info.json`);
        const data1: BlogItem[] = await jsonData.json();

        if (!data1[parseInt(id)]) {
          setError("Error: ID not found in data");
          return;
        }

        const selectedImage = data1[parseInt(id)].mainImage;
        setSelectedImage(selectedImage);

        const contentFetch = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/content.json`);
        const contentData: ContentItem[] = await contentFetch.json();
        setSelectedContent(contentData[0]);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error occurred.");
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!selectedContent) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-blog-outer-wrapper w-full">
      <div className="single-blog-inside w-[70%] mx-auto">
        <div className="image-container relative w-full h-[35vh] xs:h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[80vh]">
          <Image src={selectedImage} layout="fill" alt="blog image" />
        </div>

        <div className="content-div mt-10">
          {Object.keys(selectedContent).map((key, index) => {
            if (key.includes("heading") && selectedContent[key as keyof ContentItem]) {
              const paraKey = `para${key.slice(-1)}`;
              return (
                <div key={index}>
                  <h1 className="mt-5 font-bold">{selectedContent[key as keyof ContentItem]}</h1>
                  <p className="mt-5 text-gray-500">{selectedContent[paraKey as keyof ContentItem]}</p>
                </div>
              );
            }
          })}
        </div>

        <Comment />
      </div>
    </div>
  );
};

export default SingleBlog;
