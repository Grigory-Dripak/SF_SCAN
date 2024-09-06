import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form'
import styles from './Login.module.css'
import { useActions } from '../../hooks/useActions';
import { useSelector } from 'react-redux';

export default function Login() {

  const { register, handleSubmit, reset, formState: {errors, isValid} } = useForm({
    mode: 'onChange',
    defaultValues: {
      login: 'sf_student8',
      password: '5QB0KM/',
    },
  })

  const onSubmit = (data) => {
    console.log(data.username)
    console.log(data.password)
    reset()
  }

  const {user} = useSelector(state => state)
  const {setUser, removeUser} = useActions()
  console.log(user)
  
  return (
    <>
    <div className={styles.form_p}>
      <div className={styles.info}>
        <p>ДЛЯ ОФОРМЛЕНИЯ ПОДПИСКИ НА ТАРИФ НЕОБХОДИМО АВТОРИЗОВАТЬСЯ.</p>
        <img className={styles.desktop_img_characters} src={'/Characters.svg'} alt="people with key" />
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {/* <div className={styles.lock} style={{backgroundImage: "url(/logo/login/lock.svg)"}}></div> */}
        <img className={styles.form_img__lock} src={'/lock.svg'} alt="key" />
        <div className={styles.form_links}>
          <button className={styles.form_link}>
            <Link to="/login">Войти</Link>
          </button>
          <button className={styles.form_link}>
            <Link to="/pagenotfounded">Зарегистрироваться</Link>
          </button>
        </div>
        <label className={styles.form_label}>
          {/* {store.isAuthError
            ? "Неправильный логин или номер телефона"
            : "Логин или номер телефона:"} */}
          <input
            {...register('login', {
              required: true,
            })}
            className={
              errors?.login ? styles.form_input__invalid : styles.form_input
            }
            type="text"
          />
          {errors?.login && (
            <p className={styles.error_message}>Введите корректные данные</p>
          )}
        </label>
        <label className={styles.form_label}>
          {/* {store.isAuthError ? "Неправильный пароль" : "Пароль:"} */}
          <input
            {...register("password", {
              required: true,
            })}
            className={
              errors?.password ? styles.form-input__invalid : styles.form_input
            }
            type="password"
            autoComplete="on"
          />
          {errors?.password && (
            <p className="error-message">Введите корректные данные</p>
          )}
        </label>
        {/* {store.isLoading ? (
          <button
            disabled={!isValid}
            className={styles.form_button__submit}
            type="submit"
          >
            Ожидание...
          </button>
        ) : ( */}
          <button
            disabled={!isValid}
            className={styles.form_button__submit}
            type="submit"
          >
            Войти
          </button>
        {/* )} */}
        <div className={styles.reset}>
            <Link href="/pagenotfounded">
                Восстановить пароль
            </Link>
        </div>
        <div className={styles.enter}>
          <div className={styles.enterText}>
              Войти через:
          </div>
          <div className={styles.enterOAuth}>
              <div className={styles.loginGoogle}></div>
              <div className={styles.loginFacebook}></div>
              <div className={styles.loginYandex}></div>
          </div>
      </div>
      </form>
      <img className={styles.mobile_img_characters} src={'/Characters.svg'} alt="people with key" />
    </div>
    <div className={styles.button_test_p}>
      <button onClick={ ()=> setUser({isAuth: true})} className={styles.button_test}>Enter</button>
      <button onClick={ ()=> removeUser()} className={styles.button_test}>Quit</button>
    </div>
    
  </>
  )
}

