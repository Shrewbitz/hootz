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
        if (this.state.errors[1] < 7) {
        this.setState({errors: []})
        }
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
            <div onClick={this.handleClose}>
                <div className="top-error-container" onClick={handleBubbleClose}>  
                    <div className={topClass}>
                        {this.topError()} 
                        <div className="top-class-close">{topClose}</div>
                    </div>
                </div>
                <div className="signupForm" >
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
                                <select name="month" placeholder="month" >
                                    <option  className="birthday-color" value="1" >Month</option>
                                    <option  className="birthday-color" value="2">January</option>
                                    <option  className="birthday-color" value="3">February</option>
                                    <option  className="birthday-color" value="4">March</option>
                                    <option  className="birthday-color" value="5">April</option>
                                    <option  className="birthday-color" value="6">May</option>
                                    <option  className="birthday-color" value="7">June</option>
                                    <option  className="birthday-color" value="8">July</option>
                                    <option  className="birthday-color" value="9">August</option>
                                    <option  className="birthday-color" value="10">September</option>
                                    <option  className="birthday-color" value="11">October</option>
                                    <option  className="birthday-color" value="12">November</option>
                                    <option  className="birthday-color" value="13">December</option>
                                </select>
                                <div className="spacer"></div>
                                <select name="day" placeholder="day" >
                                    <option className="birthday-color" value="0">Day</option>
                                    <option  className="birthday-color" value="1">1</option>
                                    <option  className="birthday-color" value="2">2</option>
                                    <option  className="birthday-color" value="3">3</option>
                                    <option  className="birthday-color" value="4">4</option>
                                    <option  className="birthday-color" value="5">5</option>
                                    <option  className="birthday-color" value="6">6</option>
                                    <option  className="birthday-color" value="7">7</option>
                                    <option  className="birthday-color" value="8">8</option>
                                    <option  className="birthday-color" value="9">9</option>
                                    <option  className="birthday-color" value="10">10</option>
                                    <option  className="birthday-color" value="11">11</option>
                                    <option  className="birthday-color" value="12">12</option>
                                    <option  className="birthday-color" value="13">13</option>
                                    <option  className="birthday-color" value="14">14</option>
                                    <option  className="birthday-color" value="15">15</option>
                                    <option  className="birthday-color" value="16">16</option>
                                    <option  className="birthday-color" value="17">17</option>
                                    <option  className="birthday-color" value="18">18</option>
                                    <option  className="birthday-color" value="19">19</option>
                                    <option  className="birthday-color" value="20">20</option>
                                    <option  className="birthday-color" value="21">21</option>
                                    <option  className="birthday-color" value="22">22</option>
                                    <option  className="birthday-color" value="23">23</option>
                                    <option  className="birthday-color" value="24">24</option>
                                    <option  className="birthday-color" value="25">25</option>
                                    <option  className="birthday-color" value="26">26</option>
                                    <option  className="birthday-color" value="27">27</option>
                                    <option  className="birthday-color" value="28">28</option>
                                    <option  className="birthday-color" value="29">29</option>
                                    <option  className="birthday-color" value="30">30</option>
                                    <option  className="birthday-color" value="31">31</option>
                                </select>
                                <div className="spacer"></div>
                                <select name="year" placeholder="year">
                                    <option  className="birthday-color" value="year">Year</option>
                                    <option  className="birthday-color" value="2020">2020</option>
                                    <option  className="birthday-color" value="2019">2019</option>
                                    <option  className="birthday-color" value="2018">2018</option>
                                    <option  className="birthday-color" value="2017">2017</option>
                                    <option  className="birthday-color" value="2016">2016</option>
                                    <option  className="birthday-color" value="2015">2015</option>
                                    <option  className="birthday-color" value="2014">2014</option>
                                    <option  className="birthday-color" value="2013">2013</option>
                                    <option  className="birthday-color" value="2012">2012</option>
                                    <option  className="birthday-color" value="2011">2011</option>
                                    <option  className="birthday-color" value="2010">2010</option>
                                    <option  className="birthday-color" value="2009">2009</option>
                                    <option  className="birthday-color" value="2008">2008</option>
                                    <option  className="birthday-color" value="2007">2007</option>
                                    <option  className="birthday-color" value="2006">2006</option>
                                    <option  className="birthday-color" value="2005">2005</option>
                                    <option  className="birthday-color" value="2004">2004</option>
                                    <option  className="birthday-color" value="2003">2003</option>
                                    <option  className="birthday-color" value="2002">2002</option>
                                    <option  className="birthday-color" value="2001">2001</option>
                                    <option  className="birthday-color" value="2000">2000</option>
                                    <option  className="birthday-color" value="1999">1999</option>
                                    <option  className="birthday-color" value="1998">1998</option>
                                    <option  className="birthday-color" value="1997">1997</option>
                                    <option  className="birthday-color" value="1996">1996</option>
                                    <option  className="birthday-color" value="1995">1995</option>
                                    <option  className="birthday-color" value="1994">1994</option>
                                    <option  className="birthday-color" value="1993">1993</option>
                                    <option  className="birthday-color" value="1992">1992</option>
                                    <option  className="birthday-color" value="1991">1991</option>
                                    <option  className="birthday-color" value="1990">1990</option>
                                    <option  className="birthday-color" value="1989">1989</option>
                                    <option  className="birthday-color" value="1988">1988</option>
                                    <option  className="birthday-color" value="1987">1987</option>
                                    <option  className="birthday-color" value="1986">1986</option>
                                    <option  className="birthday-color" value="1985">1985</option>
                                    <option  className="birthday-color" value="1984">1984</option>
                                    <option  className="birthday-color" value="1983">1983</option>
                                    <option  className="birthday-color" value="1982">1982</option>
                                    <option  className="birthday-color" value="1981">1981</option>
                                    <option  className="birthday-color" value="1980">1980</option>
                                    <option  className="birthday-color" value="1979">1979</option>
                                    <option  className="birthday-color" value="1978">1978</option>
                                    <option  className="birthday-color" value="1977">1977</option>
                                    <option  className="birthday-color" value="1976">1976</option>
                                    <option  className="birthday-color" value="1975">1975</option>
                                    <option  className="birthday-color" value="1974">1974</option>
                                    <option  className="birthday-color" value="1973">1973</option>
                                    <option  className="birthday-color" value="1972">1972</option>
                                    <option  className="birthday-color" value="1971">1971</option>
                                    <option  className="birthday-color" value="1970">1970</option>
                                    <option  className="birthday-color" value="1969">1969</option>
                                    <option  className="birthday-color" value="1968">1968</option>
                                    <option  className="birthday-color" value="1967">1967</option>
                                    <option  className="birthday-color" value="1966">1966</option>
                                    <option  className="birthday-color" value="1965">1965</option>
                                    <option  className="birthday-color" value="1964">1964</option>
                                    <option  className="birthday-color" value="1963">1963</option>
                                    <option  className="birthday-color" value="1962">1962</option>
                                    <option  className="birthday-color" value="1961">1961</option>
                                    <option  className="birthday-color" value="1960">1960</option>
                                    <option  className="birthday-color" value="1959">1959</option>
                                    <option  className="birthday-color" value="1958">1958</option>
                                    <option  className="birthday-color" value="1957">1957</option>
                                    <option  className="birthday-color" value="1956">1956</option>
                                    <option  className="birthday-color" value="1955">1955</option>
                                    <option  className="birthday-color" value="1954">1954</option>
                                    <option  className="birthday-color" value="1953">1953</option>
                                    <option  className="birthday-color" value="1952">1952</option>
                                    <option  className="birthday-color" value="1951">1951</option>
                                    <option  className="birthday-color" value="1950">1950</option>
                                    <option  className="birthday-color" value="1949">1949</option>
                                    <option  className="birthday-color" value="1948">1948</option>
                                    <option  className="birthday-color" value="1947">1947</option>
                                    <option  className="birthday-color" value="1946">1946</option>
                                    <option  className="birthday-color" value="1945">1945</option>
                                    <option  className="birthday-color" value="1944">1944</option>
                                    <option  className="birthday-color" value="1943">1943</option>
                                    <option  className="birthday-color" value="1942">1942</option>
                                    <option  className="birthday-color" value="1941">1941</option>
                                    <option  className="birthday-color" value="1940">1940</option>
                                    <option  className="birthday-color" value="1939">1939</option>
                                    <option  className="birthday-color" value="1938">1938</option>
                                    <option  className="birthday-color" value="1937">1937</option>
                                    <option  className="birthday-color" value="1936">1936</option>
                                    <option  className="birthday-color" value="1935">1935</option>
                                    <option  className="birthday-color" value="1934">1934</option>
                                    <option  className="birthday-color" value="1933">1933</option>
                                    <option  className="birthday-color" value="1932">1932</option>
                                    <option  className="birthday-color" value="1931">1931</option>
                                    <option  className="birthday-color" value="1930">1930</option>
                                </select>
                            </label>
                            <label>
                                <button className="login-submit" onClick={this.handleSubmit}>Sign Up</button>
                            </label>
                        </form>
                            <div className="login-to-signup-mini">
                                <div>Already on Hootz?</div>
                                <Link className="signup-link" to="/login">Log In </Link>
                            </div>
                    </div>
                    <div className="login-container">
                        <img className="login-pic" src={window.sign}/>
                    </div>
                    </div>
                </div>
            </>    
        )
    };
};

export default Signup; 