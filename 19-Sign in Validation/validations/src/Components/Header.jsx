import  Link  from "react-router-dom";


function Header(){
    return(
        <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          LOGO
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#home"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            About
          </a>
          <a
            href="#services"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex space-x-4">
       <Link href={'/Pages/SignIn'}>
          <button className="px-4 py-2 border border-gray-800 text-gray-800 rounded hover:bg-gray-100 transition duration-300">
            Login
          </button>
       </Link>
         
          <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition duration-300">
            SignUp
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div className="md:hidden flex justify-between items-center px-6 py-3 border-t">
        <div className="text-sm text-gray-500">Menu</div>
        <button className="bg-gray-800 text-white px-4 py-2 rounded">
          Open
        </button>
      </div>
    </header>
    )
}



export default Header;  