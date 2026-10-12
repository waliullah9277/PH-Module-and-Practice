import Image from "next/image";
import Link from "next/link";

interface INews {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
    lastPublished: string;
}

const MainNews = ({ news }: { news: INews[] }) => {
    const [firstNews, ...otherNews] = news;

    if (!firstNews) {
        return null;
    }

    const formatDate = (publishedAt: string) => {
        const date = new Date(publishedAt);

        if (Number.isNaN(date.getTime())) {
            return "প্রকাশের সময় পাওয়া যায়নি";
        }

        return date.toLocaleString("bn-BD", {
            timeZone: "Asia/Dhaka",
            dateStyle: "medium",
            timeStyle: "short",
        });
    };

    return (
        <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
                {/* Featured News */}
                <Link
                    href={`/news/${firstNews.id}`}
                    className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg lg:col-span-3"
                >
                    {/* Featured Image */}
                    <figure className="relative overflow-hidden">
                        <Image
                            src={firstNews.imageUrl}
                            width={600}
                            height={400}
                            alt={firstNews.imageAlt}
                            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-60 lg:h-72"
                        />

                        <div className="absolute left-3 top-3">
                            <span className="rounded-md bg-red-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
                                {firstNews.category}
                            </span>
                        </div>
                    </figure>

                    {/* Featured Content */}
                    <div className="p-4 sm:p-5">
                        <div className="mb-2 flex items-center gap-2 text-xs text-gray-500">
                            <span aria-hidden="true">📅</span>
                            <span>{formatDate(firstNews.lastPublished)}</span>
                        </div>

                        <h2 className="mb-2 text-lg leading-snug font-bold text-gray-900 transition-colors duration-300 group-hover:text-red-600 sm:text-xl">
                            {firstNews.title}
                        </h2>

                        <p className="text-sm leading-6 text-gray-600">
                            {firstNews.description}
                        </p>

                        <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
                            <span className="text-xs font-semibold text-red-600">
                                প্রধান সংবাদ
                            </span>

                            <span className="text-lg text-red-600 transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </div>
                    </div>
                </Link>

                {/* Other News */}
                <div className="lg:col-span-2">
                    <div className="mb-3 flex items-center justify-between border-b-2 border-red-600 pb-2">
                        <h2 className="text-lg font-bold text-gray-900">
                            সর্বশেষ সংবাদ
                        </h2>

                        <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-600">
                            Latest News
                        </span>
                    </div>

                    {/* Individual News Cards */}
                    <div className="flex flex-col gap-2">
                        {otherNews.slice(0, 4).map((otherN) => (
                            <Link
                                href={`/news/${otherN.id}`}
                                key={otherN.id}
                                className="group block rounded-lg border border-gray-200 bg-white p-3 transition-all duration-300 hover:border-red-200 hover:bg-red-50/50 hover:shadow-sm"
                            >
                                <p className="mb-1 text-xs font-semibold tracking-wide text-red-600 uppercase">
                                    {otherN.category}
                                </p>

                                <h3 className="text-sm leading-5 font-semibold text-gray-800 transition-colors duration-300 group-hover:text-red-600">
                                    {otherN.title}
                                </h3>

                                <div className="mt-2 flex items-center justify-between">
                                    <span className="text-xs text-gray-400">
                                        {formatDate(otherN.lastPublished)}
                                    </span>

                                    <span className="text-red-600 transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainNews;