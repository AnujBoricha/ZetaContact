import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/actions/auth";

function Navbar({ developer,title, icon, auth, logout }) {
  const onLogout = () => {
    logout();
  };
  const authLink = (
    <React.Fragment>
      <li>👋 {auth.user && auth.user.name}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fa fa-sign-out"></i>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </React.Fragment>
  );

  const guestLink = (
    <React.Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </React.Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
      <i className={icon}></i> {title}
      </h1>
      <div>
        
        <div><h5>{developer}</h5></div>
        <div className="gitlik">
          <h4>
            <a href="https://github.com/AnujBoricha">
              <i class="fa-brands fa-github-square"></i>
            </a>
            <a href="https://github.com/AnujBoricha">
              <i class="fa-brands fa-linkedin"></i>
            </a>
              
          </h4>
            
        </div>
       
      </div>
      <ul>{auth.isAuthenticated ? authLink : guestLink}</ul>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};
Navbar.defaultProps = {
  title: "ZetaContact",
  icon: "fa-solid fa-id-badge",
  developer: "Anuj Boricha"

};
const mapStatesToProps = state => {
  return { auth: state.auth };
};

export default connect(mapStatesToProps, { logout })(Navbar);
