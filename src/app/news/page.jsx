import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/1">News Item 1</Link>
        </li>
        <li>
          <Link href="/news/1">News Item 1</Link>
        </li>
        <li>
          <Link href="/news/1">News Item 1</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
