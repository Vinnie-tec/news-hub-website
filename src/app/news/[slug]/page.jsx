import { DUMMY_NEWS } from "@/app/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function NewsDetailPage({ params }) {
  const { slug } = await params;

  const newsItem = DUMMY_NEWS.find((news) => news.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        {newsItem.image ? (
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={200}
            height={100}
          />
        ) : (
          <p>No image available</p>
        )}
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
