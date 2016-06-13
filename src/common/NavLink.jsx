import React from 'react';
import { Link, IndexLink } from 'react-router';

const NavLink = (props) => {
  return (
    <Link {...props} activeClassName='active'></Link>
  );
}

export const NavIndexLink = (props) => {
  return (
    <IndexLink {...props} activeClassName='active'></IndexLink>
  );
}

export default NavLink;