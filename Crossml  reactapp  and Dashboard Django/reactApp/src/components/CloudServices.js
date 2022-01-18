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

function CloudServices() {
  return (
    <div>
      <MetaTags>
      <title>Cloud Management, Migration and developement consulation for AWS, GCP and AZURE.</title>
			<meta name="keywords" content="cloud migration, cloud managgment experts,cost-optimized Cloud solutions,best cloud consultant,AWS, GCP,AZURE, IBM Cloud, Amazon web services, Google cloud." />
    </MetaTags>

    <section className="iq-breadcrumb-five main-bg" style={{padding: '80px 0 55px', backgroundColor: '#090f27'}}>
      <div className="container">
        <img src="https://crossml-website-images.s3.amazonaws.com/cloud_banner.png" style={{maxWidth: '14%', height: 'auto', float: 'left', marginTop: '5px'}} />
        <div className="row text-center ">
          <div className="col-lg-12 pl-5">
            <div className="mt-4 mb-0 text-right">
              <h2 style={{fontSize: '34px', color: '#ffe1df'}}> Accelerate the journey towards digital <br />
                transformation by partnering with us and <br />get the benefits of <span className="title_highlight">cloud computing</span></h2>
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
                <h3>Focus on what matters most and avoid undifferentiated work like procurement,
                  maintenance, and capacity planning. </h3>
                <p className="mt-3">Cloud computing offers modern businesses opportunities, flexible operating
                  models, and the agility to compete in a dynamic world. From <b>reducing IT
                    infrastructure costs</b> and <b>an in-house dedicated team</b>, there <br />are many
                  compelling reasons to commence on a cloud migration journey.</p>
              </div>
            </div>
            <div className="col-lg-6 pl-4 mt-4 pt-3">
              <img src="https://crossml-website-images.s3.amazonaws.com/cloud-services.png" className="img-fluid" alt="img" />
            </div>
            <div className="col-lg-12">
              <div className="blog-content">
                <blockquote className="blockquote mt-4 mb-4 pt-0">
                  <p className="mb-0 font-weight-bold text-left" style={{fontSize: '20px', lineHeight: '58px'}}>
                    According to Gartner, the worldwide public cloud service market will grow from
                    $182.4B in 2018 to <span className="highlight_small">$331.2B</span> in 2022, attaining a
                    compound annual growth rate (CAGR) of 12.6%.</p>
                </blockquote>
              </div>
              <p className="mt-5"><b>Fortunately</b>, the worries like data security, business continuity, and a
                smooth transition are outdated but the cloud migration journey and continuous maintenance
                can be difficult and expensive without a well-developed transition plan and cloud experts
                team. We at <b>crossML</b> assure a seamless transition of on-premises infrastructure and
                data to the cloud with minimal to zero downtime, provide on-going support for unintrupped
                business, and design cost optimized infrastructure without compromising with performance
                with our following services.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-0" id="iq-about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="iq-ecom-circle-style purple-hover text-center">
                <img src="https://crossml-website-images.s3.amazonaws.com/cloud-migration.jpeg" className="mb-3 cloud-service-icon" />
                <h4 className="my-3">Seamless Cloud <br />Migration</h4>
                <p className="text-left">We help clients to migrate traditional on-premises IT into the cloud
                  with minimal to zero disruption with proficient migration strategy. Once you decided to
                  move our cloud-certified team analyzes your current business operations and design the
                  best appropriate cloud solutions for your cloud journey and unlock new business
                  opportunities with cloud capabilities.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="iq-ecom-circle-style org-hover text-center wow" style={{visibility: 'visible'}}>
                <img src="https://crossml-website-images.s3.amazonaws.com/cloud-redesign.jpeg" className="mb-3 cloud-service-icon" />
                <h4 className="my-3">Cloud Management <br />and Redesign</h4>
                <p className=" text-left">We know that cloud management is as hard as engineering that's why our
                  team of expert cloud engineers ensures high cloud performance and 24/7 availability at
                  optimized cost. With continuous monitoring and enhancements, we make sure high
                  performance, cloud security, lowest downtimes, and protect against vulnerabilities &amp;
                  data loss.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="iq-ecom-circle-style green-hover text-center wow" style={{visibility: 'visible'}}>
                <img src="https://crossml-website-images.s3.amazonaws.com/cloud-security.jpeg" className="mb-3 cloud-service-icon" />
                <h4 className="my-3">Cloud Security Assessment</h4>
                <p className=" text-left">Cloud security and data confidentiality remains a major concern
                  amongst large enterprises while migrating to the cloud. Our established processes have
                  enabled organizations to achieve a high level of cloud security, data protection,
                  vulnerability assessments, secured CI/CD pipelines, and automation for continuous
                  compliance to get un-interrupted cloud services.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="iq-ecom-circle-style org-hover text-center wow" style={{visibility: 'visible'}}>
                <img src="https://crossml-website-images.s3.amazonaws.com/cost-optimization.png" className="mb-3 cloud-service-icon" />
                <h4 className="my-3">Cloud Cost <br />Optimization</h4>
                <p className=" text-left">The ease of cloud resources and ready-to-use managed tools can quickly
                  drive spend over budget. Our best practices and customized solutions helped many clients
                  to achieve cost-optimized solutions without compromising performance and security. Our
                  automated tools continuously monitor and analyze cloud resources to make sure
                  right-sizing resources on-demand.</p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-7 pr-2">
              <h3 className="mb-3">Why You Should Move to the Cloud?</h3>
              <ul className="iq-list wow" style={{fontSize: '16px'}}>
                <li><i className="fa fa-check" /><span>The pay-as-you-go pricing model cut wasteful spendings
                    of unused resources and scale resources on the fly to meet desired demand rather
                    than estimate in advance.</span></li>
                <li><i className="fa fa-check" /><span>Agility to compete in a dynamic world with on-demand
                    and ready-to-use services and organizations do not have to wait weeks or months for
                    new resources. </span></li>
                <li><i className="fa fa-check" /><span>Cloud provides a high level of security, data
                    integrity, resiliency, governance, and compliance through various different tools
                    and services.</span></li>
                <li><i className="fa fa-check" /><span>Increases mobility for users to access and collaborate
                    data and applications from anywhere anytime very easily.</span></li>
                <li><i className="fa fa-check" /><span>Improve efficiency to focus more on business goals and
                    innovations and no need to worry about space considerations, expensive computer
                    hardware, or software updates.</span></li>
              </ul>
            </div>
            <div className="col-lg-5 pl-5 mt-4">
              <img src="https://crossml-website-images.s3.amazonaws.com/cloud-benefit.png" className="mt-5" alt="Cloud Benefits" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12 mt-4">
              <h3 className="mb-3">Why Choose crossML As Your Cloud Partner?</h3>
            </div>
            <div className="col-lg-6 pr-4">
              <ul className="iq-list wow" style={{fontSize: '16px'}}>
                <li><i className="fa fa-check" /><span>Estimate upfront costs, timelines, and required
                    licensing for plain sailing migration.</span></li>
                <li><i className="fa fa-check" /><span>Design a well-planned architecture for fast, secure,
                    and seamless migration by following best practices.</span></li>
                <li><i className="fa fa-check" /><span>Optimize cloud resources for the right-size to leverage
                    the full potential of the cloud.</span></li>
                <li><i className="fa fa-check" /><span>Perform security and regression testing to validate
                    seamless transitions.</span></li>
              </ul>
            </div>
            <div className="col-lg-6 pl-4">
              <ul className="iq-list wow" style={{fontSize: '16px'}}>
                <li><i className="fa fa-check" /><span>We understand your business first and identify the
                    desired outcomes using cloud capabilities.</span></li>
                <li><i className="fa fa-check" /><span>Analyze your organization’s current on-premises
                    infrastructure and its strengths and weaknesses in the MRA (Migration Readiness
                    Assessment) phase. </span></li>
                <li><i className="fa fa-check" /><span>Perform risk, security, and compliance assessments and
                    prepare mitigation plans for all possible situations.</span></li>
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
                <h3>More from crossML in Cloud</h3>
              </div>
              <Carousel responsive={responsive} infinite={true} autoPlay={false}  >
                <div className="item react-carousel-item ">
                  <div className="iq-blog-box">
                    <div className="iq-blog-image clearfix">
                      <img src="https://crossml-website-images.s3.amazonaws.com/blog_serverless.jpeg" className="img-fluid center-block" alt="blogimage1" />
                    </div>
                    <div className="iq-blog-detail">
                      <div className="iq-blog-meta">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="iq-user"><i className="fa fa-user" aria-hidden="true" /> crossml Engineering</a>
                          </li>
                          <li className="list-inline-item pull-right">
                            <i className="fa fa-clock-o" aria-hidden="true" />
                             2 min read
                          </li>
                        </ul>
                      </div>
                      <div className="blog-title">
                        <a href="#">
                          <h6>Serverless Infrastructure as a Code(IaC) using AWS SAM</h6>
                        </a>
                      </div>
                      <div className="blog-content">
                        <p>AWS SAM (Serverless Application Model) is an open-source framework used
                          to define Infrastructure to provision ...</p>
                      </div>
                      <div className="blog-button"><a className="button" target="_blank" href="https://medium.com/crossml/serverless-infrastructure-as-a-code-iac-using-aws-sam-448f932c126">Read
                          More <i className="fa fa-angle-right" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item react-carousel-item ">
                  <div className="iq-blog-box">
                    <div className="iq-blog-image clearfix">
                      <img src="https://crossml-website-images.s3.amazonaws.com/blog_gcp.jpeg" className="img-fluid center-block" alt="blogimage1" />
                    </div>
                    <div className="iq-blog-detail">
                      <div className="iq-blog-meta">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="iq-user"><i className="fa fa-user" aria-hidden="true" /> crossML Engineering</a>
                          </li>
                          <li className="list-inline-item pull-right">
                            <i className="fa fa-clock-o " aria-hidden="true" />
                            4 min read
                          </li>
                        </ul>
                      </div>
                      <div className="blog-title">
                        <a href="#">
                          <h6>Google Cloud Platform (GCP) for Machine Learning &amp; AI</h6>
                        </a>
                      </div>
                      <div className="blog-content">
                        <p>Ranging from healthcare to finance to automation there is no such
                          industry where Artificial Intelligence (AI) ...</p>
                      </div>
                      <div className="blog-button"><a className="button" href="https://medium.com/crossml/google-cloud-platform-gcp-for-machine-learning-ai-36165b1767b0">Read
                          More <i className="fa fa-angle-right" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item react-carousel-item ">
                  <div className="iq-blog-box">
                    <div className="iq-blog-image clearfix">
                      <img src="https://crossml-website-images.s3.amazonaws.com/blog_s3event.png" className="img-fluid center-block" alt="blogimage1" />
                    </div>
                    <div className="iq-blog-detail">
                      <div className="iq-blog-meta">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="iq-user"><i className="fa fa-user" aria-hidden="true" /> crossml Engineering</a>
                          </li>
                          <li className="list-inline-item pull-right">
                            <i className="fa fa-clock-o" aria-hidden="true" />
                             5 min read
                          </li>
                        </ul>
                      </div>
                      <div className="blog-title">
                        <a href="#">
                          <h6>AWS: Event Notifications for Amazon S3</h6>
                        </a>
                      </div>
                      <div className="blog-content">
                        <p>The Amazon S3 notification feature enables you to receive notifications
                          when certain events happen in your bucket ... </p>
                      </div>
                      <div className="blog-button"><a className="button" target="_blank" href="https://medium.com/crossml/aws-event-notifications-for-amazon-s3-71d0a39960b4">Read
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

export default CloudServices;
