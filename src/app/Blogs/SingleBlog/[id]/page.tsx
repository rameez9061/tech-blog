// /pages/Blogs/SingleBlog/[id].tsx
"use client"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
interface BlogItem {
  id: number;
  title: string;
  heading: string;
  author: string;
  date: string;
  mainImage: string;
  avatar: string;
}
const SingleBlog = () => {
  const router = useRouter();
  const { id } = router.query;

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch the blog data based on the id
      const fetchBlog = async () => {
        const res = await fetch("/info.json");
        const data = await res.json();
        const selectedBlog = data.find((item:BlogItem) => item.id.toString() === id);
        setBlog(selectedBlog);
      };

      fetchBlog();
    }
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div>
      <h1>HEADING</h1>
      <p>PRODUCT</p>
      {/* Render other blog details */}
    </div>
  );
};

export default SingleBlog;
