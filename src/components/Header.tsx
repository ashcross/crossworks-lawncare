import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white/90 shadow-sm py-6 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <Link to="/" className="mb-4">
            <img 
              src="/logo.png" 
              alt="CrossWorks Lawnmowing & Property Care" 
              className="h-32 w-auto" // Increased from h-20 to h-32
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;