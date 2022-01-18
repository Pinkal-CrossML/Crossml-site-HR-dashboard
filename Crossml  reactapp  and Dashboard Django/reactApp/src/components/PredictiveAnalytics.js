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

function PredictiveAnalytics() {
  return (
    <div>
    <MetaTags>
      <title>Artifical Intelligence Consulation for Predictie Analysis of Financial Market</title>
			<meta name="keywords" content="Artificial Intelligence solutions, predictive analysis solutions for Financial Markets" />
    </MetaTags>

    <section className="iq-breadcrumb-five main-bg" style={{padding: '60px 0 50px', backgroundColor: '#090f27'}}>
      <div className="container">
        <img src="https://crossml-website-images.s3.amazonaws.com/idea.jpg" style={{maxWidth: '40%', height: 'auto', float: 'left'}} />
        <div className="row text-center mt-3 ">
          <div className="col-lg-12 pl-5">
            <div className="mt-5 mb-0 text-right">
              <h2 style={{fontSize: '40px', color: '#ffe1df'}}> Artificial Intelligence Solutions for <span className="title_highlight">Financial Markets </span></h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Main Content */}
    <div className="main-content">
      <section className="pt-5 pb-0 blog-detail">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="mb-3">Helps Making Better Business Decisions with <br />Predictive
                Analytics</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="deatils-social">
                <ul className="share-tags list-inline">
                  <li className="list-inline-item share-tag"><a>Analytics</a></li>
                  <li className="list-inline-item share-tag"><a>Machine Learning</a></li>
                  <li className="list-inline-item share-tag"><a>BI</a></li>
                  <li className="list-inline-item share-tag"><a>Data Visualization</a></li>
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
              <p>Many organizations realized that there is a tremendous amount of data customers leave behind while using their services online or offline or both. This data could be used to extract valuable information and customer patterns to help organizations to design better business strategies for the future.</p>
              <p>Predictive analytics uses customer’s historical data and apply statistical techniques and machine learning modeling to transform data into meaningful insights and identify trends and behaviors. <b>Health Care</b>, <b>Manufacturing</b>, <b>Retail</b>, <b>Finance</b>, and almost all other industries are increasingly looking for predictive analytics to improve their business productivity and performances.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-8 pr-5">
              <h3 className="mb-3">A few key use-cases Predictive Analytics help us</h3>
              <ul className="iq-list wow">
                <li><i className="fa fa-check" /><span>Banks and other financial institutions use predictive analytics to ensure their customer’s superlative experience and most importantly protect them from fraudulent transactions, fake credit applications, identify thefts, and false insurance claims.</span></li>
                <li><i className="fa fa-check" /><span>Healthcare takes advantage of predictive analytics to detect early signs of patient deterioration, identify at-risk patients in their homes, and better patient care. According to a report by Zion Market Research, the global healthcare analytics market is expected to be $4.37 billion by 2026 from $1.6 billion in 2018.</span></li>
              </ul>
            </div>
            <div className="col-lg-4">
              <img src="https://crossml-website-images.s3.amazonaws.com/predictive-analytics.png" className="mt-5" alt="OCR Automation" />
            </div>
            <div className="col-lg-12">
              <ul className="iq-list wow">
                <li><i className="fa fa-check" /><span>Predictive analytics help manufacturing industries to increase efficiency,  reducing raw material waste, and streamline their processes right from the supply chain management to the distribution and by forecasting future demands by geographical locations.</span></li>
                <li><i className="fa fa-check" /><span>Many retail and media industries such as Amazon and Netflix use predictive analytics to personalize their users content and recommend the right products and services based on your previous history and search patterns.</span></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt-5">
              <h3 className="mb-3 mt-3">How crossML Helped the Customer</h3>
              <p className="mb-2">Financial analysis and stock market trends have been the hardest problem to solve at all times. With our financial and technological expertise crossML solving this hardest problem for a long time and providing meaningful and reliable financial insights to our customers.</p>
              <ul className="iq-list wow">
                <li><i className="fa fa-check" /><span>Understanding historical data and desired outcomes helps us to generate valuable input features, technical indicators, and correlated assets from different data sources.</span></li>
                <li><i className="fa fa-check" /><span>Fundamental analysis is a key element to move the market in a certain direction, so we analyze the company performance using 10-K and 10-Q reports, analyze ROE, P/E, etc.</span></li>
                <li><i className="fa fa-check" /><span>Predict sentiment analysis from the company’s potential news and upcoming events using NLP (Natual Language Processing).</span></li>
                <li><i className="fa fa-check" /><span>Apply different types of transformations and statistical tests such as Fourier Transforms, Heteroskedasticity, Multicollinearity, etc to normalize and standardize the data.</span></li>
                <li><i className="fa fa-check" /><span>Implement several model architectures such as ARIMA, CNN, RNN, LSTM, GAN using all the latest advancements in machine learning and deep learning.</span></li>
                <li><i className="fa fa-check" /><span>Prevent model overfitting and assure correct bias-variance trade-off using several techniques such as Hyperparameter Tuning, Regularization, Dense-sparse-dense, Early Stopping, etc.</span></li>
              </ul>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <p className="mt-3 text-center">
                <img className="img-fluid client-img mr-5" width={180} src="https://crossml-website-images.s3.amazonaws.com/powerbi-logo.png" alt="Blueprism" />
                <img className="img-fluid client-img mr-5" width={220} src="https://crossml-website-images.s3.amazonaws.com/Tableau-Logo.png" alt="OpenCV Python OCR" />
                <img className="img-fluid client-img mr-5" width={80} src="https://crossml-website-images.s3.amazonaws.com/python.png" alt="OpenCV Python OCR" />
                <img className="img-fluid client-img mr-5" width={125} src="https://crossml-website-images.s3.amazonaws.com/Apache_Spark_logo.png" alt="OpenCV Python OCR" />
                <img className="img-fluid client-img mr-5" width={135} src="https://crossml-website-images.s3.amazonaws.com/AirflowLogo.png" alt="OpenCV Python OCR" />
                <img className="img-fluid client-img" width={130} src="https://crossml-website-images.s3.amazonaws.com/hadoop.png" alt="OpenCV Python OCR" />
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
                          read-only permission. This format is used when you ...
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

export default PredictiveAnalytics;
