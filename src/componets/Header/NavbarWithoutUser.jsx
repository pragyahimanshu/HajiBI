import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavbarWithoutUser() {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div>
      <header
        className={`fixed z-50 w-full flex items-center py-4 transition duration-500 ease-in-out ${
          show && "bg-black transition duration-500 ease-in-out"
        }`}
      >
        <div className="w-9/12 md:w-11/12 ml-8">
          <div className="text-2xl sm:text-3xl font-bold text-[#A3FF4D] tracking-[0.2em]">
            HajiBI
          </div>
        </div>

        <div>
          <Link to="/signin">
            <button className="bg-[#A3FF4D] px-8 rounded-sm py-2 text-black text-base font-bold mr-4 lg:mr-0 shadow-lg shadow-[#A3FF4D]/10 hover:bg-[#7CFC00] transition duration-300">
              Login
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default NavbarWithoutUser;
