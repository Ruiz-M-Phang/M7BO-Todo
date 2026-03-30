import styles from './Navbar.module.css'

export function Navbar() {

  return (
    <div>
        {/* hier komt de code navbar */}
        <nav className={styles.navbar}>
            <ul className={styles.navbar__links}>
                <li>past due</li>
                <li>completed</li>
            </ul>
        </nav>
    </div>
  )
}