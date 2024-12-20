// src/app/blog/[slug].tsx

"use client";
import "quill/dist/quill.snow.css";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { getBlogBySlug } from "@/utils/fireStoreHelpers";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/app/components/Header";
import Head from "next/head";
import Layout from "@/app/components/Layout";

// Import your fetching function

const BlogPage: React.FC = () => {
  const router = useRouter();
  //   const { slug } = router.query; // Access the slug from the route
  const pathname = usePathname();

  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let slug = pathname.split("/").pop();
    if (slug) {
      // Fetch blog data based on the slug
      getBlogBySlug(slug).then((data) => {
        setBlog(data);
        setLoading(false);
      });
    }
  }, [pathname]);

  // if (loading) return <Spinner animation="grow" variant="primary" />;
  // if (!blog) return <p>Blog post not found.</p>;
  // Convert Quill Delta to HTML

  return (
    <Layout>
      <div className="h-screen overflow-scroll bg-gradient-to-b  from-slate-800 to-slate-600">
        <Header sections={[]} socialIcons={[]} />
        {loading && (
          <div className="flex justify-center items-center">
            <Spinner animation="grow" variant="primary" />
          </div>
        )}

        {!loading && !blog && (
          <div className="h-screen flex justify-center items-center">
            <p>Blog post not found.</p>
          </div>
        )}

        {blog && blog?.content && (
          // <div className=" mx-24 py-10  ">
          <div className="mx-[5%] sm:mx-[5%] lg:mx-auto lg:w-[90%] py-10">
            <Head>
              <title>{blog?.title} - Ajaykumar Rajasekaran</title>
              <meta
                name="keywords"
                content={`${blog?.title}, Ajaykumar Rajasekaran`}
              />
              <meta
                property="og:title"
                content={`${blog?.title} - React Native Insights`}
              />
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    name: "Ajaykumar Rajasekaran",
                    url: "https://ajayrne.com",
                    jobTitle: "React Native Developer",
                    sameAs: [
                      "https://www.linkedin.com/in/itsajaykumar/",
                      "https://github.com/itsajay2195",
                    ],
                  }),
                }}
              />
            </Head>
            <h1 style={styles.title}>{blog.title}</h1>
            <p style={styles.date}>
              Published on{" "}
              {new Date(blog.createdAt.seconds * 1000).toLocaleDateString()}
            </p>
            <div
              className="ql-editor"
              dangerouslySetInnerHTML={{
                __html: blog?.content,
              }} // Render converted HTML
            ></div>
          </div>
        )}
      </div>
    </Layout>
  );
};

const styles = {
  blogContainer: {
    margin: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "white",
  },
  date: {
    color: "gray",
    fontSize: "14px",
    marginTop: "8px",
  },
  content: {
    marginTop: "20px",
    fontSize: "16px",
    lineHeight: 1.6,
  },
};
export default BlogPage;
