import React, { useEffect, useRef } from "react";

const AnimatedBackground = () => {
    const blobRefs = useRef([]);
    const initialPositions = [
        { x: -5, y: 0 },
        { x: 5, y: 0 },
        { x: 15, y: -10 },
        { x: -15, y: -10 },
    ];

    useEffect(() => {
        let currentScroll = 0;
        let requestId;

        const handleScroll = () => {
            const newScroll = window.pageYOffset;
            const scrollDelta = newScroll - currentScroll;
            currentScroll = newScroll;

            blobRefs.current.forEach((blob, index) => {
                const initialPos = initialPositions[index];
                
                // Unique movement patterns
                const xOffset = Math.sin(newScroll / 80 + index * 0.6) * 300;
                const yOffset = Math.cos(newScroll / 90 + index * 0.6) * 50;
                
                const x = initialPos.x + xOffset;
                const y = initialPos.y + yOffset;
                
                blob.style.transform = `translate(${x}px, ${y}px)`;
                blob.style.transition = "transform 1.2s ease-out";
            });

            requestId = requestAnimationFrame(handleScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(requestId);
        };
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0">
                <div
                    ref={(ref) => (blobRefs.current[0] = ref)}
                    className="absolute top-0 left-[-5%] md:w-96 md:h-96 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-[110px] opacity-30 md:opacity-20 hover:scale-110 transition-transform duration-500"></div>
                <div
                    ref={(ref) => (blobRefs.current[1] = ref)}
                    className="absolute top-0 right-[-5%] w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-[110px] opacity-30 md:opacity-20 hover:scale-110 transition-transform duration-500"></div>
                <div
                    ref={(ref) => (blobRefs.current[2] = ref)}
                    className="absolute -bottom-10 left-[-30%] md:left-10 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-[110px] opacity-30 md:opacity-20 hover:scale-110 transition-transform duration-500"></div>
                <div
                    ref={(ref) => (blobRefs.current[3] = ref)}
                    className="absolute -bottom-12 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-[110px] opacity-20 md:opacity-15 hover:scale-110 transition-transform duration-500"></div>
            </div>
            {/* Custom Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#6b6b6b20_1px,transparent_1px),linear-gradient(to_bottom,#6b6b6b20_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
        </div>
    );
};

export default AnimatedBackground;
