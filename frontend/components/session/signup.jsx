import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: ''
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
                <h2>Sign Up</h2>
                <form>
                    <label>email
                        <input type="text" value={this.state.email} onChange={this.handleInput('email')}/>
                    </label>
                    <label>password
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                    </label>
                    <label>first name
                        <input type="text" value={this.state.first_name} onChange={this.handleInput('first_name')}/>
                    </label>
                    <label>last name
                        <input type="text" value={this.state.last_name} onChange={this.handleInput('last_name')}/>
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        )
    };
};

export default Signup; 