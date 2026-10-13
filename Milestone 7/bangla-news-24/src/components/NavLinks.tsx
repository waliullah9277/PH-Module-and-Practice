import Link from "next/link";

interface INavLinks {
    slug: string;
    title: string;
    topicId: null | string;
    url: string;
    scrapable: boolean;
}

const NavLinks = async () => {
    let navlinks: INavLinks[] = [];

    try {
        const res = await fetch(
            "https://news-api-v2.vercel.app/api/categories",
            {
                next: { revalidate: 3600 },
            }
        );

        if (!res.ok) {
            console.error(
                "Categories API failed:",
                res.status,
                res.statusText
            );
        } else {
            const data = await res.json();
            navlinks = Array.isArray(data.data) ? data.data : [];
        }
    } catch (error) {
        console.error("Failed to fetch navigation categories:", error);
    }

    const navlinksFiltered = navlinks.filter((n) => n.scrapable);

    return (
        <nav className="w-full border-y border-gray-200 bg-white">
            <div className="container mx-auto px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center gap-5 overflow-x-auto whitespace-nowrap py-3 text-sm font-medium sm:gap-6 sm:text-base [&::-webkit-scrollbar]:hidden">
                    <Link
                        href="/"
                        className="shrink-0 text-gray-800 transition-colors hover:text-red-600"
                    >
                        হোম
                    </Link>

                    {navlinksFiltered.map((n) => (
                        <Link
                            key={n.slug}
                            href={`/category/${n.slug}`}
                            className="shrink-0 text-gray-700 transition-colors hover:text-red-600"
                        >
                            {n.title}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default NavLinks;