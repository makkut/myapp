import React from 'react';

//import  './ClickButton.module.css'

class ClickButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {class: "off", label: "Нажми"};

        this.press = this.press.bind(this);

        console.log("constructor");
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps()");
        return null;
    }
    componentDidMount(){
        console.log("componentDidMount()");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount()");
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate()");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate()");
        return null;
    }
    componentDidUpdate(){
        console.log("componentDidUpdate()");
    }
    press(){
        var className = (this.state.class==="off")?"on":"off";
        this.setState({class: className});
    }
    render() {
        console.log("render()");
        return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>;
    }
}

/*class ClickButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {counter: 0};

        this.press = this.press.bind(this);
    }
    incrementCounter(prevState, props) {

        return {

            counter: prevState.counter + parseInt(props.increment)
        };
    }
    press(){
        this.setState(this.incrementCounter);
        this.setState(this.incrementCounter);
    }
    render() {
        return <div>
            <button onClick={this.press}>Count</button>
            <div>Counter: {this.state.counter}<br /> Increment: {this.props.increment}</div>
        </div>
    }
}*/


/*class ClickButton extends React.Component {


    constructor(props) {
        super(props);
        this.state = {counter: 0};
        this.press = this.press.bind(this);
    }

    press() {

        this.setState({counter: this.state.counter + parseInt(this.props.increment)});
        //this.setState({counter: this.state.counter + parseInt(this.props.increment)});
    }

    render() {
        return <div>
            <button onClick={this.press}>Count</button>
            <div>Counter: {this.state.counter} <br/>Increment: {this.props.increment}</div>
        </div>
    }
}*/

/*class ClickButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {class: 'off', label: 'Жми'};

        this.press= this.press.bind(this);
    }
    press() {
        let className = (this.state.class === 'off') ? 'on' : 'off';
        this.setState({class: className});
        if (this.state.class === 'off') {
            this.setState({label: 'Отожми'})
        }else{
            this.setState({label: 'Жми'})
        }
    }
    render() {
        return (
            <button onClick={this.press} className={this.state.class}>{this.state.label}</button>
        )
    }
}*/

export default ClickButton;