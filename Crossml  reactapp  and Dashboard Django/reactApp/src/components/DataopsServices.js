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

function DataopsServices() {
  return (
    <div>
    <MetaTags>
      <title>Multi Cloud and Cloud agnostic DataOps pipeline consultation</title>
			<meta name="keywords" content="Multi Cloud Datac pipelines,Big data processing, Cloud data processing pipeline." />
      </MetaTags>     
    <section className="iq-breadcrumb-five main-bg" style={{backgroundColor: '#090f27', padding: '60px 0 45px'}}>
      <div className="container">
        <img src="https://crossml-website-images.s3.amazonaws.com/dataops_banner.png" style={{maxWidth: '35%', height: 'auto', float: 'left'}} />
        <div className="row text-center">
          <div className="col-lg-12">
            <div className="mt-5 mb-0 text-right">
              <h2 style={{fontSize: '34px', color: '#ffe1df'}}>Strengthen critical business decision <br />making with high quality and <br /><span className="title_highlight">Actionable Data Insights</span></h2>
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
                <h3>DataOps seeks to provide the tools, processes, and structures for significant increase in data.<span className="title_highlight" /></h3>
                <p className="mt-3">Having an Agile approach to designing, implementing and maintaining a distributed data architecture DataOps aims to
                  create business value from big data. DataOps applies to the <b>entire data lifecycle</b> from data preparation to reporting, and recognizes the interconnected
                  nature of the <b>data analytics</b> team and information technology operations.</p>
              </div>
            </div>
            <div className="col-lg-6 pl-4 mt-4 pt-3">
              <img src="https://crossml-website-images.s3.amazonaws.com/AdobeStock_254296401.jpeg" className="img-fluid" alt="img" />
            </div>
            <div className="col-lg-12">
              <div className="blog-content">
                <blockquote className="blockquote mt-4 mb-4 pt-0">
                  <p className="mb-0 font-weight-bold text-left" style={{fontSize: '20px', lineHeight: '58px'}}>
                    According to <span className>IDC</span>, 
                    The volume of data is forecast to grow at a rate of <span className="highlight_small">32% CAGR</span> to 180 Zettabytes by the year 2025.
                  </p>
                </blockquote>
              </div>
              <p className="mt-5">DataOps is a data management framework that borrows from the <b>agile methodology, lean manufacturing and DevOps</b> to democratize data, build trust and improve team collaboration. It is very critical to get a right DataOps team. We at crossML have extensive experience with right tools and processes required for this setup. Our team help customers bring speed and agility to end-to-end data pipelines process.
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
                <img src="https://crossml-website-images.s3.amazonaws.com/pipeline.png" className="mb-3 cloud-service-icon" />
                <h4 className="my-3">Data Pipeline Orchestration </h4>
                <p className="text-left">DataOps needs a directed graph-based workflow that contains all the data access, integration, model and visualization steps in the data analytic production process. We help businesses identify and setup right data pipeline tools. We expertise in tools like Apache Airflow, Apache Oozie, DataKitchen, Reflow etc</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="iq-ecom-circle-style org-hover text-center wow" style={{visibility: 'visible'}}>
                <img src="https://crossml-website-images.s3.amazonaws.com/etl.png" className="mb-3 cloud-service-icon" />
                <h4 className="my-3">Data Sources <br />and ETL</h4>
                <p className=" text-left">We help businesses make right decisions for choosing data source and setting up ETL processes with Data lakes and Data warehouses. Poor implementation leads to no curation, including little to no active management throughout the data life cycle and little to no contextual metadata and Data Governance</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="iq-ecom-circle-style green-hover text-center wow" style={{visibility: 'visible'}}>
                <img src="https://crossml-website-images.s3.amazonaws.com/ml-ops.png" className="mb-3 cloud-service-icon" />
                <h4 className="my-3">DataSecOps and DataGovOps </h4>
                <p className=" text-left">Reduce the time to get quality results through reliable and efficient machine learning lifecycle management with any security concerns. We setup the right data governance tools and processes. Our expert teams ensure unified development, security, and seamless ML operations</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="iq-ecom-circle-style org-hover text-center wow" style={{visibility: 'visible'}}>
                <img src="https://crossml-website-images.s3.amazonaws.com/bigdata.png" className="mb-3 cloud-service-icon" />
                <h4 className="my-3">BI, Data Analytics and Big Data</h4>
                <p className=" text-left">Eliminate Gaint data silos and setup modern data architecture with right big data tools on cloud or on-prem servers for better handling and managment of data. With the right infrastructure in place Data Analytics and BI teams can identify parterns and generate critical business insights.</p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6 pr-2">
              <h3 className="mb-3">Why you should use DataOps?</h3>
              <ul className="iq-list wow" style={{fontSize: '16px'}}>
                <li><i className="fa fa-check" /><span>Manage and use increasing data volumes effectively while reducing the cycle time of data analytics.</span></li>
                <li><i className="fa fa-check" /><span>DataOps moves code and configuration continuously from development environments into production, leading to near real-time data insights.</span></li>
                <li><i className="fa fa-check" /><span>With reduced inefficiencies and improved quality, data science teams can focus on their area of expertise; creating new models and analytics that fuel business innovation and create a competitive advantage.</span></li>
                <li><i className="fa fa-check" /><span>Catch incorrectly processed data before it is passed downstream.</span></li>
              </ul>
            </div>
            <div className="col-lg-6 pl-3 mt-4">
              <img src="https://crossml-website-images.s3.amazonaws.com/dataops-info.png" className="mt-5" alt="Cloud Benefits" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12 mt-4">
              <h3 className="mb-3">Why choose crossML As your Data Engineering partner?</h3>
            </div>
            <div className="col-lg-6 pr-4">
              <ul className="iq-list wow" style={{fontSize: '16px'}}>
                <li><i className="fa fa-check" /><span>Estimate upfront costs, timelines, and required licensing for DataOps journey.</span></li>
                <li><i className="fa fa-check" /><span>Design a well-planned fast, secure, and seamless data pipeline that enable seamless data ingestion, processing and Visualization.</span></li>
                <li><i className="fa fa-check" /><span>Optimised architecture for both on-premise and cloud implementation of vaious DataOps tools and services.</span></li>
              </ul>
            </div>
            <div className="col-lg-6 pl-4">
              <ul className="iq-list wow" style={{fontSize: '16px'}}>
                <li><i className="fa fa-check" /><span>We manage 100% of your DataOps lifecycle to enable agility and responsiveness, with no compromise on data security &amp; governance.</span></li>
                <li><i className="fa fa-check" /><span>Certified and skilled skilled professionals that design, develop monitor and support your dataOps processes. </span></li>
                <li><i className="fa fa-check" /><span>Expertise on various Data lakes, data warehouses, big data, CI/CD, Cloud technologies.</span></li>
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
  </div>  );
}

export default DataopsServices;
