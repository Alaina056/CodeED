import React, { useState, useEffect } from "react";
import Image1 from "../assets/Image1.webp";
import Image2 from "../assets/Image2.webp";
import Image3 from "../assets/Image3.webp";
import Image4 from "../assets/Image4.webp";
import Image5 from "../assets/Image5.webp";
import Image6 from "../assets/Image6.webp";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const images = [Image1, Image2, Image3, Image4, Image5, Image6];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to change the image index every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* a separate div for background image  */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center animate-zoom`}
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images[currentImageIndex]})` }}
      />
      
      {/* for text and button  */}
      <div className="absolute top-[68%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full text-center">
        <h1 className="text-white text-6xl font-bold">
          Welcome to CodeEd
        </h1>
        <p className="text-2xl font-semibold text-slate-300 italic mt-2">
          Empower Your Creativity with CodeEd
        </p>
        <Link to="/compiler">
          <Button
          style={{letterSpacing: "0.035em"}}
            variant="homebtn"
            className="text-2xl font-semibold w-[10rem] h-[3.5rem] mt-4"
          >
            Let's Code 
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
