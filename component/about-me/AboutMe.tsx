export default function AboutMe() {
    return (
        <section id="about-me" className="relative z-10 w-full min-h-screen py-24 px-8 sm:px-16 lg:px-24 flex flex-col justify-center bg-[#1a191d]">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">About <span className="text-zinc-600">Me</span></h2>
            <div className="max-w-4xl text-gray-300 text-lg leading-relaxed animate-fade-in">
                <p className="mb-6">
                    I am a dedicated Software Engineer specialized in bringing dynamic, responsive, and beautiful user interfaces to life. My focus is on crafting perfect web applications through modern tech stacks.
                </p>
                <p>
                    More personal journey information and background text can be placed here to fill out the section.
                </p>
            </div>
        </section>
    );
}
