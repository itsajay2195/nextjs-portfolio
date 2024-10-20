// src/app/blog/page.tsx

import Link from "next/link";
import { getSortedPostsData } from "../../libs/post"; // Adjust the path as necessary

export default async function Blog() {
  const allPostsData = getSortedPostsData(); // Fetch the posts directly in the component

  return (
    <section>
      <h1>Blog</h1>
      <ul>
        {allPostsData.map(({ slug, title, date }: any) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>{title}</Link>
            <br />
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}
