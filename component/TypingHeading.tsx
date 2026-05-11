// "use client";

// import { useEffect, useState } from "react";

// export default function TypingHeading() {
//     const [text, setText] = useState("");
//     const fullText = "Hi\nI'm Dhanushka\nSoftware Engineer.";

//     useEffect(() => {
//         let index = 0;
//         const interval = setInterval(() => {
//             index++;
//             setText(fullText.slice(0, index));
//             if (index >= fullText.length) {
//                 clearInterval(interval);
//             }
//         }, 80); // Adjust typing speed here

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-6 whitespace-pre-wrap min-h-[150px] md:min-h-[180px] lg:min-h-[220px]">
//             {text}
//             <span className="animate-pulse font-light text-gray-400">|</span>
//         </h1>
//     );
// }



"use client";

import { useEffect, useState } from "react";

export default function TypingHeading() {
    const [text, setText] = useState("");

    const fullText = "Hi\nI'm Dhanushka\nSoftware Engineer.";

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            index++;

            setText(fullText.slice(0, index));

            if (index >= fullText.length) {
                clearInterval(interval);
            }
        }, 80);

        return () => clearInterval(interval);
    }, []);

    return (
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-6 whitespace-pre-wrap min-h-[120px] sm:min-h-[140px] md:min-h-[180px] lg:min-h-[220px]">
            {text}

            <span className="animate-pulse font-light text-gray-400">
                |
            </span>
        </h1>
    );
}