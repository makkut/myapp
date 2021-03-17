import {bindActionCreators, createStore} from "redux";
import React from 'react';
import {connect} from 'react-redux';
import s from './Redux.module.css';
import {changeFirstName, changeSecondName} from "../../actions";



class MainComponent extends React.Component {
    render() {

        const dispatch = this.props.dispatch;
        const {firstName, secondName, changeFirstName,changeSecondName } = this.props;
        return (
            <>
                <input className={s.firstName}
                       type='text'
                       value={firstName}
                       placeholder='First Name'
                       onChange={(event) => changeFirstName(event.target.value)}/>
                <input className={s.firstName}
                       type='text'
                       value={secondName}
                       placeholder='Second Name'
                       onChange={(event) => changeSecondName(event.target.value)}/>
                <div>{`${firstName} ${secondName}`}</div>
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        firstName: state.person.firstName,
        secondName: state.person.secondName
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        changeFirstName: bindActionCreators(changeFirstName, dispatch),
        changeSecondName: bindActionCreators(changeSecondName, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainComponent)