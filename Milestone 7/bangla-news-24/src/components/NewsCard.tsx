import Image from "next/image";

interface INews {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
    lastPublished: string
}

const NewsCard = ({ news }: { news: INews }) => {
    const date = new Date(news.lastPublished);

    const localDate = date.toLocaleString("bn-BD", {
        timeZone: "Asia/Dhaka",
        dateStyle: "full",
        timeStyle: "short",
    });

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-md">

            {/* Image */}
            <figure className="relative overflow-hidden">
                <Image
                    src={news.imageUrl}
                    width={600}
                    height={400}
                    alt={news.imageAlt}
                    className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-48 lg:h-44"
                />

                {/* Category */}
                <span className="absolute left-3 top-3 rounded-md bg-red-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
                    {news.category}
                </span>
            </figure>

            {/* Content */}
            <div className="flex flex-1 flex-col p-3 sm:p-4">

                {/* Date */}
                <div className="mb-2 flex items-center gap-1.5 text-xs text-gray-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
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
                <h2 className="mb-2 line-clamp-2 text-base font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-red-600 sm:text-lg">
                    {news.title}
                </h2>

                {/* Description */}
                <p className="line-clamp-3 text-sm leading-6 text-gray-600">
                    {news.description}
                </p>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3">
                    <span className="text-xs font-semibold text-red-600">
                        বিস্তারিত সংবাদ
                    </span>

                    <span className="text-lg text-red-600 transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>
                </div>
            </div>
        </article>
    );
};

export default NewsCard;