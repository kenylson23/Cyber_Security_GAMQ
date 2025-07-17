import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import OptimizedImage from "./optimized-image";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function ImageCarousel({
  images,
  alt,
  className = "",
  autoPlay = true,
  autoPlayInterval = 4000
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState<Set<number>>(new Set());
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Intersection Observer for visibility
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

  // Intelligent preloading
  useEffect(() => {
    if (!isVisible || images.length <= 1) return;

    const preloadImage = (index: number) => {
      if (preloadedImages.has(index)) return;

      const img = new Image();
      img.src = images[index];
      img.onload = () => {
        setPreloadedImages(prev => new Set([...prev, index]));
      };
    };

    // Preload current image
    preloadImage(currentIndex);

    // Preload next image
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    preloadImage(nextIndex);

    // Preload previous image
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    preloadImage(prevIndex);

  }, [currentIndex, images, isVisible]);

  // Auto-play functionality with pause when not visible
  useEffect(() => {
    if (!autoPlay || images.length <= 1 || !isVisible) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    // Clear existing interval before creating new one
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Add delay to ensure DOM has updated
    const timeoutId = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, autoPlayInterval);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [autoPlay, autoPlayInterval, images.length, isVisible]);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) return null;

  return (
    <div ref={carouselRef} className={`relative group ${className}`}>
      {/* Loading skeleton */}
      {!preloadedImages.has(currentIndex) && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse rounded-lg" />
      )}
      
      {/* Main image */}
      <div className="relative w-full h-48 overflow-hidden rounded-lg">
        <OptimizedImage
          src={images[currentIndex]}
          alt={`${alt} - ${currentIndex + 1}`}
          className={`w-full h-48 object-cover transition-all duration-300 ${
            preloadedImages.has(currentIndex) ? 'opacity-100' : 'opacity-0'
          }`}
          loading="eager"
          width={400}
          height={300}
        />
      </div>

      {/* Navigation arrows - only show if more than 1 image */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform-gpu"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={16} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform-gpu"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={16} />
          </button>
        </>
      )}

      {/* Dots indicator - only show if more than 1 image */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gold scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      )}
      
      {/* Preload status indicator (development only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
          Preloaded: {preloadedImages.size}/{images.length}
        </div>
      )}
    </div>
  );
}