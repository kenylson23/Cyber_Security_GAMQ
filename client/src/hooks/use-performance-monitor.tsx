import { useEffect } from "react";

export function usePerformanceMonitor() {
  useEffect(() => {
    // Monitor frame rate
    let frameCount = 0;
    let lastTime = performance.now();
    
    const checkFrameRate = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        
        // Log performance warnings in development
        if (process.env.NODE_ENV === 'development' && fps < 30) {
          console.warn(`Low FPS detected: ${fps}fps`);
        }
        
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(checkFrameRate);
    };
    
    if (process.env.NODE_ENV === 'development') {
      requestAnimationFrame(checkFrameRate);
    }
    
    // Monitor memory usage
    const checkMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const used = memory.usedJSHeapSize / 1024 / 1024;
        const total = memory.totalJSHeapSize / 1024 / 1024;
        
        if (used > 100) { // More than 100MB
          console.warn(`High memory usage: ${used.toFixed(2)}MB / ${total.toFixed(2)}MB`);
        }
      }
    };
    
    const memoryInterval = setInterval(checkMemory, 30000); // Check every 30 seconds
    
    return () => {
      clearInterval(memoryInterval);
    };
  }, []);
}