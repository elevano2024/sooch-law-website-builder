
import { useEffect, useState } from "react";

const Loading = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <img 
          src="/lovable-uploads/06d3ec0c-2aa2-4f53-a861-95daba926881.png" 
          alt="Sooch Law Logo" 
          className="h-24 mb-6 animate-pulse" 
        />
        <div className="relative w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-sooch-gold animate-[loading_1s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
