interface IMostReadNews{
    id: string
    title: string
}

const MostReadNews = async () => {
    const res = await fetch(
        "https://news-api-v2.vercel.app/api/news/most-read"
    );

    const data = await res.json();
    const mostReadNewsAll: IMostReadNews[] = data.data;

    return (
        <div className="flex flex-col">
            {mostReadNewsAll.map((mrn, i) => (
                <div
                    key={mrn.id}
                    className="flex gap-3 border-b border-blue-200 py-3 last:border-b-0"
                >
                    <span className="text-2xl font-bold text-red-600">
                        {String(i + 1).padStart(2, "0")}
                    </span>

                    <h3 className="min-w-0 text-sm leading-6 font-medium text-gray-800 transition-colors hover:text-red-600">
                        {mrn.title}
                    </h3>
                </div>
            ))}
        </div>
    );
};

export default MostReadNews;