"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogItem {
  id: number;
  title: string;
  heading: string;
  author: string;
  date: string;
  mainImage: string;
  avatar: string;
}

const Blogs = () => {
  const [data, setData] = useState<BlogItem[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(" https://tech-blog-n1s9.vercel.app/info.json"); // This assumes your info.json is in the public folder
      const data: BlogItem[] = await res.json();
      setData(data);
    };

    fetchBlogs();
  }, []); // Runs only once on initial render

  return (
    <>
      <div className="outer-blogs-wrapper w-full mt-20 xs:mt-40">
        <div className="inside-blog-wrapper w-[70%] mx-auto">
          <div className="heading">
            <h1 className="font-black">Latest Blogs</h1>
          </div>
          <div className="all-blogs-div w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-3">
            {data.map((item: BlogItem) => (
              <div
                key={item.id}
                className="blog h-[400px] shadow-2xl shadow-gray-400"
                style={{ borderBottomLeftRadius: "5%", borderBottomRightRadius: "5%" }}
              >
                <div className="image-div relative w-full h-[50%]" style={{ borderTopRightRadius: '5%', borderTopLeftRadius: "5%" }}>
                  <Image src={item.mainImage} layout="fill" alt="blog1" style={{ borderTopRightRadius: '5%', borderTopLeftRadius: "5%" }} />
                </div>
                <div className="information mt-8 px-2">
                  <span className="text-blue-500 text-[3vw] xs:text-[2vw] md:text-[1.5vw]">{item.title}</span>
                  <Link href={`/Blogs/SingleBlog/${item.id}`}>
                    <h1 className="font-bold leading-tight mt-2">The Impact of Technology on workplace How Technology is Changing</h1>
                  </Link>
                  <div className="footer-info flex gap-2 xs:gap-3 mt-5 items-center md:mt-3">
                    <div className="image-info relative w-[7vw] h-[7vw] md:h-[5vw] md:w-[5vw] lg:w-[3vw] lg:h-[3vw]" style={{ borderRadius: '50%' }}>
                      <Image src="/images/blog11.jpg" layout="fill" alt="profile" style={{ borderRadius: "50%" }} />
                    </div>
                    <h1 className='text-[3vw] sm:text-[2vw] md:text-[1.3vw] lg:text-[0.8vw]'>Jason Fransisco</h1>
                    <p className='text-[3vw] sm:text-[2vw] md:text-[1.3vw] lg:text-[0.8vw]'>August 20, 2022</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
