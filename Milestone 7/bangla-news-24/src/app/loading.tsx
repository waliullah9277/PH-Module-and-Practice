const Loading = () => {
    return (
        <main className="flex min-h-[70vh] items-center justify-center bg-base-100 px-4 py-12">
            <div className="w-full max-w-md text-center">

                {/* Animated Loader */}
                <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center">
                    <div className="absolute inset-0 animate-spin rounded-full border-4 border-base-300 border-t-red-600" />

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 text-red-600"
                            aria-hidden="true"
                        >
                            <path d="M4 6h16" />
                            <path d="M4 12h10" />
                            <path d="M4 18h13" />
                        </svg>
                    </div>
                </div>

                {/* Loading Text */}
                <h2 className="text-xl font-bold text-base-content sm:text-2xl">
                    খবর লোড হচ্ছে
                </h2>

                <p className="mt-2 text-sm text-base-content/60">
                    অনুগ্রহ করে অপেক্ষা করুন...
                </p>

                {/* Loading Progress Animation */}
                <div className="mx-auto mt-6 h-1.5 w-40 overflow-hidden rounded-full bg-base-300">
                    <div className="h-full w-1/2 animate-pulse rounded-full bg-red-600" />
                </div>

                {/* Skeleton Placeholder */}
                <div className="mt-10 space-y-3">
                    <div className="h-4 w-full animate-pulse rounded-md bg-base-200" />
                    <div className="h-4 w-5/6 animate-pulse rounded-md bg-base-200" />
                    <div className="h-4 w-2/3 animate-pulse rounded-md bg-base-200" />
                </div>

                {/* Brand */}
                <p className="mt-8 text-xs font-medium tracking-wide text-base-content/40">
                    BANGLA NEWS 24
                </p>
            </div>
        </main>
    );
};

export default Loading;
