import React from 'react';

class HandleSelect extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = {
            selectValue: "angular"
        }


    };


    helper() {
        setInterval(() => {
            console.log(this.state.selectValue)
        }, 1000)
    }

    handleSelect(event) {

        this.setState({selectValue: event.target.value})
        
    }

    onClick() {
        alert("Вы выбрали " + this.state.selectValue)
    }

    render() {
        return (<form>
            <select value={this.state.selectValue} onChange={this.handleSelect}>
                <option value='angular'>Angular</option>
                <option value='react'>React</option>
                <option value='ember'>Ember</option>
            </select>
            <input type="button" value="Click" onClick={this.onClick}/>
        </form>)
    }
}


export default HandleSelect;