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

function CaseStudies() {
  return (
    <div>
        <MetaTags>
      <title>AI, Cloud, DataOps, web & Mobile Application and DevOps Consultation</title>
			<meta name="keywords" content="AI, Artificial Intelligence, IOT, Cloud, DataOps, web & Mobile Application, cloud migration, cloud mgmt experts, cost-optimized solutions, Big data pipelines, Hadoop, spark consulatation." />
      </MetaTags>   
    <section className="iq-breadcrumb-five main-bg" style={{padding: '60px 0 50px', backgroundColor: '#090f27'}}>
      <div className="container">
        <img src="https://crossml-website-images.s3.amazonaws.com/idea.jpg" style={{maxWidth: '40%', height: 'auto', float: 'left'}} />
        <div className="row text-center mt-3">
          <div className="col-lg-12 pl-5">
            <div className="mt-5 mb-0 text-right">
              <h2 style={{fontSize: '40px', color: '#ffe1df'}}>Business Case Studies<br />  <span className="title_highlight">by crossML </span><br /> </h2>
            </div>
          </div>
        </div>
      </div>
    </section>	{/* Main Content */}
    {/* Main Content */}
    <div className="main-content overflow-hidden case-studies">
      <section className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="iq-masonry-block">
                <div className=" iq-masonry iq-columns-2">
                  <div className="iq-masonry-item">
                    <div className="iq-portfolio">
                      <a className="portfolio-img" href="ocr-hyperautomation">
                        <img className="img-fluid" src="https://crossml-website-images.s3.amazonaws.com/rpa-automation.png" alt="img-fluid" />
                        <div className="portfolio-link">
                          <div className="icon">
                            <i className="fa fa-link" aria-hidden="true" />
                          </div>
                        </div>
                      </a>
                      <div className="iq-portfolio-content  text-left">
                        <div className="details-box clearfix">
                          <div className="consult-details">
                            <a href="ocr-hyperautomation">
                              <h4 className="text-hover">Boost Your Business Efficiency using
                                Hyperautomation, RPA, and OCR</h4>
                            </a>
                            <p className="my-2">We have helped customers across
                              diversified industries such as retail, logistics, banking, and
                              healthcare to automate repetitive and plain sailing
                              tasks with minimal to zero human involvement in a impactful
                              way using Hyperautomation, RPA, and OCR.</p>
                            <ul className="iq-list wow">
                              <li><i className="fa fa-check" /><span>Logistics Automation solution reads all relevant information from shipping slip, generates shipment summary, and updates ERP inventory correctly.</span></li>
                              <li><i className="fa fa-check" /><span>Invoice Automation tool automatically extracts useful information such as invoice details, address, line items, and totals from digital PDF invoices or images.</span></li>
                            </ul>
                            <p className="mb-0 text-right"><a href="ocr-hyperautomation"><b>Contine reading</b></a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-masonry-item">
                    <div className="iq-portfolio">
                      <a className="portfolio-img" href="mobility-data">
                        <img className="img-fluid" src="https://crossml-website-images.s3.amazonaws.com/iot.jpeg" alt="img" />
                        <div className="portfolio-link">
                          <div className="icon">
                            <i className="fa fa-link" aria-hidden="true" />
                          </div>
                        </div>
                      </a>
                      <div className="iq-portfolio-content  text-left">
                        <div className="details-box clearfix">
                          <div className="consult-details">
                            <a href="mobility-data">
                              <h4 className="text-hover">Mobility Data Pipelines for IoT
                                Devices using AWS Serverless
                                Architecture</h4>
                            </a>
                            <p className="my-2">Being a technical partner, we have provided our customers with fully automated solutions, serverless pipelines and technical tools to store, process, and analyze unprecedented amounts of mobility data received from different IoT sources.</p>
                            <ul className="iq-list wow">
                              <li><i className="fa fa-check" /><span>Designed managed automated Data Pipelines to collect unprecedented amounts of streaming data from IoT devices without losing any data packet.</span></li>
                              <li><i className="fa fa-check" /><span>Our Machine Learning Pipelines automatically connect with data lakes to train models and generate useful insights to make the right future decisions.</span></li>
                            </ul>
                            <p className="mb-0 text-right"><a href="mobility-data"><b>Contine reading</b></a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-masonry-item ">
                    <div className="iq-portfolio">
                      <a className="portfolio-img" href="predictive-analytics">
                        <img className="img-fluid" src="https://crossml-website-images.s3.amazonaws.com/predictive-analytics.png" alt="img" />
                        <div className="portfolio-link">
                          <div className="icon">
                            <i className="fa fa-link" aria-hidden="true" />
                          </div>
                        </div>
                      </a>
                      <div className="iq-portfolio-content  text-left">
                        <div className="details-box clearfix">
                          <div className="consult-details">
                            <a href="predictive-analytics">
                              <h4 className="text-hover">Helps Making Better Business Decisions with Predictive
                                Analytics</h4>
                            </a>
                            <p className="my-2">Predictive analytics uses customer’s historical data and apply statistical techniques &amp; machine learning modeling to transform data into meaningful insights, identify trends, and customers behavior.</p>
                            <ul className="iq-list wow">
                              <li><i className="fa fa-check" /><span>Helping financial institutions to ensure their customer’s superlative experience and protect them from fraudulent transactions and false insurance claims.</span></li>
                              <li><i className="fa fa-check" /><span>Increased efficiency for manufacturing industries by streamline their supply chain process, reduced material wastage, and forecast right inventory demands.</span></li>
                            </ul>
                            <p className="mb-0 text-right"><a href="predictive-analytics"><b>Contine reading</b></a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gray-bg pt-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <img className="img-fluid client-img mr-4" src="https://crossml-website-images.s3.amazonaws.com/aws.png" width={150} alt="Amazon Web Services" />
              <img className="img-fluid client-img mr-4" src="https://crossml-website-images.s3.amazonaws.com/googlecloud.png" width={120} alt="Google Cloud Platform" />
              <img className="img-fluid client-img mr-4" src="https://crossml-website-images.s3.amazonaws.com/azure.png" width={110} alt="Azure" />
              <img className="img-fluid client-img mr-4" src="https://crossml-website-images.s3.amazonaws.com/python.png" width={80} alt="Python" />
              <img className="img-fluid client-img mr-4" src="https://crossml-website-images.s3.amazonaws.com/Apache_Spark_logo.png" width={120} alt="Spark" />
              <img className="img-fluid client-img mr-4" src="https://crossml-website-images.s3.amazonaws.com/hadoop.png" width={130} alt="Big Data" />
              <img className="img-fluid client-img" src="https://crossml-website-images.s3.amazonaws.com/automation-anywhere.png" width={160} alt="Automation Anywhere" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
    );
}

export default CaseStudies;
