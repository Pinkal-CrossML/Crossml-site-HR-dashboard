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

function IndustriesWeWork() {
  return (
    <div>
      <MetaTags>
      <title>AI, Cloud, DataOps, web & Mobile Application and DevOps Consultation for Retails, Healthcare, Finance, Automobile industries.</title>
			<meta name="keywords" content="AI, Artificial Intelligence, IOT, Cloud, DataOps, web & Mobile Application, cloud migration, cloud mgmt experts, cost-optimized solutions, Big data pipelines, Hadoop, spark consulatation." />
      </MetaTags>  
    <section className="iq-breadcrumb-five main-bg" style={{padding: '60px 0 50px', backgroundColor: '#090f27'}}>
      <div className="container">
        <img src="https://crossml-website-images.s3.amazonaws.com/idea.jpg" style={{maxWidth: '40%', height: 'auto', float: 'left'}} />
        <div className="row text-center mt-3">
          <div className="col-lg-12 pl-5">
            <div className="mt-5 mb-0 text-right">
              <h2 style={{fontSize: '30px', color: '#ffe1df'}}> Streamline Business <br /> Automate Process &amp; Workflows<br />Bring <span className="title_highlight">Innovation</span> as Business Strategy</h2>
            </div>
          </div>
        </div>
      </div>
    </section>	{/* Main Content */}
    {/* Main Content */}
    <div className="main-content">
      <section className="pt-4 mt-5 pb-4 home_case_study">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 pr-5">
              <div className="title-box text-left mb-3 pl-3">
                <h2 className="mb-3">Retail &amp; Manufacturing</h2>
                <h3 className="mb-3" style={{fontSize: '24px'}}>Enhance customer experience, efficient supply
                  chain process, reduced material wastage, and forecast right inventory</h3>
                <p>With exceeding customers expectations, increased complexity in the supply chain, and more
                  demand for online its time to rethink the best approachs for retail and manufacturing
                  industries and choose right digital tools and partners.</p>
              </div>
              <ul className="iq-list wow mt-0 pl-3">
                <li><i className="fa fa-check" /><span>crossML helps our customers with automated and reliable
                    solutions for logistic, invoices, and inventory management.</span></li>
                <li><i className="fa fa-check" /><span>Our digital expertise assures right products to enhence
                    your customers experience and efficient supply chain process.</span></li>
              </ul>
            </div>
            <div className="col-lg-5">
              <img src="https://crossml-website-images.s3.amazonaws.com/retail_manufacturing.jpg" className="mt-3" alt="Retail and Manufacturing" />
            </div>
          </div>
        </div>
      </section>
      <section className="mb-0 home_case_study">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mt-5 pt-4 pr-4">
              <img src="https://crossml-website-images.s3.amazonaws.com/industries-transport.png" />
            </div>
            <div className="col-lg-7 pl-5">
              <div className="title-box text-left mb-3">
                <h2 className="mb-3">High-Tech &amp; Automotive</h2>
                <h3 className="mb-3" style={{fontSize: '24px'}}>Achieve high-level of data security, vulnerability
                  assessments, customers touch-points analysis, and right softwares for your customers
                  needs</h3>
                <p>In this dynamic world, technology has transformed the way people live and work.
                  Businesses are looking to drive deeper customer engagement with relevant softwares &amp;
                  services and leveraging Artificial Intelligence that deliver a right business outcome.
                </p>
              </div>
              <ul className="iq-list wow mt-0 pl-3">
                <li><i className="fa fa-check" /><span>We help in redefine business strategies and provide
                    next-generation softwares to achieve better customer outcomes.</span></li>
                <li><i className="fa fa-check" /><span>Enabled organizations to achieve a high level security,
                    valuable business assessments and metrics, and continuous regulatories &amp;
                    compliance.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className=" pt-4 pb-0 home_case_study">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 ">
              <div className="title-box text-left mb-1">
                <h2 className="mb-3">Healthcare &amp; Insurance</h2>
                <h3 style={{fontSize: '24px'}}>Streamline operational activities, increase efficiencies,
                  ensure patient outcomes, and manage regulatory requirements</h3>
                <p className="mt-3 mb-0">With changing regulations and evolving technology, healthcare providers
                  are continuously looking to leverage artificial intelligence and digital technologies to
                  enhance patient engagement and increase medical efficiencies.</p>
                <p className="mt-2">
                  Healthcare industries need to streamline their operating models, healthcare IT
                  solutions, and customer engagement processes to ensure regulatory and patients needs.
                </p>
              </div>
              <ul className="iq-list wow mt-0">
                <li><i className="fa fa-check" /><span>crossML helps you analyze sensitive patients
                    information and medical records to diagnose &amp; treat the desease on-time.</span></li>
                <li><i className="fa fa-check" /><span>Enabled health care professionals to evaluate, diagnose
                    and treat patients through telemedicine and remote patient management.</span></li>
              </ul>
            </div>
            <div className="col-lg-5 mt-lg-0 pl-5">
              <img src="https://crossml-website-images.s3.amazonaws.com/telemedicine.jpeg" className="mb-4" alt="Healthcare" />
            </div>
          </div>
        </div>
      </section>
      <section className="mb-0 home_case_study">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mt-4">
              <img src="https://crossml-website-images.s3.amazonaws.com/industries-finance.png" />
            </div>
            <div className="col-lg-7 pl-5">
              <div className="title-box text-left mb-3">
                <h2 className="mb-3">Finance &amp; Banking</h2>
                <h3 className="mb-3" style={{fontSize: '24px'}}>Superlative customers experience, personalize users content, identify financial thefts, protect from fraudulent transactions</h3>
                <p>Many financial institutes realized that there is a tremendous amount of sensitive data customers leave behind while using their services online or offline or both. This data is very helpful to extract valuable information and customer patterns to design better business strategies for the future.
                </p>
              </div>
              <ul className="iq-list wow mt-0 pl-3">
                <li><i className="fa fa-check" /><span>Ensure customer’s superlative experience and protect from fraudulent transactions, fake credit applications, and false claims.</span></li>
                <li><i className="fa fa-check" /><span>Use predictive analytics to personalize their users content and recommend the right products and services based on your previous history.</span></li>
              </ul>
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
    </div></div>
  );
}

export default IndustriesWeWork;
