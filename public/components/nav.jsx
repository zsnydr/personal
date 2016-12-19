import React from 'react';
import { browserHistory } from 'react-router';
import { Nav, Navbar, NavItem } from 'react-bootstrap';


const navigateTo = (eventKey) => {
  browserHistory.push(`/${eventKey}`);
};

const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="links" pullLeft onSelect={navigateTo}>
            <NavItem eventKey="">HOME</NavItem>
          </Nav>
          <Nav className="links" pullRight onSelect={navigateTo}>
            <NavItem eventKey="about">ABOUT</NavItem>
            <NavItem eventKey="blog">BLOG</NavItem>
            <NavItem eventKey="portfolio">PORTFOLIO</NavItem>
            <NavItem eventKey="resume">RESUME</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
