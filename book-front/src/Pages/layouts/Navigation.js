import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link active" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addBookModal" data-bs-whatever="@getbootstrap">Add book</button>
                </li>
                </ul>
            </div>
        </nav>

      <Outlet />
    </>
  )
};

export default Navigation;