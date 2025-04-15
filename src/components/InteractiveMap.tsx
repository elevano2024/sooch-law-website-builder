
import { useState, useEffect, useRef } from "react";
import { MapPin } from "lucide-react";

// Office coordinates
const OFFICE_LAT = 43.7094489;
const OFFICE_LNG = -79.6739493;

const InteractiveMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Ensure the map container exists
    if (!mapRef.current) return;
    
    // Create a simple wrapper around the iframe to handle interactions
    const handleMapClick = () => {
      window.open(
        `https://www.google.com/maps/dir/?api=1&destination=${OFFICE_LAT},${OFFICE_LNG}`,
        "_blank"
      );
    };
    
    // Add click event listener to the map overlay
    const overlay = document.createElement("div");
    overlay.className = "absolute inset-0 cursor-pointer";
    overlay.title = "Click to get directions";
    overlay.addEventListener("click", handleMapClick);
    
    // Add the overlay as a sibling to the iframe
    if (mapRef.current.parentNode) {
      mapRef.current.parentNode.appendChild(overlay);
    }
    
    setMapLoaded(true);
    
    // Cleanup function
    return () => {
      overlay.removeEventListener("click", handleMapClick);
      if (overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
    };
  }, []);
  
  return (
    <div className="relative">
      <div ref={mapRef}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.455752866566!2d-79.6739493!3d43.7094489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3aa78f2904b3%3A0xf2fd7de8bcde99c!2s218%20Export%20Blvd%2C%20Mississauga%2C%20ON%20L5S%200A7%2C%20Canada!5e0!3m2!1sen!2sus!4v1697635882841!5m2!1sen!2sus" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Sooch Law Office Location"
        ></iframe>
      </div>
      
      {/* Overlay instructions */}
      <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 p-3 rounded-lg shadow-md flex items-center">
        <MapPin className="text-sooch-gold mr-2" size={20} />
        <span className="text-sm font-medium">Click map for directions</span>
      </div>
    </div>
  );
};

export default InteractiveMap;
