import React from 'react';
import { Link, IndexLink } from 'react-router';

function NavLink(props) {
  return (
    <Link {...props} activeClassName='active'></Link>
  );
}

export function NavIndexLink(props) {
  return (
    <IndexLink {...props} activeClassName='active'></IndexLink>
  );
}

export default NavLink;