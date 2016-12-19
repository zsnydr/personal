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
            <NavItem eventKey="">home</NavItem>
          </Nav>
          <Nav className="links" pullRight onSelect={navigateTo}>
            <NavItem eventKey="about">about</NavItem>
            <NavItem eventKey="blog">blog</NavItem>
            <NavItem eventKey="portfolio">portfolio</NavItem>
            <NavItem eventKey="resume">résumé</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
