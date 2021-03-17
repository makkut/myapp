import React from 'react';

class Test extends React.Component {
    constructor() {
        super();
        this.state = {hello: true};
        this.changeText = this.changeText.bind(this)
    }

    changeText(){
        this.setState({hello: !this.state.hello});
    }

    render() {
        //Выведет или 'привет', или 'пока':
        return <div >
            {this.state.hello ? 'привет' : 'пока'}
            <button onClick={this.changeText}>нажми</button>
        </div>;
    }
}

    /*constructor() {
        super();
        this.state = {items: [1, 2, 3, 4, 5], text:''};
    }

    addItem() {
        this.state.items.push('пункт');
        this.setState({items: this.state.items});
    }
    deleteItem(num) {
        this.state.items.splice(num, 1);
        this.setState({items: this.state.items});
    }

    render() {
        const list = this.state.items.map((item, index) => {
            return <li key={index}>{item}
                <button onClick={this.deleteItem.bind(this, index)}>Удалить</button></li>;
        });
        return (
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}*/

export default Test;