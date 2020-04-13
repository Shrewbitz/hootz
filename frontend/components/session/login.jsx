import React from 'react'
import {Link} from 'react-router-dom';


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            errors: this.props.errors,
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.manualLogin = this.manualLogin.bind(this)
        this.handleClose = this.handleClose.bind(this);
        this.handleBubbleClose = this.handleBubbleClose.bind(this)
    };
    
    manualLogin(e) {
        e.preventDefault();
        this.state = {
            email: "demo_user@gmail.com",
            password: "password"
        }
        this.props.login(this.state)
        .then(() => this.props.history.push('/'))
    };


    handleInput(type) {
        return(e) => {
            this.setState({[type]: e.target.value})
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
        .then(() => this.props.history.push('/'), dberrors => { 
            this.setState({errors: dberrors.errors});
        });
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
        const topClass = this.topError() ? "topClass" : "";
        const topClose = this.topError() ? <i className="fas fa-times"></i> : "";
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
                <div className="loginForm" onClick={this.handleClose}>
                    <div className="loginbox">
                        <div className={errorRefil}></div>
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
                        <h2 className="login-head">Log In to Hootz</h2>
                        <div className="login-to-signup">
                            <div>New to Hootz?</div>
                            <Link className="signup-link" to="/signup">Sign Up </Link>
                        </div>
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
                            <div>New to Hootz?</div>
                            <Link className="signup-link" to="/signup">Sign Up</Link>
                        </div>
                    </div>
                    <div className="sign-container">
                        <img className="login-pic" src={window.sign}/>
                    </div>
                </div>
            </>
        )
    };
}

export default Login;

