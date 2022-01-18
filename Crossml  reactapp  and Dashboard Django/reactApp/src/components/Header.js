import React from 'react'
import { Link  } from "react-router-dom";
const responsive = {
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

function Header() {
  
  return (
	  
	<header id="main-header" className="header-main">
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					
					<nav className="navbar navbar-expand-lg navbar-light">
						<Link className="navbar-brand" to="/">
							<img className="img-fluid" src="https://crossml-website-images.s3.amazonaws.com/logo.png" alt="img" />
						</Link>
						<button className="navbar-toggler" type="button" data-toggle="collapse"
							data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
							aria-expanded="false" aria-label="Toggle navigation">
							<span className="menu-btn d-inline-block" id="menu-btn">
								<span className="line"></span>
								<span className="line"></span>
								<span className="line"></span>
							</span>
							<span className="ion-navicon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mr-auto w-100 justify-content-end">
								<li className="nav-item dropdown">
									<Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
										data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										What We Do
									</Link>
									<div className="dropdown-menu" aria-labelledby="navbarDropdown">
										 
										<Link className="dropdown-item" to="cloud-services">Cloud Migration &
											Management</Link>
										<Link className="dropdown-item" to="dataops-services">DataOps Pipelines</Link>
										<Link className="dropdown-item" to="devops-services">DevOps Services</Link>
										<Link className="dropdown-item" to="web-mobile-services">Web & Mobile
											Development</Link>
									</div>
								</li>
								<li className="nav-item dropdown">
									<Link className="nav-link" to="industries-we-work">
										Industries We Work In
									</Link>
								</li>
								<li className="nav-item dropdown">
									<Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown-2" role="button"
										data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										Who We Are
									</Link>
									<div className="dropdown-menu" aria-labelledby="navbarDropdown-2">
										<Link className="dropdown-item" to="/about-us">About Us</Link>
										<Link className="dropdown-item" to="/our-blog">Our Blogs</Link>
										<Link className="dropdown-item" to="/case-studies">Case Studies</Link>
									</div>
								</li>
								<li className="nav-item ">
									<Link className="nav-link" to="/careers" id="" role="button">
										Careers
									</Link>
								</li>

							</ul>
						</div>
						<div className="sub-main">
							<ul className="shop_list">
								<li className="button-btn list-inline-item">
									<nav aria-label="breadcrumb">
										<div className="blue-btn button"><Link to="contact-us">Contact Us</Link></div>
									</nav>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</div>
	</header>
  );
}

export default Header;
