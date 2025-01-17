// eslint-disable-next-line no-unused-vars
// @ts-ignore

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function BootstrapPractice() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg  justify-content-between col col-sm-12">
          <div className="navbar-brand cursor">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30">
              <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"></path>
            </svg>
          </div>
          <button className="navbar-toggler navbar-brand" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <div className="navbar-nav nav-items">
              <a className="nav-link" href="#">Store</a>
              <a className="nav-link" href="#">Mac</a>
              <a className="nav-link" href="#">iPad</a>
              <a className="nav-link" href="#">iPhone</a>
              <a className="nav-link" href="#">Watch</a>
              <a className="nav-link" href="#">AirPods</a>
              <a className="nav-link" href="#">TV & Home</a>
              <a className="nav-link" href="#">Entertainment</a>
              <a className="nav-link" href="#">Accessories</a>
              <a className="nav-link" href="#">Support</a>
              <svg className="search-icon cursor" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
              </svg>
              <img className="cursor cart" src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000" width="20" height="20" alt="Cart" />
            </div>
          </div>
        </nav>
      </div>

      <div className="main3">
        <div className="container-fluid phone3 p-0">
          <video className="" style={{ width: "100%", height: "auto" }}>
            <source src="Y2meta.app - Introducing iPhone 15 _ WOW _ Apple.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1 className="videoH hellos">Relax, its iphone</h1>
          <p className="videoP hellos1">Dependably durable</p>
        </div>
      </div>

      <div className="main3 marginup">
        <div className="container-fluid phone3 p-0">
          <img src="promo_macbook_air_m3__e43jegok3wuq_large_2x (1).jpg" alt="MacBook Air M3 promo" className="img-fluid" style={{ width: "100%", height: "auto" }} />
          <h1 className="hellos">iPhone 15</h1>
          <p className="hellos1">New Camera, New design, Newphoria.</p>
        </div>
      </div>

      <div className="main3 marginup">
        <div className="container-fluid phone3 p-0">
          <img src="promo_macbook_air_m3__e43jegok3wuq_large_2x (1).jpg" alt="MacBook Air M3 promo" className="img-fluid" style={{ width: "100%", height: "auto" }} />
          <h1 className="hellos">iPhone 15</h1>
          <p className="hellos1">New Camera, New design, Newphoria.</p>
        </div>
      </div>

      <div className="container-fluid this">
        <div className="content2 row this">
          <div className="col col-lg-6 col-sm-12 heybro this">
            <div className="inner this">
              <img src="Screenshot (15).png" width={"100%"} height={"500px"} alt="Screenshot" />
            </div>
          </div>

          <div className="col col-lg-6 col-sm-12 hellobro this">
            <div className="inner">
              <img src="1960x1102 (9).jpg" width={"100%"} height={"500px"} alt="1960x1102" />
            </div>
          </div>
        </div>
      </div>

      {/* Additional sections */}

      <div className="container-fluid this">
        <div className="content2 row this">
          <div className="col col-lg-6 col-sm-12 heybro this">
            <div className="inner this">
              <img src="Screenshot (15).png" width={"100%"} height={"500px"} alt="Screenshot" />
            </div>
          </div>

          <div className="col col-lg-6 col-sm-12 hellobro this">
            <div className="inner">
              <img src="1960x1102 (9).jpg" width={"100%"} height={"500px"} alt="1960x1102" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid this">
        <div className="content2 row this">
          <div className="col col-lg-6 col-sm-12 heybro this">
            <div className="inner this">
              <img src="Screenshot (15).png" width={"100%"} height={"500px"} alt="Screenshot" />
            </div>
          </div>

          <div className="col col-lg-6 col-sm-12 hellobro this">
            <div className="inner">
              <img src="1960x1102 (9).jpg" width={"100%"} height={"500px"} alt="1960x1102" />
            </div>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="carousel-container carousel-container1">
      <div id="demo" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active
          "></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>
        
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="1960x1102 (3).jpg" alt="Los Angeles" className=" w-100 carousel-img" />
          </div>
          <div className="carousel-item">
            <img src="1960x1102 (7).jpg" alt="Chicago" className=" w-100 carousel-img" />
          </div>
          <div className="carousel-item">
            <img src="1960x1102 (1).jpg" alt="New York" className=" w-100 carousel-img" />
          </div>
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>


    </>

  );
  
}
