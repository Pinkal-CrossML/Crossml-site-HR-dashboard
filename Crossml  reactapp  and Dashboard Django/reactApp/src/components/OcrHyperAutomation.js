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

function OcrHyperAutomation() {
  return (
    <div>
    {/* Header End */}
    <MetaTags>
      <title>Serverless OCR and Document processing pipeline Consultation</title>
			<meta name="keywords" content="AI, Artificial Intelligence, IOT, OCR, Digital document processing, Automation Solutions,RPA Development, Robotic Process Automation" />
      </MetaTags>

    <section className="iq-breadcrumb-five main-bg" style={{padding: '60px 0 50px', backgroundColor: '#090f27'}}>
      <div className="container">
        <img src="https://crossml-website-images.s3.amazonaws.com/idea.jpg" style={{maxWidth: '40%', height: 'auto', float: 'left'}} />
        <div className="row text-center mt-3">
          <div className="col-lg-12 pl-5">
            <div className="mt-5 mb-0 text-right">
              <h2 style={{fontSize: '40px', color: '#ffe1df'}}> Artificial Intelligence Solutions for <span className="title_highlight">Retail Customers </span></h2>
            </div>
          </div>
        </div>
      </div>
    </section>	{/* Main Content */}
    <div className="main-content">
      <section className="pt-5 pb-0 blog-detail">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="mb-3">Automate Manual Repetitive Tasks<br />using OCR</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="deatils-social">
                <ul className="share-tags list-inline">
                  <li className="list-inline-item share-tag"><a>Automation</a></li>
                  <li className="list-inline-item share-tag"><a>Artificial Intelligence</a></li>
                  <li className="list-inline-item share-tag"><a>OCR</a></li>
                  <li className="list-inline-item share-tag"><a>Smart Bots</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 text-right">
              {/* <ul className="list-inline mb-0 d-inline">
                <li className="list-inline-item">
                  <a href="#"><i className="fa fa-facebook-square" /></a>
                </li>
                <li className="list-inline-item">
                  <a href="#"><i className="fa fa-twitter" /></a>
                </li>
                <li className="list-inline-item">
                  <a href="#"><i className="fa fa-google-plus" /></a>
                </li>
                <li className="list-inline-item">
                  <a href="#"><i className="fa fa-linkedin" /></a>
                </li>
                <li className="list-inline-item">
                  <a href="#"><i className="fa fa-pinterest" /></a>
                </li>
              </ul> */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt-3">
              <p><b>Artificial Intelligence</b> and <b>Hyper Automation</b> are transforming businesses and
                contributing to economic growth via operating tasks without human intervention.
                Digitalization of business operations helped many companies improve the efficiency and
                productivity of their business processes. Since data is becoming a very crucial asset for an
                organization, technologies like OCR (Optical Character Recognition) enables organizations to
                extract useful information from different documents and images into an editable format
                without manual efforts.</p>
              <div className="blog-content">
                <blockquote className="blockquote mt-4 mb-4 pt-0 text-center">
                  <p className="mb-0 font-weight-bold">According to <span className="highlight_small">IDC</span>,
                    It is anticipated that by <span className="highlight_small">2022</span>, as much as
                    <span className="highlight">75%</span> of enterprise companies will embed <br /><span className="highlight_small">AI</span> and <span className="highlight_small">RPA</span>
                    into their business processes to discover operational insights.</p>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-8 pr-5">
              <h3 className="mb-3">Why OCR is the key element for all businesses?</h3>
              <ul className="iq-list wow">
                <li><i className="fa fa-check" /><span>OCR enables businesses to achieve higher productivity,
                    efficiency, and reducing human costs through the automation of repetitive
                    tasks.</span></li>
                <li><i className="fa fa-check" /><span>OCR increases the accessibility of data from digital
                    documents ensuring organizations make better future decisions.</span></li>
                <li><i className="fa fa-check" /><span>OCR immensely improves the customer service experience
                    by easily accessing information from text messages or voice calls.</span></li>
                <li><i className="fa fa-check" /><span>OCR helps to convert scanned documents and images into
                    editable formats to update information constantly and regularly.</span></li>
              </ul>
            </div>
            <div className="col-lg-4 pl-5">
              <img src="https://crossml-website-images.s3.amazonaws.com/ocr.png" className="mt-5" alt="OCR Automation" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt-5">
              <p>We at <b>crossML</b> helped many customers across diversified industries such as retail,
                banking, and healthcare to automate their manual repetitive and plain sailing tasks with
                minimal to zero human involvement with following OCR (object character recognition) based
                hyper-automation tools.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mt-5 pr-5">
              <h3 className="mb-2">Logistics Automation</h3>
              <p className="mb-3">With a customer based in Italy, one of the largest beef importers receives
                hundreds of beef shipments on a daily basis. And it was really hard task for humans to
                summarize inventory from each box and it into the ERP system.</p>
              <p>So client was wanted a fast automated solution to extract and read useful information such as
                product name, weight, price, expiry date, etc from packing slips on each beef boxes.</p>
            </div>
            <div className="col-lg-6 mt-5 pl-3">
              <video className="mt-1" controls autoPlay muted>
                <source src="https://crossml-website-images.s3.amazonaws.com/video/ocr_automation.mp4" type="video/mp4" />
                Your browser does not support the HTML5 Video element.
              </video>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt-1">
              <p><b>crossML</b> provides an OCR-based fully automated solution that reads all useful
                information from shipping slip images, generates shipment summary reports, and correctly
                updates inventory into the ERP for each item. This solution helped our client to run
                logistic processes more efficiently, saved a lot of time, and reduced more than 50% of the
                human costs.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt-5">
              <h3 className=" mb-2">Invoices Automation</h3>
              <p className="mb-3">Invoice processing and accounts payable workflows are always been manual,
                time-taking, and expensive processes for organizations. Fortunately, OCR and Digitalization
                have proved their capabilities to overcome this inefficiency and error-prone process in the
                last few years.</p>
              <p>We enabled many of our clients to automate this complex and time-consuming process with our
                <b>Invoice Automation</b> tool and microservices. Our tool automatically extracts useful
                information such as invoice details, address, line items, and totals from digital PDF
                invoices or scanned images into the editable format and eliminates the need for manual data
                entry. This tool can self-learn new formats and develop a more nuanced approach to read
                information using machine learning algorithms.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mt-5">
              <h3 className=" mb-2">KYC Automation</h3>
              <p className="mb-3">KYC is a very crucial and important process for any banking or financial
                institution for making sure that people are who they say they are. Digitalization has
                transformed the capabilities of KYC from traditional paper-based hard copies to online ID
                verification and digital signatures in a very efficient and managed way.</p>
            </div>
            <div className="col-lg-4 pl-5 mt-5">
              <img src="https://crossml-website-images.s3.amazonaws.com/kyc_ocr.png" style={{maxHeight: '200px'}} className="ml-3" alt="KYC Automation" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt-3">
              <p>With our <b>e-KYC</b> automation tool, people can scan, upload, process, and complete their
                KYC process very easily in a secured manner. Our tool can read users information from many
                different types of documents such as Driving Licenses, National ID Proofs, Passports, etc
                for many different countries. It automatically handles the quality and orientation of
                documents and automatically applies necessary filters to improve accuracy. We completely
                understand how the user’s personal information could be sensitive and confidential, so this
                tool securely encrypts the information while transfer or at rest.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p className="mt-5 mb-5 text-center">
                <img className="img-fluid client-img mr-5" width={160} src="https://crossml-website-images.s3.amazonaws.com/aws.png" alt="Blueprism" />
                <img className="img-fluid client-img mr-5" width={190} src="https://crossml-website-images.s3.amazonaws.com/blue_prism_logo.png" alt="OpenCV Python OCR" />
                <img className="img-fluid client-img mr-5" width={180} src="https://crossml-website-images.s3.amazonaws.com/automation-anywhere.png" alt="OpenCV Python OCR" />
                <img className="img-fluid client-img mr-5" width={160} src="https://crossml-website-images.s3.amazonaws.com/opencv-python.png" alt="OpenCV Python OCR" />
                <img className="img-fluid client-img mr-5" width={150} src="https://crossml-website-images.s3.amazonaws.com/Apache_Spark_logo.png" alt="OpenCV Python OCR" />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="Vizion-gradient-bg-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title-box">
                <h2>More From crossML</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <Carousel responsive={responsive} infinite={true} autoPlay={false}  >
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
                          <h6 className="my-3">Query Large Data from S3 with AWS Athena</h6>
                        </a>
                      </div>
                      <div className="blog-content">
                        <p>Athena is an interactive query service that makes it easy to analyze data
                          in Amazon S3 using standard SQL.</p>
                      </div>
                      <div className="blog-button"><a className="button" target="_blank" href="https://medium.com/crossml/query-large-data-with-athena-s3-ad58b8779806">Read
                          More <i className="fa fa-angle-right" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item react-carousel-item ">
                  <div className="iq-blog-box">
                    <div className="iq-blog-image clearfix">
                      <img src="https://crossml-website-images.s3.amazonaws.com/11.jpeg" className="img-fluid center-block" alt="blogimage1" />
                    </div>
                    <div className="iq-blog-detail">
                      <div className="iq-blog-meta">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="iq-user"><i className="fa fa-user" aria-hidden="true" /> crossML engineering</a>
                          </li>
                          <li className="list-inline-item pull-right">
                            <i className="fa fa-calendar-minus-o" aria-hidden="true" />
                            5 min read
                          </li>
                        </ul>
                      </div>
                      <div className="blog-title">
                        <a href="https://medium.com/crossml/geospatial-data-visualization-with-kepler-gl-bc9de40d6262" target="_blank">
                          <h6 className="my-3">Geospatial Data Visualization with Kepler.gl</h6>
                        </a>
                      </div>
                      <div className="blog-content">
                        <p>Kepler.gl is a high-performance visualization tool and it is purely a
                          client-side app. It can be easily used by technical and not ...</p>
                      </div>
                      <div className="blog-button"><a className="button" href="https://medium.com/crossml/geospatial-data-visualization-with-kepler-gl-bc9de40d6262">Read
                          More <i className="fa fa-angle-right" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item react-carousel-item ">
                  <div className="iq-blog-box">
                    <div className="iq-blog-image clearfix">
                      <img src="https://crossml-website-images.s3.amazonaws.com/12.jpeg" className="img-fluid center-block" alt="blogimage1" />
                    </div>
                    <div className="iq-blog-detail">
                      <div className="iq-blog-meta">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="iq-user"><i className="fa fa-user" aria-hidden="true" /> crossML engineering</a>
                          </li>
                          <li className="list-inline-item pull-right">
                            <i className="fa fa-calendar-minus-o" aria-hidden="true" />
                            5 min read
                          </li>
                          {/* <li class="list-inline-item">
                  <a href="#"><i class="fa fa-comments" aria-hidden="true"></i> 0</a>
                </li> */}
                        </ul>
                      </div>
                      <div className="blog-title">
                        <a href="https://medium.com/crossml/extracting-data-from-pdf-documents-7792d5c1e403" target="_blank">
                          <h6 className="my-3">Extracting data from PDF documents</h6>
                        </a>
                      </div>
                      <div className="blog-content">
                        <p>PDF stands for Portable Document Format is a file format that comes with
                          read-only permission. This format is used when you have to save ... ...
                        </p>
                      </div>
                      <div className="blog-button"><a className="button" href="https://medium.com/crossml/extracting-data-from-pdf-documents-7792d5c1e403">Read
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

export default OcrHyperAutomation;
