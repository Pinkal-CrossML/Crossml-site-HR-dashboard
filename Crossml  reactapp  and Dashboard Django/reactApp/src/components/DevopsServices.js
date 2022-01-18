import React from 'react'
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

function DevopsServices() {
  return (
    <div>
    <MetaTags>
      <title>Consultation for on-prem and cloud DevOps pipeline.</title>
			<meta name="keywords" content="DevOps, CI/CD, Continuous deployment and delivery ." />
      </MetaTags>     

        <section className="iq-breadcrumb-five main-bg" style={{backgroundColor: '#090f27', padding: '80px 0 50px'}}>
          <div className="container">
            <img src="https://crossml-website-images.s3.amazonaws.com/devops_banner.png" style={{maxWidth: '40%', height: 'auto', float: 'left'}} />
            <div className="row text-center">
              <div className="col-lg-12">
                <div className="mt-5 mb-0 text-right">
                  <h2 style={{fontSize: '30px', color: '#ffe1df'}}>Shorten the systems development life cycle <br />and provide continuous delivery with <br /><span className="title_highlight">High Software Quality</span></h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Main Content */}
        <div className="main-content">
          <section className="pb-4">
            <div className="container service_detail">
              <div className="row">
                <div className="col-lg-6">
                  <div className="text-left">
                    <h3>DevOps is a set of practices that combines software development (Dev) and IT operations (Ops).</h3>
                    <p className="mt-3">DevOps is complementary with Agile software development; several DevOps aspects came from Agile methodology. DevOps is the combination of cultural philosophies, practices, and tools that increases an organization’s ability to deliver applications and services at a high pace.</p>
                  </div>
                </div>
                <div className="col-lg-6 pl-4 mt-4 pt-3">
                  <img src="https://crossml-website-images.s3.amazonaws.com/AdobeStock_254296401.jpeg" className="img-fluid" alt="img" />
                </div>
                <div className="col-lg-12">
                  <div className="blog-content">
                    <blockquote className="blockquote mt-4 mb-4 pt-0">
                      <p className="mb-0 font-weight-bold text-left" style={{fontSize: '20px', lineHeight: '58px'}}>
                        The DevOps market size is expected to grow from USD 2.90 Billion in 2017 to <span className="highlight_small">$10.31 B</span> by 2023, at a Compound Annual Growth Rate (CAGR) of 24.7% during the forecast period
                      </p>
                    </blockquote>
                  </div>
                  <p className="mt-5">As DevOps is intended to be a cross-functional mode of working, those who practice the methodology use different sets of tools—referred to as <b>toolchains</b> rather than a single one. These toolchains are expected to fit into one or more of the following categories, reflective of key aspects of the development and delivery process.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="py-0" id="iq-about">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <div className="iq-ecom-circle-style purple-hover text-center">
                    <img src="https://crossml-website-images.s3.amazonaws.com/devops_server.png" className="mb-3 cloud-service-icon" />
                    <h4 className="my-3">Server configuration management </h4>
                    <p className="text-left">Server configuration management is automated process to manage all the configurations of dev, stage or production environments. Tools such as Puppet , chef, ansible etc automates configuration management, cloud provisioning, and application deployment.</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="iq-ecom-circle-style org-hover text-center wow" style={{visibility: 'visible'}}>
                    <img src="https://crossml-website-images.s3.amazonaws.com/devops_ci.png" className="mb-3 cloud-service-icon" />
                    <h4 className="my-3">Continuous Integration, delivery &amp; deployment</h4>
                    <p className=" text-left">CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of app development. The main concepts attributed to CI/CD are continuous integration, continuous delivery, and continuous deployment. </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="iq-ecom-circle-style green-hover text-center wow" style={{visibility: 'visible'}}>
                    <img src="https://crossml-website-images.s3.amazonaws.com/devops_container.png" className="mb-3 cloud-service-icon" />
                    <h4 className="my-3">Containerization and orchestration </h4>
                    <p className=" text-left">Containerization packages an application along with its required libraries, frameworks, and configuration files. Docker helps in building self-contained units and packaging code into them supported by orchestration platforms such as OpenShift and Kubernetes.</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="iq-ecom-circle-style org-hover text-center wow" style={{visibility: 'visible'}}>
                    <img src="https://crossml-website-images.s3.amazonaws.com/devops_moniter.png" className="mb-3 cloud-service-icon" />
                    <h4 className="my-3">Active Monitor and alerting</h4>
                    <p className=" text-left">Monitoring and alerting in DevOps automated process by which DevOps personnel can observe and detect compliance issues and security threats during each phase of the DevOps pipeline. We can leverage various tools like Nagios, Datadog, new relic or Prometheus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-6 pr-2">
                  <h3 className="mb-3">Why you should use DevOps?</h3>
                  <ul className="iq-list wow" style={{fontSize: '16px'}}>
                    <li><i className="fa fa-check" /><span>DevOps offers the scope for quick and continuous feedback so that any glitches are fixed in time and the releases are done faster.</span></li>
                    <li><i className="fa fa-check" /><span>DevOps paves the way to improve business agility by providing the much–need atmosphere of mutual collaboration, communication, and integration across globally–distributed teams in an IT organization.</span></li>
                    <li><i className="fa fa-check" /><span>DevOps enables this through automation. Automated CI/CD pipeline allows the Dev and Ops teams to develop and integrate code almost instantaneously.</span></li>
                    <li><i className="fa fa-check" /><span>DevOps streamlines processes, propagates efficient releases, and ensures quality builds. </span></li>
                  </ul>
                </div>
                <div className="col-lg-6 pl-3 mt-5 pt-5">
                  <img src="https://crossml-website-images.s3.amazonaws.com/devops_benfits.png" className="mt-5" alt="Cloud Benefits" />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-12 mt-4">
                  <h3 className="mb-3">Why choose crossML As your DevOps partner?</h3>
                </div>
                <div className="col-lg-6 pr-4">
                  <ul className="iq-list wow" style={{fontSize: '16px'}}>
                    <li><i className="fa fa-check" /><span>We offer Provide technical, consultative, and delivery services to customers for DevOps initiatives.</span></li>
                    <li><i className="fa fa-check" /><span>We expertise in setting up automated Devops pipelines using open source as well as cloud based services.</span></li>
                    <li><i className="fa fa-check" /><span>Certified Docker and K8 resources for setting up secure and reliable DevOps services.</span></li>
                  </ul>
                </div>
                <div className="col-lg-6 pl-4">
                  <ul className="iq-list wow" style={{fontSize: '16px'}}>
                    <li><i className="fa fa-check" /><span>We assist businesses kick-start their DevOps journey and help in achieving DevOps maturity.</span></li>
                    <li><i className="fa fa-check" /><span>Certified and skilled professionals that design, develop monitor and support your DevOps processes. </span></li>
                    <li><i className="fa fa-check" /><span>Expertise on various DevOps tools suchs as Jenkins, Git, Chef, Ansible, Puppet, Splunk, Prometheus,  terraform, Docker, Kubernetes etc on On-onpremise and cloud infrastructure.</span></li>
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
                    <h3>More from crossML in DataOps</h3>
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
                            <p>Here is a small part of our Hybrid document parsing solution that uses AI to preprocess, extract and parse data.</p>
                          </div>
                          <div className="blog-button"><a className="button" target="_blank" href="https://medium.com/crossml/serverless-data-extraction-with-aws-b2dd2b191872">Read More <i className="fa fa-angle-right" aria-hidden="true" /></a>
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
                            <p>Containers are a solution to the problem of how to reliably run the software when moving from one computing environment to another.</p>
                          </div>
                          <div className="blog-button"><a className="button" href="https://medium.com/crossml/introduction-to-containerization-and-kubernetes-294d1f9b4aa8">Read More <i className="fa fa-angle-right" aria-hidden="true" /></a>
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
                            <p>Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL.</p>
                          </div>
                          <div className="blog-button"><a className="button" target="_blank" href="https://medium.com/crossml/query-large-data-with-athena-s3-ad58b8779806">Read More <i className="fa fa-angle-right" aria-hidden="true" /></a>
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

export default DevopsServices;
