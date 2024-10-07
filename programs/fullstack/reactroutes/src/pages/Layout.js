import { Outlet, Link } from "react-router-dom";
import '../Layout.css'; 
import Header from "./Header";

const Layout = () => {
  return (
    <div id="root">
    <Header/>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
      <footer>
      <p>&copy; 2023 My Application. All rights reserved.</p>
      </footer>
    </div>
  )
};

export default Layout;