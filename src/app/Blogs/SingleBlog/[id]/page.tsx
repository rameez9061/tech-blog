"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Comment from "../../../Comment/page";

interface BlogItem {
  id: number;
  title: string;
  author: string;
  date: string;
  heading: string;
  mainImage: string;
}

interface ContentItem {
  [key: string]: string; // To allow dynamic key-value pairs
}

const SingleBlog = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedContent, setSelectedContent] = useState<ContentItem | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        setError("Error: Missing ID");
        return;
      }

      try {
        // Fetch the info.json data
        const jsonData = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/info.json`);
        const data1: BlogItem[] = await jsonData.json();

        const blog = data1.find((item) => item.id === parseInt(id));
        if (!blog) {
          setError("Error: Blog not found");
          return;
        }

        setSelectedImage(blog.mainImage);

        // Fetch the content.json data
        const contentFetch = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/content.json`);
        const contentData: ContentItem[] = await contentFetch.json();
        setSelectedContent(contentData[0]);
      } catch (error) {
        if (error instanceof Error) {
          setError(`Error fetching data: ${error.message}`);
        } else {
          setError("An unknown error occurred.");
        }
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
          <Image
            src={selectedImage || "/fallback-image.jpg"}
            layout="fill"
            alt="blog image"
          />
        </div>

        <div className="content-div mt-10">
          {Object.keys(selectedContent).map((key, index) => {
            if (key.startsWith("heading") && selectedContent[key]) {
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
