function Footer() {
    return ( 
        <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/services" className="hover:underline">Services</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Movie Mania. All rights reserved.
        </div>
      </div>
    </footer>
     );
}

export default Footer;