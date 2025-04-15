
import { useState, useRef } from "react";
import { MapPin, Map } from "lucide-react";

// Office coordinates
const OFFICE_LAT = 43.7094489;
const OFFICE_LNG = -79.6739493;

interface InteractiveMapProps {
  height?: string;
  compact?: boolean;
}

const InteractiveMap = ({ height = "450px", compact = false }: InteractiveMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  const handleGetDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${OFFICE_LAT},${OFFICE_LNG}`,
      "_blank"
    );
  };
  
  return (
    <div className={`relative w-full rounded-lg overflow-hidden`} style={{ height }}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.455752866566!2d-79.6739493!3d43.7094489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3aa78f2904b3%3A0xf2fd7de8bcde99c!2s218%20Export%20Blvd%2C%20Mississauga%2C%20ON%20L5S%200A7%2C%20Canada!5e0!3m2!1sen!2sus!4v1697635882841!5m2!1sen!2sus" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Sooch Law Office Location"
        className="absolute inset-0"
      ></iframe>
      
      {/* Interactive overlay for getting directions */}
      <div 
        className="absolute inset-0 bg-transparent cursor-pointer z-10"
        onClick={handleGetDirections}
        title="Click for directions"
      />
      
      {/* Overlay instructions */}
      {!compact && (
        <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 p-3 rounded-lg shadow-md flex items-center z-20">
          <MapPin className="text-sooch-gold mr-2" size={compact ? 16 : 20} />
          <span className={`${compact ? 'text-xs' : 'text-sm'} font-medium`}>Click map for directions</span>
        </div>
      )}
      
      {/* Map marker */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="animate-bounce">
          <Map className={`${compact ? 'h-6 w-6' : 'h-10 w-10'} text-sooch-gold`} />
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
