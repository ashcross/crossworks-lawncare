import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white/60 shadow-sm py-6 backdrop-blur-sm absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <Link to="/" className="">
            <img 
              src="/logo.png" 
              alt="CrossWorks Lawnmowing & Property Care" 
              className="h-32 w-auto transition-transform hover:scale-105" 
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
