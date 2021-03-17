import {connect} from 'react-redux';
import React from 'react';
import {bindActionCreators} from "redux";
import {changeCar, changeName} from "../../actions";

class Auto extends React.Component {
    render() {
        const {name, car, newName, newCar} = this.props;
        return (
            <div>
                <div>
                    <input type='text' value={name}
                           onChange={(event) => newName(event.target.value)}></input>
                    <input type='text' value={car}
                           onChange={(event) => newCar(event.target.value)}></input>
                </div>
                <div>
                    {`${name} ездиет на авто марки: ${car}`}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.carOwner.owner,
        car: state.carOwner.car,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newName: bindActionCreators(changeName, dispatch),
        newCar: bindActionCreators(changeCar, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Auto);
