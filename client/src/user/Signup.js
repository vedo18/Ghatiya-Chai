import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper/index";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBBtn,MDBAnimation,
  MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
 
    import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
'mdbreact'

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false
  });

  const { name, email, password, error, success } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then(data => {
        if (data?.error) {
          setValues({ ...values, error: data?.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true
          });
        }
      })
      .catch(console.log("Error in signup"));
  };
    

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please{" "}
            <Link to="/signin">Login Here</Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  const signUpForm = () => {
    return (
      <MDBContainer>
        <MDBRow>
        <MDBCol md="6"  className="mb-4 mt-4 ">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className ="text-dark">
                        <h3 className="text-center text-primary">
                           Register: 
                        </h3>
                        <hr className="hr-light" />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your name"
                          icon="user"
                          onChange={handleChange("name")}
                          value={name}

                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your email"
                          icon="envelope"
                          onChange={handleChange("email")}
                          value={email}
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your password"
                          icon="lock"
                          type="password"
                          onChange={handleChange("password")}
                          value={password}
                        />
                        <div className="text-center mt-4 black-text">
                          <MDBBtn color="cyan"onClick={onSubmit} type="submit" className="btn-primary">Sign Up</MDBBtn>
                          <hr className="hr-light" />
                          <div className="text-center d-flex justify-content-center white-label">
                            <a href="#!" className="p-2 m-2">
                            <i className="fa fa-facebook-f" />

                            </a>
                            <a href="#!" className="p-2 m-2">
                            <i className="fa fa-twitter" />

                            </a>
                            <a href="#!" className="p-2 m-2">
                            <i className="fa fa-instagram" />

                            </a>
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
                <MDBCol md="6">

                <MDBCarousel 
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className ="mt-5"
    >
      <MDBCarouselInner className ="MDBCarouselInner">
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoispWhC_mhRys916YXNdMj34tTKn5JY81WQ&usqp=CAU"
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
              src="https://img.freepik.com/free-vector/fast-delivery-package-by-scooter-mobile-phone-order-package-e-commerce-by-app-tracking-courier-by-map-application-three-dimensional-concept-vector-illustration_176350-3.jpg?size=626&ext=jpg&ga=GA1.2.1474684578.1600473600"
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

    <MDBCarousel 
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className ="mt-2 mb-2"
    >
      <MDBCarouselInner className ="MDBCarouselInner">
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAABHVBMVEX///+1ACf/4ACyABfVi5OwAAD/3gDu09b/5AD/4QDqyc20AB6zACjFXGe0ACP/7QC9MCT/6ACvACmzAB3/8ACzABn72gTkqhW5IibObx6xAA6xAAuyABKtAAD++/zhs7jgoxbfmKLEVWPAQVL04uTw3d7mv8P///PWkpn77vHOeoO9O0ran6XJanT//d63GDHdmRjASFbOfIXeqq/LcXvYmZ//+Mv//tTQaXj/9qb/9Jf/8or/+cP/6D///ez/7WPSfx3/7F26KD3yyQzGWyHXixv/97HDM0n/9bv//dv/5DH/6k3/8Hj/85DReh3/8H3quQb43pz12+nvy8D/8Dm9PCT433zEVSLKaCD//ADsxtPvwQ7/+ZnFVyK+IDshuoghAAAP10lEQVR4nO2dCXebOhbH8SIbDME1DkljY7txnMVxNidp0uzbi5Nmec28eZm2bzr9/h9jAElImMUCY7wc/uf0tMUYw4+re6+kK+C4RIkSJUqUKFGiRIkSJUqUKFGiRLOoer6xvJGdFi032uMGRim/saKBqpaZGmlV0F0bNzWo+tZvkBFT0yYRdCfAAutZVZPHjSKcyurquOkdiNq4KYSXXGmNFV67C6bU8qDE3+Okt6aVxw1gSFWWx0dvebpNz1S1Pi56X8C4rz0CVRvjgdd+mOKYQVQ+HAu9vDh9mZ6b5Idx0DuYAbcHJY2B3v4suD2k2OHVu9VxX3OEipte67c67kuOUjHTK1RmI2hgxUtveYbcnqlY6c1ErmxTjPDanZnIlW2Kj15envYhAhfFRq8xM7kyrbjoZWfO7ZmKiV5zlnJlSrHAa//OxHhJsiiKckyeIg56BS2uXFnOVGtgtzvXXJFBraKOnmEM9LYCBQ0xUwE1rGAOU63dbhSs+cNWY1MFvvdNHt5IR0/vkJmBQQ50sw0yg5UPwE8FWcfUV6FZ8wKkAvAw183U3CZKZWCKwV+PGl59pcJy7bKDXEB8cm3TdeIh33GFIIL9vPl5e8s5WSp2WquG8oPT/BHTa6UYcmXdEFYc5ODFs+Irp/Jep7DlYoAaXSPgGH8E6MPuYJcdMa4+rbG4PXXfc76ZFZ/W9Znzylf7T6Jin6M4sP8KQPUrG+NuvGwDLBXv+SpGfFrT9zRafSG43L+7DVQGsc3XGH55SEC+mmO7+KHxqd0BJ9KyNwLgMNUO+VzehZvqTGnPMHj81X5gzJWHxSdLNhz5rf0v29kDm0Mo0MfJbMCNrcPuYcvxeQ1tmmMaFY+QV9+VM09GDouvRpP6XAYZtVzOaLUOXYKXpeI/igwtoIoqQN/dxaYGDuCGA7aWEy0zogCTkQ58bSsssuCrbJBvrqYq1s/KoElZ5S3Zfgu3zBk5gdiB/9lHtqbOwf+3WBzf6PBtBsh3aXzttY25VK0QAB/2VYYK9hxF3SXpCTmSumluqMMNyPwa0DplGRHfZbz5I4EXbDIS4WsXNubkWjUjyoHwAdJGHbFS3CX2N4cTUO0zfegq/PoaPOEayh4PWYc4RkGvtRtoMrLSMGxOMslBIgHw4aZo3LSyw2Qy29anq/hQ2gF96MoBha+K/MAaY9MdCb41R5o6CAGwyJkKgo8qctp0MRlyKK6JQlkGWh/ybrT1lVEC1Gb3PNHTG34yMgA+WbV+19XbU8aJkxMVpcXwhiHft6V3b2UNucoO+/iaD4f1neOjo8fH3uPj0dHxzjojvQgmIwPgU7PWD2+79q4p14hGpzBRs6shrpAv412zTIMcUK4IvvbObp5KQpqSkC4JFzdnJ0eXvvAiKdwLgA9YIwV1d38lkh5JFjVunOt1gaqh8u66ftbaPtxcYHZ8KRd8X0+f+XQul3aVsZ2/eDn56mGL0UxGsuOTSYXYgcd9qzmSyAy22Mb+Bvpwq5ISkVGyddaw7Je/c6ajcydno6gzPDt3IoxoMpIdn7pv/faKh8PStqxdMGDQv6LFiNnYJpuBDIA+ytEzCzsLoXDxemw7i6gmI9nxVS3P5tF2ba0Xe0fc1bDUVFMARfCtYNdAWd4zMzrKCl/OrQuIbDKSHR9pmWueP07GV6z2nbGPWG1XrARxNaAFWMd4dbDJwT8C+acrQv7lyPh+O7rCPWZ8VIct69lPcDuaeksGp1c7mn6ggJ01LHyQZ5qO3jD5m9eT8+Ody3VDlzvH573Ts6uLUtq1efOnl4UI1/Ux4yuTTkXT8+cp50cauAyajXadq7fX5gx/DdD6tG3jJpQrAIAayAQY77vIUeye3MIC1Ppx70yPzP0q7TH9GKOY8aEOhCHvHSnGt9RJilWgSiqoGtgBItwAxiTSdqNVr9cLGymG/K/f9nL82Y4HOqKd3re/6ayw+KfCSIZJzPhI5Gh7J2syCRT9mTWiqSJX2NJ/DTRJWGaYoDb3+5az4J0OZIe0/vgNJzkR02PHR5Jmvx1Jv27D1UHKZeT4HsQU+ExdIrc6sE0Zex1ZZnTF2jWD2jm90AmW7qOlx46vZgXVhk9DG7QX/rn9Sqqa5WxqDQrExk7Ylwm9QPBMXZ7+/RYxPXZ8Fes0tnz6isRGC27ZDUa2BlLySv/lHQzowem7nKCmKxz3f5lJ9cE8AooVHzWc4p230Idzy+pwDt3WZGu0tL31GS8Vv/VvvhwxPisBDqbDyBdqsOKjOhR+J1HxDTA48+6WLeMr1DSthoKxV1caiePOofHlmIOGXQ73IEmKCirDMGXGRzoP7qNVUGh4mXPt2eHOmjF8hTLEuhlwkSX6hHRDHPcCbe8iHD3uix2UJC0t3v3rr8ZhJXxFJCs+aj2od9Zsyw4dLKySAuOHkJM8MAOMitJF/36I1XbDOT6ubffGyjVf4gXDi7aDTLbZxYqPGm/p+Fxkhsxk9h/OKikwU0DUjjdNg5Azg2+Mju/rcMZ3YMsFtDc4yMobCVAjLD9WfBmSZvh5eApf/2QSsJUUoMEF5AgAE76e6fpyIXIWU7YiLvDvv1EUv+GG4MeMj3Dxa2IUZanvh+wlBQgfCkNs+M5g0uI/Bu+pOu35tCzp/h1TJxJUIfBJbPjslK2SAvQrNTJtRFaK+2cu3BXs84ejZ78+zbh7T5T5tcONAIbB57ebBz6rpAATQl1oGGwrMODU/VsQdwF7ayHxNShA0JOvw7EEwez+fQk19TE667PthpPkTZzaofINox5VzqBZFO9hWFMcvNqzkPiWqawS3bxT6EzNJNyvK+qtEKHjN1vooCvprZIC8hv4uSyNTuoQ/dPf9WF8JyHx0Z0lFMYu0yQWBamMpw4UPHF58MNH8j7qbuIZXrqkQKOKtaAKAy6AE0xFgg91f6gjDhyxcBUzvk3rPPyquF0HVeWqW0lBre+paPXUgBErDtpKhNa3Hpv1lees85jzwec6Wm+VFNh8m5yxz2F2Bvnu6H1fLzbfx9rntaqISAc241FSIFdITRHXuh2YeKFE4yUkPmfkRZ3AOCIvNQy/73OhVetwVhWRfNuCEvsbpwyaaPf8oeeKJCLuxrzap5D4nHnfDcybn41PR5z3ybJ1Hp/9xvtchvRltGbOBZAIQPfLdjMDWHJ+7htlLMFl63UYicRLjho8HHGvw20G3EVkLp3Vl4jlMuO0K3ZVj+Hw2fMi8A+yPTgCMeo+L1VT7zoMjw9nnazfkH44ccdp0thCiB5xUd4X8JzTzhD0Alif06s5RQ3pb0Y+MM6h0JsePLvrKuLeJGWvKJA5pzb7QtR+MeNzTUn6RcVnhjV+AcWh2AH7+CGERpsl5cdCCZle6T9/NQ6r4e80Mz6q2+E9MOIzWjq8cJ6WTocc8TM7FpLy/Q6bXrq4J8cz10FPLHpHKVKKYGvhkqEhThKKs0brhZDNdzOjWx6BJxSvh533ZS9QYwm9VBGb5acl5f3Pvb37pQ+KRfDjB7s+plJ9Wz64HJzDQyTpNB9uyLS+e79A6qB54fvQ9zQAPiul84wdMnm6Mu5hStLeQrHE83ypeHeNAEqL80Va82+S/NO2pfjThZ9xWDzRy4eZLjq/KvIWPKG4GEGLYMdHjQZ4PdXB6R+VJd663UJpAd5uadFeN8YvSvK8bUu66IGvZ9VXBZzrXX98oX9UP5c/oijYYMcnEufn1W0jB0M9XpwgCAL8q7hk8BsCH3dFKqzYSw12Tp7tSxdKwrUyvOmlguBzqZvvk0zqZ6F7VO6L5smWFu4WSiay4h8SxleyVHyD+Hiyad4LH0fI5556DP2345OrvhJ8Hd59BO3WVAB8pILAI3WhRkBh1vdu0uOvU4qifFgsmf9JIXzFj5RSBj7+U4ra4hQ88rqtDd70vIPI+vHJtwvn6gXh7joqeMEWZZFBF/dODlmEAIOLcqc3GWHhIzxZ5YfBj/8kIXz2Y8/Dj/yEqfD22mb+5rV3RC3EWr88Pu+9vujgXIqbc8LV8T+snWwGBVkSSI0Pu5mfRqZDYNz9bhhf6QOGolwb/EoYn+0IAfBR/g8zyRkUS3pUFfT2L3jW1ufSFycG5vZtZI/5CoJPJXUuLo++oFYdceY6c+kTbzAhAU5Z0K2xtCQh65OwUhifQm9yiBz+kfdYeuCjnHBxYjX0MazrSNHBw2VZTo2sP4CjLWbbLb6TPaR7kyfEV1qy9AHhe/uBt/xw40f7tZNAAHXbvLI7yahWFQVaTU4VznPbfTewRhb71uGzqhRjmUqJyq4kozXzb0pf5J3XYfVF3ju3nIyz6fxGGETNJGc4x5OvXL/CrmlDj9zCovDV7J+4+VfKwrhN+gTK1GJUvFZaMUMFDeKdxmep9AfCZ0lgwKfHiN4LL3itIDJtLs0/n/U8+seroVZUyp28XVZ7rPd90HV73Bn9zpvCLoBVVHKm1qQeUILNWDFy5aKn9QlYBB/ewjPhM7TzeHbzxJtWljMiSA7hLD3dfBuwoLce5uHCzopsL7nO+Wub9C5rh7e6mWqdLD1la83Xmr6v5PB9e9D3CQtYAsaXw1ty/2XFB3V5fNQ7+fXr9fX116+T3jnrevIQq8mHxGfVmVmwdNm3dHGPDkbeRSrymjx/oMgrKVgpFDr2rC0DIm9UCv4sg2HxpWoD3tm3TUaqYN73jllISyWj2zF83hedAj/Wf2h8dIh1ER2QzTxPSKO8WfmfmTXvTRK+wC+VGB5fCmQ9v2N/1js0P6F0b/R5P34y+7wCHjKYDHxBX2kSAb5U5cHjnYeNqv07yp45JUOPuHyfMHwBX6gTBT49d9x2eQjlWseRiiqfimmUkZh/FX9Y430Tgy9YBr07xyi/Kkg9Te4e2Aqk8huS21kof5Z4arT5nYw2Tw6+YC8TExk14JaIGpC3swcNXVubXc1rQbiU+pQu8niuA217my8Wf9rx/SwW5xfHhG9Mr7KTxYxW0aWpfndPUt6v9/b2lj7aZ9re7Xu9wwk3P40O34S/HCayed7RaeZeTeTQSPGxPbd5mjVafFxLmsE37FAaMT7WZ9ZPq0aNL9hTYKdOo8c3Qy9EdSoGfFzeNwebasWBL8pJzAlTLPj0vn6QJ1pOkWLCl7ynbUglbwkcTqss792ZNsWHT8+gkzekDqXwSz0mVbHiC/jGuylQvPhifN9iPIoZX+BJzAlX3PgifLzzJCh2fAEnMSdcY8A3Qxm0NPhiR6BZecs7fs5V3BrPJGbkKh8OvtTRaKInMVlV9S3sGqmWZ8ABVn3eyzpqrWnT7gAry+OjpzvA7nQboPh78DWOVA3ni62nR3LF863McamezVSm1ALLqkc9Zqyqbz2ACN+UEpdE0O1/X9S4lF9e0UBVy0yNtCroDqjlj1f1fGN5IzstWm5MiuUlSpQoUaJEiRIlSpQoUaJEiRLNoP4PJhW4wPeusY8AAAAASUVORK5CYII="
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
              src="https://blog.mobikwik.com/wp-content/uploads/2016/09/refer-and-earn-website-banner-B.jpg"
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
              src="https://lh3.googleusercontent.com/proxy/H60wATQ-x741J8qF51PCLKnKlAkBTfV0-v6P-Ukp4iFOYaAhGiPQ7peptAVk2izF-NCunuLQBv9vXo73Xkq2mx8P9QELxZW4SOp2tuooBSrA_QVi96gRrITAXHPqBe5CzKi0JT_qg7I9T1nAomu_6Kic8oiknIKJY1dZ7_2re7mEI_luqTbRGjL-0F8l_amhjuVZIqbkc2oItVc"
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

      </MDBCol>

        </MDBRow>
      </MDBContainer>
    );
  };

  return (
    <Base >
    <div className="image">
      {errorMessage()}
      {successMessage()}

      {signUpForm()}
      </div>
    </Base>


  );
};

export default Signup;
