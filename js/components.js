
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const NavBar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">Khanakia</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="container footer">
      <div className="row">
        <div className="col-md-6">
          © 2020 Khanakia Inc.
        </div>
      </div>
    </div>
  )
}


const Home = props => {
  return (
    <div className="container header">

        <div className="s-100"></div>

        <div className="hero">
          <h1>
            <span>Excellence</span> in software development
          </h1>
          <div>We help enterpreneurs bring their ideas to life by leveraging design and technology</div>
          
          <div className="mt-3 font-weight-bold">Contact us: <a href="mailto:hello@khanakia.com"><u>hello@khanakia.com</u></a></div>
        </div>

        <div className="s-150"></div>


        <div className="">
          <h2>What we do</h2>
          <p>We have experience building bespoke websites, web apps and mobile apps and developing user friendly UX/UI designs. We are believers that it does not matter which industry you are in, all of it is affected by technology.</p>
        </div>

        {/* <div className="s-100"></div> */}

        <div className="row mt-5">
          <div className="col-md-6 mb-4">
            <div className="card" >
              <div className="card-body">
                <i className="fad fa-browser iconService mb-4"></i>
                <h2>Web development</h2>
                <p className="card-text">Having more than 10 years experience in web development, we serve our clients to deliver complex web applications as well as custom or simple landing pages.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card" >
              <div className="card-body">
                <i className="fad fa-mobile iconService mb-4"></i>
                <h2>Mobile development</h2>
                <p className="card-text">From simple, quick hybrid demo apps to solid native mobile experience - we do it all. We use best frameworks to provide the best mobile development solution possible.</p>
              </div>
            </div>
          </div>


          <div className="col-md-6 mb-4">
            <div className="card" >
              <div className="card-body">
                <i className="fab fa-sketch iconService mb-4"></i>
                <h2>Product design</h2>
                <p className="card-text">We work with top class UX/UI professionals to create seamless and unique experiences. When it comes to design phase - we have the competences for the whole journey.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card" >
              <div className="card-body">
                <i className="fas fa-hands-helping iconService mb-4"></i>
                <h2>IT support and maintenance</h2>
                <p className="card-text">We provide flexible support and maintenance plans, whether it's a small landing page or a complex web/mobile solution - we will provide a tailored package just for you.</p>
              </div>
            </div>
          </div>

          

        </div>
    </div>
  )
}
const Contact = props => <div className="container pl-4 mt-5"><h1>Contact</h1></div>
const Products = props => <div className="container pl-4 mt-5"><h1>Products</h1></div>