import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // 3D Card Component
  const Card3D = ({ children, className = "" }) => (
    <div className={`group relative transform-gpu transition-all duration-500 hover:scale-105 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl blur-xl transition-all duration-500 group-hover:blur-2xl"></div>
      <div className="relative bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-500 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20">
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-blue-400/10 rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Card3D className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
              <span className="text-6xl font-bold text-white">404</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Page Not Found</h1>
            <p className="text-xl text-slate-300 mb-8">
              Oops! The page you're looking for seems to have vanished into thin air. 
              Don't worry, we'll help you get back on track.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300 border border-blue-500/30"
            >
              Return Home
            </Link>
            <Link 
              to="/contact" 
              className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-700/50 hover:border-blue-400/50 transition-all duration-300"
            >
              Contact Support
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-700">
            <p className="text-slate-400 text-sm">
              Error Code: 404 | Requested Path: <code className="bg-slate-700 px-2 py-1 rounded text-blue-400">{location.pathname}</code>
            </p>
          </div>
        </Card3D>
      </div>
    </div>
  );
};

export default NotFound;
