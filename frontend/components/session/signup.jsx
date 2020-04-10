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
            zipcode: '',
            errors: this.props.errors,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.manualLogin = this.manualLogin.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleBubbleClose = this.handleBubbleClose.bind(this)
    };

    
    handleInput(type) {
        return(e) => {
            this.setState({[type]: e.target.value})
        };
    };
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state)
        .then(() => this.props.history.push('/'), dberrors => { 
            this.setState({errors: dberrors.errors});
        })
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

    handleClose(e) {
        e.preventDefault();
        this.setState({errors: []})
    }

    handleBubbleClose(e) {
        e.preventDefault();
        this.setState({errors: []})
    }


    topError() {
        if (this.state.errors[1] === 7) { 
            return this.state.errors[0]
        } 
        return ""
    }   
    
    firstError() {
        if (this.state.errors[1] === 5) {
            return this.state.errors[0]
        } 
        return ""
    }
    
    lastError() {
        if (this.state.errors[1] === 1) {
            return this.state.errors[0]
        }
        return ""
    }
        
    emailError () {
        if (this.state.errors[1] === 2) {
            return this.state.errors[0]
        }
        return ""
    }
        
    passwordError () {
        if (this.state.errors[1] === 3) {
            return this.state.errors[0]
        }
        return ""
    }

    errorReader () {
        if (this.state.error[1]) {
            if (this.state.error[1] < 7) {
                return true;
            }
        }
        return false
    }

   
    render() {
        // const topError = this.topError
        const topClass = this.topError() ? "topClass" : "";
        const topClose = this.topError() ? <i className="fas fa-times"></i> : "";
        const firstClass = this.firstError() ? "firstClass" : "";
        const firstClassTriangle = this.firstError() ? "firstClassTriangle" : "";
        const firstMark = this.firstError() ? <i className="fas fa-exclamation-circle fa-lg"></i> : "";
        const lastClass = this.lastError() ? "lastClass" : "";
        const lastClassTriangle = this.lastError() ? "lastClassTriangle" : "";
        const lastMark = this.lastError() ? <i className="fas fa-exclamation-circle fa-lg"></i> : "";
        const emailClass = this.emailError() ? "emailClass" : "";
        const emailClassTriangle = this.emailError() ? "emailClassTriangle" : "";
        const emailMark = this.emailError() ? <i className="fas fa-exclamation-circle fa-lg"></i> : "";
        const passwordClass = this.passwordError() ? "passwordClass" : "";
        const passwordClassTriangle = this.passwordError() ? "passwordClassTriangle" : "";
        const passwordMark = this.passwordError() ? <i className="fas fa-exclamation-circle fa-lg"></i> : "";
        const errorRefil = this.state.errors[0] ? "" : "errorRefil";
        const handleBubbleClose = this.errorReader ? this.handleBubbleClose : ""


        return (
            <>  
                <div className="top-error-container" onClick={handleBubbleClose}>  
                    <div className={topClass}>
                        {this.topError()} 
                        <div className="top-class-close">{topClose}</div>
                    </div>
                </div>
                <div className="signupForm" onClick={this.handleClose}>
                    <div className="loginbox">
                        <div className={errorRefil}></div>
                        <div className={firstClassTriangle}>
                            <div className={firstClass}>
                                <div className="firstMark">{firstMark}</div>
                                {this.firstError()}
                            </div>
                        </div>
                        <div className={lastClassTriangle}>
                            <div className={lastClass}>
                                <div className="firstMark">{lastMark}</div>
                                {this.lastError()}
                            </div>
                        </div>
                        <div className={emailClassTriangle}>
                            <div className={emailClass}>
                                <div className="firstMark">{emailMark}</div>
                                {this.emailError()}
                            </div>
                        </div>
                        <div className={passwordClassTriangle}>
                            <div className={passwordClass}>
                                <div className="firstMark">{passwordMark}</div>
                                {this.passwordError()}
                            </div>
                        </div>
                        <h2 className="signup-head"> Sign Up for Hootz </h2>
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
            </>    
        )
    };
};

export default Signup; 