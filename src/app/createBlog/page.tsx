"use client";
import React, { useRef, useState, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Import Quill styles
import {
  publishBlogPost,
  uploadImageToStorage,
} from "../../utils/fireStoreHelpers";

const CreateBlog = () => {
  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const quillInstanceRef = useRef<Quill | null>(null); // To store the Quill instance

  // Initialize Quill editor
  useEffect(() => {
    if (editorRef.current && !quillInstanceRef.current) {
      // Check if Quill has already been initialized
      const quill = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: {
            container: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline", "strike"], // toggled buttons
              ["blockquote", "code-block"],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ script: "sub" }, { script: "super" }], // superscript/subscript
              [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
              ["image"], // Option to add image
              ["clean"], // remove formatting button
            ],
            handlers: {
              image: () => handleImageUpload(quill), // Custom image upload handler
            },
          },
        },
      });

      quill.on("text-change", () => {
        setContent(quill.root.innerHTML); // Save the editor content as HTML
      });

      // Store the Quill instance in a ref
      quillInstanceRef.current = quill;
    }
  }, [editorRef]);
  const handleImageUpload = (quill: any) => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input?.files[0];
      if (file) {
        try {
          // Upload the image to Firebase and get the download URL
          const imageUrl = await uploadImageToStorage(file);
          // Insert the image URL into the editor
          const range = quill.getSelection();
          quill.insertEmbed(range.index, "image", imageUrl);
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      }
    };
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!title || !content) {
      alert("Please enter both title and content.");
      return;
    }

    console.log("clld>>");

    await publishBlogPost(title, content);
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
      <div ref={editorRef} style={{ height: "300px", margin: "20px 0" }} />
      <button type="submit" onClick={handleSubmit}>
        Publish Blog
      </button>
    </form>
  );
};

export default CreateBlog;
