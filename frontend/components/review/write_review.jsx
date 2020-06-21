import React from 'react';
import { Link } from 'react-router-dom';

class WriteReview extends React.Component {

    constructor(props) {
        super(props)
        // debugger
        this.state = {
            rating: 0,

        };
        // this.render = this.render.bind(this)
        // this.componentDidMount = this.componentDidMount.bind(this)
        this.rate1 = this.rate1.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    };


    rate1(e) {
        e.preventDefault();
        document.getElementById("rate1").style.backgroundColor="yellow";   
        document.getElementById("rate2").style.backgroundColor="gray";  
        document.getElementById("rate3").style.backgroundColor="gray";  
        document.getElementById("rate4").style.backgroundColor="gray";  
        document.getElementById("rate5").style.backgroundColor="gray";  
        () => {this.setState({rating: 1})}
    }

    rate2(e) {
        e.preventDefault();
        document.getElementById("rate1").style.backgroundColor="goldenrod";
        document.getElementById("rate2").style.backgroundColor="goldenrod";  
        document.getElementById("rate3").style.backgroundColor="gray";  
        document.getElementById("rate4").style.backgroundColor="gray";  
        document.getElementById("rate5").style.backgroundColor="gray";   
        () => {this.setState({rating: 2})}   
    }

    rate3(e) {
        e.preventDefault();
        document.getElementById("rate1").style.backgroundColor="peru";   
        document.getElementById("rate2").style.backgroundColor="peru";   
        document.getElementById("rate3").style.backgroundColor="peru";  
        document.getElementById("rate4").style.backgroundColor="gray";  
        document.getElementById("rate5").style.backgroundColor="gray"; 
        () => {this.setState({rating: 3})} 
    }

    rate4(e) {
        e.preventDefault();
        document.getElementById("rate1").style.backgroundColor="orangered";
        document.getElementById("rate2").style.backgroundColor="orangered";
        document.getElementById("rate3").style.backgroundColor="orangered";
        document.getElementById("rate4").style.backgroundColor="orangered";  
        document.getElementById("rate5").style.backgroundColor="gray";    
        () => {this.setState({rating: 4})}
    }

    rate5(e) {
        e.preventDefault();
        document.getElementById("rate1").style.backgroundColor="red"; 
        document.getElementById("rate2").style.backgroundColor="red"; 
        document.getElementById("rate3").style.backgroundColor="red"; 
        document.getElementById("rate4").style.backgroundColor="red"; 
        document.getElementById("rate5").style.backgroundColor="red";     
        () => {this.setState({rating: 5})}
    }

    handleInput(type) {
        return(e) => {
            this.setState({[type]: e.target.value})
        };
    };
  

    handleSubmit(e) {
        e.preventDefault();
        // this.props.signup(this.state)
        
        
    };

    render() {

        return (
        <div className="review-center">
            <div className="review-box">
                <form action="" method="post">
                    <div className="review-box-inner">
                        <div className="rating-form">
                            <div onClick={this.rate5}  id="rate5"  className="rate5">5</div>
                            <div onClick={this.rate4}  id="rate4"  className="rate4">4</div>
                            <div onClick={this.rate3}  id="rate3"  className="rate3">3</div>
                            <div onClick={this.rate2} id="rate2" className="rate2">2</div>
                            <div onClick={this.rate1}  id="rate1" className="rate1">1</div>
                        </div>
                        <textarea onChange={this.handleInput()} placeholder="If you want to find the world’s best street burrito, look no further. Whenever I’m craving a California burrito, I immediately head to this food truck. For $12, they stuff in fries, guacamole, sour cream, and your choice of meat. The employees like to keep the line moving, which is great especially during lunch. There’s so many things to try outside of burritos though. Better to place your order ahead of time to skip the line."/>
                    </div>
                    <button className="login-submit" onClick={this.handleSubmit}>Post Review</button>
                </form>
            </div>
        </div>
        )
    }
}
export default WriteReview;