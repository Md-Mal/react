import React from "react";
import { useState, useEffect } from "react";
import classes from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const [menuOpen, setMenuOpen] = useState(false);

  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToogleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const ctaClickHandler = () => {
    menuToogleHandler();
    history.push("/page-cta");
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to='/' className={classes.header__content__logo}>logo</Link>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen ? classes.isMenu : ""
          } `}
        >
          <ul>
            <li>
              <Link to="/page-one" onClick={menuToogleHandler}>PageOne</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/page-two" onClick={menuToogleHandler}>PageTwo</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/page-three" onClick={menuToogleHandler}>PageThree</Link>
            </li>
          </ul>
          <button onClick={ctaClickHandler}>cta page</button>
        </nav>
        <div className={classes.header__content__toogle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToogleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToogleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
