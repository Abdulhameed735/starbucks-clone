import Image from 'next/image';
import styles from '../styles/NavBar.module.css';
import { motion } from 'framer-motion';
import { logo } from '../assets/index';
import { menu } from '../assets/index';
import { close } from '../assets/index';
import { right } from '../assets/index';
import { left } from '../assets/index';
import { map } from '../assets/index';
import { useState } from 'react';

const NavBar = () => {
    const [toggle, setToggle] = useState(false)
    const [menuToggle, setMenuToggle] = useState(false)

    const closeAll = () => {
        setToggle(!toggle)
        setMenuToggle(false)
    }

  return (
    <header className={styles.header}>
        <nav className={styles.header__nav}>
            <div className={styles.header__navContainer}>
                <div className={styles.nav__firstMenu}>
                    <Image  className={styles.header__navLogo} src={logo} alt='logo' />

                    <ul className={styles.nav__desktopMenu} >
                        <li>Menu</li>
                        <li>Rewards</li>
                        <li>Gift Cards</li>
                    </ul>
                </div>

                <div className={styles.nav__secondMenu}>
                    <div className={styles.secondMenu__store}>
                        <Image src={map} alt='location' />
                        <span>Find a store</span>
                    </div>

                    <button className={styles.signIn}>Sign in</button>
                    <button className={styles.joinNow}>Join now</button>
                </div>

                <Image onClick={closeAll} className={styles.menu} src={toggle ? close : menu} alt={toggle ? 'close' : 'menu'} />
            </div>
        </nav>
        
        {/* Mobile Nav */}
        {toggle && (
        <nav className={styles.mobileNav}>
            <div className={styles.hamMenu}>
                <ul className={styles.mobileUl}>
                    <li onClick={() => setMenuToggle(!menuToggle)} className={styles.mobileLi}>
                        <span>Menu</span>
                        <Image className={styles.right} src={right} alt='right-icon' />
                    </li>
                    <li>Rewards</li>
                    <li>Gift Cards</li>
                </ul>

                <div style={{display: 'flex', gap: '1rem'}}>
                    <button className={styles.signIn}>Sign in</button>
                    <button className={styles.joinNow}>Join now</button>
                </div>

                <div className={styles.secondMenu__store}>
                        <Image src={map} alt='location' />
                        <span>Find a store</span>
                </div>
            </div>

            {menuToggle && (
                <nav className={styles.menuNav}>
                    <ul>
                        <li onClick={() => setMenuToggle(!menuToggle)}  className={styles.menuNav__header}>
                            <Image src={left} alt='left-arrow-icon' />
                            <span>Menu</span>
                        </li>
                        
                        <li className={styles.pd}>All Products</li>
                        <li className={styles.pd}>Featured</li>
                        <li className={styles.pd}>Previous Orders</li>
                        <li className={styles.pd}>Favorite Products</li>
                    </ul>
                </nav>
            )}
        </nav>
        )}

    </header>
  )
}

export default NavBar