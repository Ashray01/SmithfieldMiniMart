import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Follow Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#"
              className="p-3 bg-blue-700 rounded-full hover:bg-blue-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-3 bg-blue-700 rounded-full hover:bg-blue-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-3 bg-blue-700 rounded-full hover:bg-blue-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/18764538934"
              className="p-3 bg-blue-700 rounded-full hover:bg-blue-500 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Business Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Business Hours</h3>
          <p>Mon - Fri: 7:00 AM - 8:00 PM</p>
          <p>Sat: 8:00 AM - 9:00 PM</p>
          <p>Sun: 9:00 AM - 7:00 PM</p>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Address</h3>
          <p>Smithfield District, Crosskeys P.O</p>
          <p>Manchester, Jamaica</p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="mb-4">Have any questions? Feel free to reach out.</p>
          <a
            href="mailto:smithfieldminimartetc@gmail.com"
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-md transition"
          >
            Send an Email
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 text-center border-t border-blue-700 pt-4 text-gray-300 text-sm">
        © 2025 SmithField Mini-Mart Etc. All rights reserved.
      </div>
    </footer>
  );
}
