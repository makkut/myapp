import React from 'react';
import {connect} from "react-redux";

class StadtDetails extends React.Component{
    render() {

        if(!this.props.stadt){
            return <p>Выберите город...</p>
        }
        return(
        <div>
            <h2>{this.props.stadt.name}</h2>
            <img src={this.props.stadt.img}/>
            <p>{this.props.stadt.desc}</p>
        </div>)
    }
}

function mapStatetoProps(state){

    return{
        stadt: state.activeStadt
    };
}

export default connect(mapStatetoProps)(StadtDetails);