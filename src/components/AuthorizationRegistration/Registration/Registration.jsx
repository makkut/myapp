import React from 'react';

export default class Registration extends React.Component {

    onEmailChange = (event) => {
        this.props.setEmail(event.target.value)
    }

    onPasswordChange = (event) => {
        this.props.setPassword(event.target.value)
    }

    onRepeatPasswordChange = (event) => {
        this.props.setRepeatPassword(event.target.value)
    }

    render() {
        return (
            <div className="registration">
                <h3>Sign Up</h3>
                <form>

                    <div>
                        <input
                            type="text"
                            name="login"
                            autoComplete="off"
                            placeholder="E-mail"
                            spellCheck={false}
                            value={this.props.email}
                            onChange={this.onEmailChange}
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.props.password}
                            onChange={this.onPasswordChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Repeat Password"
                            value={this.props.repeatPassword}
                            onChange={this.onRepeatPasswordChange}
                        />
                    </div>

                    <div>
                        <button>Sign Up</button>
                    </div>

                </form>
            </div>
        )
    }
}