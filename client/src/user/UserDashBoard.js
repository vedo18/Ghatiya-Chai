import React from "react";
import Base from "../core/Base";
import { isAutheticated } from "../auth/helper/index";
import { Link } from "react-router-dom";

const UserDashBoard = () => {
  const {
    user: { name, email,address}
  } = isAutheticated();

  const adminLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-secondary text-white">Hey {name} !</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link  className="nav-link text-danger">
              Edit your Profile
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/create/product" className="nav-link text-danger">
              Your orders
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/products" className="nav-link text-danger">
                Your Cart
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/orders" className="nav-link text-danger">
              Refer and Earn
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header bg-secondary text-white">Your Info</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className=" mr-2">Name:</span> {name}
          </li>
          <li className="list-group-item">
            <span className=" mr-2">Email:</span> {email}
          </li>
          <li className="list-group-item">
            <span className=" mr-2">address</span> {address}
          </li>

          <li className="list-group-item">
            <span className=" mr-2">Chai lover level:</span> {}
          </li>

          
        </ul>
      </div>
    );
  };
  return (
    <Base>
      <div className="row">
        <div className="col-3 mt-4 mb-4 ml-4">{adminLeftSide()}</div>
        <div className="col-6 mt-4 mb-4 ml-4">{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default UserDashBoard;
