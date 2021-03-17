import React from 'react';
import {connect} from "react-redux";

class Details extends React.Component {

    render() {

        if (!this.props.cars) {
            return (<p>Выберите автомобиль...</p>)
        }
        return (
            <div>

                <h2>{this.props.cars.car}</h2>
                <img src={this.props.cars.img}/><br/>
                <p>{this.props.cars.desc}</p>
                <p>Скорость: {this.props.cars.speed},
                    вес: {this.props.cars.weight}</p>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        cars: state.active
    };
};

export default connect(mapStateToProps)(Details);