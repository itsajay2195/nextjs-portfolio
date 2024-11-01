// src/app/blog/[slug].tsx

"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { getBlogBySlug } from "@/utils/fireStoreHelpers";
import DOMPurify from "dompurify";
import "quill/dist/quill.snow.css";
// Import your fetching function

const BlogPage: React.FC = () => {
  const router = useRouter();
  //   const { slug } = router.query; // Access the slug from the route
  const pathname = usePathname();

  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let slug = pathname.split("/").pop();
    if (slug) {
      // Fetch blog data based on the slug
      getBlogBySlug(slug).then((data) => {
        console.log("data>>", data);
        setBlog(data);
        setLoading(false);
      });
    }
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!blog) return <p>Blog post not found.</p>;

  const sanitizedContent = DOMPurify.sanitize(blog?.content);
  return (
    <div style={styles.blogContainer}>
      <h1 style={styles.title}>{blog.title}</h1>
      <p style={styles.date}>
        Published on{" "}
        {new Date(blog.createdAt.seconds * 1000).toLocaleDateString()}
      </p>
      <div
        style={styles.content}
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      ></div>
    </div>
  );
};

const styles = {
  blogContainer: {
    margin: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  date: {
    color: "gray",
    fontSize: "14px",
    marginTop: "8px",
  },
  content: {
    marginTop: "20px",
    fontSize: "16px",
    lineHeight: 1.6,
  },
};
export default BlogPage;
