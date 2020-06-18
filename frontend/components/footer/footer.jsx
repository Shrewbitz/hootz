import React from 'react';

export default () => (
    <div className="footer">
        <div className="footer-top-container">
            <div className="footer-block">
            <a className="footer-label" target="blank" href="https://shrewbitz.github.io/wright/">Portfolio Site <i className="fas fa-user"></i></a>
                {/* <ul>
                    <li>About Hootz</li>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>Investor Relations</li>
                    <li>Content Guidelines</li>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Ad Choices</li>
                    <li>This site is not protected by reCAPTCHA - See additional Privacy Policy and Terms</li>
                </ul> */}
            </div>
            <div className="footer-block">
            <a className="footer-label" target="blank" href="https://github.com/Shrewbitz">Github <i className="fab fa-github"></i></a> 
                {/* 
                    <li>Hootz Project Cost Guides</li>
                    <li>Collections</li>
                    <li>Talk</li>
                    <li>Events</li>
                    <li>The Local Hootz</li>
                    <li>Hootz Blog</li>
                    <li>Support</li>
                    <li>Yelp Mobile</li>
                    <li>Developers</li>
                    <li>RSS</li>
                </ul> */}
            </div>
            <div className="footer-block">
            <a className="footer-label" target="blank" href="https://angel.co/u/samuel-gieseker">AngelList <i className="fab fa-angellist"></i></a>
                {/* <ul>
                    <li>Claim your Business Page</li>
                    <li>Advertise on Hootz</li>
                    <li>Hootz Reservations</li>
                    <li>Hootz WiFi</li>
                    <li>Hootz Waitlist</li>
                    <li>Business Success Stories</li>
                    <li>Business Support</li>
                    <li>Hootz Blog for Business Owners</li>
                </ul> */}
            </div>
            <div className="footer-block">
                <div className="footer-languages">
                    <p className="footer-label" target="blank" href="https://shrewbitz.github.io/wright/">Projects <i className="fas fa-code"></i></p>
                    {/* <a className="footer-label" target="blank" href="https://shrewbitz.github.io/wright/">Projects <i class="fab fa-angellist"></i></a> */}
                    <ul>
                    <li><a target="blank" className="footer-minilink" href="https://shrewbitz.github.io/wright/">Wright <i className="fas fa-globe"></i></a></li>
                    <li><a target="blank" className="footer-minilink" href="http://haiclue.herokuapp.com/#/">Haiclue <i className="fas fa-gamepad"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-bottom-container">
            {/* <div className="footer-city-list">
                <ul>
                    <li className="footer-site-map">Site Map</li>
                    <li className="footer-atl">Atlanta</li>
                    <li className="footer-city">Austin</li>
                    <li className="footer-city">Boston</li>
                    <li className="footer-city">Chicago</li>
                    <li className="footer-city">Dallas</li>
                    <li className="footer-city">Denver</li>
                    <li className="footer-city">Detroit</li>
                    <li className="footer-city">Honolulu</li>
                    <li className="footer-city">Houston</li>
                    <li className="footer-city">Los Angeles</li>
                    <li className="footer-city">Miami</li>
                    <li className="footer-city">Minneapolis</li>
                    <li className="footer-city">New York</li>
                    <li className="footer-city">Philadelphia</li>
                    <li className="footer-city">Portland</li>
                    <li className="footer-city">Sacramento</li>
                    <li className="footer-city">San Diego</li>
                    <li className="footer-city">San Francisco</li>
                    <li className="footer-city">San Jose</li>
                    <li className="footer-city">Seattle</li>
                    <li className="footer-city">Washington, DC</li>
                    <li className="footer-city">More Cities</li>
                </ul>
            </div> */}
            <div className="footer-pic">
                <img src={window.city}/>
            </div>
            <div className='footer-thanks'>
                Thank you for giving a hoot about my website.
            </div>
        </div>
    </div>
)