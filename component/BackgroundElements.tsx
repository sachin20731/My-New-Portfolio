import Image from "next/image";

export default function BackgroundElements() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden text-[#57528C] text-sm opacity-100 italic font-mono">
            <span className="absolute top-10 left-10 animate-float">&lt;html&gt;</span>
            <span className="absolute top-20 left-16 animate-float-delayed">&lt;body&gt;</span>
            <span className="absolute top-48 left-20 animate-float">&lt;h1&gt;</span>
            <span className="absolute top-[35%] right-1/3 animate-float-slow">&lt;/button&gt;</span>
            <span className="absolute top-[50%] right-1/4 animate-float">&lt;/button&gt;</span>
            <span className="absolute top-[60%] right-[30%] text-6xl animate-float-delayed font-black opacity-30">N</span>
            <span className="absolute top-[70%] left-24 animate-float">&lt;p&gt;</span>
            <span className="absolute bottom-40 left-24 animate-float-delayed">&lt;/p&gt;</span>
            <span className="absolute bottom-16 left-16 animate-float">&lt;/body&gt;</span>
            <span className="absolute bottom-8 left-10 animate-float-slow">&lt;/html&gt;</span>

            {/* Tech Stack Icons */}
            <div className="absolute top-32 left-1/3 animate-float opacity-30">
                <Image src="/docker.png" alt="Docker" width={48} height={48} />
            </div>
            <div className="absolute bottom-40 right-1/2 animate-float-delayed opacity-30">
                <Image src="/java.png" alt="Java" width={48} height={48} />
            </div>
            <div className="absolute bottom-20 right-[40%] animate-float opacity-30">
                <Image src="/aws.png" alt="AWS" width={48} height={48} />
            </div>
            <div className="absolute top-48 left-[45%] animate-float-slow opacity-30">
                <Image src="/github.png" alt="Github" width={48} height={48} />
            </div>
        </div>
    );
}
