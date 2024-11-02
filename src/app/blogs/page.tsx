"use client";
import React from "react";
import Link from "next/link";
import { useFetchBlogs } from "../hooks/useFetchBlogs";
import "../blogList.css";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";

const BlogList = () => {
  const { blogs, loading } = useFetchBlogs();

  return (
    <div className="h-screen bg-gradient-to-b from-slate-800 to-slate-600">
      <Header sections={[]} socialIcons={[]} />
      {loading && (
        <div className="my-40 flex justify-center items-center">
          <Spinner animation="grow" variant="primary" />
        </div>
      )}

      {!loading && (
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
                    {new Date(
                      blog.createdAt.seconds * 1000
                    ).toLocaleDateString()}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BlogList;
