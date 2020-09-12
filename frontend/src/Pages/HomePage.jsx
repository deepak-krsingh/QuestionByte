import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom"
import { useSelector } from 'react-redux';

function HomePage(props) {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    return (

        <body>

            
            <div className="css-loader">
                <div className="loader-inner line-scale d-flex align-items-center justify-content-center"></div>
            </div>
            
            <header className="position-absolute w-100">
                <div className="container">
                    <div className="top-header d-none d-sm-flex justify-content-between align-items-center">
                        <div className="contact">
                            <a href="tel:+9193XXXXXXXX" className="tel"><i className="fa fa-phone" aria-hidden="true"></i>+9193XXXXXXXX</a>
                            <a href="mailto:support@questionbyte.com"><i className="fa fa-envelope"
                                    aria-hidden="true"></i>support@questionbyte.com</a>
                        </div>
                        <nav className="d-flex aic">
                            {userInfo ? (
                                <Link to="/profile" className="login"><i className="fa fa-user" aria-hidden="true"></i>{userInfo.name}</Link>
                                ) : (
                                <Link to="/login/" className="login"><i className="fa fa-user" aria-hidden="true"></i>Login</Link>
                            )}
                            <ul className="nav social d-none d-md-flex">
                                <li><a href="https://www.facebook.com/fh5co" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            </ul>
                        </nav>
                    </div>
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link to="#" className="navbar-brand"><img src="assets/images/logo.png" alt="Multipurpose" /></Link>
                        <div className="group d-flex align-items-center">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
                                    className="navbar-toggler-icon"></span></button>
                            <Link to="/login/" className="login-icon d-sm-none"><i className="fa fa-user"></i></Link>
                            <Link to="#" className="cart"><i className="fa fa-shopping-cart"></i></Link>
                        </div>
                        <a className="search-icon d-none d-md-block" href="#"><i className="fa fa-search"></i></a>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link to="#" className="nav-link" style={{color:"whitesmoke"}}>Home</Link></li>
                                <li className="nav-item"><Link to="/about/" className="nav-link" style={{color:"whitesmoke"}}>About Us</Link></li>
                                <li className="nav-item"><Link to="/courses/" className="nav-link" style={{color:"whitesmoke"}}>Courses</Link></li>
                                <li className="nav-item"><Link to="/Portfolio/" className="nav-link" style={{color:"whitesmoke"}}>Portfolio</Link></li>
                                <li className="nav-item"><Link to="/shop/" className="nav-link" style={{color:"whitesmoke"}}>Shop</Link></li>
                                <li className="nav-item"><Link to="/contact/" className="nav-link" style={{color:"whitesmoke"}}>Contact Us</Link></li>
                            </ul>
                            <form className="bg-white search-form" method="get" id="searchform">
                                <div className="input-group">
                                    <input className="field form-control" id="s" name="s" type="text" placeholder="Search" />
                                    <span className="input-group-btn">
                                        <input className="submit btn btn-primary" id="searchsubmit" name="submit" type="submit"
                                            value="Search" />
                                    </span>
                                </div>
                            </form>
                        </div>
                    </nav>
                </div>
            </header>
            
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-12 offset-md-1 col-md-11">
                            <div className="swiper-container hero-slider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide slide-content d-flex align-items-center">
                                        <div className="single-slide">
                                            <h1 data-aos="fade-right" data-aos-delay="200">For Developers,<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By Developers
                                            </h1>
                                            <p data-aos="fade-right" data-aos-delay="600">QuestionByte is an open community for anyone that codes. We help you get answers to your toughest coding<br /> questions, share knowledge with your coworkers in private, and find your next dream job.
                                            </p>
                                            <Link to="/public/questions/" className="btn btn-primary" data-aos="fade-right" data-aos-delay="900">Public
                                                Q&A</Link>
                                            <Link to="/private/questions/" className="btn btn-primary" data-aos="fade-right" data-aos-delay="900">Private
                                                Q&A</Link>
                                        </div>
                                    </div>
                                    <div className="swiper-slide slide-content d-flex align-items-center">
                                        <div className="single-slide">
                                            <h1 data-aos="fade-right" data-aos-delay="200">For Businesses,<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By Developers
                                            </h1>
                                            <p data-aos="fade-right" data-aos-delay="600">Our mission is to help developers write the script of the future. This means helping you find and hire skilled developers for<br /> your business and providing them the tools they need to share knowledge and work effectively.
                                            </p>
                                            <a data-aos="fade-right" data-aos-delay="900" href="#" className="btn btn-primary">Private Q&A
                                                </a>
                                            <a data-aos="fade-right" data-aos-delay="900" href="#" className="btn btn-primary">Recruitment
                                                </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <span className="arr-left"><i className="fa fa-angle-left"></i></span>
                    <span className="arr-right"><i className="fa fa-angle-right"></i></span>
                </div>
                <div className="texture"></div>
                <div className="diag-bg"></div>
            </section>
            
            <section className="pricing-table">
                <div className="container">
                    <div className="title text-center">   
                        <h3 className="title-blue">Unlock siloed knowledge with QuestionByte for Teams</h3>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <div className="single-pricing text-center" data-aos="fade-up" data-aos-delay="0" data-aos-duration="600">
                                <span>Monthly</span>
                                <h2>Starter</h2>
                                <p className="desc">Here goes some description</p>
                                <p className="price">$39.00</p>
                                <p>Create excepteur sint occaecat cupidatat non proident</p>
                                <a href="#" className="btn btn-primary">Buy Now</a>
                                <svg viewBox="0 0 170 193">
                                    <path fill-rule="evenodd" fill="blue"
                                        d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-pricing text-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="600">
                                <span>Monthly</span>
                                <h2>Starter</h2>
                                <p className="desc">Here goes some description</p>
                                <p className="price">$39.00</p>
                                <p>5GB Storage Space</p>
                                <p>20GB Monthly Bandwidth</p>
                                <p>My SQL Databases</p>
                                <p>100 Email Account</p>
                                <a href="#" className="btn btn-primary">Buy Now</a>
                                <svg viewBox="0 0 170 193">
                                    <path fill-rule="evenodd" fill="rgb(238, 21, 21)"
                                        d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-pricing text-center" data-aos="fade-up" data-aos-delay="600" data-aos-duration="600">
                                <span>Monthly</span>
                                <h2>Starter</h2>
                                <p className="desc">Here goes some description</p>
                                <p className="price">$39.00</p>
                                <p>Create excepteur sint occaecat cupidatat non proident</p>
                                <a href="#" className="btn btn-primary">Buy Now</a>
                                <svg viewBox="0 0 170 193">
                                    <path fill-rule="evenodd" fill="rgb(238, 21, 21)"
                                        d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <footer>
                <div className="foot-note">
                    <div className="container" style={{fontSize:"16px", marginLeft:"27%"}}>
                        All rights reserved &copy; Indian Institute of Information Technology, Manipur
                    </div>
                </div>
            </footer>

        </body>
    );
}
export default HomePage;