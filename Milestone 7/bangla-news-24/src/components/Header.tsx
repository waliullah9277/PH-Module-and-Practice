import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import UserDetails from "./UserDetails";

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <header className="w-full">
            {/* Main Header */}
            <div className="container mx-auto px-2 sm:px-4">
                <div className="flex min-h-10 items-center justify-between gap-1 py-1.5 min-[360px]:min-h-12 min-[360px]:py-2 sm:min-h-16 sm:gap-4 sm:py-3">

                    {/* Logo and Text - Left Side */}
                    <Link
                        href="/"
                        className="flex min-w-0 flex-1 items-center gap-1 min-[360px]:gap-1.5 sm:gap-3"
                    >
                        <Image
                            src="/logo.webp"
                            width={50}
                            height={50}
                            alt="Logo Image"
                            priority
                            className="h-5 w-5 shrink-0 object-contain min-[360px]:h-6 min-[360px]:w-6 sm:h-12 sm:w-12"
                        />

                        <div className="min-w-0">
                            <h2 className="truncate text-[11px] font-bold leading-4 text-red-600 min-[360px]:text-xs sm:text-xl sm:leading-normal">
                                Bangla News 24
                            </h2>

                            <p className="mt-0 truncate text-[8px] leading-[10px] text-gray-500 min-[360px]:text-[9px] min-[360px]:leading-3 sm:mt-0.5 sm:text-sm sm:leading-5">
                                {date}
                            </p>
                        </div>
                    </Link>

                    {/* Login / Profile - Right Side */}
                    <div className="flex shrink-0 items-center justify-end [&_button]:px-1.5 [&_button]:py-0.5 [&_button]:text-[11px] min-[360px]:[&_button]:px-2 min-[360px]:[&_button]:py-1 min-[360px]:[&_button]:text-xs sm:[&_button]:px-4 sm:[&_button]:py-2 sm:[&_button]:text-sm [&_img]:h-6 [&_img]:w-6 min-[360px]:[&_img]:h-7 min-[360px]:[&_img]:w-7 sm:[&_img]:h-8 sm:[&_img]:w-8">
                        <UserDetails />
                    </div>
                </div>
            </div>

            {/* Navigation - Below Header */}
            <nav className="mb-1.5 mt-1 w-full sm:mb-3 sm:mt-2">
                <NavLinks />
            </nav>
        </header>
    );
};

export default Header;