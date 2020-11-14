import React from 'react'
import './login.css'


const Login = (props) => {
    return (
        <div>
        <div className="modal fade child" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="header-log">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <div>
                            <div id="carouselId" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselId" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselId" data-slide-to="1"></li>
                                    <li data-target="#carouselId" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner item" role="listbox">
                                    <div className="carousel-item active">
                                        <img src={require('../../Images/pic1.png')} alt="First slide" />
                                        <p>Help make OLX safer place to buy and sell</p>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={require('../../Images/pic2.png')} alt="Second slide" />
                                        <p>Contact and close deals faster</p>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={require('../../Images/pic3.png')} alt="Third slide" />
                                        <p>slick-slide slick-active slick-current</p>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <div className="log-btn">
                                <button className="button">Continue with phone</button>
                                <button onClick={props.facebookAuth} className="button">Continue with facebook</button>
                                <button onClick={props.googleAuth} className="button">Continue with google</button>
                                <button className="button">Continue with email</button>
                            </div>
                            <div className="log-footer">
                                <p>We won't share your personal details with anyone</p>
                                <p>If you continue, you are accepting <a href="https://help.olx.com.pk/hc/en-us">OLX
                                Terms
                                    and Conditions and Privacy Policy</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
}

export default Login