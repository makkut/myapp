import React from 'react';

class Item extends React.Component {
    render() {
        return <li>{this.props.name}</li>;
    }
}

class SearchPlugin extends React.Component{

    constructor(props){
        super(props);
        this.onTextChanged = this.onTextChanged.bind(this);
    }

    onTextChanged(e){
        var text = e.target.value.trim();   // удаляем пробелы
        this.props.filter(text); // передаем введенный текст в родительский компонент
    }

    render() {
        return <input placeholder="Поиск" onChange={this.onTextChanged} />;
    }
}

class ItemsList extends React.Component {
    constructor(props){
        super(props);
        this.state = { items: this.props.data.items};

        this.filterList = this.filterList.bind(this);
    }

    filterList(text){
        var filteredList = this.props.data.items.filter(function(item){
            return item.toLowerCase().search(text.toLowerCase())!== -1;
        });
        this.setState({items: filteredList});
    }

    render() {
        return(
            <div>
                <h2>{this.props.data.title}</h2>
                <SearchPlugin filter={this.filterList} />
                <ul>
                    {
                        this.state.items.map(function(item){
                            return <Item key={item} name={item} />
                        })
                    }
                </ul>
            </div>);
    }
}

/*class Item extends React.Component {
    render() {
        return <li>{this.props.name}</li>;
    }
}

class ItemsList extends React.Component {
    constructor(props){

        super(props);
        this.state = { items: this.props.data.items};

        this.filterList = this.filterList.bind(this);
    }
    // фильтрация списка
    filterList(e){
        var filteredList = this.props.data.items.filter(function(item){
            return item.toLowerCase().search(e.target.value.toLowerCase())!== -1;
        });
        // обновление состояния
        this.setState({items: filteredList});
    }

    render() {
        return(
            <div>
                <h2>{this.props.data.title}</h2>
                <input placeholder="Поиск" onChange={this.filterList} />
                <ul>
                    {
                        this.state.items.map(function(item){
                            return <Item key={item} name={item} />
                        })
                    }
                </ul>
            </div>);
    }
}*/

export default ItemsList;



/*
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), name: "Tom"};
        this.unmount = this.unmount.bind(this);
    }
    unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById("app"));
    }
    componentDidMount() {
        this.timerId = setInterval(
            ()=> this.tick(),
            1000
        );
        console.log("componentDidMount()");
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
        console.log("componentWillUnmount()");
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Привет, {this.state.name}</h1>
                <h2>Текущее время {this.state.date.toLocaleTimeString()}.</h2>
                <button onClick={this.unmount}>Unmount</button>
            </div>
        );
    }
}*/

