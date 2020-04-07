import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    };

    handleInput(type) {
        return(e) => {
            this.setState({[type]: e.target.value})
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
        .then(() => this.props.history.push('/'));
    };

    render() {
        return (
            <div className="loginForm">
                <h2 className="login-header">Log In to hootz</h2>
                <form>
                    <label>
                        <input type="text" value={this.state.email} placeholder="Email" onChange={this.handleInput('email')}/>
                    </label>
                    <label>
                        <input type="password" value={this.state.password} placeholder="Password" onChange={this.handleInput('password')}/>
                    </label>
                    <button className="login-submit" onClick={this.handleSubmit}>Log In</button>
                </form>
            </div>
        )
    };
}

export default Login;