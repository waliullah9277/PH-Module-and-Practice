import NewsCard from "@/components/NewsCard";

interface CategoryNewsItem {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
    lastPublished: string;
}

interface CategoryNewsResponse {
    title: string;
    data: CategoryNewsItem[];
}

interface CategoryNewsPageProps {
    params: Promise<{
        categoryId: string;
    }>;
}

const CategoryNews = async ({ params }: CategoryNewsPageProps) => {
    const { categoryId } = await params;

    const res = await fetch(
        `https://news-api-v2.vercel.app/api/category/${categoryId}`,
        {
            next: { revalidate: 300 },
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch category news");
    }

    const data: CategoryNewsResponse = await res.json();
    const categoryNews = data.data ?? [];

    return (
        <main className="container mx-auto min-h-screen px-4 py-6 sm:px-6 lg:px-8">
            {/* Category Header */}
            <section className="mb-8">
                <div className="flex items-center gap-3">
                    <div className="h-9 w-1.5 rounded-full bg-red-600" />

                    <div>
                        <p className="mb-1 text-xs font-semibold tracking-widest text-red-600 uppercase">
                            Latest News
                        </p>

                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                            {data.title}
                        </h1>
                    </div>
                </div>

                <div className="mt-5 h-px bg-gray-200">
                    <div className="h-px w-24 bg-red-600" />
                </div>

                <p className="mt-3 text-sm text-gray-500">
                    এই বিভাগে মোট {categoryNews.length} টি সংবাদ রয়েছে।
                </p>
            </section>

            {/* News Grid */}
            {categoryNews.length > 0 ? (
                <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {categoryNews.map((news) => (
                        <NewsCard key={news.id} news={news} />
                    ))}
                </section>
            ) : (
                <section className="flex min-h-60 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-4 text-center">
                    <h2 className="text-lg font-semibold text-gray-800">
                        এই বিভাগে কোনো সংবাদ পাওয়া যায়নি
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        নতুন সংবাদ প্রকাশিত হলে এখানে দেখা যাবে।
                    </p>
                </section>
            )}
        </main>
    );
};

export default CategoryNews;