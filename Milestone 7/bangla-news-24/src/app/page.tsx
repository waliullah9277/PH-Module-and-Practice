import MainNews from "@/components/MainNews";
import MostReadNews from "@/components/MostReadNews";
import NewsCard from "@/components/NewsCard";

interface INews {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  lastPublished: string;
}

interface INewsSection {
  curationId: string;
  title: string;
  articles: INews[];
}

interface INewsApiResponse {
  data: INewsSection[];
}

export default async function Home() {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/sections"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news sections");
  }

  const data: INewsApiResponse = await res.json();

  const newsSection = data.data;
  const mainNews = newsSection[0]?.articles ?? [];
  const otherNewsSection = newsSection.slice(1);

  return (
    <div>
      

      <div className="container mx-auto grid grid-cols-1 gap-5 px-4 lg:grid-cols-3">

        {/* Main News */}
        <div className="min-w-0 lg:col-span-2">
          <MainNews news={mainNews} />

          {/* Other News Sections */}
          <div className="space-y-8 py-5">
            {otherNewsSection.map((os) => (
              <section key={os.curationId}>

                {/* Section Heading */}
                <div className="mb-4 flex items-center justify-between gap-3 border-b-2 border-red-600 pb-2">
                  <h2 className="border-l-4 border-red-600 pl-3 text-lg font-bold text-gray-900 sm:text-xl">
                    {os.title}
                  </h2>

                  <span className="shrink-0 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
                    {os.articles.length} টি সংবাদ
                  </span>
                </div>

                {/* Responsive News Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {os.articles.map((singleNews) => (
                    <NewsCard
                      key={singleNews.id}
                      news={singleNews}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* Most Read News */}
        <aside className="min-w-0 self-start rounded-xl bg-blue-50 p-4 lg:col-span-1">
          <h2 className="mb-3 border-b-2 border-red-600 pb-2 text-lg font-bold text-gray-900">
            সর্বাধিক পঠিত সংবাদ
          </h2>

          <MostReadNews />
        </aside>

      </div>
    </div>
  );
}
