import React from 'react'

import { Link  } from "react-router-dom";const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function Footer() {
	function scroll_top(){
		window.scrollTo(0, 0);
	}
  return (
	<footer className="position-relative gray-bg pb-3" id="iq-contact">
		<div className="container">
			<div className="footer-top">
				<div className="row">
					<div className="col-lg-12 mt-4">
						<ul className="menu p-0 mb-1 text-center">
							<li><Link to="/">Home</Link></li>
							<li><Link to="/about-us">Who We Are</Link></li>
							<li><Link to="/case-studies">Case Studies</Link></li>
							<li><Link to="/our-blog">Our Blog</Link></li>
							  
							<li><Link to="/contact-us">Contact Us</Link></li>
						</ul>
					</div>
				</div>
				<hr />
				<div className="pt-3 pb-3">
					<div className="row justify-content-between text-center">
						<div className="col-auto mr-auto"><span className="copyright">&copy; 2019 crossML All Rights
								Reserved.</span>
						</div>
						<div className="col-auto">
							<div className="social-icone">
								<ul>
									<li className="d-inline"><a className="" target="_blank" href="https://www.facebook.com/Crossml-106706418077771">
                                        <i className="fa fa-facebook"></i></a></li>
									<li className="d-inline"><a className=""  target="_blank" href="https://twitter.com/crossML4">
                                        <i className="fa fa-twitter"></i></a></li>
									<li className="d-inline"><a className=""  target="_blank" href="https://medium.com/crossml">
                                        <i className="fa fa-medium"></i></a></li>
									<li className="d-inline"><a target="_blank" href="https://www.linkedin.com/company/crossml">
                                        <i className="fa fa-linkedin"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="back-to-top" >
			<a className="top" id="top" href="#top" onClick={scroll_top}> <i className="ion-ios-upload-outline"></i> </a>
		</div>
	</footer>
  );
}

export default Footer;
