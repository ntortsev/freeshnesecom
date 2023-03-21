import React from "react";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import user from "../assets/user.svg";
import cart from "../assets/cart.svg";
import { Link } from "react-router-dom";

function Header({ categories }) {
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-top__contact">
          <span>Chat with us</span>
          <p className="number">+420 336 775 664</p>
          <p className="email">info@freshnesecom.com</p>
        </div>
        <div className="header-top__links">
          <span>Blog</span>
          <span>About Us</span>
          <span>Careers</span>
        </div>
      </div>
      <div className="header-bottom">
        <Link to="/">
          <img className="header-bottom__logo" src={logo} alt="logo" />
        </Link>
        <form className="header-bottom__search">
          <div>
            <select>
              <option>All Categories</option>
              {categories?.map((c) => (
                <option key={c.id}>
                  {c.name.charAt(0).toUpperCase() + c.name.slice(1)}
                </option>
              ))}
            </select>
            <input type="text" placeholder="Search Products, categories ..." />
          </div>
          <button type="submit">
            <img src={search} alt="search" />
          </button>
        </form>
        <div className="header-bottom__auth">
          <button>
            <img src={user} alt="user" />
          </button>
          <button>
            <img src={cart} alt="cart" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
