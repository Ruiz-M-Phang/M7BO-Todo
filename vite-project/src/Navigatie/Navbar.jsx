import styles from './Navbar.module.css'

export function Navbar() {

  return (
    <div>
        <div className={styles.Navbar__background}>
          <nav className={styles.Navbar__navbar}>
              <ul className={styles.Navbar__navbar__list}>
                  <li className={styles.Navbar__list__item}><button href="./App.jsx" className={styles.Navbar__list__button}><a className={styles.Navbar__item__link}>past due</a></button></li>
                  <li className={styles.Navbar__list__item}><button href="./app.jsx" className={styles.Navbar__list__button}><a className={styles.Navbar__item__link}>completed</a></button></li>
              </ul>
          </nav>
        </div>
    </div>
  )
}