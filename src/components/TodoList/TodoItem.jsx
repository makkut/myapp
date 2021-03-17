import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import s from './TodoList.module.css';
import Context from "./context";

const TodoItem = ({todo, index , onChange}) => {
    const{removeTodo} = useContext(Context)
    const  classes=[]

    if(todo.completed){
        classes.push('done')
    }

    return (
        <div>
            <li className={s.li}>
                <span className={classes.join(' ')}>
                    <input className={s.input} type='checkbox' onChange={()=>onChange(todo.id)} checked={todo.completed}/>
                    <strong>{index + 1}</strong>
                    &nbsp;
                    {todo.title}
                </span>

                <button className={s.button} onClick={() => removeTodo(todo.id)}>&times;</button>
            </li>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem;