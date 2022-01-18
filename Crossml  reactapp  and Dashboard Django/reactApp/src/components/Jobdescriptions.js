// This page  show's  job Full Description 
// like Company Introduction,Job Title,Job Description,Eligibility Criteria,Experience Reguired and
// 'Apply Now' botton for opne  Job Application form with same post candidate selected.

import { useLocation, Link } from "react-router-dom";
import MetaTags from 'react-meta-tags';
import React, { Component } from 'react';

function createMarkup(data) {
  return { __html: data };
}

const CareerDesApp = _ => {
  const { state } = useLocation();

  

  return (

    <div >
      <MetaTags>
        <title>Job Description</title>
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
            <div>
              <div>

                <div class="card w-75 mx-auto">
                  <div class="card-body">
                    <h5 class="card-title">Company Introduction</h5>
                    <p class="card-text"> <div dangerouslySetInnerHTML={createMarkup(state.jobs.company_introduction)} /></p>

                    <h5 class="card-title">Job Title</h5>
                    <p class="card-text"> <div dangerouslySetInnerHTML={createMarkup(state.jobs.job_title)} /></p>

                    <h5 class="card-title">Job Description</h5>
                    <p class="card-text"> <div dangerouslySetInnerHTML={createMarkup(state.jobs.job_full_description)} /></p>

                    <h5 class="card-title">Roles and Responsibilities</h5>
                    <p class="card-text"> <div dangerouslySetInnerHTML={createMarkup(state.jobs.roles_and_responsibilities)} /></p>

                    <h5 class="card-title">Eligibility Criteria</h5>
                    <p class="card-text"> <div dangerouslySetInnerHTML={createMarkup(state.jobs.eligibility_criteria)} /></p>

                    {/* <h5 class="card-title">Experience Required</h5>
                    <p class="card-text"> <div dangerouslySetInnerHTML={createMarkup(state.jobs.experience_required)} /></p> */}

                    <span class="pull-right mr-0">
                          <Link
                            to={{
                              pathname: `/apply/${state.jobs.id}`
                            }}
                      >
                        <button class="btn btn-outline-secondary">Apply Now</button>
              </Link>
              </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br/>
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
  );
};



export default CareerDesApp;



