import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const useFetchBlogs = (selectedTags) => {
  const [blogs, setBlogs] = useState([]);
  const [copyOfBlogs, setCopyOfBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blogsSnapshot, tagsSnapshot] = await Promise.all([
          getDocs(collection(db, "blogs")),
          getDocs(collection(db, "tags")),
        ]);

        const blogsList = blogsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const tagsList = tagsSnapshot.docs.map((doc) => ({
          ...doc.data(),
        }));

        setBlogs(blogsList);
        setCopyOfBlogs(blogsList);
        setTags(tagsList);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterData = () => {
      const validTags = selectedTags?.filter((item) => item?.isSelected);
      const tagIds = validTags?.map((tag) => tag.id);
      const filteredData =
        tagIds?.length > 0
          ? blogs?.filter((item) =>
              item.tags.some((tag) => tagIds.includes(tag.id))
            )
          : blogs;
      setCopyOfBlogs(filteredData);
    };
    filterData();
  }, [selectedTags]);

  return { blogs: copyOfBlogs, loading, tags, setLoading };
};
