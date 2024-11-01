// // src/app/blog/page.tsx

// import Link from "next/link";
// import { getSortedPostsData } from "../../libs/post"; // Adjust the path as necessary

// export default async function Blog() {
//   const allPostsData = getSortedPostsData(); // Fetch the posts directly in the component

//   return (
//     <section>
//       <h1>Blog</h1>
//       <ul>
//         {allPostsData.map(({ slug, title, date }: any) => (
//           <li key={slug}>
//             <Link href={`/blog/${slug}`}>{title}</Link>
//             <br />
//             <small>{date}</small>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }
"use client";
import React from "react";
import Link from "next/link";
import { useFetchBlogs } from "../hooks/useFetchBlogs";
import "../blogList.css";

const BlogList = () => {
  const { blogs, loading } = useFetchBlogs();

  if (loading) return <p>Loading...</p>;

  console.log("blogs>>", blogs);

  return (
    <div className="blog-list-container">
      <h1>Latest Blog Posts</h1>
      <ul className="blog-list">
        {blogs.map((blog: any, index: any) => (
          <li key={blog?.id || index} className="blog-item">
            <Link href={`/blog/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
              <p className="blog-date">
                Published on{" "}
                {new Date(blog.createdAt.seconds * 1000).toLocaleDateString()}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
