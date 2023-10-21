import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { ImCross } from "react-icons/im";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Homepage from "../Homepage/Homepage";
import Image from "../../assets/logo-bsc.png";
import ImageMobile from "../../assets/logo.png";
import "../Contact/TitleContact.jsx";
import "../Section/BaseSection.jsx";

const pages = [
  { link: "/services", name: "Apéritifs" },
  { link: "/services", name: "Plats" },
  { link: "/services", name: "Desserts" },
  { link: "/services", name: "Évènements" },
];

const Navbar = () => {
  const [scrollNavbar, setScrollNavbar] = useState();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showSousListsMenu, setShowSousListsMenu] = useState(false);
  const [isMouseOnSubmenu, setIsMouseOnSubmenu] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSousListsMenu = () => {
    setShowSousListsMenu(!showSousListsMenu);
  };

  const handleMouseEnterSubmenu = () => {
    setIsMouseOnSubmenu(true);
  };

  const closeSubmenuWithDelay = () => {
    setTimeout(() => {
      setShowSousListsMenu(false);
    }, 500);
  };

  const handleMouseLeaveParent = () => {
    if (!isMouseOnSubmenu) {
      closeSubmenuWithDelay();
    }
  };

  const closeMobileMenu = () => {
    setToggleMenu(false);
  };

  const SectionToScrollHome = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const SectionToScrollAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const SectionToScroll = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollNavbar(true);
      } else {
        setScrollNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      loading="lazy"
      className="image-home-by-sarah-cuisine pt-6 pb-16 sm:pb-24 mb:min-h-650 min-h-500"
    >
      <nav
        className={`${
          scrollNavbar ? "bg-white" : ""
        } fixed font-sans-serif bg-transparent transition duration-300 ease-in-out w-full top-0 left-0 shadow-md z-max`}
      >
        <div className="container mx-auto px-4 sm:px-3 lg:px-8">
          <div className="flex items-center justify-center h-24">
            <div className="md:left-0 md:inline md:absolute">
              <NavLink to="/">
                <img className="mt-10" src={Image} alt="Icône de Sarah" />
              </NavLink>
            </div>

            <div className="flex items-center">
              <NavLink
                onClick={SectionToScrollHome}
                className={`${
                  scrollNavbar ? "text-pink" : "text-white"
                } px-3 py-2 text-base font-extrabold uppercase`}
              >
                Accueil
              </NavLink>
              <NavLink
                onClick={SectionToScrollAbout}
                className={`${
                  scrollNavbar ? "text-pink" : "text-white"
                }  px-4 py-2 text-base font-extrabold uppercase`}
              >
                À propos
              </NavLink>
              <NavLink
                to="/services"
                className={`${
                  scrollNavbar ? "text-pink" : "text-white"
                } py-2 text-base font-extrabold`}
              >
                <li className="relative group list-none text-center">
                  <NavLink
                    to="/services"
                    className="block px-3 py-2 rounded-md font-extrabold"
                  >
                    <p className="uppercase">Services</p>
                  </NavLink>
                  <div className="flex justify-center">
                    <ul className="absolute w-32 py-5 px-5 hidden group-hover:block bg-white shadow-md rounded-md">
                      {pages.map((page, index) => (
                        <li key={index}>
                          <NavLink
                            to={page.link}
                            onMouseEnter={handleMouseEnterSubmenu}
                            onMouseLeave={handleMouseLeaveParent}
                            className="block py-1 text-pink"
                          >
                            <p>{page.name}</p>
                          </NavLink>
                        </li>
                      ))}
                      <li>
                        <NavLink
                          to="/services"
                          className="underline font-extrabold text-pink"
                        >
                          Tous les services
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
              </NavLink>

              <NavLink
                to="/"
                onClick={SectionToScroll}
                className={`${
                  scrollNavbar ? "text-pink" : "text-white"
                } px-4 py-2 text-base font-extrabold uppercase`}
              >
                Contact
              </NavLink>
            </div>
            <NavLink
              to="/devis"
              className="bg-f3dbc3 mr-4 shadow-md px-6 py-2 border rounded-3xl text-white md:block md:absolute md:right-0 hover:bg-e9c2c2"
            >
              <p className="font-extrabold">DEVIS GRATUIT</p>
            </NavLink>
          </div>
        </div>
      </nav>
      <nav className="fixed w-full font-sans-serif text-center top-0 left-0 shadow-md xl:hidden bg-white z-max ">
        <div className="px-4 h-28 flex items-center justify-between">
          <NavLink to="/">
            <img className="w-44 mb-2" src={ImageMobile} alt="Icône de Sarah" />
          </NavLink>

          <div className="mr-2">
            <button
              onClick={toggleNavbar}
              className={`icon-toggle bg-e9c2c2 border border-white rounded-3xl p-3 inline-flex items-center justify-center transition-transform transform hover:scale-110 ${
                isRotated ? "-rotate-180" : ""
              }`}
            >
              {isOpen ? (
                <ImCross className="text-white" />
              ) : (
                <TfiMenu className="text-white" />
              )}
            </button>
          </div>
        </div>
        <ul
          className={`toggle-menu ${
            isOpen ? "block" : "hidden"
          } p-2 border-t border-t-efefef transform transition-transform duration-300 ease-in-out`}
        >
          <div id="navlinks">
            <li>
              <NavLink
                to="/"
                onClick={SectionToScrollHome}
                className="text-black mt-3 block px-3 py-2 rounded-md text-base font-extrabold hover:bg-f3dbc3 hover:text-white transition duration-300"
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                onClick={SectionToScrollAbout}
                className="text-black block px-3 py-2 rounded-md text-base font-extrabold hover:bg-f3dbc3 hover:text-white transition duration-300"
              >
                À propos
              </NavLink>
            </li>

            <li className="block py-2 rounded-md text-base font-extrabold translate-x-2 duration-100">
              <button onClick={toggleSousListsMenu}>
                <div className="flex items-center justify-between">
                  <div className="text-black pr-4">Services</div>{" "}
                  <MdOutlineKeyboardArrowDown />
                </div>
              </button>

              <div id="navlinks">
                <ul
                  id="navlinks"
                  className={`toggle-menu ${
                    showSousListsMenu ? "block" : "hidden"
                  } p-2 pt-2 pr-5`}
                >
                  {pages.map((page, index) => (
                    <li key={index}>
                      <NavLink
                        to={page.link}
                      >
                        <p className="text-pink mt-2 p-2 block px-3 rounded-md text-base font-extrabold hover:bg-f3dbc3 hover:text-white transition duration-300">
                          {page.name}
                        </p>
                      </NavLink>
                    </li>
                  ))}
                  <li>
                    <NavLink
                      to="/services"
                      className="underline text-pink p-2 block px-3 rounded-md text-base font-extrabold hover:bg-f3dbc3 hover:text-white transition duration-300"
                    >
                      Tous les services
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <NavLink
                to="/"
                onClick={SectionToScroll}
                className="text-black p-2 block px-3 rounded-md text-base font-extrabold hover:bg-f3dbc3 hover:text-white transition duration-300"
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/devis"
                onClick={closeMobileMenu}
                className="text-black mb-3 p-2 block px-3 rounded-md text-base font-extrabold hover:bg-f3dbc3 hover:text-white"
              >
                Devis gratuit
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
      <Homepage />
    </div>
  );
};

export default Navbar;
