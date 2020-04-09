import React from 'react'
import {Link} from 'react-router-dom';


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
                <div className="loginbox">
                    <h2 className="login-header">Log In to hootz</h2>
                    <div className="login-to-signup">
                        <div>New to hootz?</div>
                        <Link className="signup-link" to="/signup">Sign Up</Link>
                    </div>
                    <button className="demo-user-button"> 
                        <i className="fas fa-sign-in-alt "></i>
                         Sign in with a demo user
                    </button>
                    <div className="signup-divider">
                        <div className="divider-line"></div>
                        <div className="divider-or">OR</div>
                        <div className="divider-line"></div>    
                    </div>
                    <form>
                        <label>
                            <input type="text" value={this.state.email} placeholder="Email" onChange={this.handleInput('email')}/>
                        </label>
                        <label>
                            <input type="password" value={this.state.password} placeholder="Password" onChange={this.handleInput('password')}/>
                        </label>
                        <label>
                            <button className="login-submit" onClick={this.handleSubmit}>Log In</button>
                        </label>
                    </form>
                    <div className="login-to-signup-mini">
                        <div>New to hootz?</div>
                        <Link className="signup-link" to="/signup">Sign Up</Link>
                    </div>
                </div>
                <div className="sign-container">
                    <img className="login-pic" src={window.sign}/>
                </div>
            </div>
        )
    };
}

export default Login;