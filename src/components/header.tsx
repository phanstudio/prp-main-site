import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <nav className="navbar bg-[#2F2E2B] lg:px-20 lg:justify-center ">
        <div className="navbar-start lg:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#meme">Meme</a>
              </li>
              <li>
                <a href="#collection">Collection</a>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-2xl text-[#FF4F22]">
            Post-Rug Photos
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex  px-10">
          <Link to={"/"} className=" p-7 text-2xl text-[#FF4F22]">
            Post-Rug Photos
          </Link>
          <ul className="menu menu-horizontal border-2 border-[#FF4F22] rounded-full px-1 text-lg font-semibold  space-x-4">
            <li>
              <a href="#home"
              className="rounded-full ">Home</a>
            </li>
            <li>
              <a href="#about"
              className="rounded-full ">About Us</a>
            </li>
            <li>
              <a href="#meme"
              className="rounded-full ">Meme</a>
            </li>
            <li>
              <a href="#collection"
              className="rounded-full ">Collection</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
