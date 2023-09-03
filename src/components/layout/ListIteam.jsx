import React from "react";
import { Link } from "react-router-dom";
const ListIteam = ({ iteamname, className, href }) => {
  return (
    <li className={className}>
      <Link to={href}>{iteamname}</Link>
    </li>
  );
};

export default ListIteam;
