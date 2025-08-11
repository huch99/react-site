import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  const [links, setLinks] = useState([
    {linkName: '0811', tagName: '0811 과제'},
    {linkName: '0812', tagName: '0812 과제'}
  ]);
  return (
    <div>
      <h2>과제 리스트</h2>

        <ul className="layoutul">
          {links.map((link, index) => (
            <li>
              <Link to={`/react-site/${link.linkName}`} key={index}> {link.tagName} </Link>
            </li>
          ))}
        </ul>
      <Outlet></Outlet>
    </div>
  );
}
export default Layout;