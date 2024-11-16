"use client";
import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  forwardRef,
} from "react";
import "quill/dist/quill.snow.css";
import {
  publishBlogPost,
  uploadImageToStorage,
} from "../../utils/fireStoreHelpers";
import dynamic from "next/dynamic";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const quillRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!title || !value) {
      alert("Please enter both title and content.");
      return;
    }
    await publishBlogPost(title, value);
  };

  useEffect(() => {
    setTimeout(async () => {
      if (typeof window === "undefined" || !quillRef.current) return;

      console.log("typeof", typeof window);
      // Initialize Quill
      const Quill = (await import("quill")).default;
      const quill = new Quill(quillRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, false] }], // Headers
            ["bold", "italic", "underline", "strike"], // Text formatting
            [{ list: "ordered" }, { list: "bullet" }], // Lists
            [{ script: "sub" }, { script: "super" }], // Subscript/Superscript
            [{ indent: "-1" }, { indent: "+1" }], // Indentation
            [{ direction: "rtl" }], // Text direction
            [{ size: ["small", false, "large", "huge"] }], // Font size
            [
              {
                color: [
                  "#e60000",
                  "#ff9900",
                  "#ffff00",
                  "#008a00",
                  "#0066cc",
                  "#9933ff",
                  "black",
                ],
              }, // Text colors
              {
                background: [
                  "#e60000",
                  "#ff9900",
                  "#ffff00",
                  "#008a00",
                  "#0066cc",
                  "#9933ff",
                  "black",
                ],
              }, // Background colors
            ], // Text color and background
            [{ font: [] }], // Font family
            [{ align: [] }], // Text alignment
            ["blockquote"], // Quote option
            ["image", "video", "code-block", "link"], // Media and links
            ["clean"], // Clear formatting
          ],
        },
      });

      // Handle content change
      quill.on("text-change", () => {
        setValue(quill.root.innerHTML);
        console.log("Content changed:", quill.root.innerHTML);
      });

      // Add custom image handler to the toolbar
      const toolbar: any = quill.getModule("toolbar");
      toolbar.addHandler("image", () => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async () => {
          if (input.files && input.files[0]) {
            const file = input.files[0];
            try {
              const imageUrl = await uploadImageToStorage(file); // Upload image and get URL
              const range = quill.getSelection(); // Get the current cursor position
              if (range) {
                quill.insertEmbed(range.index, "image", imageUrl); // Insert the image into the editor
              }
            } catch (error) {
              console.error("Error uploading image:", error);
            }
          }
        };
      });
    }, 2000);

    // Cleanup on component unmount
    // return () => {
    //   quill.off("text-change");
    // };
  }, []);

  console.log("quil ref>>>>,", quillRef?.current);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <div ref={quillRef} style={{ height: "500px" }} />
      <button type="submit">Publish Blog</button>
    </form>
  );
};

export default CreateBlog;
