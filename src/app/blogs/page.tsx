"use client";
import React from "react";
import Link from "next/link";
import { useFetchBlogs } from "../hooks/useFetchBlogs";
import "../blogList.css";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import { useState } from "react";
import { Chip, Group } from "@mantine/core";

const BlogList = () => {
  const { blogs, loading } = useFetchBlogs();
  const [value, setValue] = useState<string | null>("first");
  const handleChipClick = (event: React.MouseEvent<HTMLInputElement>) => {
    if (event.currentTarget.value === value) {
      setValue(null);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-b from-slate-800 to-slate-600">
      <Header sections={[]} socialIcons={[]} />
      {loading && (
        <div className="my-40 flex justify-center items-center">
          <Spinner animation="grow" variant="primary" />
        </div>
      )}

      {/* <Chip.Group multiple={false} value={value} onChange={setValue}>
        <Group>
          <Chip value="first" onClick={handleChipClick}>
            First
          </Chip>
          <Chip value="second" onClick={handleChipClick}>
            Second
          </Chip>
          <Chip value="third" onClick={handleChipClick}>
            Third
          </Chip>
        </Group>
      </Chip.Group> */}
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
