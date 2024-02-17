import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import classes from './MainNavigation.module.css';
import Link from 'next/link';

const MainNavigation = () => {


  const [showMenu, setShowMenu] = useState(false);
  const closeMenu = () => {
    setShowMenu(false);
  }
  const handleClickMenu = () => {
    setShowMenu((prevState) => (!prevState));
  }


  return (
    <header className={classes.header}>


      <Link href='/' >
        <div className={classes.logo}>Suryansh Srivastava</div>
      </Link>
      <nav>
        <div onClick={handleClickMenu} className={classes.nav_icon}>
          {showMenu ? <FiX /> : <FiMenu />}
        </div>
        <ul className={showMenu ? classes.nav_link_active : classes.nav_link} >
        <li onClick={closeMenu} className={classes.nav_item}>
            <Link href='/'>Home</Link>
          </li>
          <li onClick={closeMenu} className={classes.nav_item}>
            <Link href='/projects'>Projects</Link>
          </li>
          <li onClick={closeMenu} className={classes.nav_item}>
            <Link href='/achievements'>Achievements</Link>
          </li>
          {/* <li onClick={closeMenu} className={classes.nav_item}>
            <Link href='/profile'>Profile</Link>
          </li> */}
          <li onClick={closeMenu} className={classes.nav_item}>
            <Link href='/resume'>Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;