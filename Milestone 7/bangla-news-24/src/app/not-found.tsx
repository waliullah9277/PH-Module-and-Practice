import Link from "next/link";

const NotFound = () => {
    return (
        <main className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-base-100 px-4 py-16">
            {/* Background Decoration */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-red-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />

            <div className="relative z-10 mx-auto w-full max-w-xl text-center">
                {/* Icon */}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-red-500/20 bg-red-500/10 sm:h-24 sm:w-24">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="h-10 w-10 text-red-600 sm:h-12 sm:w-12"
                        aria-hidden="true"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                        <path d="M8 9h.01M14 9h.01" />
                        <path d="M8.5 14a4 4 0 0 1 5 0" />
                    </svg>
                </div>

                {/* Error Code */}
                <h1 className="text-7xl font-black tracking-tight text-red-600 sm:text-8xl">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-2xl font-bold text-base-content sm:text-3xl">
                    পৃষ্ঠাটি খুঁজে পাওয়া যায়নি!
                </h2>

                {/* Description */}
                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-base-content/60 sm:text-base">
                    দুঃখিত! আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি সরানো হয়েছে,
                    ঠিকানাটি পরিবর্তন করা হয়েছে অথবা পৃষ্ঠাটি আর
                    উপলব্ধ নেই।
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col items-center justify-center gap-3 min-[400px]:flex-row">
                    <Link
                        href="/"
                        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-700 min-[400px]:w-auto"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                            aria-hidden="true"
                        >
                            <path d="m3 10 9-7 9 7" />
                            <path d="M5 9v11h14V9" />
                            <path d="M9 20v-6h6v6" />
                        </svg>
                        হোম পেজে ফিরে যান
                    </Link>

                    <Link
                        href="/"
                        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-base-300 bg-base-100 px-6 py-3 text-sm font-semibold text-base-content transition hover:-translate-y-0.5 hover:bg-base-200 min-[400px]:w-auto"
                    >
                        হোম পেজে যান
                    </Link>
                </div>

                {/* Footer */}
                <div className="mt-10 flex items-center justify-center gap-2 text-xs text-base-content/40">
                    <span className="h-px w-8 bg-base-300" />
                    <span>Bangla News 24</span>
                    <span className="h-px w-8 bg-base-300" />
                </div>
            </div>
        </main>
    );
};

export default NotFound;
