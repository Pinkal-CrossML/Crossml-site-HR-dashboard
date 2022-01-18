// This is the first page of creers page
// In the first section we fetch the small job description data with API and show in the carts and 
// view button for show next page full job description
// And in next or last section we add Join CrossMl button for opne job Apply page for everyone 




import { Link } from "react-router-dom";
import MetaTags from 'react-meta-tags';
import React, { Component } from 'react';

// function for removing HTMl Tags
function createMarkup(data) {
  return { __html: data };
}


class CareerApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        job_title: "",
        job_description: "",
        loction: "",
      },
      careerList: []
    };
  }



  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/careers/list/');
      const careerList = await res.json();
      this.setState({
        careerList
      });
    } catch (e) {
      console.log(e);
    }
  }
  renderItems = () => {
    const newItems = this.state.careerList
    return newItems.map(item => (

      <div
        key={item.id}
        className="col-lg-4 col-md-6 col-sm-6 col-xs-12"
      >
        <div
          className="iq-jobdetail"
        >
          <div
            className="office-top">
            <h6
              className="cmp-name"
            >
              {item.job_role}
            </h6>
            <p class="timeago text-muted">{item.min_experience}-{item.max_experience} Years</p>
          </div>
          <div class="office-detail">
            <h4 class="title mb-0">{item.job_title}</h4>
          </div>
          <div class="office-bottom">
            <div dangerouslySetInnerHTML={createMarkup(item.job_description)} />
            <i class="fa fa-map-marker text-muted" aria-hidden="true"></i>
            <span class="country text-muted"> {item.loction}</span>

            <span class="pull-right mr-0">
              <Link
                to={{
                  pathname: `/job-desc/${item.id}`,
                  state: { jobs: item }
                }}
              >
                <button class="btn btn-outline-secondary">View</button>
              </Link>
            </span>
          </div>
        </div>
      </div>


    ));
  };



  render() {
    return (
      <div >
        <MetaTags>
          <title>AI, Cloud, DataOps, web & Mobile Application and DevOps Consultation for Retails, Healthcare, Finance, Automobile industries.</title>
          <meta name="keywords" content="AI, Artificial Intelligence, IOT, Cloud, DataOps, web & Mobile Application, cloud migration, cloud mgmt experts, cost-optimized solutions, Big data pipelines, Hadoop, spark consulatation." />
        </MetaTags>

        <section className="iq-breadcrumb-five main-bg" style={{ backgroundColor: '#090f27', padding: '60px 0 00px' }}>
          <div className="container">
            <img src="https://crossml-website-images.s3.amazonaws.com/idea.jpg" style={{ maxWidth: '40%', height: 'auto', float: 'left' }} />
            <div className="row text-center mt-3">
              <div className="col-lg-12 pl-5">
                <div className="mt-0 mb-0 text-right">
                  <h2 style={{ fontSize: '40px', color: '#ffe1df' }}> <br />Career @ crossML <span className="title_highlight"></span><br /> Career with an <span className="title_highlight">Impact</span> <br /> <br /></h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class=" position-relative pt-3 pb-0">
          <div class="container">
            <div class="row iq-recent-job">
              {this.renderItems()}
            </div>
          </div>

          <section class=" position-relative pt-5">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <h3>A few reasons you should join crossML?</h3>
                  <ul class="why_join_us mt-4">
                    <li><b>&#10003; Innovate</b>  - Be a part of the culture of innovation with pet projects, meetups, hackathons.</li>
                    <li><b>&#10003; Upskill</b>  - Work on cutting-edge technologies in Cloud, AI, Machine Learning, Big Data, IoT, etc</li>
                    <li><b>&#10003; Lead</b>  - We help you jump start your journey towards a leadership & management role.</li>
                    <li><b>&#10003; We Care</b>  - Get unique perks like Travel Credits, Paid Time Off, Yearly Bonus, and of course Best Compensations.</li>
                  </ul>
                  <div >
                    {/* <div class="card-body">
                      <a href="/applynow" class="btn btn-outline-secondary">Join Crossml</a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
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

    )
  }
}



export default CareerApp;



