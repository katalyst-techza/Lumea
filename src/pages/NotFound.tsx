
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { BalloonLogo } from "@/components/BalloonLogo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-luminous-pink/10 px-4">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <BalloonLogo className="w-24 h-24" />
        </div>
        <h1 className="text-5xl font-seasons text-luminous-brown mb-4">404</h1>
        <p className="text-xl font-script text-luminous-mauve mb-8">Oops! This page seems to have floated away</p>
        <Link 
          to="/" 
          className="bg-luminous-mauve text-white px-6 py-3 rounded-md font-seasons hover:bg-luminous-mauve/80 transition-colors inline-block"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
