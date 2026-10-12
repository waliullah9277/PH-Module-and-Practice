import Link from "next/link";

interface INavLinks {
    slug: string;
    title: string;
    topicId: null | string;
    url: string;
    scrapable: boolean;
}

const Footer = async () => {
    const res = await fetch(
        "https://news-api-v2.vercel.app/api/categories",
        {
            next: { revalidate: 3600 },
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch news categories");
    }

    const data = await res.json();

    const navlinks: INavLinks[] = data.data ?? [];
    const navlinksFiltered = navlinks.filter((n) => n.scrapable);

    return (
        <footer className="mt-16 bg-gray-950 text-gray-300">
            <div className="h-1 w-full bg-red-600" />

            <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                    {/* Brand */}
                    <div>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-2xl font-extrabold tracking-tight text-white"
                        >
                            <span className="rounded-md bg-red-600 px-2 py-1">
                                বাংলা
                            </span>
                            <span>সংবাদ</span>
                        </Link>

                        <p className="mt-4 max-w-xs text-sm leading-7 text-gray-400">
                            দেশ ও বিশ্বের সর্বশেষ খবর, নির্ভরযোগ্য তথ্য এবং
                            গুরুত্বপূর্ণ সংবাদ জানতে আমাদের সঙ্গেই থাকুন।
                        </p>

                        {/* Social Links */}
                        <div className="mt-5 flex items-center gap-3">
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-sm font-bold transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                            >
                                f
                            </a>

                            <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-sm font-bold transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                            >
                                ▶
                            </a>

                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-sm font-bold transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                            >
                                ◎
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="mb-5 text-lg font-bold text-white">
                            গুরুত্বপূর্ণ লিংক
                        </h2>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    href="/"
                                    className="transition hover:text-red-500"
                                >
                                    হোম
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    className="transition hover:text-red-500"
                                >
                                    আমাদের সম্পর্কে
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/contact"
                                    className="transition hover:text-red-500"
                                >
                                    যোগাযোগ
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/privacy-policy"
                                    className="transition hover:text-red-500"
                                >
                                    গোপনীয়তা নীতি
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Dynamic News Categories */}
                    <div>
                        <h2 className="mb-5 text-lg font-bold text-white">
                            সংবাদ বিভাগ
                        </h2>

                        <ul className="space-y-3 text-sm">
                            {navlinksFiltered.map((n) => (
                                <li key={n.slug}>
                                    <Link
                                        href={`/category/${n.slug}`}
                                        className="transition hover:text-red-500"
                                    >
                                        {n.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Latest News */}
                    <div>
                        <h2 className="mb-5 text-lg font-bold text-white">
                            আমাদের সঙ্গে থাকুন
                        </h2>

                        <p className="text-sm leading-7 text-gray-400">
                            প্রতিদিনের গুরুত্বপূর্ণ খবর ও সর্বশেষ আপডেট জানতে
                            আমাদের ওয়েবসাইট ভিজিট করুন।
                        </p>

                        <Link
                            href="/"
                            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                        >
                            সর্বশেষ সংবাদ
                            <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-800 pt-6 text-center text-xs text-gray-500 sm:flex-row sm:text-left">
                    <p>
                        © {new Date().getFullYear()} বাংলা সংবাদ। সর্বস্বত্ব
                        সংরক্ষিত।
                    </p>

                    <p>সংবাদ পড়ুন, সচেতন থাকুন।</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;