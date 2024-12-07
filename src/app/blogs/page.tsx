"use client";
import React, { useCallback, useEffect } from "react";
import Link from "next/link";
import { useFetchBlogs } from "../hooks/useFetchBlogs";
import "../blogList.css";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import { useState } from "react";
import Chip from "../components/Chip";
import AutoComplete from "../components/AutoComplete";

const BlogList = () => {
  const [value, setValue] = useState<string | null>("first");
  const [selectedTags, setSelectedTags] = useState<any[]>([]);
  const { blogs, loading, tags } = useFetchBlogs(selectedTags);

  const onItemSelected = useCallback(
    (item: any) => {
      const filteredTag: any[] = tags?.filter((tag: any) => tag.value === item);
      setSelectedTags((prev: any[]) => {
        const dataToCheck = filteredTag?.[0];
        const indexOfSelected = prev?.findIndex(
          (prevTag: any) => prevTag.id === dataToCheck?.id
        );
        if (indexOfSelected > -1) {
          let result = JSON.parse(JSON.stringify(prev));
          result[indexOfSelected].isSelected =
            !result[indexOfSelected].isSelected;
          // console.log("result is", result);
          return result;
        } else {
          return [...prev, { ...dataToCheck, isSelected: true }];
        }
      });
    },
    [tags]
  );

  return (
    <div className="h-screen bg-gradient-to-b from-slate-800 to-slate-600 overflow-scroll">
      <Header sections={[]} socialIcons={[]} />
      {loading && (
        <div className="my-40 flex justify-center items-center">
          <Spinner animation="grow" variant="primary" />
        </div>
      )}

      {!loading && (
        <div className="blog-list-container">
          <h1>Latest Blog Posts</h1>
          <AutoComplete
            data={tags}
            placeholder={"Search by tags..."}
            onItemSelected={onItemSelected}
          />
          {selectedTags?.length > 0 ? (
            <div style={{ marginTop: 18 }}>
              <Chip data={selectedTags} onPress={onItemSelected} />
            </div>
          ) : null}
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
                  <Chip data={blog.tags} />
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
