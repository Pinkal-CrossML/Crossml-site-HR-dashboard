import React  from 'react';
import { Link  } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import MetaTags from 'react-meta-tags';

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

function WebMobileServices() {
  return (
    <div>
    <MetaTags>
      <title>Web, Mobile and Hybrid Application Consulation</title>
			<meta name="keywords" content="Web design, web development, mobile application development, Hybrid apps." />
    </MetaTags>

    <section className="iq-breadcrumb-five main-bg" style={{backgroundColor: '#090f27', padding: '100px 0 40px'}}>
      <div className="container">
        <img src="https://crossml-website-images.s3.amazonaws.com/web-development.png" alt="Application Development" style={{maxWidth: '30%', height: 'auto', float: 'left', marginTop: '15px'}} />
        <div className="row text-center">
          <div className="col-lg-12">
            <div className="mt-4 mb-0 text-right">
              <h2 style={{fontSize: '34px', color: '#ffe1df'}}><span className="title_highlight">Engaging, Performant and Scalable </span><br /> Web, Cross-Platform and <br />Native Mobile Apps</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="main-content">
      <section className="pb-4">
        <div className="container service_detail">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-left">
                <h3>Streamline your business processes so that you can get more done in  less time and with greater accuracy.</h3>
                <p className="mt-3">An emerging strategy for application software companies is to provide web access to software previously distributed as local applications.
                  Web and Mobile applications have become an increasingly important tool for business;
                  with their most common uses being communication with customers, collaboration with employees,
                  secure storage of data and providing data and information to management.</p>
              </div>
            </div>
            <div className="col-lg-5 pl-4 mt-4 pt-3">
              <img src="https://crossml-website-images.s3.amazonaws.com/mobile-web.png" className="img-fluid" alt="img" />
            </div>
            <div className="col-lg-12">
              <div className="blog-content">
                <blockquote className="blockquote mt-4 mb-4 pt-0">
                  <p className="mb-0 font-weight-bold text-left" style={{fontSize: '20px', lineHeight: '58px'}}>
                    The global mobile apps and web analytics market size is expected to grow from USD 6.9 billion 
                    in 2020 to <span className="highlight_small"><br />$15.7 B</span> by 2025, at a CAGR of 17.9% during 
                    the forecast period.
                  </p>
                </blockquote>
              </div>
              <p className="mt-5">We assist businesses in various domains to effectively reach their target audience and manage complex operations. Our solid experience in designing and delivering solutions for Healthcare, Retail, Transportation etc help businesses in best-in-className solution that can bring commercial success to a client’s company.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-0" id="iq-about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="iq-ecom-circle-style purple-hover text-center">
                <img src="https://crossml-website-images.s3.amazonaws.com/apps-web.png" alt="Web Applications" className="mb-3 cloud-service-icon" />
                <h4 className="my-3">Web Applications </h4>
                <p className="text-left">A web application, often referred to as a web app, is an interactive computer program built with web technologies (HTML,
                  CSS, JS), which stores (Database, Files) and manipulates data (CRUD), and is used by a team or single user to perform
                  tasks over the internet.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="iq-ecom-circle-style org-hover text-center wow" style={{visibility: 'visible'}}>
                <img src="https://crossml-website-images.s3.amazonaws.com/apps-pwa.png" className="mb-3 cloud-service-icon" alt="PWA apps" />
                <h4 className="my-3">Progressive Web Apps</h4>
                <p className="text-left">PWAs are just web applications. Using progressive enhancement, new capabilities are enabled in modern browsers. Using service workers and a web app manifest, web app becomes reliable and installable. If the new capabilities aren't available, users still get the core experience.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="iq-ecom-circle-style green-hover text-center wow" style={{visibility: 'visible'}}>
                <img src="https://crossml-website-images.s3.amazonaws.com/apps-mobile.png" className="mb-3 cloud-service-icon" alt="Mobile Apps" />
                <h4 className="my-3">Native Applications </h4>
                <p className=" text-left">Native apps run directly on a mobile device without a web browser; these are typically written in Kotlin/Java (for Android) or Objective-C or Swift (for iOS). Because of their singular focus, native apps have the advantage of being faster and more reliable in terms of
                  performance.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="iq-ecom-circle-style org-hover text-center wow" style={{visibility: 'visible'}}>
                <img src="https://crossml-website-images.s3.amazonaws.com/apps-hybrid.png" className="mb-3 cloud-service-icon" alt="Hybrid Apps" />
                <h4 className="my-3">Hybrid Applications</h4>
                <p className=" text-left">Hybrid apps embed a web site inside a native app, possibly using a hybrid framework. This allows development using web 
                  technologies while also retaining certain advantages of native apps. Hybrid app frameworks include Apache Cordova, Electron, Haxe, React Native and Xamarin.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12 mt-4">
              <h3 className="mb-3">Why choose crossML As your application development partner?</h3>
            </div>
            <div className="col-lg-6 pr-4">
              <ul className="iq-list wow" style={{fontSize: '16px'}}>
                <li><i className="fa fa-check" /><span>With over 15+ years of experience of application developement,
                    we understand the unique business challenges of every client.</span></li>
                <li><i className="fa fa-check" /><span>We understand the requirements of custom application 
                    development and the right way to develop the application from planning to deployment.</span></li>
                <li><i className="fa fa-check" /><span>We expertise in scalable web applications that can handle growth and allow for uninterrupted, high-quality user experiences.</span></li>
              </ul>
            </div>
            <div className="col-lg-6 pr-4">
              <ul className="iq-list wow" style={{fontSize: '16px'}}>
                <li><i className="fa fa-check" /><span>Help manage diverse and complex applications at lower cost and enable rapid response to requests for new functionality and requirements.</span></li>
                <li><i className="fa fa-check" /><span>Robust planning of your app, great team coordination, makes us an app development company that delivers the project on time.</span></li>
                <li><i className="fa fa-check" /><span>Experienced teams in Python, React Native, Swift, Kotlin, MongoDB, Angular, React, and Node.js to deliver web, mobile and hybrid applications.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-box">
                <h3>More from crossML in Application Development</h3>
              </div>
              <Carousel responsive={responsive} infinite={true} autoPlay={false}  >
                <div className="item react-carousel-item ">
                  <div className="iq-blog-box">
                    <div className="iq-blog-image clearfix">
                      <img src="https://crossml-website-images.s3.amazonaws.com/blog_server.jpeg" className="img-fluid center-block" alt="blogimage1" />
                    </div>
                    <div className="iq-blog-detail">
                      <div className="iq-blog-meta">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="iq-user"><i className="fa fa-user" aria-hidden="true" /> crossml Engineering</a>
                          </li>
                          <li className="list-inline-item pull-right">
                            <i className="fa fa-clock-o" aria-hidden="true" />
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
                      <div className="blog-button"><a className="button" target="_blank" target="_blank" href="https://medium.com/crossml/serverless-data-extraction-with-aws-b2dd2b191872">Read
                          More <i className="fa fa-angle-right" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item react-carousel-item ">
                  <div className="iq-blog-box">
                    <div className="iq-blog-image clearfix">
                      <img src="https://crossml-website-images.s3.amazonaws.com/blog_container.jpeg" className="img-fluid center-block" alt="blogimage1" />
                    </div>
                    <div className="iq-blog-detail">
                      <div className="iq-blog-meta">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="iq-user"><i className="fa fa-user" aria-hidden="true" /> crossML Engineering</a>
                          </li>
                          <li className="list-inline-item pull-right">
                            <i className="fa fa-clock-o " aria-hidden="true" />
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
                      <div className="blog-button"><a className="button" target="_blank" href="https://medium.com/crossml/introduction-to-containerization-and-kubernetes-294d1f9b4aa8">Read
                          More <i className="fa fa-angle-right" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item react-carousel-item ">
                  <div className="iq-blog-box">
                    <div className="iq-blog-image clearfix">
                      <img src="https://crossml-website-images.s3.amazonaws.com/blog_athena.jpeg" className="img-fluid center-block" alt="blogimage1" />
                    </div>
                    <div className="iq-blog-detail">
                      <div className="iq-blog-meta">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="iq-user"><i className="fa fa-user" aria-hidden="true" /> crossml Engineering</a>
                          </li>
                          <li className="list-inline-item pull-right">
                            <i className="fa fa-clock-o" aria-hidden="true" />
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
                      <div className="blog-button"><a className="button" target="_blank" target="_blank" href="https://medium.com/crossml/query-large-data-with-athena-s3-ad58b8779806">Read
                          More <i className="fa fa-angle-right" aria-hidden="true" /></a>
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
              <img className="img-fluid client-img mr-4" src="https://crossml-website-images.s3.amazonaws.com/aws.png" width={120} alt="Amazon Web Services" />
              <img className="img-fluid client-img mr-4" src="https://crossml-website-images.s3.amazonaws.com/googlecloud.png" width={100} alt="Google Cloud Platform" />
              <img className="img-fluid client-img mr-4" src="https://crossml-website-images.s3.amazonaws.com/azure.png" width={90} alt="Azure" />
              <img className="img-fluid client-img mr-4" src="https://crossml-website-images.s3.amazonaws.com/python.png" width={60} alt="Python" />
              <img className="img-fluid client-img mr-4" src="https://crossml-website-images.s3.amazonaws.com/Apache_Spark_logo.png" width={100} alt="Spark" />
              <img className="img-fluid client-img mr-4" src="https://crossml-website-images.s3.amazonaws.com/hadoop.png" width={110} alt="Big Data" />
              <img className="img-fluid client-img" src="https://crossml-website-images.s3.amazonaws.com/automation-anywhere.png" width={140} alt="Automation Anywhere" />
            </div>
          </div>
        </div>
      </section>
    </div>  
  </div>

    );
}

export default WebMobileServices;
