"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Comment from "../../../Comment/page";
import { useParams } from 'react-router-dom';

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
  const { id } = useParams<{ id: string }>();

  // Initialize state hooks
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedContent, setSelectedContent] = useState<ContentItem | null>(null);
  const [error, setError] = useState<string | null>(null);

  // The hook for data fetching should always be called
  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        setError("Error: ID not found");
        return;
      }

      try {
        // Fetch the info.json data
        const jsonData = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/info.json`);
        const data1: BlogItem[] = await jsonData.json();
        const selectedImage = data1[parseInt(id)].mainImage;
        setSelectedImage(selectedImage);

        // Fetch the content.json data
        const contentFetch = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/content.json`);
        const contentData: ContentItem[] = await contentFetch.json();
        const selectedContent = contentData[0]; // Assuming you want the first content item
        setSelectedContent(selectedContent);
      } catch (error) {
        setError("Error fetching data: " + error);
      }
    };

    fetchData();
  }, [id]); // Ensure it triggers when `id` changes

  // Conditional rendering based on the state values
  if (error) {
    return <div>{error}</div>;
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
            if (key.includes('heading') && selectedContent[key as keyof ContentItem]) {
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
