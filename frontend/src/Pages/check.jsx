<body>
        {/* Loader Start */}
        <div className="css-loader">
            <div className="loader-inner line-scale d-flex align-items-center justify-content-center"></div>
        </div>
        {/* Loader End */}
        {/* Header Start */}
        <header className="position-absolute w-100">
            <div className="container">
                <div className="top-header d-none d-sm-flex justify-content-between align-items-center">
                    <div className="contact">
                        <a href="tel:+9193XXXXX" className="tel"><i className="fa fa-phone" aria-hidden="true"></i>+1234567890</a>
                        <a href="mailto:help@questionbyte.com"><i className="fa fa-envelope"
                                aria-hidden="true"></i>help@questionbyte.com</a>
                    </div>
                    <nav className="d-flex aic">
                        {userInfo ? (
                            <Link to="/profile" className="login"><i className="fa fa-user" aria-hidden="true"></i>{userInfo.name}</Link>
                            ) : (
                            <Link to="/login" className="login"><i className="fa fa-user" aria-hidden="true"></i>Login</Link>
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
                        <a className="login-icon d-sm-none" href="#"><i className="fa fa-user"></i></a>
                        <a className="cart" href="#"><i className="fa fa-shopping-cart"></i></a>
                    </div>
                    <a className="search-icon d-none d-md-block" href="#"><i className="fa fa-search"></i></a>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link to ="#" className="nav-link">Home</Link></li>
                            <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Portfolio</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Shop</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
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
        {/* Header End */}
        {/* Hero Start */}
        <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-12 offset-md-1 col-md-11">
                        <div className="swiper-container hero-slider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide slide-content d-flex align-items-center">
                                    <div className="single-slide">
                                        <h1 data-aos="fade-right" data-aos-delay="200">Creative<br /> Multipurpose websites
                                        </h1>
                                        <p data-aos="fade-right" data-aos-delay="600">Crafted by innovative creators for Expecting Peoples’s predefined dummy text<br /> chunks as necessary, making this the first.
                                        </p>
                                        <Link to="/questions" className="btn btn-primary"><i data-aos="fade-right" data-aos-delay="900"></i>Public Q&A</Link>
                                        <a data-aos="fade-right" data-aos-delay="900" href="#" className="btn btn-primary">Private Q&A</a>
                                    </div>
                                </div>
                                <div className="swiper-slide slide-content d-flex align-items-center">
                                    <div className="single-slide">
                                        <h1 data-aos="fade-right" data-aos-delay="200">Creative<br /> Multipurpose websites
                                        </h1>
                                        <p data-aos="fade-right" data-aos-delay="600">Crafted by innovative creators for Expecting Peoples’s predefined dummy text<br /> chunks as necessary, making this the first.
                                        </p>
                                        <a data-aos="fade-right" data-aos-delay="900" href="#" className="btn btn-primary">See
                                            More</a>
                                        <a data-aos="fade-right" data-aos-delay="900" href="#" className="btn btn-primary">Get
                                            Now</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Add Control */}
                <span className="arr-left"><i className="fa fa-angle-left"></i></span>
                <span className="arr-right"><i className="fa fa-angle-right"></i></span>
            </div>
            <div className="texture"></div>
            <div className="diag-bg"></div>
        </section>
        {/* Hero End */}
        {/* Services Start */}
        <section className="services">
            <div className="container">
                <div className="title text-center">
                    <h6>Our Speakers</h6>
                    <h1 className="title-blue">Why Choose Us</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <div className="media" data-aos="fade-up" data-aos-delay="200" data-aos-duration="400">
                                <img className="mr-4" src="assets/images/service1.png" alt="Web Development" />
                                <div className="media-body">
                                    <h5>Web Development</h5>
                                    Donec volutpat tincidunt neque, vitae lobortis libero mattis sed tempus.
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="media" data-aos="fade-up" data-aos-delay="400" data-aos-duration="600">
                                <img className="mr-4" src="assets/images/service2.png" alt="Web Development" />
                                <div className="media-body">
                                    <h5>Testing for perfection</h5>
                                    Donec volutpat tincidunt neque, vitae lobortis libero mattis sed tempus.
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="media" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
                                <img className="mr-4" src="assets/images/service3.png" alt="Web Development" />
                                <div className="media-body">
                                    <h5>Discussion of the idea</h5>
                                    Donec volutpat tincidunt neque, vitae lobortis libero mattis sed tempus.
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="media" data-aos="fade-up" data-aos-delay="200" data-aos-duration="400">
                                <img className="mr-4" src="assets/images/service4.png" alt="Web Development" />
                                <div className="media-body">
                                    <h5>Modern style</h5>
                                    Donec volutpat tincidunt neque, vitae lobortis libero mattis sed tempus.
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="media" data-aos="fade-up" data-aos-delay="400" data-aos-duration="600">
                                <img className="mr-4" src="assets/images/service1.png" alt="Web Development" />
                                <div className="media-body">
                                    <h5>Web Development</h5>
                                    Donec volutpat tincidunt neque, vitae lobortis libero mattis sed tempus.
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="media" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
                                <img className="mr-4" src="assets/images/service5.png" alt="Web Development" />
                                <div className="media-body">
                                    <h5>Elaboration of the core</h5>
                                    Donec volutpat tincidunt neque, vitae lobortis libero mattis sed tempus.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Services End */}
        {/* Testimonial and Clients Start */}
        <section className="testimonial-and-clients">
            <div className="container">
                <div className="testimonials">
                    <div className="swiper-container test-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide text-center">
                                <div className="row">
                                    <div className="offset-lg-1 col-lg-10">
                                        <div className="test-img" data-aos="fade-up" data-aos-delay="0" data-aos-offset="0"><img src="assets/images/test1.png" alt="Testimonial 1" /></div>
                                        <h5 data-aos="fade-up" data-aos-delay="200" data-aos-duration="600" data-aos-offset="0">John</h5>
                                        <span data-aos="fade-up" data-aos-delay="400" data-aos-duration="600" data-aos-offset="0">UI/UX
                                            Designer</span>
                                        <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="600" data-aos-offset="0">Ash's tactics & books have helped me a lot in my understanding on how social media advertising works.I can say that he is one of the best development professionals i have dealt with so far. His experience is great &
                                            he is such a great & pleasant person to work with as he understands what you are</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide text-center">
                                <div className="row">
                                    <div className="offset-lg-1 col-lg-10">
                                        <div className="test-img" data-aos="fade-up" data-aos-delay="0" data-aos-offset="0"><img src="assets/images/test1.png" alt="Testimonial 1" /></div>
                                        <h5 data-aos="fade-up" data-aos-delay="200" data-aos-duration="600" data-aos-offset="0">John</h5>
                                        <span data-aos="fade-up" data-aos-delay="400" data-aos-duration="600" data-aos-offset="0">UI/UX
                                            Designer</span>
                                        <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="600" data-aos-offset="0">Ash's tactics & books have helped me a lot in my understanding on how social media advertising works.I can say that he is one of the best development professionals i have dealt with so far. His experience is great &
                                            he is such a great & pleasant person to work with as he understands what you are</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide text-center">
                                <div className="row">
                                    <div className="offset-lg-1 col-lg-10">
                                        <div className="test-img" data-aos="fade-up" data-aos-delay="0" data-aos-offset="0"><img src="assets/images/test1.png" alt="Testimonial 1" /></div>
                                        <h5 data-aos="fade-up" data-aos-delay="200" data-aos-duration="600" data-aos-offset="0">John</h5>
                                        <span data-aos="fade-up" data-aos-delay="400" data-aos-duration="600" data-aos-offset="0">UI/UX
                                            Designer</span>
                                        <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="600" data-aos-offset="0">Ash's tactics & books have helped me a lot in my understanding on how social media advertising works.I can say that he is one of the best development professionals i have dealt with so far. His experience is great &
                                            he is such a great & pleasant person to work with as he understands what you are</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="test-pagination"></div>
                    </div>
                </div>
                <div className="clients" data-aos="fade-up" data-aos-delay="200" data-aos-duration="600">
                    <div className="swiper-container clients-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src="assets/images/client1.png" alt="Client 1" />
                            </div>
                            <div className="swiper-slide">
                                <img src="assets/images/client2.png" alt="Client 2" />
                            </div>
                            <div className="swiper-slide">
                                <img src="assets/images/client3.png" alt="Client 3" />
                            </div>
                            <div className="swiper-slide">
                                <img src="assets/images/client4.png" alt="Client 4" />
                            </div>
                            <div className="swiper-slide">
                                <img src="assets/images/client5.png" alt="Client 5" />
                            </div>
                        </div>
                        <div className="test-pagination"></div>
                    </div>
                </div>
            </div>
        </section>
        {/* Testimonial and Clients End */}
    
        {/* Footer Start */}
        <footer>
            {/* Widgets Start */}
            <div className="footer-widgets">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xl-3">
                            <div className="single-widget contact-widget" data-aos="fade-up" data-aos-delay="0">
                                <h6 className="widget-tiltle">&nbsp;</h6>
                                <p>By subscribing to our mailing list you will always be update with the latest news from us.
                                </p>
                                <div className="media">
                                    <i className="fa fa-map-marker"></i>
                                    <div className="media-body ml-3">
                                        <h6>Address</h6>
                                        Level 13, 2 Elizabeth St,<br /> Melbourne, Victoria 3000 Australia
                                    </div>
                                </div>
                                <div className="media">
                                    <i className="fa fa-envelope-o"></i>
                                    <div className="media-body ml-3">
                                        <h6>Have any questions?</h6>
                                        <a href="mailto:support@steelthemes.com">Support@Steelthemes.com</a>
                                    </div>
                                </div>
                                <div className="media">
                                    <i className="fa fa-phone"></i>
                                    <div className="media-body ml-3">
                                        <h6>Call us & Hire us</h6>
                                        <a href="tel:+610791803458"> +61 (0) 7 9180 3458</a>
                                    </div>
                                </div>
                                <div className="media">
                                    <i className="fa fa-fax"></i>
                                    <div className="media-body ml-3">
                                        <h6>Fax</h6>
                                        <a href="fax:911889047521432">(91) 188904752 1432</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="single-widget twitter-widget" data-aos="fade-up" data-aos-delay="200">
                                <h6 className="widget-tiltle">Fresh Tweets</h6>
                                <div className="media">
                                    <i className="fa fa-twitter"></i>
                                    <div className="media-body ml-3">
                                        <h6><a href="#">@Themes,</a> Html Version Out Now</h6>
                                        <span>10 Mins Ago</span>
                                    </div>
                                </div>
                                <div className="media">
                                    <i className="fa fa-twitter"></i>
                                    <div className="media-body ml-3">
                                        <h6><a href="#">@Envato,</a> the best selling item of the day!</h6>
                                        <span>20 Mins Ago</span>
                                    </div>
                                </div>
                                <div className="media">
                                    <i className="fa fa-twitter"></i>
                                    <div className="media-body ml-3">
                                        <h6><a href="#">@Collis,</a> We Planned to Update the Enavto Author Payment Method Soon!
                                        </h6>
                                        <span>10 Mins Ago</span>
                                    </div>
                                </div>
                                <div className="media">
                                    <i className="fa fa-twitter"></i>
                                    <div className="media-body ml-3">
                                        <h6><a href="#">@SteelThemes,</a> Html Version Out Now</h6>
                                        <span>15 Mins Ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="single-widget recent-post-widget" data-aos="fade-up" data-aos-delay="400">
                                <h6 className="widget-tiltle">Latest Updates</h6>
                                <div className="media">
                                    <a className="rcnt-img" href="#"><img src="assets/images/rcnt-post1.png" alt="Recent Post" /></a>
                                    <div className="media-body ml-3">
                                        <h6><a href="#">An engaging</a></h6>
                                        <p><i className="fa fa-user"></i>Mano <i className="fa fa-eye"></i> 202 Views</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <a className="rcnt-img" href="#"><img src="assets/images/rcnt-post2.png" alt="Recent Post" /></a>
                                    <div className="media-body ml-3">
                                        <h6><a href="#">Statistics and analysis. The key to succes.</a></h6>
                                        <p><i className="fa fa-user"></i>Rosias <i className="fa fa-eye"></i> 20 Views</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <a className="rcnt-img" href="#"><img src="assets/images/rcnt-post3.png" alt="Recent Post" /></a>
                                    <div className="media-body ml-3">
                                        <h6><a href="#">Envato Meeting turns into a photoshooting.</a></h6>
                                        <p><i className="fa fa-user"></i>Kien <i className="fa fa-eye"></i> 74 Views</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <a className="rcnt-img" href="#"><img src="assets/images/rcnt-post4.png" alt="Recent Post" /></a>
                                    <div className="media-body ml-3">
                                        <h6><a href="#">An engaging embedded the video posts</a></h6>
                                        <p><i className="fa fa-user"></i>Robert <i className="fa fa-eye"></i> 48 Views</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="single-widget tags-widget" data-aos="fade-up" data-aos-delay="800">
                                <h6 className="widget-tiltle">Popular Tags</h6>
                                <a href="#">Amazing</a>
                                <a href="#">Design</a>
                                <a href="#">Photoshop</a>
                                <a href="#">Art</a>
                                <a href="#">Wordpress</a>
                                <a href="#">jQuery</a>
                            </div>
                            <div className="single-widget subscribe-widget" data-aos="fade-up" data-aos-delay="800">
                                <h6 className="widget-tiltle">Subscribe us</h6>
                                <p>Sign up for our mailing list to get latest updates and offers</p>
                                <form className="" method="get">
                                    <div className="input-group">
                                        <input className="field form-control" name="subscribe" type="email" placeholder="Email Address" />
                                        <span className="input-group-btn">
                                            <button type="submit" name="submit-mail"><i className="fa fa-check"></i></button>
                                        </span>
                                    </div>
                                </form>
                                <p>We respect your privacy</p>
                                <ul className="nav social-nav">
                                    <li><a href="https://www.facebook.com/fh5co" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Widgets End */}
            {/* Foot Note Start */}
            <div className="foot-note">
                <div className="container">
                    <div className="footer-content text-center text-lg-left d-lg-flex justify-content-between align-items-center">
                        <p className="mb-0" data-aos="fade-right" data-aos-offset="0">&copy; 2019 All Rights Reserved. Design by <a href="https://freehtml5.co/multipurpose" target="_blank" className="fh5-link">FreeHTML5.co</a>.</p>
                        <p className="mb-0" data-aos="fade-left" data-aos-offset="0"><a href="#">Terms Of Use</a><a href="#">Privacy & Security
                                Statement</a></p>
                    </div>
                </div>
            </div>
            {/* Foot Note End */}
        </footer>
        {/* Footer Endt */}
        
    </body>