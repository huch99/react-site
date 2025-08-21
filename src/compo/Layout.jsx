import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  const [links, setLinks] = useState([
    {linkName: '0811', tagName: '0811 과제', date: '0811'},
    {linkName: '0812', tagName: '0812 과제', date: '0812'},
    {linkName: '0813', tagName: '0813 과제', date: '0813'},
    {linkName: '0818', tagName: '0818 과제', date: '0818'},
    {linkName: 'miniblog', tagName: '미니 블로그', date: '0820'},
    {linkName: '0820/webdesign', tagName: '웹디자인', date: '0821'}
  ]);
  return (
    <div>

        
        <table>
          <thead>
            <tr>
              <th>날짜</th>
              <th>과제</th>
            </tr>

            {links.map((link, index) => (
              <tr key={index}>
                <td>{link.date}</td>
                <td><Link to={link.linkName}>{link.tagName}</Link></td>
              </tr>
            ))}
          </thead>
        </table>
      <Outlet></Outlet>
    </div>
  );
}
export default Layout;