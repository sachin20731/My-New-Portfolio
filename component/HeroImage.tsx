import Image from "next/image";

export default function HeroImage() {
    return (
        <div className="flex-1 flex justify-center lg:justify-end items-center mt-8 md:mt-12 lg:mt-0 mb-12 lg:mb-0 relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0 h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[80vh]">
            <div className="relative w-full h-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl z-20 border border-white/10">
                <Image
                    src="/dhanushka.jpeg"
                    alt="Profile Picture"
                    fill
                    priority
                    className="object-cover object-top hover:scale-[1.03] transition-transform duration-700 ease-in-out"
                />
            </div>
        </div>
    );
}
