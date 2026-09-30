const Banner = () => {
    return (
        <section className="my-6 px-4">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 min-h-[380px] flex items-center">

                {/* Background Decoration */}
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-white/10 rounded-full"></div>

                {/* Content */}
                <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-8 md:px-16 py-12">

                    {/* Left Side */}
                    <div className="text-white text-center md:text-left">
                        <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            🏏 IPL Dream 11
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                            Build Your
                            <span className="block text-yellow-300">
                                Dream Team
                            </span>
                        </h1>

                        <p className="mt-5 text-white/80 text-base md:text-lg max-w-lg mx-auto md:mx-0">
                            Pick your favorite players, create your ultimate
                            cricket squad and build your perfect Dream 11 team.
                        </p>

                        <button className="btn bg-yellow-400 hover:bg-yellow-300 border-none text-purple-900 font-bold mt-7 px-7 rounded-full">
                            Choose Players 🏏
                        </button>
                    </div>

                    {/* Right Side */}
                    <div className="relative flex justify-center items-center">

                        {/* Glow */}
                        <div className="absolute w-56 h-56 md:w-72 md:h-72 bg-yellow-300/20 rounded-full blur-3xl"></div>

                        {/* Cricket Ball */}
                        <div className="relative w-44 h-44 md:w-60 md:h-60 bg-red-600 rounded-full shadow-2xl flex items-center justify-center rotate-12">

                            <div className="absolute h-full w-1 border-l-4 border-dashed border-white/80 left-1/2 -translate-x-1/2"></div>

                            <div className="absolute h-3/4 w-3/4 border-4 border-dashed border-white/70 rounded-full rotate-45"></div>

                            <span className="relative text-6xl md:text-8xl">
                                🏏
                            </span>
                        </div>

                        {/* Floating Text */}
                        <div className="absolute top-0 right-4 md:right-10 bg-white text-purple-700 px-4 py-2 rounded-xl shadow-lg font-bold rotate-6">
                            Let's Play!
                        </div>

                        <div className="absolute bottom-2 left-4 md:left-8 bg-yellow-400 text-purple-900 px-4 py-2 rounded-xl shadow-lg font-bold -rotate-6">
                            🏆 Dream XI
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;