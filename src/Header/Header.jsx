import React from "react"

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-6 border-b border-gray-200">
      <div className="text-2xl font-bold">Fashion</div>
      <nav className="flex space-x-6">
        <a href="#" className="text-gray-700 hover:text-black">
          Shop
        </a>
        <a href="#" className="text-gray-700 hover:text-black">
          New
        </a>
        <a href="#" className="text-gray-700 hover:text-black">
          Sale
        </a>
        <a href="#" className="text-gray-700 hover:text-black">
          Contact
        </a>
      </nav>
    </header>
  )
}

export default Header
