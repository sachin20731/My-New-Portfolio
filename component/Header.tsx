import TypingHeading from "./TypingHeading";

export default function Header() {
    return (
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left max-w-2xl mt-24 lg:mt-0 z-20 px-4 sm:px-0">
            <TypingHeading />
            <p className="text-sm sm:text-base md:text-xl text-gray-300 font-light mb-8 md:mb-10 tracking-[0.1em] sm:tracking-widest uppercase">
                Web developer <span className="mx-2">|</span> Full-stack <span className="hidden sm:inline">Developer</span> <span className="mx-2">|</span> FreeLancer
            </p>
            <div>
                <button className="px-6 py-2 md:px-8 md:py-3 bg-transparent border border-gray-500 rounded-lg text-sm md:text-base text-gray-300 hover:text-white hover:border-white transition-all duration-300 tracking-wide uppercase">
                    Contact Me
                </button>
            </div>
        </div>
    );
}
