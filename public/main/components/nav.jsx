import React from 'react';
import { browserHistory } from 'react-router';
import { Nav, Navbar, NavItem } from 'react-bootstrap';


const navigateTo = (eventKey) => {
  if (eventKey.substring(0, 5) === 'https') {
    window.location = eventKey;
    return;
  }
  browserHistory.push(`/${eventKey}`);
};

const Navigation = () => {
  return (
    <div className="nav">
      <Navbar collapseOnSelect>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="links" pullLeft onSelect={navigateTo}>
            <NavItem eventKey="">home</NavItem>
          </Nav>
          <Nav className="links" pullRight onSelect={navigateTo}>
            <NavItem eventKey="blog">blog</NavItem>
            <NavItem eventKey="portfolio">portfolio</NavItem>
            <NavItem eventKey="resume">résumé</NavItem>
            <NavItem eventKey="https://github.com/zsnydr">
              <i className="fa fa-github about-links" />
            </NavItem>
            <NavItem eventKey="https://www.linkedin.com/in/zack-snyder-a5795332">
              <i className="fa fa-linkedin-square about-links" />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
