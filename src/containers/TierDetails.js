import React from 'react';
import {connect} from "react-redux";

class TierDetails extends React.Component{
    render() {

        if(!this.props.tier){
            return <p>Выберите животное...</p>
        }
        return(
        <div>
            <h2>{this.props.tier.name}</h2>
            <img src={this.props.tier.img}/>
            <p>{this.props.tier.desc}</p>
        </div>)
    }
}

function mapStatetoProps(state){

    return{
        tier: state.activeTier
    };
}

export default connect(mapStatetoProps)(TierDetails);