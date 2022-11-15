import Image from 'next/image';
import Link from 'next/link';
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
                    <Link href='/'><Image className={styles.header__navLogo} src={logo} alt='logo' /></Link>

                    <ul className={styles.nav__desktopMenu} >
                        <li><Link href='/menu'>Menu</Link></li>
                        <li><Link href="/rewards">Rewards</Link></li>
                        <li><Link href="/gift">Gift Cards</Link></li>
                    </ul>
                </div>

                <div className={styles.nav__secondMenu}>
                    <div className={styles.secondMenu__store}>
                        <Link href='/store-locator'>                        
                            <Image src={map} alt='location' />
                            <span>Find a store</span>
                        </Link>
                    </div>

                    <button className={styles.signIn}><Link href="/account/signin">Sign in</Link></button>
                    <button className={styles.joinNow}><Link href="/account/create">Join now</Link></button>
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
                    <li><Link href="/rewards">Rewards</Link></li>
                    <li><Link href="/gift">Gift Cards</Link></li>
                </ul>

                <div style={{display: 'flex', gap: '1rem'}}>
                    <button className={styles.signIn}><Link href="/account/signin">Sign in</Link></button>
                    <button className={styles.joinNow}><Link href="/account/create">Join now</Link></button>
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
                        
                        <li className={styles.pd}><Link href="/menu">All Products</Link></li>
                        <li className={styles.pd}><Link href="menu/featured">Featured</Link></li>
                        <li className={styles.pd}><Link href="menu/previous">Previous Orders</Link></li>
                        <li className={styles.pd}><Link href="menu/favorites">Favorite Products</Link></li>
                    </ul>
                </nav>
            )}
        </nav>
        )}
    </header>
  )
}

export default NavBar