const Footer = () => {
    return (
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between">
          {/* Left Section - Branding */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">Organza</h3>
            <p className="text-gray-600 mt-2">
              Making wedding planning easier, one invitation at a time.
            </p>
          </div>
  
          {/* Middle Section - Product Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
  
          {/* Right Section - Company Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Contact
                </a>
              </li>
            </ul>
          </div>
  
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-2 flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-pinterest"></i> Pinterest
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-8">
          &copy; 2025 OrganzaRSVP. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  