import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../firebaseConfig";
import {
  collection,
  addDoc,
  Timestamp,
  query,
  where,
  getDocs,
  limit,
} from "firebase/firestore";
// export const uploadImageToStorage = async (image) => {
//   console.log("image>>>>", image);
//     const imageBlobUrl = image?.imgUrl || image;
//     // Convert the blob URL to a file object
//     const blob = await fetch(imageBlobUrl).then((r) => r.blob());
//     const imageName = `sellorder-${Date.now()}.jpg`; // Generate a unique name for the image

//     // Create a storage reference
//     const storageRef = ref(storage, imageName);

//     // Upload the file to Firebase Storage
//     const snapshot = await uploadBytes(storageRef, blob);

//     // Get the download URL for the uploaded image
//     const downloadURL = await getDownloadURL(snapshot.ref);
//     console.log("downloadURL>>>", downloadURL);
//     return downloadURL;
// };

export const uploadImageToStorage = async (image) => {
  let blob;

  // Check if the image is a file (from an input field) or a URL (like blob URL)
  if (image instanceof File) {
    // If it's a file object, use it directly
    blob = image;
  } else {
    // Otherwise, assume it's a URL (e.g., blob URL) and fetch the blob
    const imageBlobUrl = image?.imgUrl || image;
    blob = await fetch(imageBlobUrl).then((r) => r.blob());
  }

  const imageName = `sellorder-${Date.now()}.jpg`; // Generate a unique name for the image

  // Create a storage reference
  const storageRef = ref(storage, imageName);

  // Upload the file to Firebase Storage
  const snapshot = await uploadBytes(storageRef, blob);

  // Get the download URL for the uploaded image
  const downloadURL = await getDownloadURL(snapshot.ref);
  console.log("downloadURL>>>", downloadURL);
  return downloadURL;
};

export const publishBlogPost = async (title, content, author = "Ajaykumar") => {
  try {
    // Reference the collection where blog posts are stored
    const blogCollectionRef = collection(db, "blogs");

    // Get the existing blogs to determine the current count
    const blogSnapshot = await getDocs(blogCollectionRef);
    const blogCount = blogSnapshot.size; // Get the number of existing blogs

    // Increment the blog count to create the new ID
    const newBlogId = blogCount + 1;

    // Structure the blog data
    const blogData = {
      id: newBlogId?.toString(),
      title,
      content, // HTML or rich text content
      author,
      createdAt: Timestamp.now(),
    };

    // Add the document to Firestore
    const docRef = await addDoc(blogCollectionRef, blogData);

    console.log("Blog published with ID:", docRef.id);
    alert("Blog published successfully!");
  } catch (error) {
    console.error("Error publishing blog:", error);
    alert("Error publishing blog. Please try again.");
  }
};

export const fetchBlog = async (blogId) => {
  const blogRef = doc(db, "blogs", blogId);
  const blogSnap = await getDoc(blogRef);
  if (blogSnap.exists()) {
    return blogSnap.data();
  } else {
    return null;
  }
};

export const getBlogBySlug = async (id) => {
  console.log("id is", id);
  const blogRef = collection(db, "blogs");
  const q = query(blogRef, where("id", "==", id), limit(1)); // Build the query

  const blogSnap = await getDocs(q); // Execute the query

  if (!blogSnap.empty) {
    const blogData = blogSnap.docs[0].data();
    return blogData;
  }
  throw new Error("Blog not found");
};
