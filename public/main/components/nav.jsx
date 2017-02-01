import React from 'react';
import { browserHistory } from 'react-router';
import { Nav, Navbar, NavItem } from 'react-bootstrap';


const navigateTo = (eventKey) => {
  if (eventKey.substring(0, 5) === 'https' || eventKey === 'ZackSnyder_Resume.pdf') {
    window.location = eventKey;
    return;
  }
  browserHistory.push(`/${eventKey}`);
};

const Navigation = () => {
  return (
    <Navbar collapseOnSelect className="nav-bar navbar-fixed-top">
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="links" pullLeft onSelect={navigateTo}>
          <NavItem eventKey="">home</NavItem>
        </Nav>
        <Nav className="links" onSelect={navigateTo}>
          <NavItem eventKey="portfolio">portfolio</NavItem>
          <NavItem eventKey="blog">blog</NavItem>
          <NavItem eventKey="ZackSnyder_Resume.pdf">resume</NavItem>
        </Nav>
        <Nav className="links" pullRight onSelect={navigateTo}>
          <NavItem eventKey="https://github.com/zsnydr">
            <i className="fa fa-github about-links" />
          </NavItem>
          <NavItem eventKey="https://www.linkedin.com/in/zack-snyder-a5795332">
            <i className="fa fa-linkedin-square about-links" />
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

// <div className="nav">
// </div>
export default Navigation;
