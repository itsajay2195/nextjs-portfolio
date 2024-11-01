import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const useFetchBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogsRef = collection(db, "blogs");
      const blogsSnapshot = await getDocs(blogsRef);
      const blogsList = blogsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogsList);
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  return { blogs, loading };
};
