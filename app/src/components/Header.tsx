import React from 'react';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
  currentPage: string;
}

class Header extends React.Component<{ currentPage: string }> {
  constructor(props: HeaderProps) {
    super(props);
  }

  render() {
    return (
      <>
        <header className="header">
          <h1 className="header__title header__item">{this.props.currentPage}</h1>
          <div className="header__item">
            <img className="header__logo" src="./public/pokemon-logo.png"></img>
          </div>
          <nav className="header__nav header__item">
            <NavLink to="/" className="header__nav-item">
              Home
            </NavLink>
            <NavLink to="/about" className="header__nav-item">
              About
            </NavLink>
            <NavLink to="/notes" className="header__nav-item">
              Make a note
            </NavLink>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;
