import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CardCarousel({ items, renderCard }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [exitIndex, setExitIndex] = useState(null);
    const [direction, setDirection] = useState("right"); // 'right' (next) or 'left' (prev)
    const [isAnimating, setIsAnimating] = useState(false);

    const handleSlide = (newIndex, slideDirection) => {
        if (isAnimating || newIndex === currentIndex) return;

        setIsAnimating(true);
        setExitIndex(currentIndex);
        setDirection(slideDirection);
        setCurrentIndex(newIndex);

        setTimeout(() => {
            setExitIndex(null);
            setIsAnimating(false);
        }, 500);
    };

    const prevSlide = () => {
        const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
        handleSlide(newIndex, "left");
    };

    const nextSlide = () => {
        const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
        handleSlide(newIndex, "right");
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center py-10">

            {/* Progress Indicator - Separated from Card */}
            <div className="flex space-x-2 mb-8">
                {items.map((_, idx) => (
                    <div
                        key={idx}
                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex
                            ? "w-8 bg-purple-600"
                            : "w-2 bg-gray-300 dark:bg-gray-700 hover:bg-purple-300 cursor-pointer"
                            }`}
                        onClick={() => {
                            const slideDirection = idx > currentIndex ? "right" : "left";
                            handleSlide(idx, slideDirection);
                        }}
                    />
                ))}
            </div>

            <div className="relative w-full flex items-center justify-center">
                {/* Previous Button */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 z-20 p-3 bg-white/10 hover:bg-white/20 dark:bg-black/20 dark:hover:bg-black/40 backdrop-blur-md border border-white/20 rounded-full shadow-lg transition-all duration-300 group hover:scale-110 hidden md:block -ml-16"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-8 h-8 text-purple-600 dark:text-purple-400 group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Card Container */}
                <div className="relative w-full overflow-hidden min-h-[400px] flex items-center justify-center">

                    {/* Exiting Card (Absolute) */}
                    {exitIndex !== null && (
                        <div
                            key={`exit-${exitIndex}`}
                            className={`absolute top-0 left-0 w-full h-full flex items-center justify-center px-4 pointer-events-none transform ${direction === "right" ? "carousel-slide-out-left" : "carousel-slide-out-right"
                                }`}
                        >
                            {renderCard(items[exitIndex])}
                        </div>
                    )}

                    {/* Entering/Current Card (Relative to hold height) */}
                    <div
                        key={`current-${currentIndex}`}
                        className={`w-full flex justify-center px-4 transform ${isAnimating
                            ? direction === "right"
                                ? "carousel-slide-in-right"
                                : "carousel-slide-in-left"
                            : ""
                            }`}
                    >
                        {renderCard(items[currentIndex])}
                    </div>
                </div>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    className="absolute right-0 z-20 p-3 bg-white/10 hover:bg-white/20 dark:bg-black/20 dark:hover:bg-black/40 backdrop-blur-md border border-white/20 rounded-full shadow-lg transition-all duration-300 group hover:scale-110 hidden md:block -mr-16"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-8 h-8 text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Mobile Navigation (Bottom) */}
            <div className="flex md:hidden justify-center space-x-8 mt-6">
                <button onClick={prevSlide} className="p-3 bg-white/10 rounded-full shadow-sm border border-black/10 dark:border-white/10"><ChevronLeft className="w-6 h-6 text-purple-600" /></button>
                <button onClick={nextSlide} className="p-3 bg-white/10 rounded-full shadow-sm border border-black/10 dark:border-white/10"><ChevronRight className="w-6 h-6 text-purple-600" /></button>
            </div>

        </div>
    );
}
