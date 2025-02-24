import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.navbar}>
     
    <div className={styles.contianer}>
     {/* Hamburger Icon */}
     <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "✖" : "☰"}
                </button>
      <ul className={`${styles.navLinks} ${isOpen ? styles.show : ""}`}>
    
      <li><Link href="/mercury" onClick={() => setIsOpen(false)}>
           Mercury
          </Link></li>
       
          <Link href="/venus">
            <li>Venus</li>
          </Link>
          <Link href="/" onClick={() => setIsOpen(false)}>
            <li>Earth</li>
          </Link>
          <Link href="/mars"  onClick={() => setIsOpen(false)}>
            <li>Mars</li>
          </Link>
          <Link href="/jupiter" onClick={() => setIsOpen(false)}>
            <li>Jupiter</li>
          </Link>
          <Link href="/saturn" onClick={() => setIsOpen(false)}>
            <li>Saturn</li>
          </Link>
          <Link href="/uranus" onClick={() => setIsOpen(false)}>
            <li>Uranus</li>
          </Link>
          <Link href="/neptune" onClick={() => setIsOpen(false)}>
            <li>Neptune</li>
          </Link>
      </ul>
    </div>
  </div>

  );
};
export default Navbar;