import React, {useEffect} from 'react';
import FormReg from "./components/FormReg/FormReg";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router";
import FormAdress from "./components/FormAdress/FormAdress";
import ClickButton from "./components/ClickButton/ClickButton";
import ItemsList from "./components/ItemsList/ItemsList";
import Test from "./components/Test/Test";
import TodoList from "./components/TodoList/TodoList";
import Context from "./components/TodoList/context";
import Wetter from "./components/Wetter/Wetter";
import {createStore} from 'redux';
import allReducers from "./reducers";
import ReduxTest from "./components/ReduxTest/ReduxTest";
import {Provider} from "react-redux";
import MainComponent from "./components/Redux/Redux";
import Auto from "./components/Auto/Auto";
import AuthorizationRegistration from "./components/AuthorizationRegistration/AuthorizationRegistration";
import UrokiReactLive from "./components/UrokiReaktLive/LessonsReactLive";
import Hook from "./components/Hook/Hook";

const store = createStore(allReducers);


function App(props) {
    const [todos, setTodos] = React.useState([
        /* {id: 1, completed: true, title: 'Купить хлеб'},
         {id: 2, completed: false, title: 'Купить масло'},
         {id: 3, completed: false, title: 'Купить молоко'}*/
    ])
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setTodos(todos)
                    setLoading(false)
                }, 2000)
            })
    }, [])

    function toggleTodo(id) {
        setTodos(todos.map(todo => {
                if (todo.id == id) {
                    todo.completed = !todo.completed
                }
                return todo
            }
        ))
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(todos.concat([{
            title,
            id: Date.now(),
            completed: false
        }]))
    }

    return (
        <Provider store={store}>
            <Context.Provider value={{removeTodo: removeTodo}}>
                <div>
                    <Navbar/>
                    <div>
                        <Route path='/form'
                               render={() => <FormReg/>}/>
                        <Route path='/form2'
                               render={() => <FormAdress/>}/>
                        <Route path='/form3'
                               render={() => <ClickButton increment="1"/>}/>
                        <Route path='/form4'
                               render={() => <ItemsList data={props.propsValues}/>}/>
                        <Route path='/form5'
                               render={() => <Test/>}/>
                        <Route path='/form6'
                               render={() => <TodoList todos={todos} onToggle={toggleTodo} addTodo={addTodo}
                                                       loading={loading}/>}/>
                        <Route path='/form7'
                               render={() => <Wetter/>}/>
                        <Route path='/form8'
                               render={() => <ReduxTest/>}/>
                        <Route path='/form9'
                               render={() => <MainComponent/>}/>
                        <Route path='/form10'
                               render={() => <Auto/>}/>
                        <Route path='/form11'
                               render={() => <AuthorizationRegistration/>}/>
                        <Route path='/form12'
                               render={() => <UrokiReactLive/>}/>
                        <Route path='/form13'
                               render={() => <Hook/>}/>

                    </div>
                </div>
            </Context.Provider>
        </Provider>
    )
        ;
}

export default App;
