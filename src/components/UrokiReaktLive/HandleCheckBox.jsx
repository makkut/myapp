import React from 'react';

class HandleCheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.helper = this.helper.bind(this);
        this.state = {
            checkBoxGroup: {
                angular: false,
                react: true,
                ember: false
            }
        };
        /*this.helper()*/
    }

    helper() {
        setInterval(() => {
            console.log(this.state.checkBoxGroup)
        }, 1000)
    }

    handleCheckBox(event) {
        let object = Object.assign(this.state.checkBoxGroup);
        object[event.target.value] = event.target.checked;
        this.setState({checkBoxGroup: object})
    }

    render() {
        return (<div>
            <form>
                <input type="checkbox" value="angular" checked={this.state.checkBoxGroup.angular ? true : false}
                       onChange={this.handleCheckBox}/>
                <input type="checkbox" value="react" checked={this.state.checkBoxGroup.react ? true : false}
                       onChange={this.handleCheckBox}/>
                <input type="checkbox" value="ember" checked={this.state.checkBoxGroup.ember ? true : false}
                       onChange={this.handleCheckBox}/>
            </form>
        </div>)
    }
}

export default HandleCheckBox;