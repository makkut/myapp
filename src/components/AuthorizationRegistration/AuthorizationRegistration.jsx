import React from 'react';
import AuthContainer from "./Auth/AuthContainer";
import RegistrationContainer from "./Registration/RegistrtionContainer";

class AuthorizationRegistration extends React.Component{
    render() {
        return(<>
            <AuthContainer/>
            <RegistrationContainer/>
            </>
        )
    }
}

export default AuthorizationRegistration;