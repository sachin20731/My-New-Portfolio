export default function Certificates() {
    return (
        <section id="certificates" className="relative z-10 w-full min-h-screen py-24 px-8 sm:px-16 lg:px-24 flex flex-col justify-center bg-[#1f1e24]">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">My <span className="text-zinc-600">Certificates</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-300">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="p-6 bg-[#151515] rounded-xl border border-white/5 hover:border-white/20 transition-all flex flex-col items-start cursor-pointer hover:-translate-y-2 duration-300 shadow-xl">
                        <h3 className="text-xl font-bold text-white mb-2">Certificate Title {i}</h3>
                        <p className="text-sm text-zinc-400 mb-4">Issuing Organization • 2026</p>
                        <p className="text-sm">Description of the course, skills learned, and verification link.</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
