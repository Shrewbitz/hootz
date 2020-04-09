import React from 'react';
import {Link} from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            zipcode: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.manualLogin = this.manualLogin.bind(this)
    };

    manualLogin(e) {
        e.preventDefault();
        this.state = {
            email: "demo_user@gmail.com",
            password: "password"
        }
        this.props.login(this.state)
        .then(() => this.props.history.push('/'));
    };

    handleInput(type) {
        return(e) => {
            this.setState({[type]: e.target.value})
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state)
        .then(() => this.props.history.push('/'));
    };

    render() {
        return (
            <div className="signupForm">
                <div className="loginbox">
                <h2 className="signup-head">Sign Up for Hootz</h2>
                <p className="local" >Connect with great local restaurants </p>
                <p className="terms">By continuing, you don't agree to Hootz terms of service and don't acknowledge Hootz privacy policy.</p>
                <button className="demo-user-button" onClick={this.manualLogin}> 
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
                        <input type="text" placeholder="First Name" value={this.state.first_name} onChange={this.handleInput('first_name')}/>
                        <div className="spacer"></div>
                        <input type="text" placeholder="Last Name" value={this.state.last_name} onChange={this.handleInput('last_name')}/>
                    </label>
                    <label>
                        <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleInput('email')}/>
                    </label>
                    <label>
                        <input className="signup-password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleInput('password')}/>
                    </label>
                    <label>
                        <input type="text" placeholder="ZIP code" value={this.state.zipcode} onChange={this.handleInput('zipcode')}/>
                    </label>
                    <div className="signup-birthday-label">
                        <div className="local" >Birthdate</div>
                        <div className="birthday-terms">Optional</div>
                    </div>
                    
                    <label>
                        <input type="date" name="" id=""/>
                    </label>
                    <label>
                        <button className="login-submit" onClick={this.handleSubmit}>Sign Up</button>
                    </label>
                </form>
                    <div className="login-to-signup-mini">
                        <div>Already on Hootz?</div>
                        <Link className="signup-link" to="/login">Log In</Link>
                    </div>
                </div>
                <div className="login-container">
                    <img className="login-pic" src={window.sign}/>
                </div>
            </div>
        )
    };
};

export default Signup; 