import { getLatestNews } from "@/app/lib/news";
import NewsList from "@/components/news-list";

export default function LatestNewsPage() {
  const latestNews = getLatestNews(); // Assuming you have a function to fetch the latest news

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
