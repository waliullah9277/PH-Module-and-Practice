import Image from "next/image";

interface INews {
    id: string,
    title: string
    description: string
    imageUrl: string
    imageAlt: string
    category: string
    lastPublished: string
}

const MainNews = ({ news }: { news: INews[] }) => {
    const [firstNews, ...otherNews] = news;

    const date = new Date(firstNews.lastPublished);

    const localDate = date.toLocaleString("bn-BD", {
        timeZone: "Asia/Dhaka",
        dateStyle: "full",
        timeStyle: "short",
    });

    return (
        <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">

                {/* Featured News */}
                <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg lg:col-span-3">

                    {/* Featured Image */}
                    <figure className="relative overflow-hidden">
                        <Image
                            src={firstNews.imageUrl}
                            width={600}
                            height={600}
                            alt={firstNews.imageAlt}
                            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-60"
                        />

                        {/* Category Badge */}
                        <div className="absolute left-3 top-3">
                            <span className="rounded-md bg-red-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
                                {firstNews.category}
                            </span>
                        </div>
                    </figure>

                    {/* Featured Content */}
                    <div className="p-4 sm:p-5">

                        {/* Date */}
                        <div className="mb-2 flex items-center gap-2 text-xs text-gray-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="shrink-0 text-red-600"
                            >
                                <rect x="3" y="4" width="18" height="18" rx="2" />
                                <path d="M16 2v4M8 2v4M3 10h18" />
                            </svg>

                            <span>{localDate}</span>
                        </div>

                        {/* Title */}
                        <h2 className="mb-2 text-lg font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-red-600 sm:text-xl">
                            {firstNews.title}
                        </h2>

                        {/* Description */}
                        <p className="text-sm leading-6 text-gray-600">
                            {firstNews.description}
                        </p>

                        {/* Footer */}
                        <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
                            <span className="text-xs font-semibold text-red-600">
                                প্রধান সংবাদ
                            </span>

                            <span className="text-lg text-red-600 transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </div>
                    </div>
                </div>

                {/* Other News */}
                <div className="lg:col-span-2">

                    {/* Section Heading */}
                    <div className="mb-3 flex items-center justify-between border-b-2 border-red-600 pb-2">
                        <h2 className="text-lg font-bold text-gray-900">
                            সর্বশেষ সংবাদ
                        </h2>

                        <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-600">
                            Latest News
                        </span>
                    </div>

                    {/* News Cards */}
                    <div className="flex flex-col gap-2">
                        {
                            otherNews.slice(0, 4).map(ohterN => {
                                return (
                                    <div
                                        className="group rounded-lg border border-gray-200 bg-white p-3 transition-all duration-300 hover:border-red-200 hover:bg-red-50/50 hover:shadow-sm"
                                        key={ohterN.id}
                                    >
                                        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-red-600">
                                            {firstNews.category}
                                        </p>

                                        <div className="text-sm font-semibold leading-5 text-gray-800 transition-colors duration-300 group-hover:text-red-600">
                                            {ohterN.title}
                                        </div>

                                        <div className="mt-2 flex items-center justify-between">
                                            <span className="text-xs text-gray-400">
                                                বিস্তারিত সংবাদ
                                            </span>

                                            <span className="text-red-600 transition-transform duration-300 group-hover:translate-x-1">
                                                →
                                            </span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MainNews;