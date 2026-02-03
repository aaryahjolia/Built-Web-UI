import React, { useState, useEffect, useRef } from 'react';

const useCountUp = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect(); // Only count once
                }
            },
            { threshold: 0.5 }
        );
        if (countRef.current) {
            observer.observe(countRef.current);
        }
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!inView) return;

        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [inView, end, duration]);

    return { count, countRef };
};

const StatCard = ({ icon, number, label, suffix = "" }) => {
    // Parse number to handle strings like "25000" but we want to animate the int part.
    // For this simple case, we pass integer as 'number' and suffix separately.
    const { count, countRef } = useCountUp(number);

    return (
        <div ref={countRef} className="bg-black/30 backdrop-blur-md border border-primary/30 rounded-2xl p-6 flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:border-primary/80 hover:shadow-[0_0_30px_rgba(211,0,113,0.3)] group h-64 w-full">
            <div className="mb-6 text-primary scale-125 group-hover:scale-150 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(211,0,113,0.8)]">
                {icon}
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-2 font-['Impact'] tracking-wide">
                {count}{suffix}
            </h2>
            <p className="text-gray-300 uppercase tracking-widest text-sm md:text-base mt-2 font-['Arial']">
                {label}
            </p>
        </div>
    );
};

const StatsSection = () => {
    const stats = [
        {
            id: 1,
            number: 350,
            suffix: "+",
            label: "Projects Completed",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
            )
        },
        {
            id: 2,
            number: 10,
            suffix: "+",
            label: "Years Experience",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            id: 3,
            number: 5000,
            suffix: "+",
            label: "Equipment Units",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        {
            id: 4,
            number: 100,
            suffix: "%",
            label: "Satisfaction",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <div className="w-11/12 mx-auto my-32 relative z-20" data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map(stat => (
                    <StatCard
                        key={stat.id}
                        icon={stat.icon}
                        number={stat.number}
                        suffix={stat.suffix}
                        label={stat.label}
                    />
                ))}
            </div>
        </div>
    );
};

export default StatsSection;
