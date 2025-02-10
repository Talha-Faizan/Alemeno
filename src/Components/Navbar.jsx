import { Bell, UserCircle, Menu } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <span className="rounded-full bg-black w-5 h-5"></span>
        Acme
      </div>
      <button 
        className="md:hidden text-gray-600 hover:text-black" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="w-6 h-6" />
      </button>
      
      <div className={`absolute top-16 left-0 w-full bg-white shadow-md md:static md:flex gap-6 text-gray-700 p-4 md:p-0 ${isOpen ? 'block' : 'hidden'}`}>
        <a href="#" className="block md:inline-block hover:text-black">Home</a>
        <a href="#" className="block md:inline-block hover:text-black">Explore</a>
        <a href="#" className="block md:inline-block hover:text-black">Community</a>
        <a href="#" className="block md:inline-block hover:text-black">Jobs</a>
      </div>
      
      <div className="hidden md:flex items-center gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600">
          Create
        </button>
        <Bell className="w-6 h-6 text-gray-600 hover:text-black" />
        <UserCircle className="w-8 h-8 text-gray-600 hover:text-black" />
      </div>
    </nav>
  );
};

export default Navbar;
