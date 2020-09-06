import React from "react";
import { Route, Link } from "react-router-dom";

function NavItem({ to, exact, className, activeClassName, children }) {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => (
        <Link to={to}>
          <li
            className={`${className} ${match && (activeClassName || "active")}`}
          >
            {children}
          </li>
        </Link>
      )}
    />
  );
}

export default NavItem;
