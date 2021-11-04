import React from "react";
import './_map.scss'
const Map = () => {
    return (
        <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d109691.97570655223!2d1.5593455686503348!3d42.565407254555346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d42.5887053!2d1.4956667!4m3!3m2!1d42.5488869!2d1.4007490999999999!5e0!3m2!1sen!2seg!4v1636050344574!5m2!1sen!2seg" width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>
        </div>
     );
}
 
export default Map;