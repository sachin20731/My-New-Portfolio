export default function Contact() {
    return (
        <section id="contact" className="relative z-10 w-full min-h-[80vh] py-24 px-8 sm:px-16 lg:px-24 flex flex-col justify-center bg-[#1a191d]">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight text-center md:text-left">Contact <span className="text-zinc-600">Me</span></h2>
            <div className="max-w-2xl bg-[#151515] p-8 rounded-2xl shadow-xl border border-white/5 mx-auto md:mx-0 w-full">
                <form className="flex flex-col space-y-6">
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm text-zinc-400 font-semibold" htmlFor="name">Name</label>
                        <input type="text" id="name" className="bg-[#222] border border-zinc-800 rounded-lg p-3 text-white focus:outline-none focus:border-zinc-500 transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm text-zinc-400 font-semibold" htmlFor="email">Email</label>
                        <input type="email" id="email" className="bg-[#222] border border-zinc-800 rounded-lg p-3 text-white focus:outline-none focus:border-zinc-500 transition-colors" placeholder="john@example.com" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm text-zinc-400 font-semibold" htmlFor="message">Message</label>
                        <textarea id="message" rows={4} className="bg-[#222] border border-zinc-800 rounded-lg p-3 text-white focus:outline-none focus:border-zinc-500 transition-colors" placeholder="Let's build something beautiful..." />
                    </div>
                    <button type="button" className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-lg hover:bg-gray-300 transition-colors">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
