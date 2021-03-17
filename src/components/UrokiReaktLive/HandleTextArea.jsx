import React from 'react';

class HandleTextArea extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            text: "type her"
        }

        /*this.helper();*/
    };


    helper() {
        setInterval(() => {
            console.log(this.state.text)
        }, 1000)
    }

    handleSelect(event) {
        this.setState({text: event.target.value})
    }

    render() {
        return (
            <form>
                <textarea value={this.state.text} onChange={this.handleSelect}></textarea>
            </form>
        )
    }
}


export default HandleTextArea;