import React from "react";
import Menu from "./Menu";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { } from '@fortawesome/free-solid-svg-icons';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
"mdbreact";


const Base = ({
  title = "My Title",
  description = "My desription",
  className = " text-white ",
  
  children
}) => (

  <div>
    <Menu />
      <MDBCarousel 
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
    >
      <MDBCarouselInner className ="MDBCarouselInner">
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-vector/fast-delivery-package-by-scooter-mobile-phone-order-package-e-commerce-by-app-tracking-courier-by-map-application-three-dimensional-concept-vector-illustration_176350-3.jpg?size=626&ext=jpg&ga=GA1.2.1474684578.1600473600"
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive"></h3>
            <p></p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://i1.wp.com/tea101.teabox.com/wp-content/uploads/2017/01/45A9272-01-1.png?fit=750%2C313&ssl=1"
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive"></h3>
            <p></p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://blog.mobikwik.com/wp-content/uploads/2016/09/refer-and-earn-website-banner-B.jpg"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive"></h3>
            <p></p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
     {children}

    <MDBFooter color="mdb-color" className="font-small ">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left ">
          <MDBCol md="3" lg="3" xl="3" className="mx-auto ">
            <h6 className="text-uppercase  font-weight-bold">
            Ghatiya chai            
              </h6>
            <p>
              Never go with the name !
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="2" lg="2" xl="2" className="mx-auto ">
            <h6 className="text-uppercase mb-4 font-weight-bold">Categories</h6>
            <p>
              <a href="#!">Kadak chai</a>
            </p>
            <p>
              <a href="#!">Dum chai</a>
            </p>
            <p>
              <a href="#!">Kulhad chai</a>
            </p>
            
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p >
              <a href="#!">Your Account</a>
            </p>
            <p>
              <a href="#!">Cart</a>
            </p>
            <p>
              <a href="#!">Shipping Rates</a>
            </p>
            <p>
              <a href="#!">Help</a>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p>
              <i className="fa fa-home mr-3" /> Bangalore
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> ghatiyachai@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> +918092217853
            </p>
            
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.GhatiyaChai.com"> GhatiyaChai.com </a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fa fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fa fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
      </div>
);

export default Base;
