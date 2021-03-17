import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const propsValues = {
    title: "Список смартфонов",
    items: [
        "Samsung Galaxy Note20",
        "Apple iPhone 12 Pro",
        "Google Pixel 5",
        "Huawei P40 Pro",
        "OnePlus 8 Pro",
        "Asus Zenfone 7 Pro"
    ]
};

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App propsValues={propsValues}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
