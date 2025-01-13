// /pages/Blogs/SingleBlog/[id].tsx

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
        const selectedBlog = data.find((item) => item.id.toString() === id);
        setBlog(selectedBlog);
      };

      fetchBlog();
    }
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div>
      <h1>heading</h1>
      <p>paragrapogh</p>
      {/* Render other blog details */}
    </div>
  );
};

export default SingleBlog;
