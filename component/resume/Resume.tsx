export default function Resume() {
    return (
        <section id="resume" className="relative z-10 w-full min-h-screen py-24 px-8 sm:px-16 lg:px-24 flex flex-col justify-center bg-[#1f1e24]">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">My <span className="text-zinc-600">Resume</span></h2>
            <div className="max-w-4xl text-gray-300">
                <div className="border border-zinc-800 bg-[#151515] p-8 rounded-2xl shadow-xl">
                    <h3 className="text-2xl text-white font-semibold mb-4">Experience</h3>
                    <p className="text-zinc-400 mb-8">Details about past jobs and projects...</p>

                    <h3 className="text-2xl text-white font-semibold mb-4">Education</h3>
                    <p className="text-zinc-400">University / Degree / Graduation info...</p>
                </div>
            </div>
        </section>
    );
}
