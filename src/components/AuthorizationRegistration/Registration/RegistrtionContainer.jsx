import React from 'react'
import Registration from './Registration'
import { connect } from 'react-redux'

import { setEmail, setPassword, setRepeatPassword } from '../../../reducers/registration/actions'

class RegistrationContainer extends React.Component {
    render() {
        return (
            <Registration {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.registration.email,
        password: state.registration.password,
        repeatPassword: state.registration.repeatPassword,
    }
}

const mapDispatchToProps = {
    setEmail, setPassword, setRepeatPassword
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer)