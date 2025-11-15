import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <nav className="navbar bg-base-200 shadow-sm lg:px-20 lg:justify-center ">
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
                <a href="#share">Share</a>
              </li>
              <li>
                <a href="#collection">Collection</a>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-2xl text-[#ff0000]">
            Post-Rug Photos
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex border-2 border-[#ff0000] rounded-full px-10">
          <Link to={"/"} className="btn btn-ghost text-2xl text-[#ff0000]">
            Post-Rug Photos
          </Link>
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#share">Share</a>
            </li>
            <li>
              <a href="#collection">Collection</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
