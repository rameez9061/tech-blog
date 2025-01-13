"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Comment from "../../../Comment/page";
import { useRouter } from 'next/router';

interface BlogItem {
  id: number;
  title: string;
  author: string;
  date: string;
  heading: string;
  mainImage: string;
}

interface ContentItem {
  [key: string]: string;
}

const SingleBlog = () => {
  const router = useRouter();
  const { id } = router.query;

  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedContent, setSelectedContent] = useState<ContentItem | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!id || isNaN(Number(id))) {
        setError("Error: Invalid or missing ID");
        return;
      }

      try {
        const jsonData = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/info.json`);
        const data1: BlogItem[] = await jsonData.json();

        if (!data1[parseInt(id as string)]) {
          setError("Error: ID not found in data");
          return;
        }

        const selectedImage = data1[parseInt(id as string)].mainImage;
        setSelectedImage(selectedImage);

        const contentFetch = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/content.json`);
        const contentData: ContentItem[] = await contentFetch.json();
        setSelectedContent(contentData[0]);
      } catch (error) {
        setError(`Error fetching data: ${(error as Error).message}`);
      }
    };

    if (id) fetchData();
  }, [id]);

  if (!id) {
    return <div>Loading ID...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!selectedContent) {
    return <div>Loading Content...</div>;
  }

  return (
    <div className="single-blog-outer-wrapper w-full">
      <div className="single-blog-inside w-[70%] mx-auto">
        <div className="image-container relative w-full h-[35vh] xs:h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[80vh]">
          <Image src={selectedImage} layout="fill" alt="blog image" />
        </div>

        <div className="content-div mt-10">
          {Object.keys(selectedContent).map((key, index) => {
            if (key.includes('heading') && selectedContent[key]) {
              const paraKey = `para${key.slice(-1)}`;
              return (
                <div key={index}>
                  <h1 className="mt-5 font-bold">{selectedContent[key]}</h1>
                  <p className="mt-5 text-gray-500">{selectedContent[paraKey]}</p>
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
