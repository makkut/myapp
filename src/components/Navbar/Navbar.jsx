import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css';


function Navbar() {
    return (
        <div>
            <div className={s.link}>
                <NavLink to='/form'>FormReg</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to='/form2'>FormAdress</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to='/form3'>ClickButton</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to='/form4'>ItemsList</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to='/form5'>Test</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to='/form6'>TodoList</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to='/form7'>App</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to='/form8'>Redux Test</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to='/form9'>Redux</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to='/form10'>Auto</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to='/form11'>Form authorization</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to='/form12'>Übungen React</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to='/form13'>Hook</NavLink>
            </div>

        </div>
    );
}

export default Navbar;