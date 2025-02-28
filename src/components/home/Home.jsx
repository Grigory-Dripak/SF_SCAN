import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'
import { useSelector } from 'react-redux';

export default function Home() {
    const {user} = useSelector(state => state)
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    const handleSearchClick = () => {
        return navigate('/search');
      };

  return (
    <>
    <div className={styles.container}>
        <div className={styles.request}>
            <h1>СЕРВИС ПО ПОИСКУ ПУБЛИКАЦИЙ О КОМПАНИИ ПО ЕГО ИНН</h1>
            <p>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
            <button className={styles.button_request} display={user.isAuth === false ? 'none' : 'block'}
                onClick={handleSearchClick} >Запросить данные</button>
            <img className={styles.main_img} src={ '/Main-image.svg' } alt="Main image" />
        </div>
        <div className={styles.whyme}>
            <h2>ПОЧЕМУ ИМЕННО МЫ</h2>
        </div>
        <div className={styles.img} alt="Advert image" ></div>
        <div className={styles.tarifs}>
            <h2>НАШИ ТАРИФЫ</h2>
        </div>
        <div className={styles.test}>
            <h1>Vite + React</h1>
            <div className={styles.test_container}>
                <div className={styles.test_img}>1</div>
                <div className={styles.test_nav}>222222222222222222222222222222</div>
                <div className={styles.test_enter}>3333</div>
            </div>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
            Click on the Vite and React logos to learn more
            </p>
            { count === 5 && navigate('/login')}
        </div>
    </div>
    </>
      )
}
