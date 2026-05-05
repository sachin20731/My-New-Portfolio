export default function Projects() {
    return (
        <section id="projects" className="relative z-10 w-full min-h-screen py-24 px-8 sm:px-16 lg:px-24 flex flex-col justify-center bg-[#1a191d]">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">Featured <span className="text-zinc-600">Projects</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-video bg-[#25242b] rounded-xl border border-white/5 hover:border-white/20 transition-all flex items-center justify-center cursor-pointer group hover:scale-105 duration-500">
                        <span className="text-zinc-500 group-hover:text-white">Project {i} Screenshot</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
