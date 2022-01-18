
import React from 'react'
import MetaTags from 'react-meta-tags';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
    Link
  } from "react-router-dom";
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

function Home() {
    
    const react_carousel_item = {
        width:'360px',
        marginRight:'30px',
        background: '#f2f2f2!important'
        };

  return (
	<div className="main-content" style={{marginTop: '100px'}}>
          <MetaTags>
            <title>AI, Cloud, Application, DevOps and DataOps Consulation</title>
			<meta name="keywords" content="Artificial Intelligence, Cloud Computing, DevOps, Software Consultation, Machine Learning, MLOps, Web and Mobile Application Development" />
          </MetaTags>

		<section className="pb-0 pt-0 my-5">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="title-box">
							<h1>Artificial Intelligence to supercharge<br />your business</h1>
						</div>
						<div className="iq-insurance-overlay pt-position-topleft ">
							<img src="https://crossml-website-images.s3.amazonaws.com/18.png" alt="" />
							<div className="iq-insurance-second-overlay pt-position-topleft ">
								<img src="https://crossml-website-images.s3.amazonaws.com/19.png" alt="" />
							</div>
						</div>
					</div>
					<div className="col-lg-6 px-0 pt-4">
						<img src="https://crossml-website-images.s3.amazonaws.com/ai-banner.png" className="img-fluid" alt="Artifical Intelligence" />
					</div>
					<div className="col-lg-6 pl-5">
						<div className="iq-insurance-overlay pt-position-right ">
							<img src="https://crossml-website-images.s3.amazonaws.com/20.png" alt="" />
							<div className="iq-insurance-second-overlay pt-position-topleft ">
								<img src="https://crossml-website-images.s3.amazonaws.com/19.png" alt="" />
							</div>
						</div>
						<div className=" verticle-slider ">
							<div className="feedback-info">
							
								<div className="slick-text">
									<h5 className="iq_vslider_title-misc animate mb-1">Computer Vision</h5>
									<p className="iq_vslider_title-misc animate mb-0" style={{lineHeight: '27px'}}>
										State-of-the-art cognitive computer vision solutions to analyse and extract rich
										information from videos and images for facial recognition, <b>optical character
											recognition</b>, and emotion analysis.</p>
								</div>
							</div>
							<div className="feedback-info ">
								<div className="slick-text">
									<h5 className="iq_vslider_title-misc animate mb-1">Natural Language Processing</h5>
									<p className="iq_vslider_title-misc animate mb-0" style={{lineHeight: '27px'}}>
										Understands, process, and generate potential in your unstructured data like
										<b> customer emails</b>, support tickets, product reviews, social media, even
										advertising just as people do.</p>
								</div>
							</div>
							<div className="feedback-info ">
								<div className="slick-text">
									<h5 className="iq_vslider_title-misc animate mb-1">Predictive Forecast</h5>
									<p className="iq_vslider_title-misc animate mb-0" style={{lineHeight: '27px'}}>Build
										probabilistic models and apply machine learning and deep learning methods for
										<b>faster decision making</b>, increased productivity, and improved business
										process.</p>
								</div>
							</div>
							<div className="feedback-info ">
								<div className="slick-text">
									<h5 className="iq_vslider_title-misc animate mb-1">Machine Learning Operations</h5>
									<p className="iq_vslider_title-misc animate mb-0" style={{lineHeight: '27px'}}>
										<b>MLOps</b>, enables data science and IT teams to collaborate and increase the
										pace of model development and deployment via monitoring, validation and
										governance of machine learning models.</p>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</section>


		<section className="py-15 dark-bg home_digital" style={{background: '#444142'}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 pr-4">
						<div className="title-box text-left mb-1">
							<h1 className="mb-3 white-color">Seamless<br />Digital Transformation</h1>
							<p className="mb-2 main-desc">Being a core <b>technical partner</b> we have been working with
								<b> 100's</b> global enterprises of all sizes to solve their technical and architectural
								problems and helping them in better business strategies, digital transformation, and
								increase business productivity.</p>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<ul className="iq-list wow " data-wow-duration="0.9s">
									<li>
										<i className="fa fa-check-circle"></i>
										<span>
											Provide high-availability and resiliency with fully-managed CI/CD deployment
											pipelines and automated monitoring tools.
										</span>
									</li>
									<li>
										<i className="fa fa-check-circle"></i>
										<span>
											Achieve high-level of cloud security, data protection, vulnerability
											assessments, and automation for continuous compliance.
										</span>
									</li>
									<li>
										<i className="fa fa-check-circle"></i>
										<span>
											We ensure that your critical data is clean, stored securely, and delivered
											to end-users in near-real-time.
										</span>
									</li>
									<li>
										<i className="fa fa-check-circle"></i>
										<span>
											Data holds the key information so we leverage your customer's data at every
											touchpoint for conversions and retention you can count on.
										</span>
									</li>
									<li>
										<i className="fa fa-check-circle"></i>
										<span>
											Our digital expertise assures right products to enhance your customer's
											experience and align your business goals with your users.
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-6 mt-5 mt-lg-0">
						<div className="row align-items-center justify-content-center">
							<div className="col-lg-6">
								<div className="iq-insuarance-box wow " style={{background: '#377A7D'}}>
									<div className="iq-box-top">
										<div className="insua-icon-bg" style={{background: '#f9eaeb'}}>
											<i className="flaticon flaticon-cloud-connection" style={{color: '#377A7D'}}></i>
										</div>
										<h5 className="mt-3 mb-2">Cloud Migration & Management</h5>
										<p className="mb-2">Cloud computing offers modern businesses opportunities, flexible
											operating models, help <b>reducing in-house infrastructure cost</b>, and the
											agility to compete in a dynamic world. </p>
										<p className="mb-0"><Link to="cloud-services">Read More...</Link></p>
									</div>
								</div>
								<div className="iq-insuarance-box wow mb-0" style={{background: '#C74D57'}} >
									<div className="iq-box-top">
										<div className="insua-icon-bg" style={{background: '#f9eaeb'}}>
											<i className="flaticon flaticon-tools" style={{color: '#C74D57'}}></i>
										</div>
										<h5 className="mt-3 mb-2">DevOps Pipelines</h5>
										<p className="mb-2">DevOps pipeline is a set of practices that the development (Dev)
											and operations (Ops) teams implement to build, test, and deploy software
											faster and easier. </p>
										<p className="mb-0"><Link to="devops-services">Read More...</Link></p>
									</div>
								</div>

							</div>

							<div className="col-lg-6 ">
								<div className="iq-insuarance-box wow" style={{background: '#5A5DA2'}}>
									<div className="iq-box-top">
										<div className="insua-icon-bg" style={{background: '#6c70ed'}}>
											<i className="fa fa-database" aria-hidden="true"  style={{color: '#ffffff'}}></i>
										</div>
										<h5 className="mt-3 mb-2">DataOps Pipelines</h5>
										<p className="mb-2">DataOps is orchestration of people, processes, and technology to
											deliver secure and <b>business-ready</b> high quality data for data citizen,
											operations and applications.</p>
										<p className="mb-0"><Link to="dataops-services">Read More...</Link></p>
									</div>
								</div>
								<div className="iq-insuarance-box wow mb-0" style={{background: '#d69513'}}>
									<div className="iq-box-top">
										<div className="insua-icon-bg" style={{background: '#f9eaeb'}}>
											<i className="flaticon flaticon-analytics" style={{color: '#d69513'}}></i>
										</div>
										<h5 className="mt-3 mb-2">Web & Mobile Application</h5>
										<p className="mb-2">An emerging strategy for application software companies is to 
										provide web and mobile access to software previously distributed as local applications.</p>
										<p className="mb-0"><Link to="/web-mobile-services">Read More...</Link></p>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</section>


		<section className="blue-gray-bg py-10 home_case_study">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 pr-5">
						<div className="title-box text-left mb-1">
							<h2 className="mb-3">Boost Your Business Efficiency using Hyperautomation, RPA, <br />and OCR
							</h2>
							<p>We at <b>crossML</b> helped many customers across diversified industries such as retail,
								logistics, banking, and healthcare to automate their manual repetitive and plain sailing
								tasks with minimal to zero human involvement in the impactful way using
								<b> Hyperautomation</b>, <b>RPA</b>, and <b>OCR</b>.</p>
						</div>
						<ul className="iq-list wow mt-0">
							<li><i className="fa fa-check"></i><span><b>Logistics Automation</b> solution reads all relevant
									information from shipping slip, generates shipment summary, and updates ERP
									inventory correctly.</span></li>
							<li><i className="fa fa-check"></i><span><b>Invoice Automation</b> tool automatically extracts
									useful information such as invoice details, address, line items, and totals from
									digital PDF invoices or images.</span></li>
							<li><i className="fa fa-check"></i><span><b>e-KYC</b> application helps people to scan their
									national ID proofs, read confidential information, and complete their KYC process
									very easily and securely.</span></li>
						</ul>
						<p className="mt-3 mb-0"><Link to="ocr-hyperautomation"> <b>Read More</b></Link></p>
					</div>
					<div className="col-lg-5 mt-lg-0">
						<img src="https://crossml-website-images.s3.amazonaws.com/rpa-automation.png" className="mt-4 mb-4" alt="OCR Automation" />
						<p className="mt-5 text-center">
							<img className="img-fluid client-img mr-5" width="180" src="https://crossml-website-images.s3.amazonaws.com/blue_prism_logo.png"
								alt="Blueprism" />
							<img className="img-fluid client-img" width="180" src="https://crossml-website-images.s3.amazonaws.com/opencv-python.png"
								alt="OpenCV Python OCR" />
						</p>
					</div>
				</div>
			</div>
		</section>
		<section className="pt-5 pb-3 home_case_study">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 mt-4">
						<img src="https://crossml-website-images.s3.amazonaws.com/iot.jpeg" className="mb-4" alt="IoT Data Pipelines" />
						<p className="mt-5 text-center">
							<img className="img-fluid client-img mr-3" width="120" src="https://crossml-website-images.s3.amazonaws.com/aws.png" alt="AWS" />
							<img className="img-fluid client-img mr-3" width="95" src="https://crossml-website-images.s3.amazonaws.com/Apache_Spark_logo.png"
								alt="Apache Spark" />
							<img className="img-fluid client-img mr-3" width="110" src="https://crossml-website-images.s3.amazonaws.com/AirflowLogo.png"
								alt="Apache Airflow" />
							<img className="img-fluid client-img" width="55" src="https://crossml-website-images.s3.amazonaws.com/rasberry-pi.png" alt="Rasberry Pi" />
						</p>
					</div>
					<div className="col-lg-7 pl-5 mt-4">
						<div className="title-box text-left mb-3 pl-3">
							<h2 className="mb-3">Mobility Data Pipelines for IoT <br />Devices using AWS Serverless
								<br />Architecture</h2>
							<p>Being a <b>technical partner</b>, we have provided our customers with fully automated
								solutions, serverless pipelines and technical tools to store, process, and analyze
								unprecedented amounts of mobility data received from different IoT sources.</p>
						</div>
						<ul className="iq-list wow mt-0 pl-3">
							<li><i className="fa fa-check"></i><span>Designed managed automated <b>Data Pipelines</b> to
									collect unprecedented amounts of streaming data from IoT devices without losing any
									data packet.</span></li>
							<li><i className="fa fa-check"></i><span>Provided the <b>Serverless Architecture</b> to crawl
									unstructured data to convert it into a common format using dynamic
									algorithms.</span></li>
							<li><i className="fa fa-check"></i><span>Our <b>Machine Learning Pipelines</b> automatically
									connect with data lakes to train models and generate useful insights to make the
									right future decisions.</span></li>
						</ul>
						<p className="mt-3 mb-0 pull-right"><Link to="mobility-data"> <b>Read More</b></Link></p>
					</div>
				</div>
			</div>
		</section>
		<section className="blue-gray-bg mb-5 mt-5 home_case_study">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 pr-5">
						<div className="title-box text-left mb-3">
							<h2 className="mb-3">Helps Making Better Business Decisions with Predictive <br />Analytics</h2>
							<p><b>Predictive analytics</b> uses customer’s historical data and apply statistical
								techniques & machine learning modeling to transform data into meaningful insights,
								identify trends, and customers behavior.</p>
						</div>
						<ul className="iq-list wow mt-0 pl-3">
							<li><i className="fa fa-check"></i><span>Helping <b>financial institutions</b> to ensure their
									customer’s superlative experience and protect them from fraudulent transactions and
									false insurance claims.</span></li>
							<li><i className="fa fa-check"></i><span>Increased efficiency for <b>manufacturing
										industries</b> by streamline their supply chain process, reduced material
									wastage, and forecast right inventory demands.</span></li>
							<li><i className="fa fa-check"></i><span>Enabled many <b>retail</b> and <b>media</b> industries
									to personalize their users content and recommend them right products based on their
									history.</span></li>
						</ul>
						<p className="mt-3 mb-0"><Link to="predictive-analytics"> <b>Read More</b></Link></p>
					</div>
					<div className="col-lg-5 mt-5 mt-lg-0">
						<img src="https://crossml-website-images.s3.amazonaws.com/predictive-analytics.png" alt="Predictive Analytic"/>
						<p className="mt-5 text-center">
							<img className="img-fluid client-img mr-5" width="180" src="https://crossml-website-images.s3.amazonaws.com/powerbi-logo.png"
								alt="Blueprism" />
							<img className="img-fluid client-img" width="225" src="https://crossml-website-images.s3.amazonaws.com/Tableau-Logo.png"
								alt="OpenCV Python OCR" />
						</p>
						<p className="mt-4 mb-0 text-center">
							<img className="img-fluid client-img mr-5" width="85" src="https://crossml-website-images.s3.amazonaws.com/python.png"
								alt="OpenCV Python OCR" />
							<img className="img-fluid client-img mr-5" width="130" src="https://crossml-website-images.s3.amazonaws.com/Apache_Spark_logo.png"
								alt="OpenCV Python OCR" />
							<img className="img-fluid client-img" width="130" src="https://crossml-website-images.s3.amazonaws.com/hadoop.png"
								alt="OpenCV Python OCR" /> 
						</p>
					</div>
				</div>
			</div>
		</section>

		<section className="pt-0 pb-5 pt-4">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="title-box">
							<h2>Our Latest Blogs</h2>
						</div>
						{/* <div className="owl-carousel" data-autoplay="true" data-loop="true" data-nav="true"
							data-dots="false" data-items="3" data-items-laptop="3" data-items-tab="2"
							data-items-mobile="1" data-items-mobile-sm="1" data-margin="30"> */}
                        <Carousel responsive={responsive}
                        responsive={responsive}
                        infinite={true}
                        autoPlay={false}
                        >

							<div style={react_carousel_item} className="item react-carousel-item">
								<div className="iq-blog-box">
									<div className="iq-blog-image clearfix">
										<img src="https://crossml-website-images.s3.amazonaws.com/blog_server.jpeg" className="img-fluid center-block"
											alt="Serverless Data" />
									</div>
									<div className="iq-blog-detail">
										<div className="iq-blog-meta">
											<ul className="list-inline">
												<li className="list-inline-item">
													<a href="#" className="iq-user"><i className="fa fa-user"
															aria-hidden="true"></i> crossml Engineering</a>
												</li>
												<li className="list-inline-item pull-right">
													<i className="fa fa-clock-o" aria-hidden="true"></i>
													3 min read
												</li>
											</ul>
										</div>
										<div className="blog-title">
											<a href="#">
												<h6>Serverless Data Extraction with AWS</h6>
											</a>
										</div>
										<div className="blog-content">
											<p>Here is a small part of our Hybrid document parsing solution that uses AI
												to preprocess, extract and parse data.</p>
										</div>
										<div className="blog-button"><a className="button" target="_blank" target="_blank"
												href="https://medium.com/crossml/serverless-data-extraction-with-aws-b2dd2b191872">Read
												More <i className="fa fa-angle-right" aria-hidden="true"></i></a>
										</div>
									</div>
								</div>
							</div>
							<div style={react_carousel_item} className="item react-carousel-item">
								<div className="iq-blog-box">
									<div className="iq-blog-image clearfix">
										<img src="https://crossml-website-images.s3.amazonaws.com/blog_container.jpeg" className="img-fluid center-block"
											alt="Containerization" />
									</div>
									<div className="iq-blog-detail">
										<div className="iq-blog-meta">
											<ul className="list-inline">
												<li className="list-inline-item">
													<a href="#" className="iq-user"><i className="fa fa-user"
															aria-hidden="true"></i> crossML Engineering</a>
												</li>
												<li className="list-inline-item pull-right">
													<i className="fa fa-clock-o " aria-hidden="true"></i>
													5 min read
												</li>
											</ul>
										</div>
										<div className="blog-title">
											<a href="#">
												<h6>Introduction to Containerization and Kubernetes</h6>
											</a>
										</div>
										<div className="blog-content">
											<p>Containers are a solution to the problem of how to reliably run the
												software when moving from one computing environment to another.</p>
										</div>
										<div className="blog-button"><a className="button" target="_blank"
												href="https://medium.com/crossml/introduction-to-containerization-and-kubernetes-294d1f9b4aa8">Read
												More <i className="fa fa-angle-right" aria-hidden="true"></i></a>
										</div>
									</div>
								</div>
							</div>
							<div style={react_carousel_item} className="item react-carousel-item">
								<div className="iq-blog-box">
									<div className="iq-blog-image clearfix">
										<img src="https://crossml-website-images.s3.amazonaws.com/blog_athena.jpeg" className="img-fluid center-block"
											alt="blogimage1" />
									</div>
									<div className="iq-blog-detail">
										<div className="iq-blog-meta">
											<ul className="list-inline">
												<li className="list-inline-item">
													<a href="#" className="iq-user"><i className="fa fa-user"
															aria-hidden="true"></i> crossml Engineering</a>
												</li>
												<li className="list-inline-item pull-right">
													<i className="fa fa-clock-o" aria-hidden="true"></i>
													3 min read
												</li>
											</ul>
										</div>
										<div className="blog-title">
											<a href="#">
												<h6>Query Large Data from S3 with AWS Athena</h6>
											</a>
										</div>
										<div className="blog-content">
											<p>Athena is an interactive query service that makes it easy to analyze data
												in Amazon S3 using standard SQL.</p>
										</div>
										<div className="blog-button"><a className="button" target="_blank" target="_blank"
												href="https://medium.com/crossml/query-large-data-with-athena-s3-ad58b8779806">Read
												More <i className="fa fa-angle-right" aria-hidden="true"></i></a>
										</div>
									</div>
								</div>
							</div>
							<div style={react_carousel_item} className="item react-carousel-item">
								<div className="iq-blog-box">
									<div className="iq-blog-image clearfix">
										<img src="https://crossml-website-images.s3.amazonaws.com/11.jpeg" className="img-fluid center-block" alt="blogimage1" />
									</div>
									<div className="iq-blog-detail">
										<div className="iq-blog-meta">
											<ul className="list-inline">
												<li className="list-inline-item">
													<a href="#" className="iq-user"><i className="fa fa-user"
															aria-hidden="true"></i> crossML engineering</a>
												</li>
												<li className="list-inline-item pull-right">
													<i className="fa fa-calendar-minus-o" aria-hidden="true"></i>
													5 min read
												</li>
											</ul>
										</div>
										<div className="blog-title">
											<a href="https://medium.com/crossml/geospatial-data-visualization-with-kepler-gl-bc9de40d6262"
												target="_blank">
												<h6 className="">Geospatial Data Visualization with Kepler.gl</h6>
											</a>
										</div>
										<div className="blog-content">
											<p>Kepler.gl is a high-performance visualization tool and it is purely a
												client-side app. It can be easily used by technical and not ...</p>
										</div>
										<div className="blog-button"><a className="button" target="_blank"
												href="https://medium.com/crossml/geospatial-data-visualization-with-kepler-gl-bc9de40d6262">Read
												More <i className="fa fa-angle-right" aria-hidden="true"></i></a>
										</div>
									</div>
								</div>
							</div>
							<div style={react_carousel_item} className="item react-carousel-item">
								<div className="iq-blog-box">
									<div className="iq-blog-image clearfix">
										<img src="https://crossml-website-images.s3.amazonaws.com/12.jpeg" className="img-fluid center-block" alt="blogimage1" />
									</div>
									<div className="iq-blog-detail">
										<div className="iq-blog-meta">
											<ul className="list-inline">
												<li className="list-inline-item">
													<a href="#" className="iq-user"><i className="fa fa-user"
															aria-hidden="true"></i> crossML engineering</a>
												</li>
												<li className="list-inline-item pull-right">
													<i className="fa fa-calendar-minus-o" aria-hidden="true"></i>
													4 min read
												</li>
											</ul>
										</div>
										<div className="blog-title">
											<a href="https://medium.com/crossml/extracting-data-from-pdf-documents-7792d5c1e403"
												target="_blank">
												<h6 className="">Extracting data from PDF documents</h6>
											</a>
										</div>
										<div className="blog-content">
											<p>PDF stands for Portable Document Format is a file format that comes with
												read-only permission. This format is used when ...
											</p>
										</div>
										<div className="blog-button"><a className="button" target="_blank"
												href="https://medium.com/crossml/extracting-data-from-pdf-documents-7792d5c1e403">Read
												More <i className="fa fa-angle-right" aria-hidden="true"></i></a>
										</div>
									</div>
								</div>
							</div>

							<div style={react_carousel_item} className="item react-carousel-item">
								<div className="iq-blog-box">
									<div className="iq-blog-image clearfix">
										<img src="https://crossml-website-images.s3.amazonaws.com/blog_serverless.jpeg" className="img-fluid center-block"
											alt="blogimage1" />
									</div>
									<div className="iq-blog-detail">
										<div className="iq-blog-meta">
											<ul className="list-inline">
												<li className="list-inline-item">
													<a href="#" className="iq-user"><i className="fa fa-user"
															aria-hidden="true"></i> crossml Engineering</a>
												</li>
												<li className="list-inline-item pull-right">
													<i className="fa fa-clock-o" aria-hidden="true"></i>
													 2 min read
												</li>
											</ul>
										</div>
										<div className="blog-title">
											<a href="https://medium.com/crossml/serverless-infrastructure-as-a-code-iac-using-aws-sam-448f932c126">
												<h6>Serverless Infrastructure as a Code(IaC) using AWS SAM</h6>
											</a>
										</div>
										<div className="blog-content">
											<p>AWS SAM (Serverless Application Model) is an open-source framework used
												to define Infrastructure to provision ...</p>
										</div>
										<div className="blog-button"><a className="button" target="_blank" target="_blank"
												href="https://medium.com/crossml/serverless-infrastructure-as-a-code-iac-using-aws-sam-448f932c126">Read
												More <i className="fa fa-angle-right" aria-hidden="true"></i></a>
										</div>
									</div>
								</div>
							</div>
							<div style={react_carousel_item} className="item react-carousel-item">
								<div className="iq-blog-box">
									<div className="iq-blog-image clearfix">
										<img src="https://crossml-website-images.s3.amazonaws.com/blog_gcp.jpeg" className="img-fluid center-block" alt="blogimage1" />
									</div>
									<div className="iq-blog-detail">
										<div className="iq-blog-meta">
											<ul className="list-inline">
												<li className="list-inline-item">
													<a href="#" className="iq-user"><i className="fa fa-user"
															aria-hidden="true"></i> crossML Engineering</a>
												</li>
												<li className="list-inline-item pull-right">
													<i className="fa fa-clock-o " aria-hidden="true"></i>
													 4 min read
												</li>
											</ul>
										</div>
										<div className="blog-title">
											<a href="https://medium.com/crossml/google-cloud-platform-gcp-for-machine-learning-ai-36165b1767b0">
												<h6>Google Cloud Platform (GCP) for Machine Learning & AI</h6>
											</a>
										</div>
										<div className="blog-content">
											<p>Ranging from healthcare to finance to automation there is no such
												industry where Artificial Intelligence (AI) ...</p>
										</div>
										<div className="blog-button"><a className="button" target="_blank"
												href="https://medium.com/crossml/google-cloud-platform-gcp-for-machine-learning-ai-36165b1767b0">Read
												More <i className="fa fa-angle-right" aria-hidden="true"></i></a>
										</div>
									</div>
								</div>
							</div>
							<div style={react_carousel_item} className="item react-carousel-item">
								<div className="iq-blog-box">
									<div className="iq-blog-image clearfix">
										<img src="https://crossml-website-images.s3.amazonaws.com/blog_s3event.png" className="img-fluid center-block"
											alt="blogimage1" />
									</div>
									<div className="iq-blog-detail">
										<div className="iq-blog-meta">
											<ul className="list-inline">
												<li className="list-inline-item">
													<a href="#" className="iq-user"><i className="fa fa-user"
															aria-hidden="true"></i> crossml Engineering</a>
												</li>
												<li className="list-inline-item pull-right">
													<i className="fa fa-clock-o" aria-hidden="true"></i>
													 5 min read
												</li>
											</ul>
										</div>
										<div className="blog-title">
											<a href="https://medium.com/crossml/aws-event-notifications-for-amazon-s3-71d0a39960b4">
												<h6>AWS: Event Notifications for Amazon S3</h6>
											</a>
										</div>
										<div className="blog-content">
											<p>The Amazon S3 notification feature enables you to receive notifications
												when certain events happen in your bucket ... </p>
										</div>
										<div className="blog-button"><a className="button" target="_blank" target="_blank"
												href="https://medium.com/crossml/aws-event-notifications-for-amazon-s3-71d0a39960b4">Read
												More <i className="fa fa-angle-right" aria-hidden="true"></i></a>
										</div>
									</div>
								</div>
							</div>
						</Carousel>
					</div>
				</div>
			</div>
		</section>

		<section className="gray-bg pt-5 pb-4">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-center">
						<img className="img-fluid client-img mr-4" src="https://crossml-website-images.s3.amazonaws.com/aws.png" width="120"
							alt="Amazon Web Services" />
						<img className="img-fluid client-img mr-4" src="https://crossml-website-images.s3.amazonaws.com/googlecloud.png" width="100"
							alt="Google Cloud Platform" />
						<img className="img-fluid client-img mr-4" src="https://crossml-website-images.s3.amazonaws.com/azure.png" width="90" alt="Azure" />
						<img className="img-fluid client-img mr-4" src="https://crossml-website-images.s3.amazonaws.com/python.png" width="60" alt="Python" />
						<img className="img-fluid client-img mr-4" src="https://crossml-website-images.s3.amazonaws.com/Apache_Spark_logo.png" width="100"
							alt="Spark" />
						<img className="img-fluid client-img mr-4" src="https://crossml-website-images.s3.amazonaws.com/hadoop.png" width="110" alt="Big Data" />
						<img className="img-fluid client-img" src="https://crossml-website-images.s3.amazonaws.com/automation-anywhere.png" width="140"
							alt="Automation Anywhere" />
					</div>
				</div>
			</div>
		</section>

	</div>
  );
}

export default Home;
