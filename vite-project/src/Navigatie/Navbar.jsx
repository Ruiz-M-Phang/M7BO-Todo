import styles from './Navbar.module.css'

export function Navbar() {

  return (
    <div>
        {/* hier komt de code navbar */}
        <div className={styles.background}>
          <nav className={styles.navbar}>
              <ul className={styles.navbar__list}>
                  <li className={styles.list__item}><button className={styles.list__button}><a href="" className={styles.item__link}>past due</a></button></li>
                  <li className={styles.list__item}><button className={styles.list__button}><a href="" className={styles.item__link}>completed</a></button></li>
              </ul>
          </nav>
        </div>
    </div>
  )
}