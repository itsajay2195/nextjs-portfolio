"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import "quill/dist/quill.snow.css";
import {
  publishBlogPost,
  uploadImageToStorage,
} from "../../utils/fireStoreHelpers";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CreateBlog = () => {
  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const handleImageUpload = useCallback(async () => {
    console.log;
    const quill = editorRef.current; // Use Quill instance from editorRef

    console.log("log is", editorRef?.current);
    // if (typeof document !== "undefined") {
    //   const input = document.createElement("input");
    //   input.setAttribute("type", "file");
    //   input.setAttribute("accept", "image/*");
    //   input.click();

    //   input.onchange = async () => {
    //     if (input.files && input.files[0]) {
    //       const file = input.files[0];
    //       try {
    //         const imageUrl = await uploadImageToStorage(file);
    //         const range = quill?.getSelection(true); // Get current selection
    //         if (range) {
    //           quill.insertEmbed(range.index, "image", imageUrl); // Insert image at cursor
    //           setValue(quill.root.innerHTML); // Update state to reflect the new content
    //         }
    //       } catch (error) {
    //         console.error("Error uploading image:", error);
    //       }
    //     }
    //   };
    // }
  }, [editorRef]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !value) {
      alert("Please enter both title and content.");
      return;
    }

    await publishBlogPost(title, value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <ReactQuill
        ref={editorRef}
        theme="snow"
        value={value}
        onChange={setValue}
        modules={{
          toolbar: {
            container: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline", "strike"],
              ["blockquote", "code-block"],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ script: "sub" }, { script: "super" }],
              [{ indent: "-1" }, { indent: "+1" }],
              ["image"],
              ["clean"],
            ],
            handlers: {
              image: handleImageUpload,
            },
          },
        }}
      />
      <button type="submit">Publish Blog</button>
    </form>
  );
};

export default CreateBlog;
