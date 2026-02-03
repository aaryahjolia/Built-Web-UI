import React from 'react';

const GlowSection = ({ position, top, color = "#d30071" }) => {
    const isRight = position === 'right';
    const alignClass = isRight ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2';

    // Generate simplified lines for this specific section
    // const lines = Array.from({ length: 4 }).map((_, i) => ({
    //     top: `${Math.random() * 100}%`,
    //     animationDuration: `${15 + Math.random() * 15}s`,
    //     animationDelay: `-${Math.random() * 10}s`,
    //     opacity: 0.15 + Math.random() * 0.2,
    //     // If right aligned, maybe move differently? keeping simple left-to-right for now
    // }));

    return (
        <div className={`absolute w-full h-[800px] pointer-events-none overflow-hidden`} style={{ top }}>
            {/* Glow Blob */}
            <div className={`absolute top-1/2 transform -translate-y-1/2 ${alignClass} w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_${color}_0%,_transparent_70%)] opacity-30 blur-[50px]`}></div>

            {/* Localized Lines */}
            {/* {lines.map((style, index) => (
                <div
                    key={index}
                    className="animated-line absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
                    style={style}
                />
            ))} */}
        </div>
    );
};

const AnimatedBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Grid overlay for tech feel - Covers entire height */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]"></div>

            {/* Zigzag Sections */}
            <GlowSection position="center" top="0" />
            <GlowSection position="right" top="15%" />
            <GlowSection position="left" top="35%" />
            <GlowSection position="right" top="60%" />
            <GlowSection position="left" top="85%" />
        </div>
    );
};

export default AnimatedBackground;
