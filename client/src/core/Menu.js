import React ,{Fragment,Component} from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAutheticated } from "../auth/helper";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

const currentTab =(history,path) =>{
    if(history.location.pathname ===path){
        return { color: "#2ecc72" };
    }
    else{
        return {color:"#FFFFFF"};
    }
};



class Menu extends Component {
  state = {
    isOpen: false
  };
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  
  render() {
    return (
        <MDBNavbar className="bg-primary" dark expand="md">
          <MDBNavbarBrand className="mt-2 ml-2">
            <strong className="white-text" >Ghatiya Chai</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active className="mt-2 ml-2" >
              <Link  className="nav-link" to="/">
              <i class="fa fa-home" aria-hidden="true">  Home</i>

                
              </Link>
              </MDBNavItem>

              <MDBNavItem active className="mt-2 ml-2">
              <Link  className="nav-link" to="/contactus">
              <i className="fa fa-phone" aria-hidden="true">Contact Us</i>

                
              </Link>
              </MDBNavItem>

              {isAutheticated()&& isAutheticated().user.role ===0 && (
              <MDBNavItem active className="mt-2 ml-2">

                <Link
          className="nav-link"
          to="/user/dashboard"
              >
          <i class="fa fa-id-badge">Profile</i>


         
        </Link>
        
              </MDBNavItem>
              )}
               {isAutheticated()&& isAutheticated().user.role ===1 && (
              <MDBNavItem active className="mt-2 ml-2">
                <Link
          className="nav-link"
          to="/admin/dashboard"
                >
          <i class="fa fa-id-badge">A.dashboard</i>
   
   </Link>
   </MDBNavItem>
                   )}

           
            {!isAutheticated() && (
                    <Fragment>
            <MDBNavItem active className="mt-2 ml-2">
            <Link
          
          className="nav-link"
          to="/signup"
        >

         <i class="fa fa-user-plus">SignUp</i>
           </Link>
            </MDBNavItem>
         
        
              
               <MDBNavItem active className="mt-2 ml-2">
               <Link
          
            className="nav-link"
             to="/signin"
              >
            <i class="fa fa-sign-in">SignIn</i>
             </Link>
               </MDBNavItem>
               </Fragment> )}


              <MDBNavItem active className="mt-2 ml-2">
              {isAutheticated() && (
        
          <Link
            className="nav-link text-warning"
            onClick={() => {
              signout(() => {
              });
              

            }}
            to="/signin"
          >
            <i class="fa fa-sign-out">Signout</i>
           


         </Link>
      
      )}
              </MDBNavItem>
              <MDBNavItem active className="mt-2 ml-2">
              <Link
         
          className="nav-link"
          to="/cart"
        >
         <i class="fa fa-shopping-cart">Cart</i>


        </Link>
              </MDBNavItem>
             
            </MDBNavbarNav>
            
          </MDBCollapse>
        </MDBNavbar>
      );
    }
  }
  
export default withRouter(Menu)