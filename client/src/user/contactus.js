import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import Base from "../core/Base";

const ContactUs = () => {
return (
    <Base>
<MDBContainer className="ml-4 mt-4 mb-4">
  <MDBRow>
    <MDBCol md="8">
      <form>
        <p className="h5 text-center text-primary mb-4">Write to us</p>
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
          <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
        </div>
        <div className="text-center">
          <MDBBtn outline className="bg-primary">
            Send
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</Base>

);
};

export default ContactUs;