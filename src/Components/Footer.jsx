import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      className="bg-zinc-950 text-zinc-50 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">School</h2>
            <p className="text-zinc-400">
              Providing quality education and fostering creativity. Join us to learn, grow, and excel.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:gap-12">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul>
                <li><a href="/about" className="hover:text-zinc-300">About Us</a></li>
                <li><a href="/courses" className="hover:text-zinc-300">Courses</a></li>
                <li><a href="/services" className="hover:text-zinc-300">Services</a></li>
                <li><a href="/contact" className="hover:text-zinc-300">Contact</a></li>
              </ul>
            </div>
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-300">
                  <FaFacebookF className="w-6 h-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-300">
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-300">
                  <FaLinkedinIn className="w-6 h-6" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-300">
                  <FaInstagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-zinc-400 text-sm">© {new Date().getFullYear()} School. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
