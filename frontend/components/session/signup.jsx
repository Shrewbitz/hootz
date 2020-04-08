import React from 'react';

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
                <h2 className="login-header">Sign Up</h2>
                <p className="local" >Connect with great local restaurants </p>
                <p className="terms">By continuing, you agree to hootz terms of service and acknowledge hootz privacy policy.</p>
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
                        <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleInput('password')}/>
                    </label>
                    <label>
                        <input type="text" placeholder="ZIP code" value={this.state.zipcode} onChange={this.handleInput('zipcode')}/>
                    </label>
                    <label>
                        <button className="login-submit" onClick={this.handleSubmit}>Sign Up</button>
                    </label>
                </form>
                </div>
                <div className="sign-container">
                    <img className="login-pic" src={window.sign}/>
                </div>
            </div>
        )
    };
};

export default Signup; 