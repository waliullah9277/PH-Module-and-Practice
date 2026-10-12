import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface IHeadlines {
    id: string;
    title: string;
    link?: string;
}

const Marquee = async () => {
    const res = await fetch(
        "https://news-api-v2.vercel.app/api/news?limit=10"
    );

    if (!res.ok) {
        return null;
    }

    const data = await res.json();
    const headlines: IHeadlines[] = data.data ?? [];

    return (
        <div className="mb-5 border-y border-red-800 bg-red-700 text-white shadow-sm">
            <div className="container mx-auto flex items-stretch overflow-hidden">

                {/* Latest Badge */}
                <div className="z-10 flex shrink-0 items-center gap-2 bg-red-900 px-4 py-2 font-bold">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white"></span>
                    </span>

                    <span>সর্বশেষ</span>
                </div>

                {/* Headlines Ticker */}
                <div className="flex min-w-0 flex-1 items-center overflow-hidden">
                    {headlines.length > 0 ? (
                        <MarqueeText
                            className="py-2"
                            direction="right"
                            duration={10}
                        >
                            {headlines.map((headline) => (
                                <span
                                    key={headline.id}
                                >
                                    <Link
                                        href={`/news/${headline.id}`}
                                        className="text-sm font-medium transition-colors duration-200 hover:text-yellow-200"
                                    >
                                        {headline.title}
                                    </Link>

                                    <span className="text-red-200 mx-5">◆</span>
                                </span>
                            ))}
                        </MarqueeText>
                    ) : (
                        <p className="px-4 py-2 text-sm">
                            এই মুহূর্তে কোনো শিরোনাম পাওয়া যায়নি।
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Marquee;
