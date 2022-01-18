import React from 'react'
import { Link  } from "react-router-dom";
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

function OurBlog() {
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
              <h2 style={{fontSize: '40px', color: '#ffe1df'}}>Engineering Blogs<br />  <span className="title_highlight"> by crossML </span><br /> </h2>
            </div>
          </div>
        </div>
      </div>
    </section>	{/* Main Content */}
    {/* Main Content */}
    <div className="main-content overflow-hidden">
      <section className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="iq-masonry-block">
                <div className=" iq-masonry iq-columns-3">
                  <div className="iq-masonry-item">
                    <div className="iq-portfolio">
                      <a className="portfolio-img" target="_blank" href="https://medium.com/crossml/aws-event-notifications-for-amazon-s3-71d0a39960b4">
                        <img src="https://crossml-website-images.s3.amazonaws.com/blog_s3event.png" className="img-fluid center-block" alt="blogimage1" />
                        <div className="portfolio-link">
                          <div className="icon">
                            <i className="fa fa-link" aria-hidden="true" />
                          </div>
                        </div>
                      </a>
                      <div className="iq-portfolio-content  text-left">
                        <div className="details-box clearfix">
                          <div className="consult-details">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <i className="fa fa-user" aria-hidden="true" /> crossml Engineering
                              </li>
                              <li className="list-inline-item pull-right">
                                <i className="fa fa-clock-o" aria-hidden="true" />
                                 5 min read
                              </li>
                            </ul>
                            <a target="_blank" href="https://medium.com/crossml/aws-event-notifications-for-amazon-s3-71d0a39960b4">
                              <h5 className="text-hover">AWS: Event Notifications for Amazon S3</h5>
                            </a>
                            <p className="my-2">The Amazon S3 notification feature enables you to receive notifications when certain events happen in your bucket ... </p>
                            <p className="mb-0"><a target="_blank" href="https://medium.com/crossml/aws-event-notifications-for-amazon-s3-71d0a39960b4">Contine reading</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-masonry-item ">
                    <div className="iq-portfolio">
                      <a className="portfolio-img" target="_blank" href="https://medium.com/crossml/google-cloud-platform-gcp-for-machine-learning-ai-36165b1767b0">
                        <img src="https://crossml-website-images.s3.amazonaws.com/blog_gcp.jpeg" className="img-fluid center-block" alt="blogimage1" />
                        <div className="portfolio-link">
                          <div className="icon">
                            <i className="fa fa-link" aria-hidden="true" />
                          </div>
                        </div>
                      </a>
                      <div className="iq-portfolio-content  text-left">
                        <div className="details-box clearfix">
                          <div className="consult-details">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <i className="fa fa-user" aria-hidden="true" /> crossml Engineering
                              </li>
                              <li className="list-inline-item pull-right">
                                <i className="fa fa-clock-o" aria-hidden="true" />
                                 8 min read
                              </li>
                            </ul>
                            <a target="_blank" href="https://medium.com/crossml/google-cloud-platform-gcp-for-machine-learning-ai-36165b1767b0">
                              <h5 className="text-hover">Google Cloud Platform (GCP) for Machine Learning &amp; AI</h5>
                            </a>
                            <p className="my-2">Ranging from healthcare to finance to automation there is no such industry where Artificial Intelligence (AI) ...</p>
                            <p className="mb-0"><a target="_blank" href="https://medium.com/crossml/google-cloud-platform-gcp-for-machine-learning-ai-36165b1767b0">Contine reading</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-masonry-item ">
                    <div className="iq-portfolio">
                      <a className="portfolio-img" target="_blank" href="https://medium.com/crossml/serverless-infrastructure-as-a-code-iac-using-aws-sam-448f932c126">
                        <img src="https://crossml-website-images.s3.amazonaws.com/blog_serverless.jpeg" className="img-fluid center-block" alt="blogimage1" />
                        <div className="portfolio-link">
                          <div className="icon">
                            <i className="fa fa-link" aria-hidden="true" />
                          </div>
                        </div>
                      </a>
                      <div className="iq-portfolio-content  text-left">
                        <div className="details-box clearfix">
                          <div className="consult-details">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <i className="fa fa-user" aria-hidden="true" /> crossml Engineering
                              </li>
                              <li className="list-inline-item pull-right">
                                <i className="fa fa-clock-o" aria-hidden="true" />
                                 5 min read
                              </li>
                            </ul>
                            <a target="_blank" href="https://medium.com/crossml/serverless-infrastructure-as-a-code-iac-using-aws-sam-448f932c126">
                              <h5 className="text-hover">Serverless Infrastructure as a Code(IaC) using AWS SAM</h5>
                            </a>
                            <p className="my-2">AWS SAM (Serverless Application Model) is an open-source framework used to define Infrastructure to provision ...</p>
                            <p className="mb-0"><a target="_blank" href="https://medium.com/crossml/serverless-infrastructure-as-a-code-iac-using-aws-sam-448f932c126">Contine reading</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-masonry-item">
                    <div className="iq-portfolio">
                      <a className="portfolio-img" href="https://medium.com/crossml/extracting-data-from-pdf-documents-7792d5c1e403" target="_blank">
                        <img src="https://crossml-website-images.s3.amazonaws.com/12.jpeg" className="img-fluid center-block" alt="blogimage1" />
                        <div className="portfolio-link">
                          <div className="icon">
                            <i className="fa fa-link" aria-hidden="true" />
                          </div>
                        </div>
                      </a>
                      <div className="iq-portfolio-content  text-left">
                        <div className="details-box clearfix">
                          <div className="consult-details">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <i className="fa fa-user" aria-hidden="true" /> crossml Engineering
                              </li>
                              <li className="list-inline-item pull-right">
                                <i className="fa fa-clock-o" aria-hidden="true" />
                                 5 min read
                              </li>
                            </ul>
                            <a href="https://medium.com/crossml/extracting-data-from-pdf-documents-7792d5c1e403" target="_blank">
                              <h5 className="text-hover">Extracting data from PDF documents</h5>
                            </a>
                            <p className="my-2">PDF stands for Portable Document Format is a file format that comes with
                              read-only permission. This format is used when ...</p>
                            <p className="mb-0"><a href="https://medium.com/crossml/extracting-data-from-pdf-documents-7792d5c1e403" target="_blank">Contine reading</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-masonry-item">
                    <div className="iq-portfolio">
                      <a className="portfolio-img" href="https://medium.com/crossml/geospatial-data-visualization-with-kepler-gl-bc9de40d6262" target="_blank">
                        <img src="https://crossml-website-images.s3.amazonaws.com/11.jpeg" className="img-fluid center-block" alt="blogimage1" />
                        <div className="portfolio-link">
                          <div className="icon">
                            <i className="fa fa-link" aria-hidden="true" />
                          </div>
                        </div>
                      </a>
                      <div className="iq-portfolio-content  text-left">
                        <div className="details-box clearfix">
                          <div className="consult-details">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <i className="fa fa-user" aria-hidden="true" /> crossml Engineering
                              </li>
                              <li className="list-inline-item pull-right">
                                <i className="fa fa-clock-o" aria-hidden="true" />
                                 10 min read
                              </li>
                            </ul>
                            <a href="https://medium.com/crossml/geospatial-data-visualization-with-kepler-gl-bc9de40d6262" target="_blank">
                              <h5 className="text-hover">Geospatial Data Visualization with Kepler.gl</h5>
                            </a>
                            <p className="my-2">Kepler.gl is a high-performance visualization tool and it is purely a
                              client-side app. It can be easily used  ...</p>
                            <p className="mb-0"><a href="https://medium.com/crossml/geospatial-data-visualization-with-kepler-gl-bc9de40d6262" target="_blank">Contine reading</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-masonry-item ">
                    <div className="iq-portfolio">
                      <a className="portfolio-img" target="_blank" href="https://medium.com/crossml/query-large-data-with-athena-s3-ad58b8779806">
                        <img src="https://crossml-website-images.s3.amazonaws.com/blog_athena.jpeg" className="img-fluid center-block" alt="blogimage1" />
                        <div className="portfolio-link">
                          <div className="icon">
                            <i className="fa fa-link" aria-hidden="true" />
                          </div>
                        </div>
                      </a>
                      <div className="iq-portfolio-content  text-left">
                        <div className="details-box clearfix">
                          <div className="consult-details">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <i className="fa fa-user" aria-hidden="true" /> crossml Engineering
                              </li>
                              <li className="list-inline-item pull-right">
                                <i className="fa fa-clock-o" aria-hidden="true" />
                                 8 min read
                              </li>
                            </ul>
                            <a target="_blank" href="https://medium.com/crossml/query-large-data-with-athena-s3-ad58b8779806">
                              <h5 className="text-hover">Query Large Data from S3 with AWS Athena</h5>
                            </a>
                            <p className="my-2">Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL ...</p>
                            <p className="mb-0"><a target="_blank" href="https://medium.com/crossml/query-large-data-with-athena-s3-ad58b8779806">Contine reading</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-masonry-item creative design">
                    <div className="iq-portfolio">
                      <a className="portfolio-img" target="_blank" href="https://medium.com/crossml/serverless-data-extraction-with-aws-b2dd2b191872">
                        <img src="https://crossml-website-images.s3.amazonaws.com/blog_server.jpeg" className="img-fluid center-block" alt="blogimage1" />
                        <div className="portfolio-link">
                          <div className="icon">
                            <i className="fa fa-link" aria-hidden="true" />
                          </div>
                        </div>
                      </a>
                      <div className="iq-portfolio-content  text-left">
                        <div className="details-box clearfix">
                          <div className="consult-details">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <i className="fa fa-user" aria-hidden="true" /> crossml Engineering
                              </li>
                              <li className="list-inline-item pull-right">
                                <i className="fa fa-clock-o" aria-hidden="true" />
                                 12 min read
                              </li>
                            </ul>
                            <a target="_blank" href="https://medium.com/crossml/serverless-data-extraction-with-aws-b2dd2b191872">
                              <h5 className="text-hover">Serverless Data Extraction with <br />AWS</h5>
                            </a>
                            <p className="my-2">Here is a small part of our Hybrid document parsing solution that uses AI to preprocess, extract and parse data...</p>
                            <p className="mb-0"><a target="_blank" href="https://medium.com/crossml/serverless-data-extraction-with-aws-b2dd2b191872">Contine reading</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-masonry-item">
                    <div className="iq-portfolio">
                      <a className="portfolio-img" href="https://medium.com/crossml/introduction-to-containerization-and-kubernetes-294d1f9b4aa8" target="_blank">
                        <img src="https://crossml-website-images.s3.amazonaws.com/blog_container.jpeg" className="img-fluid center-block" alt="blogimage1" />
                        <div className="portfolio-link">
                          <div className="icon">
                            <i className="fa fa-link" aria-hidden="true" />
                          </div>
                        </div>
                      </a>
                      <div className="iq-portfolio-content  text-left">
                        <div className="details-box clearfix">
                          <div className="consult-details">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <i className="fa fa-user" aria-hidden="true" /> crossml Engineering
                              </li>
                              <li className="list-inline-item pull-right">
                                <i className="fa fa-clock-o" aria-hidden="true" />
                                 5 min read
                              </li>
                            </ul>
                            <a href="https://medium.com/crossml/introduction-to-containerization-and-kubernetes-294d1f9b4aa8" target="_blank">
                              <h5 className="text-hover">Introduction to Containerization and Kubernetes</h5>
                            </a>
                            <p className="my-2">Containers are a solution to the problem of how to reliably run the software when moving from one computing ...</p>
                            <p className="mb-0"><a href="https://medium.com/crossml/introduction-to-containerization-and-kubernetes-294d1f9b4aa8" target="_blank">Contine reading</a></p>
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

export default OurBlog;
