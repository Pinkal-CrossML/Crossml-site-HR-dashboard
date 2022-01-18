// page for Job Application form with same Post or job candidate selected. 

import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import Swal from "sweetalert2";
import axios from 'axios';

class ApplyAppProfile extends Component {
  state = {
    job_id: '',
    name: '',
    email: '',
    phone_number: '',
    li_link: '',
    git_link: '',
    cv_file: null
  };

  handleChange = (e) => {
    if (!e.target.value){
    this.setState({
      [e.target.id]: ''
    })
  }else{
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  };

  handleReset = () => {
    var arry = document.querySelectorAll("input");
    arry.forEach(function (a) {
      a.value = '';
    })
  };

  SuccessMessage() {
    Swal.fire({
      text: 'Your Application has been Submitted.',
    });

  }

  handleImageChange = (e) => {
    this.setState({
      cv_file: e.target.files[0]
    })
  };

  spinner = () => {
    this.setState({ loading: true });
    // Faking ApI call here 
    setTimeout(() => {
      this.setState({ loading: false });
    }, 8000)

  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('job_id', window.location.href.split('/').slice(-1).toString());
    form_data.append('name', this.state.name);
    form_data.append('email', this.state.email);
    form_data.append('phone_number', this.state.phone_number);
    form_data.append('li_link', this.state.li_link);
    form_data.append('git_link', this.state.git_link);
    form_data.append('cv_file', this.state.cv_file, this.state.cv_file.name);
    var url = 'http://localhost:8000/careers/createform/';
    this.spinner();
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }).then(res => {
      console.log("res.dat")
      console.log(res.data);
      this.SuccessMessage();
      this.handleReset();
    })
      .catch(err => console.log(err))
  };

  state = {
    loading: false
  }

  

  render() {
    const { loading } = this.state;

    return (
      <div className="ApplyApp" >
        <MetaTags>
          <title>Apply Now</title>
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

          </div >
        </section>
        <br />
        <div class="card w-50 mx-auto">
          <div class="card-body">
            <h5 class="card-title">Job Application </h5>
            <p class="card-text">Please complete the form below to apply for a position with us.</p>

            <form class="apply_form" onSubmit={this.handleSubmit} encType="multipart/form-data">
              {/* <form class="apply_form" onSubmit={() => {this.handleSubmit();this.fetchData()}} encType="multipart/form-data"> */}

              <div class="row">
                <div class="col">
                  <label for="name">Name**</label>
                  <input type="text" class="form-control" id="name" value={this.state.name} onChange={this.handleChange} placeholder=" Joe Citizen" required />
                </div>

              </div>
              <div class="row">
                <div class="col">
                  <label for="email">Email Id**</label>
                  <input type="email" class="form-control" id="email" value={this.state.email} onChange={this.handleChange} placeholder="hello@crossml.com" required />
                </div>
                <div class="col">
                  <label for="phone_number">Phone Number**</label>
                  <input type="text" class="form-control" id="phone_number" value={this.state.phone_number} onChange={this.handleChange} placeholder="07 XX XX XX XX" required />
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <label for="li_link">Your valid LinkedIn URL (Optional) </label>
                  <input type="text" id="li_link" value={this.state.li_link} onChange={this.handleChange} class="form-control" placeholder="http://.linkedin.com/in/yourname." />
                </div>

                <div class="col">
                  <label for="git_link">Your valid Github Link (Optional)</label>
                  <input type="text" id="git_link" value={this.state.git_link} onChange={this.handleChange} class="form-control" placeholder="https://github.com/yourname." />
                </div>
              </div>


              <div class="row">
                <div class="col">
                  <label for="cv_file">Upload your resume**</label>
                  <input type="file" id="cv_file" accept="application/pdf, image/png, image/jpeg" onChange={this.handleImageChange} required />

                </div>

              </div>
              <button type="submit" class="btn btn-outline-secondary pull-right mr-0"  disabled={loading} >
                {loading && <i class="fa fa-refresh fa-spin"></i>}Submit


              </button>

            </form>


          </div>

        </div>
        <br />
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

  }

}

export default ApplyAppProfile;




