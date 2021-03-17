import React from 'react';

class HandleRadio extends React.Component{
    constructor(props) {
        super(props);
        this.handleRadio =this.handleRadio.bind(this);
        this.helper =this.helper.bind(this);
        this.state ={
            radioGroup:{
                angular: false,
                react: true,
                ember: false
            }
        };
        /*this.helper()*/
    }

    helper(){
        setInterval(()=>{
            console.log(this.state.radioGroup)
        },1000)
    }

    handleRadio(event){
        let object = {};
        object[event.target.value]= event.target.checked;
        this.setState({radioGroup: object})
    }

    render() {
        return(<div>
            <form>
                <input type="radio" value="angular" checked={this.state.radioGroup.angular ? true: false} onChange={this.handleRadio}/>
                <input type="radio" value="react" checked={this.state.radioGroup.react ? true: false} onChange={this.handleRadio}/>
                <input type="radio" value="ember" checked={this.state.radioGroup.ember ? true: false} onChange={this.handleRadio}/>
            </form>
        </div>)
    }
}


export default HandleRadio;