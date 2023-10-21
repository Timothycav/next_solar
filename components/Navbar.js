import Link from "next/link";
import styles from "../styles/Home.module.css";


const Navbar = () => {
  return (
    <div className={styles.headerContainer}>
     
    <div className={styles.headerNav}>
      <ul>
    
          <Link href="/mercury">
            <li>Mercury</li>
          </Link>
       
          <Link href="/venus">
            <li>Venus</li>
          </Link>
          <Link href="/">
            <li>Earth</li>
          </Link>
          <Link href="/mars">
            <li>Mars</li>
          </Link>
          <Link href="/jupiter">
            <li>Jupiter</li>
          </Link>
          <Link href="/saturn">
            <li>Saturn</li>
          </Link>
          <Link href="/uranus">
            <li>Uranus</li>
          </Link>
          <Link href="/neptune">
            <li>Neptune</li>
          </Link>
      </ul>
    </div>
  </div>

  );
};
export default Navbar;