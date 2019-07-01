import React from "react"

class Landing extends React.Component {
  render () {
      const {logged_in, sign_in, sign_out, current_user } = this.props
    return (

  <div>

    <section id="intro" className="intro">
      <div className="overlay"></div>
      <div className="content">
        <div className="container clearfix">
          <div className="row">
            <div className="col-lg-8 col-md-12 mx-auto" id = "titlediv">
              <p className="italic"></p>
              <h1>Cloud Culture</h1>
              <p className="italic">Cloud Culture is a collaborative networking platform for web workers.</p>
              <p align='right' className="italic">'working remotely... together.'</p>
            </div>
          </div>
        </div>
      </div>
    </section>



    <header className="header">

      <nav className="navbar navbar-expand-lg">

        <div className="container">

            <a href="#intro" className="navbar-brand link-scroll">
                <img src="img/cloudblue.png" alt="" className="img-fluid"/>Cloud Culture
            </a>

          <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right">
            <i className="fa fa-bars"></i>
          </button>

          <div id="navbarSupportedContent" className="collapse navbar-collapse">

            <ul className="navbar-nav ml-auto" id = "nav-items">
              <li className="nav-item">
                <a href="#intro" className="nav-link link-scroll">Home</a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link link-scroll">About </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link link-scroll">Team</a>
              </li>
              <li className="nav-item">
                <a href="/map" className="nav-link link-scroll">Map</a>
              </li>
              <li className="nav-item">
                <a href = {logged_in && sign_out || sign_in}
                    className="nav-link link-scroll">
                    {logged_in && "Sign Out"}{!logged_in && "Sign In"}
                </a>
              </li>
            </ul>

          </div>

        </div>

      </nav>
    </header>



    <section id="about" className="text">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="heading">We're All In This Together</h2>
            <p className="lead"></p>
            <p>Rapid growth of online resources for students and digital professionals has led to a large population of remote web workers. Although convenient, this raises issues of social isolation, productivity management and insufficient mentoring.</p>
            <p>Cloud Culture provides location-based networking profiles, so that web workers can share their daily tasks, current progress, roadblocks, coding languages, meetups, etc ... (encouraging collaboration and new connections)</p>
          </div>
          <div className="col-lg-5 mx-auto">
            <p><img src="https://assets.reviews.com/uploads/2015/12/01011903/microsoft_onedrive_logo1.png" alt="" className=""/></p>
          </div>
        </div>
      </div>
    </section>



    <section id="services" >
      <div className="container">
        <div className="row services">
          <div className="col-lg-12">
            <h2 className="heading">Meet the Team</h2>
            <div className="row">
              <div className="col-md-3">
                <div className="box">
                <p><img src="img/milesnew.jpg" alt="" size='100px' className="img-fluid rounded-circle"/></p>
                  <h5>Miles Shumilak</h5>
                  <p>Cofounder & Web Developer</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box">
                <p><img src="img/sebastiannew.jpg" alt="" size='100px' className="img-fluid rounded-circle"/></p>
                  <h5>Sebastian White</h5>
                  <p>Cofounder & Web Developer</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box">
                <p><img src="img/chrisnew.jpg" alt="" size='100px' className="img-fluid rounded-circle"/></p>
                  <h5>Christopher Norton</h5>
                  <p>Cofounder & Web Developer</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box">
                <p><img src="img/travisnew.jpg" alt="" size='100px' className="img-fluid rounded-circle"/></p>
                  <h5>Travis Baker</h5>
                  <p>Cofounder & Web Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <footer>
      <div className="container">
        <div className="row copyright">
          <div className="col-md-6">
            <p className="mb-md-0 text-center text-md-left">&copy;2019 Team Andrometa [ a space time development ]</p>
          </div>
          <div className="col-md-6">
            <p className="credit mb-md-0 text-center text-md-right"><a href="">'working remotely... together.'</a></p>
          </div>
        </div>
      </div>
    </footer>



  </div>

);
}
}

export default Landing
