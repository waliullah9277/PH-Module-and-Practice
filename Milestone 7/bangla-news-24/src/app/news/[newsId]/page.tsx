
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface INewsTopic {
    id: string;
    name: string;
}

interface INewsBodyText {
    type: "text" | "subheading";
    text: string;
}

interface INewsBodyImage {
    type: "image";
    url: string;
    width?: number;
    height?: number;
    caption?: string;
    altText?: string;
    copyrightHolder?: string;
}

type INewsBodyBlock = INewsBodyText | INewsBodyImage;

interface INewsDescription {
    blocks?: Array<{
        model?: {
            blocks?: Array<{
                model?: {
                    text?: string;
                };
            }>;
        };
    }>;
}

interface INewsDetails {
    id: string;
    title: string;
    description?: INewsDescription | string;
    imageUrl?: string;
    link?: string;
    firstPublished?: string;
    lastPublished?: string;
    byline?: string[];
    topics?: INewsTopic[];
    tags?: string[];
    body?: INewsBodyBlock[];
    text?: string;
    wordCount?: number;
    source?: string;
    sourceUrl?: string;
}

interface INewsApiResponse {
    success: boolean;
    data: INewsDetails;
}

interface NewsDetailsPageProps {
    params: Promise<{
        newsId: string;
    }>;
}

const getDescription = (
    description: INewsDetails["description"]
): string => {
    if (typeof description === "string") {
        return description;
    }

    return (
        description?.blocks
            ?.flatMap((block) => block.model?.blocks ?? [])
            .map((block) => block.model?.text ?? "")
            .filter(Boolean)
            .join("\n") ?? ""
    );
};

const formatDate = (value?: string) => {
    if (!value) return null;

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) return null;

    return date.toLocaleString("bn-BD", {
        timeZone: "Asia/Dhaka",
        dateStyle: "long",
        timeStyle: "short",
    });
};

const NewsDetails = async ({ params }: NewsDetailsPageProps) => {
    const { newsId } = await params;

    const res = await fetch(
        `https://news-api-v2.vercel.app/api/article/${newsId}`,
        {
            next: { revalidate: 300 },
        }
    );

    if (!res.ok) {
        notFound();
    }

    const response: INewsApiResponse = await res.json();
    const news = response.data;

    if (!response.success || !news) {
        notFound();
    }

    const description = getDescription(news.description);
    const publishedDate = formatDate(
        news.firstPublished ?? news.lastPublished
    );

    const body = news.body ?? [];
    const topics = news.topics ?? [];
    const tags = news.tags ?? [];

    return (
        <main className="min-h-screen bg-gray-50 py-5 sm:py-8">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb */}
                <nav
                    aria-label="Breadcrumb"
                    className="mb-5 flex flex-wrap items-center gap-2 text-sm text-gray-500"
                >
                    <Link href="/" className="hover:text-red-600">
                        হোম
                    </Link>

                    <span>/</span>

                    <span className="font-medium text-gray-800">
                        সংবাদ বিস্তারিত
                    </span>
                </nav>

                <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">

                    {/* Main Article */}
                    <article className="min-w-0 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm lg:col-span-9">

                        {/* Article Header */}
                        <div className="p-5 sm:p-8 lg:p-10">

                            {/* Topics */}
                            {topics.length > 0 && (
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {topics.map((topic) => (
                                        <span
                                            key={topic.id}
                                            className="rounded-md bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600"
                                        >
                                            {topic.name}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Headline */}
                            <h1 className="text-2xl leading-snug font-extrabold text-gray-900 sm:text-3xl lg:text-4xl lg:leading-snug">
                                {news.title}
                            </h1>

                            {/* Summary */}
                            {description && (
                                <p className="mt-5 border-l-4 border-red-600 pl-4 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                                    {description}
                                </p>
                            )}


                            {/* Metadata */}
                            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-y border-gray-100 py-4 text-xs text-gray-500 sm:text-sm">

                                {publishedDate && (
                                    <div className="flex items-center gap-2">
                                        <span aria-hidden="true">📅</span>
                                        <span>প্রকাশিত: {publishedDate}</span>
                                    </div>
                                )}

                                {news.wordCount != null && (
                                    <div className="flex items-center gap-2">
                                        <span aria-hidden="true">📄</span>
                                        <span>
                                            {news.wordCount.toLocaleString("bn-BD")} শব্দ
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Cover Image */}
                        {news.imageUrl && (
                            <figure className="px-5 sm:px-8 lg:px-10">
                                <div className="overflow-hidden rounded-lg bg-gray-100">
                                    <Image
                                        src={news.imageUrl}
                                        alt={news.title}
                                        width={1200}
                                        height={675}
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 850px"
                                        className="h-auto max-h-[520px] w-full object-contain"
                                    />
                                </div>

                                {body.find(
                                    (block) =>
                                        block.type === "image" &&
                                        block.url === news.imageUrl
                                )?.type === "image" && (
                                        <figcaption className="mt-2 text-xs leading-5 text-gray-500">
                                            {
                                                (
                                                    body.find(
                                                        (block) =>
                                                            block.type === "image" &&
                                                            block.url === news.imageUrl
                                                    ) as INewsBodyImage
                                                ).caption
                                            }
                                        </figcaption>
                                    )}
                            </figure>
                        )}

                        {/* Article Body */}
                        <div className="px-5 py-7 sm:px-8 sm:py-9 lg:px-10">

                            <div className="mb-6 flex items-center gap-3 border-b border-gray-200 pb-3">
                                <div className="h-7 w-1 rounded-full bg-red-600" />

                                <h2 className="text-xl font-bold text-gray-900">
                                    বিস্তারিত সংবাদ
                                </h2>
                            </div>

                            <div className="space-y-6 text-base leading-8 text-gray-700 sm:text-lg sm:leading-9">

                                {body.length > 0 ? (
                                    body.map((block, index) => {
                                        if (block.type === "subheading") {
                                            return (
                                                <h2
                                                    key={`heading-${index}`}
                                                    className="border-l-4 border-red-600 pl-3 pt-2 text-xl leading-snug font-bold text-gray-900 sm:text-2xl"
                                                >
                                                    {block.text}
                                                </h2>
                                            );
                                        }

                                        if (block.type === "image") {
                                            // Cover image already appears above.
                                            if (block.url === news.imageUrl) {
                                                return null;
                                            }

                                            return (
                                                <figure
                                                    key={`image-${index}`}
                                                    className="my-8"
                                                >
                                                    <div className="overflow-hidden rounded-xl bg-gray-100">
                                                        <Image
                                                            src={block.url}
                                                            alt={
                                                                block.altText ??
                                                                block.caption ??
                                                                news.title
                                                            }
                                                            width={block.width ?? 1024}
                                                            height={block.height ?? 576}
                                                            sizes="(max-width: 768px) 100vw, 800px"
                                                            className="h-auto w-full object-cover"
                                                        />
                                                    </div>

                                                    {block.caption && (
                                                        <figcaption className="mt-2 text-sm leading-6 text-gray-500">
                                                            {block.caption}
                                                        </figcaption>
                                                    )}

                                                    {block.copyrightHolder && (
                                                        <p className="mt-1 text-xs text-gray-400">
                                                            ছবি: {block.copyrightHolder}
                                                        </p>
                                                    )}
                                                </figure>
                                            );
                                        }

                                        return block.text
                                            .split(/\n+/)
                                            .filter((paragraph) => paragraph.trim())
                                            .map((paragraph, paragraphIndex) => (
                                                <p
                                                    key={`text-${index}-${paragraphIndex}`}
                                                    className="whitespace-pre-line"
                                                >
                                                    {paragraph.trim()}
                                                </p>
                                            ));
                                    })
                                ) : (
                                    <p className="whitespace-pre-line">
                                        {news.text ?? description}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Tags */}
                        {tags.length > 0 && (
                            <div className="mx-5 mb-7 border-t border-gray-200 pt-5 sm:mx-8 lg:mx-10">
                                <h3 className="mb-3 text-sm font-bold text-gray-900">
                                    সম্পর্কিত বিষয়
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {tags.map((tag, index) => (
                                        <span
                                            key={`${tag}-${index}`}
                                            className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm text-gray-600"
                                        >
                                            #{tag.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Original Source */}
                        {(news.source || news.sourceUrl || news.link) && (
                            <div className="mx-5 mb-6 rounded-lg bg-gray-50 p-4 sm:mx-8 lg:mx-10">
                                <p className="text-sm text-gray-600">
                                    সংবাদসূত্র:{" "}
                                    <span className="font-semibold text-gray-900">
                                        {news.source ?? "মূল সংবাদমাধ্যম"}
                                    </span>
                                </p>

                                {(news.sourceUrl ?? news.link) && (
                                    <a
                                        href={news.sourceUrl ?? news.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700"
                                    >
                                        মূল সংবাদটি পড়ুন
                                        <span aria-hidden="true">↗</span>
                                    </a>
                                )}
                            </div>
                        )}

                        {/* Back Home */}
                        <div className="border-t border-gray-200 p-5 sm:px-8 lg:px-10">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                            >
                                <span aria-hidden="true">←</span>
                                আরও সংবাদ পড়ুন
                            </Link>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="space-y-5 lg:col-span-3">

                        {/* Source Card */}
                        <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                            <h2 className="mb-4 border-b-2 border-red-600 pb-2 text-lg font-bold text-gray-900">
                                সংবাদ তথ্য
                            </h2>

                            <div className="space-y-4 text-sm">
                                <div>
                                    <p className="text-gray-500">সংবাদমাধ্যম</p>
                                    <p className="mt-1 font-semibold text-gray-900">
                                        {news.source ?? "উল্লেখ করা হয়নি"}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-500">প্রকাশের তারিখ</p>
                                    <p className="mt-1 font-medium leading-6 text-gray-800">
                                        {publishedDate ?? "উল্লেখ করা হয়নি"}
                                    </p>
                                </div>

                                {news.wordCount != null && (
                                    <div>
                                        <p className="text-gray-500">
                                            সংবাদ দৈর্ঘ্য
                                        </p>
                                        <p className="mt-1 font-medium text-gray-800">
                                            {news.wordCount.toLocaleString("bn-BD")} শব্দ
                                        </p>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Related Topics */}
                        {topics.length > 0 && (
                            <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                                <h2 className="mb-4 border-b-2 border-red-600 pb-2 text-lg font-bold text-gray-900">
                                    সংবাদ বিষয়
                                </h2>

                                <div className="flex flex-wrap gap-2">
                                    {topics.map((topic) => (
                                        <span
                                            key={topic.id}
                                            className="rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-700"
                                        >
                                            {topic.name}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Back to Home */}
                        <Link
                            href="/"
                            className="flex items-center justify-between rounded-xl bg-gray-900 p-5 text-white transition hover:bg-gray-800"
                        >
                            <div>
                                <p className="text-base font-bold">
                                    সর্বশেষ সংবাদ
                                </p>
                                <p className="mt-1 text-sm text-gray-400">
                                    আরও খবর পড়ুন
                                </p>
                            </div>

                            <span className="text-2xl text-red-500">→</span>
                        </Link>
                    </aside>
                </div>
            </div>
        </main>
    );
};

export default NewsDetails;
