import Image from "next/image";
import NavLinks from "./NavLinks";

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <header>
            {/* Main Header */}
            <div className="container mx-auto relative flex items-center justify-between py-3">

                {/* Logo and Text - Center */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
                    <Image
                        src="/logo.webp"
                        width={50}
                        height={50}
                        alt="Logo Image"
                        className="w-10 h-10"
                    />

                    <div>
                        <h2 className="text-xl font-bold text-red-600">
                            Bangla News 24
                        </h2>

                        <p className="text-sm text-gray-500">
                            {date}
                        </p>
                    </div>
                </div>

                {/* Buttons - Right Side */}
                <div className="ml-auto flex items-center gap-2">
                    <button className="btn btn-sm h-8 min-h-0 border border-gray-300 bg-white px-4 text-gray-700 shadow-none transition-all duration-300 hover:border-red-600 hover:bg-red-50 hover:text-red-600">
                        সাইন ইন
                    </button>

                    <button className="btn btn-sm h-8 min-h-0 border-none bg-red-600 px-4 text-white shadow-sm transition-all duration-300 hover:bg-red-800">
                        সাইন আপ
                    </button>
                </div>
            </div>

            {/* Navigation - Below Header */}
            <nav className="mt-3 mb-3">
                <NavLinks />
            </nav>
        </header>
    );
};

export default Header;
