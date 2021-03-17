import React from 'react';
import s from './FormReg.module.css';
import {Formik} from "formik";
import * as yup from 'yup';

function FormReg() {
const validationsSchema1 = yup.object().shape({
    name: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    secondName: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    password: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    confirmPassword: yup.string().oneOf([yup.ref('password')],'Пароли не совпадают').required('Обязательно'),
    email: yup.string().email('Введите верный email').required('Обязательно'),
    confirmEmail: yup.string().email('Введите верный email').oneOf([yup.ref('email')],'email не совпадает').required('Обязательно')
})

    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    secondName: '',
                    password: '',
                    confirmPassword: '',
                    email: '',
                    confirmEmail: ''
                }}
                validateOnBlur
                onSubmit={(values) => { console.log(values) }}
                validationSchema={validationsSchema1}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <div className={s.from}>
                        <p>
                            <label htmlFor={'name'}>Имя</label><br />
                            <input
                                className={s.input}
                                type={'text'}
                                name={'name'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                        </p>
                        {touched.name && errors.name && <p className={s.error}>{errors.name}</p>}
                        <p>
                            <label htmlFor={'secondName'}>Фамилия</label><br />
                            <input
                                className={s.input}
                                type={'text'}
                                name={'secondName'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.secondName}
                            />
                        </p>
                        {touched.secondName && errors.secondName && <p className={s.error}>{errors.secondName}</p>}
                        <p>
                            <label htmlFor={'password'}>Пароль</label><br />
                            <input
                                className={s.input}
                                type={'password'}
                                name={'password'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                        </p>
                        {touched.password && errors.password && <p className={s.error}>{errors.password}</p>}
                        <p>
                            <label htmlFor={'confirmPassword'}>Пароль</label><br />
                            <input
                                className={s.input}
                                type={'password'}
                                name={'confirmPassword'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                            />
                        </p>
                        {touched.confirmPassword && errors.confirmPassword && <p className={s.error}>{errors.confirmPassword}</p>}
                        <p>
                            <label htmlFor={'email'}>Email</label><br />
                            <input
                                className={s.input}
                                type={'text'}
                                name={'email'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                        </p>
                        {touched.email && errors.email && <p className={s.error}>{errors.email}</p>}
                        <p>
                            <label htmlFor={'confirmEmail'}>Подтвердите email</label><br />
                            <input
                                className={s.input}
                                type={'text'}
                                name={'confirmEmail'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmEmail}
                            />
                        </p>
                        {touched.confirmEmail && errors.confirmEmail && <p className={s.error}>{errors.confirmEmail}</p>}
                        <button disabled={!isValid && !dirty}
                                onClick={handleSubmit}
                                type={'submit'}
                        >Отправить
                        </button>
                    </div>
                )}

            </Formik>
        </div>
    );
}

export default FormReg;
