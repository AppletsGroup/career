import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">Facebook</span>
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">Twitter</span>
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">Instagram</span>
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
        <p className="mt-8 text-center text-base text-gray-400">&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
