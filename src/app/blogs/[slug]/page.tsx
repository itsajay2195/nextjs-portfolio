// src/app/blog/[slug]/page.tsx
import { getPostData, getAllPostSlugs } from "../../../libs/post"; // Adjust the path as necessary
import { notFound } from "next/navigation";

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug); // Fetch the post data based on the slug

  if (!postData) {
    notFound(); // Return a 404 page if the post doesn't exist
  }

  return (
    <article>
      <h1>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}

// Generate static parameters for each blog post
export async function generateStaticParams() {
  const slugs = getAllPostSlugs(); // Get all slugs for blog posts

  return slugs.map((slug) => ({
    slug: slug.params.slug,
  }));
}
