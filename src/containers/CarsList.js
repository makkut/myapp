import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {select} from "../actions/index";

class CarsList extends React.Component{
    showList (){

        return this.props.cars.map((car)=>{
            return(
                <li onClick={()=>this.props.selected(car)} key={car.id}>{car.car}</li>
            )
        })
    }
    render() {
        return(
            <ol>
                {this.showList()}
            </ol>
        )
    }
}

function mapStateToProps(state){
    return{
        cars: state.cars
    };
};

function matchDispatchToProps(dispatch){
    return bindActionCreators({selected:select},dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(CarsList);