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
          <Link href="/mercury">
            <li>Mercury</li>
          </Link>
       
          <Link href="/venus">
            <li>Venus</li>
          </Link>
          <Link href="/earth">
            <li>Earth</li>
          </Link>
       
      </ul>
    </div>
  </div>

  );
};
export default Navbar;