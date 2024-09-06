import React from 'react'
import styles from './Head.module.css'
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';

export default function Header() {
  const {user} = useSelector(state => state)
  const navigate = useNavigate();
  const {removeUser} = useActions()

  const handleLoginClick = () => {
    return navigate('/login');
  };

  const handleQuitClick = () => {
    removeUser()
    return false
  }

  return (
    <header className={styles.header}>
        <img className={styles.logo} src={'/Logo-colour.svg'} alt="logo" />
        <div className={styles.header_links}>
          <Link to="/">Главное</Link>
          <Link to="/tarifs">Тарифы</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        {user.isAuth && (<div className={styles.user_pannel}>0</div>)}
        {user.isAuth ? 
        (<div className={styles.user_data}>
          <div className={styles.name}>Алексей А.</div>
          <div className={styles.ava}></div>
          <a href="#" className={styles.quit} onClick={handleQuitClick}>Выйти</a>
        </div>) 
        : 
        (<div className={styles.get_auth}>
          <Link to="/login">Зарегистрироваться</Link>
          <div className={styles.header_rectangle}></div>
          <button className={styles.login_button} onClick={handleLoginClick}>Войти</button>
        </div>)
        }
    </header> 
  )
}