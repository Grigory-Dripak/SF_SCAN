import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {

  return (
    <footer className={styles.footer}>
        <img className={styles.logo} src={ '/Logo.svg' } alt="Footer logo" />
        <div className={styles.footer_label}>
            <p className={styles.footer_label_element}>г. Москва, Цветной б-р, 40</p>
            <a href="tel:+7(495)771-21-11" className={styles.footer_label_element}>+7 495 771 21 11</a>
            <a href="mailto:info@skan.ru" className={styles.footer_label_element}>info@skan.ru</a>
            <p className={styles.footer_copyright}>Copyright. 2022</p>
        </div>
    </footer>
  )
}

export default Footer;