import React from 'react';

export default class Auth extends React.Component {

    onEmailChange = (event) => {
        this.props.setEmail(event.target.value);
    }

    onPasswordChange = (event) => {
        this.props.setPassword(event.target.value);
    }

    render() {
        return (
            <div className="auth">
                <h3>Sign In</h3>
                <form>
                    <div>
                        <input
                            type="text"
                            name="login"
                            value={this.props.email}
                            autoComplete="off"
                            placeholder="E-mail"
                            spellCheck={false}
                            onChange={this.onEmailChange}
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            name="password"
                            value={this.props.password}
                            placeholder="Password"
                            onChange={this.onPasswordChange}
                        />
                    </div>

                    <div>
                        <button>Sign In</button>
                    </div>

                </form>

            </div>
        )
    }
}