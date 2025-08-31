import { Link } from "react-router-dom";

const Header = () => {
  const menu = (
    <>
      <li>
        <Link className="text-md font-bold">Menu</Link>
      </li>
      <li>
        <Link className="text-md font-bold">Our Story</Link>
      </li>
      <li>
        <Link className="text-md font-bold">Contact</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {menu}
          </ul>
        </div>

        <div className="w-12 h-14">
          <img src="/src/assets/logo.png" alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">SIGN UP</a>
      </div>
    </div>
  );
};

export default Header;
