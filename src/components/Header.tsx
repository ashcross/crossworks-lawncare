import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <Link to="/" className="mb-4">
            <img 
              src="/logo.png" 
              alt="CrossWorks Lawnmowing & Property Care" 
              className="h-20 w-auto"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;