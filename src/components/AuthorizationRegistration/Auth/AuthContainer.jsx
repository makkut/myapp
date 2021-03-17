import React from 'react';
import Auth from './Auth';
import { connect } from 'react-redux';

import { setEmail, setPassword } from '../../../reducers/auth/actions'

class AuthContainer extends React.Component {
    render() {
        return (
            <Auth {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password
    }
}

const mapDispatchToProps = {
    setEmail, setPassword
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)