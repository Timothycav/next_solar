import Link from "next/link";
import styles from "../styles/Home.module.css";


const Navbar = () => {
  return (
    <div className={styles.headerContainer}>
     
    <div className={styles.headerNav}>
      <ul>
      <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/venus">
            <li>Venus</li>
          </Link>
       
      </ul>
    </div>
  </div>

  );
};
export default Navbar;