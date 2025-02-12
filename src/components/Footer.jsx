import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 mb-4 md:mb-0 ml-4 text-left">
          <p className="text-sm ml-8">Embrace the power of our app and unlock the secrets of the universe, one quiz at a time. As I always say, 'Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.'</p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col md:flex-row">
          <div className="mb-4 md:mb-0 md:mr-6">
            <h4 className="text-lg font-semibold mb-2">Links</h4>
            <ul>
        <li>
              <Link
                to="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
              >
                Home
              </Link>
        </li>
        <li>
              <Link
                to="/account"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
              >
                Account
              </Link>
        </li>
        <li>
              <Link
                to="/quiz"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
              >
                Quiz
              </Link>
        </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <div className="bg-gray-900 text-center py-4">
      <p className="text-sm text-white ">
        Made with{" "}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          Tailwind CSS
        </a>
      </p>
    </div>
    </>
  );
};

export default Footer;
