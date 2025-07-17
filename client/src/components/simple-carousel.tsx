import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SimpleCarouselProps {
  images: string[];
  alt: string;
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function SimpleCarousel({
  images,
  alt,
  className = "",
  autoPlay = true,
  autoPlayInterval = 4000
}: SimpleCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Visibility observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-play functionality (optimized)
  useEffect(() => {
    if (!autoPlay || images.length <= 1 || !isVisible) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [autoPlay, autoPlayInterval, images.length, isVisible]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) return null;

  return (
    <div ref={carouselRef} className={`relative group ${className}`}>
      {/* Main image */}
      <div className="relative w-full h-48 overflow-hidden rounded-lg bg-gray-800">
        <img
          src={images[currentIndex]}
          alt={`${alt} - ${currentIndex + 1}`}
          className="w-full h-48 object-cover transition-opacity duration-300"
          loading="lazy"
        />
      </div>

      {/* Navigation arrows - only show if more than 1 image */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={16} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={16} />
          </button>
        </>
      )}

      {/* Dots indicator - only show if more than 1 image */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gold scale-125"
                  : "bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-xs font-medium z-10">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}