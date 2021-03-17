import React from 'react';
import PropTypes from 'prop-types';
import s from './TodoList.module.css';
import TodoItem from "./TodoItem";
import Loader from "../../Loader";
import Modal from "../../Modal/Modal";

const AddTodo = React.lazy(
    () =>
        new Promise(resolve => {
            setTimeout(() => {
                resolve(import('./AddTodo'))
            }, 3000)
        })
    )


const TodoList = (props) => {
    return (
        <div className={s.wrapper}>
            <h1>Cписок Задач</h1>
            <Modal />
            <React.Suspense fallback={<p><Loader/></p>}>
                <AddTodo onCreate={props.addTodo}/>
            </React.Suspense>
            {props.loading && <Loader/>}
            {props.todos.length > 0 ? ' ' : (props.loading ? null : <p>Список пуст</p>)}
            <ul className={s.ul}>
                {props.todos.map((todo, index) => {
                    return <TodoItem key={todo.id} todo={todo} index={index} onChange={props.onToggle}/>
                })}
            </ul>
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList;