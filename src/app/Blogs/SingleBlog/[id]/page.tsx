"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Comment from "../../../Comment/page";

export default function SingleBlog({
  params,
}: {
  params: { id: string }; // params is directly an object, no need for a promise
}) {
  const [blog, setBlog] = useState<any>(null); // Blog state to store the fetched data
  const [content, setContent] = useState<any>(null); // Content state to store content data
  const [loading, setLoading] = useState<boolean>(true); // Loading state to show while fetching data
  const [error, setError] = useState<string | null>(null); // Error state for error handling

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch blog data
        const jsonData = await fetch("/info.json");
        const data1 = await jsonData.json();
        const blogData = data1[parseInt(params.id)]; // Get the specific blog by its index

        if (!blogData) {
          throw new Error("Blog not found");
        }

        setBlog(blogData);

        // Fetch content data
        const contentFetch = await fetch("/content.json");
        const contentData = await contentFetch.json();
        setContent(contentData[0]); // Assuming content is an array and you want the first element

        setLoading(false); // Data loaded
      } catch (error: any) {
        setError(error.message); // Set error message
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, [params.id]); // Dependency array ensures this runs when `params.id` changes

  if (loading) {
    return <div>Loading...</div>; // Show loading state while data is being fetched
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>; // Show error if there's an issue fetching data
  }

  if (!blog || !content) {
    return <div>Blog or content data not found.</div>;
  }

  return (
    <div className="single-blog-outer-wrapper w-full">
      <div className="single-blog-inside w-[70%] mx-auto">
        <div className="image-container relative w-full h-[35vh] xs:h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[80vh]">
          <Image src={blog.mainImage} layout="fill" alt="blog1" />
        </div>

        <div className="content-div mt-10">
          {Object.keys(content).map((key, index) => {
            if (key.startsWith("heading")) {
              const paraKey = `para${key.slice(-1)}`;
              return (
                <div key={index}>
                  <h1 className="mt-5 font-bold">{content[key]}</h1>
                  <p className="mt-5 text-gray-500">{content[paraKey]}</p>
                </div>
              );
            }
          })}
        </div>

        <Comment /> {/* Comment component to show comments */}
      </div>
    </div>
  );
}
